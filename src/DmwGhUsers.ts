import { LitElement, html, css } from 'lit';
import { property, state } from 'lit/decorators.js';
import { render } from 'lit/html.js';

import { keys } from 'ts-transformer-keys';

import type {
  GridElement,
  GridDataProviderParams,
  GridDataProviderCallback,
} from '@vaadin/vaadin-grid';
import '@vaadin/vaadin-grid/vaadin-grid';
import '@vaadin/vaadin-grid/vaadin-grid-column.js';
import '@vaadin/vaadin-grid/theme/lumo/vaadin-grid-styles';
import type { TextFieldElement } from '@vaadin/vaadin-text-field';
import '@vaadin/vaadin-text-field/vaadin-text-field';

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
        zeroBasedPage: number,
        pageSize: number
      ) => {
        const first = pageSize;
        const after = window.btoa(`cursor:${zeroBasedPage * pageSize}`);
        const gqlQuery = JSON.stringify({
          query: `
          {
            search(query: "${this._searchQuery}", type: USER, first: ${first}, after: "${after}") {
              pageInfo {
                hasNextPage
                endCursor
              }
              userCount
              nodes {
                ... on User {
                  avatarUrl
                  login
                  url
                }
              }
            }
          }`,
        });
        const response = await fetch(`https://api.github.com/graphql`, {
          method: 'POST',
          headers: {
            Authorization: `bearer CERTIFICATE`,
          },
          body: gqlQuery,
        });

        if (response.ok) {
          const fetchResult = await response.json();

          console.log('fetchResult:', fetchResult);

          const { userCount, nodes: items } = fetchResult.data.search;

          // github api limits results to 1000 - but still seems to return more total_count
          this._numResults = Math.min(userCount, 1000);
          callback(items, this._numResults);
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
                await attemptAFetch(search, zeroBasedPage, pageSize);
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
      const search = this._searchQuery;

      console.log('getData:zeroBasedPage:', zeroBasedPage);
      console.log('getData:pageSize:', pageSize);

      await attemptAFetch(search, zeroBasedPage, pageSize);

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

      --grid-row-height: 50px;
      --grid-anchor-border-width: 1px;
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

    .grid_cell {
      display: flex;
      justify-content: center;
      align-items: center;
      height: calc(
        var(--grid-row-height) + var(--grid-anchor-border-width) * 2
      );
      margin: 10px 0;
    }

    .image_anchor {
      --image-anchor-size: var(--grid-row-height);
      height: var(--image-anchor-size);
      width: var(--image-anchor-size);
      outline: var(--grid-anchor-border-width) solid blue;
    }

    img.avatar_url {
      height: var(--grid-row-height);
    }
  `;

  columnRenderer = (root: any, column: any, model: any) => {
    const { item } = model;
    const header = column.getAttribute('header');

    const isAvatarUrl = header === 'avatar_url';

    let element = html``;

    if (isAvatarUrl) {
      const liveImage = new Image();

      // sometimes the data is empty, so this will avoid a request for an '/undefined' image
      if (item.avatarUrl) {
        liveImage.classList.add('avatar_url');
        liveImage.src = '';

        // asynchronously load the image
        // when loaded, set the src of the live image
        const imageLoader = new Image();
        imageLoader.addEventListener('load', async () => {
          // image has loaded and should be in cache
          liveImage.setAttribute(
            'alt',
            `Visit profile for ${item.login} (opens in new tab)`
          );
          liveImage.src = item.avatarUrl;
        });

        imageLoader.src = item.avatarUrl;
      }

      element = html`
        <a class="image_anchor" target="_blank" href="${item.url}">
          ${liveImage}
        </a>
      `;
    } else {
      element = html`<div>${item[header]}</div>`;
    }

    root.classList.add('grid_cell');

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
