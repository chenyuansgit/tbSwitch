const Koa = require('koa');
const app = new Koa();
const static = require('koa-static');
const path = require('path');

app.use(static(path.join(__dirname, './public')));

// 对于任何请求，app 将调用该异步函数处理请求：
/*app.use(async function (ctx, next) {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
});*/

app.listen(3000);