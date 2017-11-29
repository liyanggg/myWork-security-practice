const Koa = require('koa');
const fs = require('fs');
const path = require('path');
const router = require('./routers/index');
const bodyParser = require('koa-bodyparser');
const static = require('koa-static');
const limit = require('koa-limit');

// 静态资源目录对于相对入口文件index.js的路径
const staticPath = './static'
const app = new Koa();

app.use(limit({
  limit: 1000,
  interval: 1000 * 60 * 60
}));



// 使用ctx.body解析中间件
app.use(bodyParser());

// 设置静态目录
app.use(static(
  path.join( __dirname,  staticPath)
));

// 设置router
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log('website is starting at port 3000');
});
