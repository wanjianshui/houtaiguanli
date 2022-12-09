/*
 * @Author: 王建水-ss 11877704+wang-jianshui-ss@user.noreply.gitee.com
 * @Date: 2022-11-12 10:18:07
 * @LastEditors: 王建水-ss 11877704+wang-jianshui-ss@user.noreply.gitee.com
 * @LastEditTime: 2022-11-12 10:31:08
 * @FilePath: \app\src\store\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */



// 创建vuex文件夹


// 引入vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 引入创建好的tab文件
import tab from './tab'

// 应用vuex
Vue.use(Vuex)


// 创建vuex实列并暴露
export default new Vuex.Store({
    modules:{
        tab
    }
})



