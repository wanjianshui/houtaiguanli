<!--
 * @Author: 王建水-ss 11877704+wang-jianshui-ss@user.noreply.gitee.com
 * @Date: 2022-11-10 11:16:35
 * @LastEditors: 王建水-ss 11877704+wang-jianshui-ss@user.noreply.gitee.com
 * @LastEditTime: 2022-11-12 14:46:49
 * @FilePath: \app\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>

    <!-- 使用element组件 -->
   <!-- <el-row>
  <el-button round>圆角按钮</el-button>
  <el-button type="primary" round>主要按钮</el-button>
  <el-button type="success" round>成功按钮</el-button>
  <el-button type="info" round>信息按钮</el-button>
  <el-button type="warning" round>警告按钮</el-button>
  <el-button type="danger" round>危险按钮</el-button>
</el-row> -->

  <!-- 路由出口,路由在地址路径匹配到的组件将渲染在这里 -->
  <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="less">
// 清除默认边距
  html,body,h3,p{
   padding: 0;
   margin: 0;
 }
</style>