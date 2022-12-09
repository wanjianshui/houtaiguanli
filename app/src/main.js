/*
 * @Author: 王建水-ss 11877704+wang-jianshui-ss@user.noreply.gitee.com
 * @Date: 2022-11-10 11:16:35
 * @LastEditors: 王建水-ss 11877704+wang-jianshui-ss@user.noreply.gitee.com
 * @LastEditTime: 2022-11-13 08:59:17
 * @FilePath: \app\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'

// import {Row,Button,container,aside,header,main,menu,submenu,} from 'element-ui';  //按需引入element
import ElementUI from 'element-ui';   // 全局引入element
 
import 'element-ui/lib/theme-chalk/index.css';
// 引入vue-router插件
import VueRouter from 'vue-router'

// 引入创建好的路由
import router from './router'

// 引入vuex的store文件
import store from './store'

// 引入创建好的mockjs文件
import "./api/mock"



// 关闭vue生产提示
Vue.config.productionTip = false

// 应用router插件
Vue.use(VueRouter)

// 应用element插件
Vue.use(ElementUI); 




// 创建vm
new Vue({
  render: h => h(App),
  // 挂载路由
  router,
  // 挂载vuex
  store,
}).$mount('#app')
