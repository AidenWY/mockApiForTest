const Mock = require('mockjs');
const { Random } = Mock;

module.exports = [
    {
        url:'/api/question/:id',
        method:'get',
        response(){
            return {
                errNo:0,
                data:{id:Random.id(),title:Random.ctitle()}
            }
        }
    },
    {
        url:'/api/question',
        method:'post',
        response(){
            return {
                errNo:0,
                data:[
                    {id:Random.id()}
                ]
            }
        }
    }
]
