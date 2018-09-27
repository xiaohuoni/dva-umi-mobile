const path = require('path')

export default {
  plugins: [
    ['umi-plugin-react',{
      dva:true,
      antd:true,
      hd:true,
      routes: {
        exclude: [
          /model\.(j|t)sx?$/,
          /service\.(j|t)sx?$/,
          /models\//,
          /components\//,
          /services\//,
        ],
      },
    }]
  ],
  alias:{
    components:path.resolve(__dirname,'src/components'),
        utils:path.resolve(__dirname,'src/utils'),
        services:path.resolve(__dirname,'src/services'),
        models:path.resolve(__dirname,'src/models'),
        themes:path.resolve(__dirname,'src/themes'),
        images:path.resolve(__dirname,'src/assets')
  }
};
