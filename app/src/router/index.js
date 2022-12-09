/*
 * @Author: 王建水-ss 11877704+wang-jianshui-ss@user.noreply.gitee.com
 * @Date: 2022-11-11 08:36:18
 * @LastEditors: 王建水-ss 11877704+wang-jianshui-ss@user.noreply.gitee.com
 * @LastEditTime: 2022-11-14 10:38:29
 * @FilePath: \app\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


// 该文件专门用于创建整个应用的路由器

// 引入router插件
import VueRouter from "vue-router";
// 引入创建好的组件
import Home from '../components/HomeName.vue'
import User from '../components/UserName.vue'
import Main from '../components/MainName.vue'
import Mall from '../components/MallName.vue'
import Pageone from '../components/PageoneName.vue'
import Pagetow from '../components/PagetowName.vue'

// 创建一个路由器在路由器里面创建路由并暴露
export default new VueRouter({
    routes:[
        // 创建主路由,里面嵌套包含children创建子路由
           {
            path:'/',
            component:Main,
            // redirect:'/home', // 重新定向 作用当页面在当前path:'/'地址下就跳转到/home页面地址
            // children创建子路由
            children:[
            {path:'/home', name:'home', component:Home  },  //首页路由
            {path:'/user', name:'user', component:User},  // 用户管理路由
            {path:'/mall', name:'mall', component:Mall},  // 商品管理路由
            {path:'/page1', name:'page1', component:Pageone},  // 页面一路由
            {path:'/page2', name:'page2', component:Pagetow},  // 页面二路由
            ]

        }
    ]
})