import { LitElement, html, css, property, state, } from 'lit-element';
import { render } from 'lit-html';
import { keys } from 'ts-transformer-keys';

import {
  GridDataProvider,
  GridDataProviderParams,
  GridDataProviderCallback,
} from '@vaadin/vaadin-grid';
import '@vaadin/vaadin-grid/vaadin-grid';
import '@vaadin/vaadin-grid/vaadin-grid-column';
import '@vaadin/vaadin-grid/theme/lumo/vaadin-grid-styles';

import {
  UserDetails,
  UsersDetails,
  FetchResult,
  testData,
} from './github-search-user-api';

export class DmwGhUsers extends LitElement {
  @property({ type: String }) title = 'Search Github Users';

  @state()
    private _userDetails: UserDetails[] = [];

  _userDetailsKeys = keys<UserDetails>();

  async getData(params: GridDataProviderParams, callback: GridDataProviderCallback) {
    const { page:zeroBasedPage, pageSize, } = params;
    const oneBasedPage = zeroBasedPage + 1;
    const search = 'water';

    console.log('getData:oneBasedPage:', oneBasedPage);
    console.log('getData:pageSize:', pageSize);

    const attemptAFetch = async (search: string, oneBasedPage: number, pageSize: number) => {
      const response = await fetch(`https://api.github.com/search/users?q=${search}&page=${oneBasedPage}&per_page=${pageSize}`);
      if (response.ok) {
        const fetchResult = await response.json();

        console.log('fetchResult:', fetchResult);

        callback(
          fetchResult.items,
          fetchResult.total_count,
        );
      } else {
        const fetchResult = await response.json();
        console.info('fetch not ok', fetchResult);
        const failedDueToRateLimit = fetchResult.message.startsWith('API rate limit exceeded');
        if (failedDueToRateLimit) {
          // check header for X-RateLimit-Reset
          console.log(response.headers);
          const xRateLimitReset = response.headers.get('X-RateLimit-Reset');
          if (xRateLimitReset) {
            const now = new Date();
            const oneSecond = 1000; // milliseconds
            const resetTime = new Date(+xRateLimitReset * oneSecond);
            const leeway = oneSecond;
            const tryAgainAfter = resetTime.getTime() - now.getTime() + leeway;
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

    await attemptAFetch(search, oneBasedPage, pageSize);

    /*
    const fetchResult = testData;
    const start = zeroBasedPage*pageSize;
    const end = (zeroBasedPage+1)*pageSize;
    const slice = fetchResult.items.slice(start, end);
    const total = fetchResult.total_count;
    callback(slice, total);
    */
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

    img.avatar_url {
      height: 50px;
    }
  `;

  columnRenderer(root:any, column:any, model:any) {
    const {item} = model;
    const header = column.getAttribute('header');
    const isAvatarUrl = header==='avatar_url';
    const element =
      (isAvatarUrl)
      ?html`<img src=${item[header]} class="avatar_url">`
      :html`<div>${item[header]}</div>`;
    render(
      element,
      root
    );
  };

  render() {
    return html`
      <main>
        <h1>${this.title}</h1>

        <div id="grid_container">

          <vaadin-grid
            .dataProvider=${this.getData}
            >

            ${this._userDetailsKeys.map(key => html`
              <vaadin-grid-column
                .renderer=${this.columnRenderer}
                header="${key}"
                >
              <vaadin-grid-column>
            `)}

          </vaadin-grid>

        </div>
      </main>
    `;
  };

}
