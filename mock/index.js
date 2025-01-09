const test = require('./test');
const question = require('./question');

// 将所有路由配置组合成一个数组
// .flat() 方法用于将嵌套数组"扁平化"处理,将多维数组转为一维数组
// 例如: [[1,2], [3,4]] 经过 flat() 处理后变成 [1,2,3,4]
// 这里是因为 question.js 导出的是数组,需要和 test 组合成一个扁平的路由配置数组
module.exports = [test, question].flat();