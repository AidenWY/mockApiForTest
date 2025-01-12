const Koa = require('koa');
const Router = require('koa-router');
const mock = require('./mock/index');

const app = new Koa();
const router = new Router();

// 添加调试日志
console.log('mock 模块类型:', typeof mock);
console.log('mock 内容:', JSON.stringify(mock, null, 2));

// 定义异步响应函数
async function getRes(fn, ctx) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const res = fn(ctx);
            resolve(res);
        }, 1000)
    })
}

// 注册路由
mock.forEach((item) => {
    const method = item.method.toLowerCase();
    router[method](item.url, async (ctx) => {
        try {
            ctx.body = await getRes(item.response, ctx);
        } catch (err) {
            console.error(`路由处理错误 ${item.url}:`, err);
            ctx.status = 500;
            ctx.body = { error: '服务器内部错误' };
        }
    });
});

// 打印注册的路由
console.log('注册的路由：', router.stack.map(layer => ({
    path: layer.path,
    methods: layer.methods
})));

// 请求日志中间件
app.use(async (ctx, next) => {
    console.log(`收到请求: ${ctx.method} ${ctx.url}`);
    await next();
});

// 注册路由中间件
app.use(router.routes());
app.use(router.allowedMethods());

// 添加 404 处理中间件
app.use(async (ctx) => {
    if (ctx.status === 404) {
        console.log('404 访问:', ctx.url);
        ctx.body = { error: '未找到路由' };
    }
});

// 启动服务器
const port = 3001;
app.listen(port, () => {
    console.log(`服务器启动在 ${port} 端口`);
});