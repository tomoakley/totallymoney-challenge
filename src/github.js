import 'whatwg-fetch';
import base64 from 'base-64';

const githubRootUrl = 'https://api.github.com';

const fetchIssueList = async(params) => {
  const queryString = params ?
    Object.keys(params)
      .filter((key) => params[key] !== '')
      .reduce((a,k) => {
        a.push(`${k}=${encodeURIComponent(params[k])}`);
        return a;
      }, [])
      .join('&') :
    '';
  return makeRequest('GET', 'repos/atom/atom/issues', queryString);
};

const makeRequest = async(method, path, params) => {
  const url = `${githubRootUrl}/${path}?${params}`;
  const { GITHUB_USER, GITHUB_TOKEN } = process.env;
  const headers = new Headers();
  headers.append('Authorization', `Basic ${base64.encode(`${GITHUB_USER}:${GITHUB_TOKEN}`)}`);
  const request = await fetch(url, { method, headers });
  return request.json();
};

export default fetchIssueList;
