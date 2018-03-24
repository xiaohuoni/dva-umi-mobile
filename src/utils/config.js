const APIV1 = '/api/v1'
const isMock = true;
const APIV2 = isMock?APIV1:'/api/v1/th';
module.exports = {
  name: 'dva-umi-mobile',
  prefix: 'dvaumimobile',
  openPages: ['/login'],
  apiPrefix: '/api/v1',
  APIV1,
  APIV2,
  isMock:isMock,
  api: {
    APIV2:APIV2,
    users: `${APIV1}/users`
  },
}
