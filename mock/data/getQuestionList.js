// @description 生成问卷列表
// @author Aiden

const Mock = require('mockjs')
const Random = Mock.Random

function getQuestionList(len = 10) {
    const list = []
    for (let i = 0; i < len; i++) {
        list.push({
            _id: Random.id(),
            title: Random.ctitle(),
            isPublished: Random.boolean(),
            isStar: Random.boolean(),
            answerCount: Random.integer(0, 100),
            createdAt: Random.datetime(),
            isDeleted: Random.boolean(),
        })
    }
    return list
}

module.exports = {
    getQuestionList
}
