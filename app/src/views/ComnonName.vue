<!--
 * @Author: 王建水-ss 11877704+wang-jianshui-ss@user.noreply.gitee.com
 * @Date: 2022-11-11 09:49:35
 * @LastEditors: 王建水-ss 11877704+wang-jianshui-ss@user.noreply.gitee.com
 * @LastEditTime: 2022-11-14 09:13:48
 * @FilePath: \app\src\views\ComnonName.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<!-- 创建一般组件-->

<template>
<!-- background-color="#545c64" 背景颜色 -->
<!-- text-color="#fff" 字体颜色 -->
<!-- active-text-color="#ffd04b" 当前选中的字体颜色 -->
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    >

   <!-- 使用三元表达式判断：菜单展开时显示'通用后台管理'，菜单收起时显示'后台' -->
    <h3>{{ isCollapse ? '后台' : '通用后台管理' }}</h3>

    <!-- 遍历noChildren数据渲染到页面 item代表每一项  @click="clikMenu(item)"单击item实现对应跳转-->
    <el-menu-item
     @click="clikMenu(item)"
      v-for="item in noChildren"
      :key="item.name"
      :index="item.name">
      <!-- :class="`el-icon-${item.icon}`" ``模板字符串 从数据中渲染图标 item代表每一项-->
      <i :class="`el-icon-${item.icon}`"></i>
      <!-- {{item.label}}从数据中渲染标题名称 -->
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <!-- 遍历hasChildren数据渲染到页面 item代表每一项-->
    <el-submenu
      v-for="item in hasChildren"
      :key="item.label"
      :index="item.label"
    >
      <template slot="title">
        <!-- :class="`el-icon-${item.icon}`" ``模板字符串 从数据中渲染图标 item代表每一项-->
        <i :class="`el-icon-${item.icon}`"></i>
        <!-- {{item.label}}从数据中渲染标题名称 -->
        <span slot="title">{{ item.label }}</span>
      </template>
      <!-- 遍历数据渲染到页面 subItem代表每一项 -->
      <el-menu-item-group v-for="subItem in item.children" :key="subItem.path">
        <!-- {{subItem.label}}从数据中渲染标题名称  @click="clikMenu(subItem)"点击subItem实现跳转-->
        <el-menu-item @click="clikMenu(subItem)" :index="subItem.ppath">{{ subItem.label }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
<script>
export default {
  data() {
    return {
      // isCollapse: false,  // 禁止菜单收起
      // 数据
      menuData: [
        {
          path: "/home",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home/Home",
        },
        {
          path: "/mall",
          name: "mall",
          label: "商品管理",
          icon: "video-play",
          url: "MallManage/MallManage",
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "user",
          url: "UserManage/UserManage",
        },
        {
          label: "其他",
          icon: "location",
          children: [
            {
              path: "/page1",
              name: "page1",
              label: "页面1",
              icon: "setting",
              url: "Other/PageOne",
            },
            {
              path: "/page2",
              name: "page2",
              label: "页面2",
              icon: "setting",
              url: "Other/PageTwo",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    // 点击菜单实现跳转
    clikMenu(item){
     console.log(item)
    // route表示当前页面的路由 添加if判断如果当页面的路由与我们要跳转的路由不一致的时候才允许跳转，否则不允许实现跳转（不允许重复在当前页面跳转）
      if(this.$route.path !== item.path){
      this.$router.push(item.path)
      }
      this.$store.commit('seletMenu',item)
    }
  },
  //   计算属性获取数据
  computed: {
    //    没有子菜单数据
    noChildren() {
      return this.menuData.filter((item) => !item.children);
    },
    hasChildren() {
      return this.menuData.filter((item) => item.children);
    },
    // 作用定义菜单展开还是收起属性
    isCollapse(){
        return this.$store.state.tab.isCollapse
    }
  },
};
</script>

 <!-- lang="less" 语言修改为less scoped只作用当前页面-->
<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu{
    /*  height: 100vh; vh代表高度占满整个屏幕 */
    height: 100vh;
    h3{
        // 文字颜色
        color: pink;
        // 文字居中
        text-align: center;
        // 上下高度48x
        line-height: 48px;
        // 字体大小
        font-size: 16px;
        // 字体粗细
        font-weight: 400;
    }
    // 不设置边框
    border-right: none;
    
}
</style>
