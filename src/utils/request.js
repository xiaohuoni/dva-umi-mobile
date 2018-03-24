import fetch from 'dva/fetch';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {object} [options] The options we want to pass to "fetch"
 * {
 *   url: user,
 *   method: 'get',
 *   data: params,
 *   headers:{}
 * }
 * {
 *      method: 'POST', 
 *      mode: 'cors',
 *      body:JSON.stringify(tubState),
 *      headers:myHeaders
 *}
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request(options) {
  const url = options.url;
  const option = {
    method: options.method,
    mode: 'cors',
    body: JSON.stringify(options.params),
    headers: options.headers || {}
  }

  const response = await fetch(url, option);

  checkStatus(response);

  const data = await response.json();

  const ret = {
    data,
    headers: {},
  };

  if (response.headers.get('x-total-count')) {
    ret.headers['x-total-count'] = response.headers.get('x-total-count');
  }

  return ret;
}