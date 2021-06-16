import { LitElement, html, css } from 'lit';
import { property, state } from 'lit/decorators.js';
import { render } from 'lit/html.js';

import { keys } from 'ts-transformer-keys';

import {
  GridElement,
  GridDataProviderParams,
  GridDataProviderCallback,
} from '@vaadin/vaadin-grid';

import '@vaadin/vaadin-grid/vaadin-grid-column';
import '@vaadin/vaadin-grid/theme/lumo/vaadin-grid-styles';
import { TextFieldElement } from '@vaadin/vaadin-text-field';

import {
  UserDetails,
  // testData,
} from './github-search-user-api.js';

export class DmwGhUsers extends LitElement {
  @property({ type: String }) title = 'Search Github Users';

  _userDetailsKeys = keys<UserDetails>();

  @state()
  private _displayKeys: string[] = [
    'avatar_url',
    'login',
    // "id",
    // "node_id",
    // "gravatar_id",
    // "url",
    // "html_url",
    // "followers_url",
    // "following_url",
    // "gists_url",
    // "starred_url",
    // "subscriptions_url",
    // "organizations_url",
    // "repos_url",
    // "events_url",
    // "received_events_url",
    // "type",
    // "site_admin",
    // "score",
  ];

  @state()
  private _userDetails: UserDetails[] = [];

  @state()
  private _searchQuery: string = '';

  @state()
  private _numResults: number = 0;

  getData = async (
    params: GridDataProviderParams,
    callback: GridDataProviderCallback
  ) => {
    if (this._searchQuery === '') {
      console.info('Empty searchQuery so not calling API');
      // make empty list
      callback([], 0);
    } else {
      const attemptAFetch = async (
        search: string,
        oneBasedPage: number,
        pageSize: number
      ) => {
        const response = await fetch(
          `https://api.github.com/search/users?q=${search}&page=${oneBasedPage}&per_page=${pageSize}`
        );
        if (response.ok) {
          const fetchResult = await response.json();

          console.log('fetchResult:', fetchResult);

          // github api limits results to 1000 - but still seems to return more total_count
          this._numResults = Math.min(fetchResult.total_count, 1000);
          callback(fetchResult.items, this._numResults);
        } else {
          const fetchResult = await response.json();
          console.info('fetch not ok', fetchResult);
          const failedDueToRateLimit = fetchResult.message.startsWith(
            'API rate limit exceeded'
          );
          if (failedDueToRateLimit) {
            // check header for X-RateLimit-Reset
            console.log(response.headers);
            const xRateLimitReset = response.headers.get('X-RateLimit-Reset');
            if (xRateLimitReset) {
              const now = new Date();
              const oneSecond = 1000; // milliseconds
              const resetTime = new Date(+xRateLimitReset * oneSecond);
              const leeway = oneSecond;
              const tryAgainAfter =
                resetTime.getTime() - now.getTime() + leeway;
              const id = setTimeout(async () => {
                await attemptAFetch(search, oneBasedPage, pageSize);
              }, tryAgainAfter);
              console.log('queuing new fetch:', id, resetTime);
            } else {
              console.info('failed for some other reason, so not trying again');
            }
          }
        }
      };

      // we have a query, so get some results from the server
      const { page: zeroBasedPage, pageSize } = params;
      const oneBasedPage = zeroBasedPage + 1;
      const search = this._searchQuery;

      console.log('getData:oneBasedPage:', oneBasedPage);
      console.log('getData:pageSize:', pageSize);

      await attemptAFetch(search, oneBasedPage, pageSize);

      /*
      // Use test data to speed development, working offline, and save api calls on github
      const fetchResult = testData;
      const start = zeroBasedPage*pageSize;
      const end = (zeroBasedPage+1)*pageSize;
      const slice = fetchResult.items.slice(start, end);
      const total = fetchResult.total_count;
      callback(slice, total);
      */
    }
  };

  _onChangeQuery = () => {
    const query = <TextFieldElement>this.shadowRoot?.querySelector('#query');
    const grid = <GridElement>this.shadowRoot?.querySelector('#grid');

    if (grid) {
      this._searchQuery = query.value;
      grid.clearCache();
    }
  };

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;

      min-height: 100vh;
      width: 100%;
      margin: 0 auto;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      text-align: center;
      background-color: var(--dmw-gh-users-background-color);
    }

    main {
      display: flex;
      flex-direction: column;

      --main-padding: 10px;
      width: calc(100% - var(--main-padding) * 2);
      margin: 0 var(--main-padding);

      flex-grow: 1;
    }

    #grid_container {
      flex-grow: 1;

      display: flex;
      flex-direction: column;
    }

    #num_results {
      width: fit-content;
    }

    img.avatar_url {
      height: 50px;
    }
  `;

  columnRenderer = (root: any, column: any, model: any) => {
    const { item } = model;
    const header = column.getAttribute('header');

    const isAvatarUrl = header === 'avatar_url';

    const element = isAvatarUrl
      ? html`
          <a href="${item.html_url}">
            <img
              src=${item[header]}
              class="avatar_url"
              alt="avatar for ${item.login}"
            />
          </a>
        `
      : html`<div>${item[header]}</div>`;

    render(element, root);
  };

  render() {
    return html`
      <main>
        <h1>${this.title}</h1>

        <vaadin-text-field
          id="query"
          label="Search query (hit enter)"
          required
          clear-button-visible
          @change="${this._onChangeQuery}"
        >
        </vaadin-text-field>

        <div id="num_results">Number of results: ${this._numResults}</div>

        <div id="grid_container">
          <vaadin-grid id="grid" .dataProvider=${this.getData}>
            ${this._userDetailsKeys
              .filter(key => this._displayKeys.includes(key))
              .map(
                key => html`
                  <vaadin-grid-column
                    .renderer=${this.columnRenderer}
                    header="${key}"
                  >
                    <vaadin-grid-column> </vaadin-grid-column
                  ></vaadin-grid-column>
                `
              )}
          </vaadin-grid>
        </div>
      </main>
    `;
  }
}
