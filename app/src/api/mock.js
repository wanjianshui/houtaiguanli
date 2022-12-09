/*
 * @Author: 王建水-ss 11877704+wang-jianshui-ss@user.noreply.gitee.com
 * @Date: 2022-11-13 08:52:58
 * @LastEditors: 王建水-ss 11877704+wang-jianshui-ss@user.noreply.gitee.com
 * @LastEditTime: 2022-11-14 20:24:50
 * @FilePath: \app\src\api\mock.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */



// 用于创建mockjs文件，mockjs作用随机生成数据


// 引入mock.js
import Mock from 'mockjs'
// 引入mockServeData数据文件
import homeApi from './mockServeData/home'
// 引入user文件
import user from './mockServeData/user'

//定义mock请求拦截 地址,数据
Mock.mock('/api/home/getData',homeApi.getStatisticalData)

// 用户列表的数据
// Mock.mock('/api/user/add', 'post', user.createUser)  // 新增
// Mock.mock('/api/user/edit', 'post', user.updateUser)  // 编辑
// Mock.mock('/api/user/del', 'post', user.deleteUser)  // 删除
// Mock.mock('/api/user/getUser',user.getUserList)  // 列表
console.log(user)

