
export interface UserDetails {
  "login": string,
  "id": number,
  "node_id": string,
  "avatar_url": string,
  "gravatar_id": string,
  "url": string,
  "html_url": string,
  "followers_url": string,
  "following_url": string,
  "gists_url": string,
  "starred_url": string,
  "subscriptions_url": string,
  "organizations_url": string,
  "repos_url": string,
  "events_url": string,
  "received_events_url": string,
  "type": string,
  "site_admin": boolean,
  "score": number,
};

export type UsersDetails = UserDetails[];

export interface FetchResult {
  total_count: number,
  incomplete_results: boolean,
  items: UsersDetails,
};

export const testData:FetchResult = {
  "total_count": 244,
  "incomplete_results": false,
  "items": [
    {
      "login": "waterman",
      "id": 442677,
      "node_id": "MDQ6VXNlcjQ0MjY3Nw==",
      "avatar_url": "https://avatars.githubusercontent.com/u/442677?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/waterman",
      "html_url": "https://github.com/waterman",
      "followers_url": "https://api.github.com/users/waterman/followers",
      "following_url": "https://api.github.com/users/waterman/following{/other_user}",
      "gists_url": "https://api.github.com/users/waterman/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/waterman/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/waterman/subscriptions",
      "organizations_url": "https://api.github.com/users/waterman/orgs",
      "repos_url": "https://api.github.com/users/waterman/repos",
      "events_url": "https://api.github.com/users/waterman/events{/privacy}",
      "received_events_url": "https://api.github.com/users/waterman/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "Waterman178",
      "id": 14991217,
      "node_id": "MDQ6VXNlcjE0OTkxMjE3",
      "avatar_url": "https://avatars.githubusercontent.com/u/14991217?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/Waterman178",
      "html_url": "https://github.com/Waterman178",
      "followers_url": "https://api.github.com/users/Waterman178/followers",
      "following_url": "https://api.github.com/users/Waterman178/following{/other_user}",
      "gists_url": "https://api.github.com/users/Waterman178/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/Waterman178/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/Waterman178/subscriptions",
      "organizations_url": "https://api.github.com/users/Waterman178/orgs",
      "repos_url": "https://api.github.com/users/Waterman178/repos",
      "events_url": "https://api.github.com/users/Waterman178/events{/privacy}",
      "received_events_url": "https://api.github.com/users/Waterman178/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "stevenwaterman",
      "id": 23333247,
      "node_id": "MDQ6VXNlcjIzMzMzMjQ3",
      "avatar_url": "https://avatars.githubusercontent.com/u/23333247?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/stevenwaterman",
      "html_url": "https://github.com/stevenwaterman",
      "followers_url": "https://api.github.com/users/stevenwaterman/followers",
      "following_url": "https://api.github.com/users/stevenwaterman/following{/other_user}",
      "gists_url": "https://api.github.com/users/stevenwaterman/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/stevenwaterman/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/stevenwaterman/subscriptions",
      "organizations_url": "https://api.github.com/users/stevenwaterman/orgs",
      "repos_url": "https://api.github.com/users/stevenwaterman/repos",
      "events_url": "https://api.github.com/users/stevenwaterman/events{/privacy}",
      "received_events_url": "https://api.github.com/users/stevenwaterman/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "aswaterman",
      "id": 1031106,
      "node_id": "MDQ6VXNlcjEwMzExMDY=",
      "avatar_url": "https://avatars.githubusercontent.com/u/1031106?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/aswaterman",
      "html_url": "https://github.com/aswaterman",
      "followers_url": "https://api.github.com/users/aswaterman/followers",
      "following_url": "https://api.github.com/users/aswaterman/following{/other_user}",
      "gists_url": "https://api.github.com/users/aswaterman/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/aswaterman/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/aswaterman/subscriptions",
      "organizations_url": "https://api.github.com/users/aswaterman/orgs",
      "repos_url": "https://api.github.com/users/aswaterman/repos",
      "events_url": "https://api.github.com/users/aswaterman/events{/privacy}",
      "received_events_url": "https://api.github.com/users/aswaterman/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "awaterma",
      "id": 65307,
      "node_id": "MDQ6VXNlcjY1MzA3",
      "avatar_url": "https://avatars.githubusercontent.com/u/65307?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/awaterma",
      "html_url": "https://github.com/awaterma",
      "followers_url": "https://api.github.com/users/awaterma/followers",
      "following_url": "https://api.github.com/users/awaterma/following{/other_user}",
      "gists_url": "https://api.github.com/users/awaterma/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/awaterma/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/awaterma/subscriptions",
      "organizations_url": "https://api.github.com/users/awaterma/orgs",
      "repos_url": "https://api.github.com/users/awaterma/repos",
      "events_url": "https://api.github.com/users/awaterma/events{/privacy}",
      "received_events_url": "https://api.github.com/users/awaterma/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "davidmaxwaterman",
      "id": 975698,
      "node_id": "MDQ6VXNlcjk3NTY5OA==",
      "avatar_url": "https://avatars.githubusercontent.com/u/975698?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/davidmaxwaterman",
      "html_url": "https://github.com/davidmaxwaterman",
      "followers_url": "https://api.github.com/users/davidmaxwaterman/followers",
      "following_url": "https://api.github.com/users/davidmaxwaterman/following{/other_user}",
      "gists_url": "https://api.github.com/users/davidmaxwaterman/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/davidmaxwaterman/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/davidmaxwaterman/subscriptions",
      "organizations_url": "https://api.github.com/users/davidmaxwaterman/orgs",
      "repos_url": "https://api.github.com/users/davidmaxwaterman/repos",
      "events_url": "https://api.github.com/users/davidmaxwaterman/events{/privacy}",
      "received_events_url": "https://api.github.com/users/davidmaxwaterman/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "nathanjwtx",
      "id": 1558027,
      "node_id": "MDQ6VXNlcjE1NTgwMjc=",
      "avatar_url": "https://avatars.githubusercontent.com/u/1558027?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/nathanjwtx",
      "html_url": "https://github.com/nathanjwtx",
      "followers_url": "https://api.github.com/users/nathanjwtx/followers",
      "following_url": "https://api.github.com/users/nathanjwtx/following{/other_user}",
      "gists_url": "https://api.github.com/users/nathanjwtx/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/nathanjwtx/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/nathanjwtx/subscriptions",
      "organizations_url": "https://api.github.com/users/nathanjwtx/orgs",
      "repos_url": "https://api.github.com/users/nathanjwtx/repos",
      "events_url": "https://api.github.com/users/nathanjwtx/events{/privacy}",
      "received_events_url": "https://api.github.com/users/nathanjwtx/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "watermanio",
      "id": 772373,
      "node_id": "MDQ6VXNlcjc3MjM3Mw==",
      "avatar_url": "https://avatars.githubusercontent.com/u/772373?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/watermanio",
      "html_url": "https://github.com/watermanio",
      "followers_url": "https://api.github.com/users/watermanio/followers",
      "following_url": "https://api.github.com/users/watermanio/following{/other_user}",
      "gists_url": "https://api.github.com/users/watermanio/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/watermanio/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/watermanio/subscriptions",
      "organizations_url": "https://api.github.com/users/watermanio/orgs",
      "repos_url": "https://api.github.com/users/watermanio/repos",
      "events_url": "https://api.github.com/users/watermanio/events{/privacy}",
      "received_events_url": "https://api.github.com/users/watermanio/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "h2oman",
      "id": 2458839,
      "node_id": "MDQ6VXNlcjI0NTg4Mzk=",
      "avatar_url": "https://avatars.githubusercontent.com/u/2458839?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/h2oman",
      "html_url": "https://github.com/h2oman",
      "followers_url": "https://api.github.com/users/h2oman/followers",
      "following_url": "https://api.github.com/users/h2oman/following{/other_user}",
      "gists_url": "https://api.github.com/users/h2oman/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/h2oman/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/h2oman/subscriptions",
      "organizations_url": "https://api.github.com/users/h2oman/orgs",
      "repos_url": "https://api.github.com/users/h2oman/repos",
      "events_url": "https://api.github.com/users/h2oman/events{/privacy}",
      "received_events_url": "https://api.github.com/users/h2oman/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "trackpete",
      "id": 8779751,
      "node_id": "MDQ6VXNlcjg3Nzk3NTE=",
      "avatar_url": "https://avatars.githubusercontent.com/u/8779751?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/trackpete",
      "html_url": "https://github.com/trackpete",
      "followers_url": "https://api.github.com/users/trackpete/followers",
      "following_url": "https://api.github.com/users/trackpete/following{/other_user}",
      "gists_url": "https://api.github.com/users/trackpete/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/trackpete/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/trackpete/subscriptions",
      "organizations_url": "https://api.github.com/users/trackpete/orgs",
      "repos_url": "https://api.github.com/users/trackpete/repos",
      "events_url": "https://api.github.com/users/trackpete/events{/privacy}",
      "received_events_url": "https://api.github.com/users/trackpete/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "waterman1009",
      "id": 11442587,
      "node_id": "MDQ6VXNlcjExNDQyNTg3",
      "avatar_url": "https://avatars.githubusercontent.com/u/11442587?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/waterman1009",
      "html_url": "https://github.com/waterman1009",
      "followers_url": "https://api.github.com/users/waterman1009/followers",
      "following_url": "https://api.github.com/users/waterman1009/following{/other_user}",
      "gists_url": "https://api.github.com/users/waterman1009/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/waterman1009/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/waterman1009/subscriptions",
      "organizations_url": "https://api.github.com/users/waterman1009/orgs",
      "repos_url": "https://api.github.com/users/waterman1009/repos",
      "events_url": "https://api.github.com/users/waterman1009/events{/privacy}",
      "received_events_url": "https://api.github.com/users/waterman1009/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "Waterman1997",
      "id": 7447254,
      "node_id": "MDQ6VXNlcjc0NDcyNTQ=",
      "avatar_url": "https://avatars.githubusercontent.com/u/7447254?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/Waterman1997",
      "html_url": "https://github.com/Waterman1997",
      "followers_url": "https://api.github.com/users/Waterman1997/followers",
      "following_url": "https://api.github.com/users/Waterman1997/following{/other_user}",
      "gists_url": "https://api.github.com/users/Waterman1997/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/Waterman1997/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/Waterman1997/subscriptions",
      "organizations_url": "https://api.github.com/users/Waterman1997/orgs",
      "repos_url": "https://api.github.com/users/Waterman1997/repos",
      "events_url": "https://api.github.com/users/Waterman1997/events{/privacy}",
      "received_events_url": "https://api.github.com/users/Waterman1997/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "RubenWaterman",
      "id": 5938863,
      "node_id": "MDQ6VXNlcjU5Mzg4NjM=",
      "avatar_url": "https://avatars.githubusercontent.com/u/5938863?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/RubenWaterman",
      "html_url": "https://github.com/RubenWaterman",
      "followers_url": "https://api.github.com/users/RubenWaterman/followers",
      "following_url": "https://api.github.com/users/RubenWaterman/following{/other_user}",
      "gists_url": "https://api.github.com/users/RubenWaterman/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/RubenWaterman/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/RubenWaterman/subscriptions",
      "organizations_url": "https://api.github.com/users/RubenWaterman/orgs",
      "repos_url": "https://api.github.com/users/RubenWaterman/repos",
      "events_url": "https://api.github.com/users/RubenWaterman/events{/privacy}",
      "received_events_url": "https://api.github.com/users/RubenWaterman/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "aquaman48",
      "id": 63140071,
      "node_id": "MDQ6VXNlcjYzMTQwMDcx",
      "avatar_url": "https://avatars.githubusercontent.com/u/63140071?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/aquaman48",
      "html_url": "https://github.com/aquaman48",
      "followers_url": "https://api.github.com/users/aquaman48/followers",
      "following_url": "https://api.github.com/users/aquaman48/following{/other_user}",
      "gists_url": "https://api.github.com/users/aquaman48/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/aquaman48/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/aquaman48/subscriptions",
      "organizations_url": "https://api.github.com/users/aquaman48/orgs",
      "repos_url": "https://api.github.com/users/aquaman48/repos",
      "events_url": "https://api.github.com/users/aquaman48/events{/privacy}",
      "received_events_url": "https://api.github.com/users/aquaman48/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "frandevel",
      "id": 684869,
      "node_id": "MDQ6VXNlcjY4NDg2OQ==",
      "avatar_url": "https://avatars.githubusercontent.com/u/684869?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/frandevel",
      "html_url": "https://github.com/frandevel",
      "followers_url": "https://api.github.com/users/frandevel/followers",
      "following_url": "https://api.github.com/users/frandevel/following{/other_user}",
      "gists_url": "https://api.github.com/users/frandevel/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/frandevel/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/frandevel/subscriptions",
      "organizations_url": "https://api.github.com/users/frandevel/orgs",
      "repos_url": "https://api.github.com/users/frandevel/repos",
      "events_url": "https://api.github.com/users/frandevel/events{/privacy}",
      "received_events_url": "https://api.github.com/users/frandevel/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "drwaterman",
      "id": 20909364,
      "node_id": "MDQ6VXNlcjIwOTA5MzY0",
      "avatar_url": "https://avatars.githubusercontent.com/u/20909364?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/drwaterman",
      "html_url": "https://github.com/drwaterman",
      "followers_url": "https://api.github.com/users/drwaterman/followers",
      "following_url": "https://api.github.com/users/drwaterman/following{/other_user}",
      "gists_url": "https://api.github.com/users/drwaterman/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/drwaterman/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/drwaterman/subscriptions",
      "organizations_url": "https://api.github.com/users/drwaterman/orgs",
      "repos_url": "https://api.github.com/users/drwaterman/repos",
      "events_url": "https://api.github.com/users/drwaterman/events{/privacy}",
      "received_events_url": "https://api.github.com/users/drwaterman/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "jh2oman",
      "id": 8432644,
      "node_id": "MDQ6VXNlcjg0MzI2NDQ=",
      "avatar_url": "https://avatars.githubusercontent.com/u/8432644?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/jh2oman",
      "html_url": "https://github.com/jh2oman",
      "followers_url": "https://api.github.com/users/jh2oman/followers",
      "following_url": "https://api.github.com/users/jh2oman/following{/other_user}",
      "gists_url": "https://api.github.com/users/jh2oman/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/jh2oman/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/jh2oman/subscriptions",
      "organizations_url": "https://api.github.com/users/jh2oman/orgs",
      "repos_url": "https://api.github.com/users/jh2oman/repos",
      "events_url": "https://api.github.com/users/jh2oman/events{/privacy}",
      "received_events_url": "https://api.github.com/users/jh2oman/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "dagewa",
      "id": 11502083,
      "node_id": "MDQ6VXNlcjExNTAyMDgz",
      "avatar_url": "https://avatars.githubusercontent.com/u/11502083?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/dagewa",
      "html_url": "https://github.com/dagewa",
      "followers_url": "https://api.github.com/users/dagewa/followers",
      "following_url": "https://api.github.com/users/dagewa/following{/other_user}",
      "gists_url": "https://api.github.com/users/dagewa/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/dagewa/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/dagewa/subscriptions",
      "organizations_url": "https://api.github.com/users/dagewa/orgs",
      "repos_url": "https://api.github.com/users/dagewa/repos",
      "events_url": "https://api.github.com/users/dagewa/events{/privacy}",
      "received_events_url": "https://api.github.com/users/dagewa/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "suddenrushofsushi",
      "id": 18706410,
      "node_id": "MDQ6VXNlcjE4NzA2NDEw",
      "avatar_url": "https://avatars.githubusercontent.com/u/18706410?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/suddenrushofsushi",
      "html_url": "https://github.com/suddenrushofsushi",
      "followers_url": "https://api.github.com/users/suddenrushofsushi/followers",
      "following_url": "https://api.github.com/users/suddenrushofsushi/following{/other_user}",
      "gists_url": "https://api.github.com/users/suddenrushofsushi/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/suddenrushofsushi/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/suddenrushofsushi/subscriptions",
      "organizations_url": "https://api.github.com/users/suddenrushofsushi/orgs",
      "repos_url": "https://api.github.com/users/suddenrushofsushi/repos",
      "events_url": "https://api.github.com/users/suddenrushofsushi/events{/privacy}",
      "received_events_url": "https://api.github.com/users/suddenrushofsushi/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "m1waterman88",
      "id": 48535626,
      "node_id": "MDQ6VXNlcjQ4NTM1NjI2",
      "avatar_url": "https://avatars.githubusercontent.com/u/48535626?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/m1waterman88",
      "html_url": "https://github.com/m1waterman88",
      "followers_url": "https://api.github.com/users/m1waterman88/followers",
      "following_url": "https://api.github.com/users/m1waterman88/following{/other_user}",
      "gists_url": "https://api.github.com/users/m1waterman88/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/m1waterman88/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/m1waterman88/subscriptions",
      "organizations_url": "https://api.github.com/users/m1waterman88/orgs",
      "repos_url": "https://api.github.com/users/m1waterman88/repos",
      "events_url": "https://api.github.com/users/m1waterman88/events{/privacy}",
      "received_events_url": "https://api.github.com/users/m1waterman88/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "rwaterman",
      "id": 1875301,
      "node_id": "MDQ6VXNlcjE4NzUzMDE=",
      "avatar_url": "https://avatars.githubusercontent.com/u/1875301?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/rwaterman",
      "html_url": "https://github.com/rwaterman",
      "followers_url": "https://api.github.com/users/rwaterman/followers",
      "following_url": "https://api.github.com/users/rwaterman/following{/other_user}",
      "gists_url": "https://api.github.com/users/rwaterman/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/rwaterman/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/rwaterman/subscriptions",
      "organizations_url": "https://api.github.com/users/rwaterman/orgs",
      "repos_url": "https://api.github.com/users/rwaterman/repos",
      "events_url": "https://api.github.com/users/rwaterman/events{/privacy}",
      "received_events_url": "https://api.github.com/users/rwaterman/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "waterman112",
      "id": 14919607,
      "node_id": "MDQ6VXNlcjE0OTE5NjA3",
      "avatar_url": "https://avatars.githubusercontent.com/u/14919607?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/waterman112",
      "html_url": "https://github.com/waterman112",
      "followers_url": "https://api.github.com/users/waterman112/followers",
      "following_url": "https://api.github.com/users/waterman112/following{/other_user}",
      "gists_url": "https://api.github.com/users/waterman112/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/waterman112/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/waterman112/subscriptions",
      "organizations_url": "https://api.github.com/users/waterman112/orgs",
      "repos_url": "https://api.github.com/users/waterman112/repos",
      "events_url": "https://api.github.com/users/waterman112/events{/privacy}",
      "received_events_url": "https://api.github.com/users/waterman112/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "craigwaterman",
      "id": 195681,
      "node_id": "MDQ6VXNlcjE5NTY4MQ==",
      "avatar_url": "https://avatars.githubusercontent.com/u/195681?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/craigwaterman",
      "html_url": "https://github.com/craigwaterman",
      "followers_url": "https://api.github.com/users/craigwaterman/followers",
      "following_url": "https://api.github.com/users/craigwaterman/following{/other_user}",
      "gists_url": "https://api.github.com/users/craigwaterman/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/craigwaterman/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/craigwaterman/subscriptions",
      "organizations_url": "https://api.github.com/users/craigwaterman/orgs",
      "repos_url": "https://api.github.com/users/craigwaterman/repos",
      "events_url": "https://api.github.com/users/craigwaterman/events{/privacy}",
      "received_events_url": "https://api.github.com/users/craigwaterman/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "mrh2oman",
      "id": 28664873,
      "node_id": "MDQ6VXNlcjI4NjY0ODcz",
      "avatar_url": "https://avatars.githubusercontent.com/u/28664873?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/mrh2oman",
      "html_url": "https://github.com/mrh2oman",
      "followers_url": "https://api.github.com/users/mrh2oman/followers",
      "following_url": "https://api.github.com/users/mrh2oman/following{/other_user}",
      "gists_url": "https://api.github.com/users/mrh2oman/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/mrh2oman/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/mrh2oman/subscriptions",
      "organizations_url": "https://api.github.com/users/mrh2oman/orgs",
      "repos_url": "https://api.github.com/users/mrh2oman/repos",
      "events_url": "https://api.github.com/users/mrh2oman/events{/privacy}",
      "received_events_url": "https://api.github.com/users/mrh2oman/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "imnotlistening",
      "id": 1339767,
      "node_id": "MDQ6VXNlcjEzMzk3Njc=",
      "avatar_url": "https://avatars.githubusercontent.com/u/1339767?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/imnotlistening",
      "html_url": "https://github.com/imnotlistening",
      "followers_url": "https://api.github.com/users/imnotlistening/followers",
      "following_url": "https://api.github.com/users/imnotlistening/following{/other_user}",
      "gists_url": "https://api.github.com/users/imnotlistening/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/imnotlistening/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/imnotlistening/subscriptions",
      "organizations_url": "https://api.github.com/users/imnotlistening/orgs",
      "repos_url": "https://api.github.com/users/imnotlistening/repos",
      "events_url": "https://api.github.com/users/imnotlistening/events{/privacy}",
      "received_events_url": "https://api.github.com/users/imnotlistening/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "waterman001",
      "id": 56588553,
      "node_id": "MDQ6VXNlcjU2NTg4NTUz",
      "avatar_url": "https://avatars.githubusercontent.com/u/56588553?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/waterman001",
      "html_url": "https://github.com/waterman001",
      "followers_url": "https://api.github.com/users/waterman001/followers",
      "following_url": "https://api.github.com/users/waterman001/following{/other_user}",
      "gists_url": "https://api.github.com/users/waterman001/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/waterman001/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/waterman001/subscriptions",
      "organizations_url": "https://api.github.com/users/waterman001/orgs",
      "repos_url": "https://api.github.com/users/waterman001/repos",
      "events_url": "https://api.github.com/users/waterman001/events{/privacy}",
      "received_events_url": "https://api.github.com/users/waterman001/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "benjwaterman",
      "id": 9075116,
      "node_id": "MDQ6VXNlcjkwNzUxMTY=",
      "avatar_url": "https://avatars.githubusercontent.com/u/9075116?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/benjwaterman",
      "html_url": "https://github.com/benjwaterman",
      "followers_url": "https://api.github.com/users/benjwaterman/followers",
      "following_url": "https://api.github.com/users/benjwaterman/following{/other_user}",
      "gists_url": "https://api.github.com/users/benjwaterman/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/benjwaterman/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/benjwaterman/subscriptions",
      "organizations_url": "https://api.github.com/users/benjwaterman/orgs",
      "repos_url": "https://api.github.com/users/benjwaterman/repos",
      "events_url": "https://api.github.com/users/benjwaterman/events{/privacy}",
      "received_events_url": "https://api.github.com/users/benjwaterman/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "Waterman3",
      "id": 9657193,
      "node_id": "MDQ6VXNlcjk2NTcxOTM=",
      "avatar_url": "https://avatars.githubusercontent.com/u/9657193?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/Waterman3",
      "html_url": "https://github.com/Waterman3",
      "followers_url": "https://api.github.com/users/Waterman3/followers",
      "following_url": "https://api.github.com/users/Waterman3/following{/other_user}",
      "gists_url": "https://api.github.com/users/Waterman3/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/Waterman3/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/Waterman3/subscriptions",
      "organizations_url": "https://api.github.com/users/Waterman3/orgs",
      "repos_url": "https://api.github.com/users/Waterman3/repos",
      "events_url": "https://api.github.com/users/Waterman3/events{/privacy}",
      "received_events_url": "https://api.github.com/users/Waterman3/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "watermandrew",
      "id": 22418894,
      "node_id": "MDQ6VXNlcjIyNDE4ODk0",
      "avatar_url": "https://avatars.githubusercontent.com/u/22418894?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/watermandrew",
      "html_url": "https://github.com/watermandrew",
      "followers_url": "https://api.github.com/users/watermandrew/followers",
      "following_url": "https://api.github.com/users/watermandrew/following{/other_user}",
      "gists_url": "https://api.github.com/users/watermandrew/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/watermandrew/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/watermandrew/subscriptions",
      "organizations_url": "https://api.github.com/users/watermandrew/orgs",
      "repos_url": "https://api.github.com/users/watermandrew/repos",
      "events_url": "https://api.github.com/users/watermandrew/events{/privacy}",
      "received_events_url": "https://api.github.com/users/watermandrew/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    },
    {
      "login": "waterman76",
      "id": 20191488,
      "node_id": "MDQ6VXNlcjIwMTkxNDg4",
      "avatar_url": "https://avatars.githubusercontent.com/u/20191488?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/waterman76",
      "html_url": "https://github.com/waterman76",
      "followers_url": "https://api.github.com/users/waterman76/followers",
      "following_url": "https://api.github.com/users/waterman76/following{/other_user}",
      "gists_url": "https://api.github.com/users/waterman76/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/waterman76/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/waterman76/subscriptions",
      "organizations_url": "https://api.github.com/users/waterman76/orgs",
      "repos_url": "https://api.github.com/users/waterman76/repos",
      "events_url": "https://api.github.com/users/waterman76/events{/privacy}",
      "received_events_url": "https://api.github.com/users/waterman76/received_events",
      "type": "User",
      "site_admin": false,
      "score": 1.0
    }
  ]
};
