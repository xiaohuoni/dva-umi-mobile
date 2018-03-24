import request from 'utils/request';
import config from 'utils/config';

const { api } = config
const { users } = api
export async function query (params) {
  return request({
    url: users,
    method: 'get',
    data: params,
  })
}
