const Mock = require('mockjs');
const Random = Mock.Random;

module.exports = {
    url: '/api/test',
    method: 'get',
    response: () => {
        return {
            errNo: 0,
            msg: 'success',
            data: {
                name: Random.cname(),
                age: Random.integer(1, 100)
            }
        };
    }
};
