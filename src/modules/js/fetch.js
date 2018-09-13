/**
 *  通过 fetch 的封装，我们把所有的数据请求接口在这里设置一个统一的入口，
 *  这样可以对同一个业务状态进行同一种处理，比如这里的举例，在 status 是 300 的时候，统一跳转到登录页面
 */
import axios from 'axios'

function fetch(url, data) {
    return new Promise((resolve,reject) =>{
        axios.post(url, data).then(res => {
            let status = res.data.status
            if (status === 200) {
                resolve(res)
            }
            if (status === 300) {
                location.href = "login.html"
                resolve(res)
            }
            reject(res)
        }).catch(error => {
            reject(error)
        })
    })
}

export default fetch

