// @description 生成问卷列表
// @author Aiden

const Mock = require('mockjs')
const Random = Mock.Random


const questionList = (len = 10) => {
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

function getQuestionList(query = {}) {
    let list = questionList(10)
    const { isStar = false, isPublished = false, isDeleted = false } = query;


    // 根据条件过滤
    if (isStar) {
        list = list.filter(item => item.isStar === true)
    }
    if (isPublished) {
        list = list.filter(item => item.isPublished === true)
    }
    if (isDeleted) {
        list = list.filter(item => item.isDeleted === true)
    }

    return list

}

module.exports = {
    getQuestionList
}
