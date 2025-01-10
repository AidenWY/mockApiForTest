const Mock = require('mockjs');
const { Random } = Mock;
const { getQuestionList } = require('./data/getQuestionList')

module.exports = [
    {
        // 获取单个问卷信息
        url: '/api/question/:id',
        method: 'get',
        response() {
            return {
                errNo: 0,
                msg: 'success',
                data: { id: Random.id(), title: Random.ctitle() }
            }
        }
    },
    {
        // 创建问卷
        url: '/api/question',
        method: 'post',
        response() {
            return {
                errNo: 0,
                msg: 'success',
                data: { id: Random.id() }

            }
        }
    },
    {
        // 获取(查询)问卷列表
        url: '/api/question',
        method: 'get',
        response() {
            return {
                errNo: 0,
                msg: 'success',
                data: { list: getQuestionList(), total: 100 }
            }
        }
    }
]
