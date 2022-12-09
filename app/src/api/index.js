/*
 * @Author: 王建水-ss 11877704+wang-jianshui-ss@user.noreply.gitee.com
 * @Date: 2022-11-13 08:30:44
 * @LastEditors: 王建水-ss 11877704+wang-jianshui-ss@user.noreply.gitee.com
 * @LastEditTime: 2022-11-14 16:46:20
 * @FilePath: \app\src\api\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


// 该文件用于接收后端的接口，物流、订单等接口


//引入封装好的axios 
import http from '../utils/request'

// 请求首页数据
export const getData = () => {
    // 调用封装的axios的get接口地址返回一个promise对象
    return http.get('/home/getData')
}

export const getUser = (params) => {
    // 返回用户列表
    return http.get('/user/getUser',params)
}

export const addUser = (data) => {
    // 新增用户
    return http.post('/user/add',data)
}

export const editUser = (data) => {
    // 编辑用户
    return http.post('/user/edit',data)
}

export const delUser = (data) => {
    // 删除用户
    return http.post('/user/del',data)
}



