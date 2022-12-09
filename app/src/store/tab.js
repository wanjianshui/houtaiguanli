/*
 * @Author: 王建水-ss 11877704+wang-jianshui-ss@user.noreply.gitee.com
 * @Date: 2022-11-12 10:21:17
 * @LastEditors: 王建水-ss 11877704+wang-jianshui-ss@user.noreply.gitee.com
 * @LastEditTime: 2022-11-14 11:21:58
 * @FilePath: \app\src\store\tab.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


// 该文件用于管理菜单收起和展开

export default {
    state: {
        isCollapse:false,  //用于控制菜单展开还是收起
        // 面包屑的数据
        tabsList:[
            {
                path: "/home",
                name: "home",
                label: "首页",
                icon: "s-home",
                url: "Home/Home",
            }
        ]
    },
    //修改菜单展开收起的方法
    mutations:{
        CollapseMenu(state){
            state.isCollapse = !state.isCollapse  
        },
        // 更新面包屑数据
        seletMenu(state,val) {
        // 判断添加的数据是否为首页
        if(val.name !== 'home'){
           const index = state.tabsList.findIndex(item => item.name === val.name)
        //    如果不存在
            if (index === -1) {
            state.tabsList.push(val)
            }
        }
        },
        // 拿到鼠标当前点击的数据，用来删除指定的标签tag数据
        closeTag(state,item){
            // console.log(item,'item')
            const index = state.tabsList.findIndex(val => val.name === item.name)
            state.tabsList.splice(index,1)
        }
    }
}

