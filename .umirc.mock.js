import antdServer from 'antd-pro-server';
import mockjs from 'mockjs';
import user from './mock/user';
// // 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true';
//支持扩展
//支持从mock文件夹引入
//支持mockjs
const proxy = {
  'GET /api/test': [
    {
      code:'success',
      message:'成功'
    },
  ],
  'GET /api/test/tags': mockjs.mock({
    'list|100': [{ name: '@city', 'value|1-100': 150, 'type|0-2': 1 }],
  }),
};
export default (noProxy ? {} : {...proxy,...antdServer,...user});
