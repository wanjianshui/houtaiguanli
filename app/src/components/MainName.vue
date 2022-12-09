<!--
 * @Author: 王建水-ss 11877704+wang-jianshui-ss@user.noreply.gitee.com
 * @Date: 2022-11-11 09:24:10
 * @LastEditors: 王建水-ss 11877704+wang-jianshui-ss@user.noreply.gitee.com
 * @LastEditTime: 2022-11-14 10:32:27
 * @FilePath: \app\src\components\MainName.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<!-- 创建主路由-->


<template>
  <div>
    <el-container>
      <!-- width="auto"菜单栏宽度自适应 -->
      <el-aside width="auto"> 
       <comnon-name />
      </el-aside>
      <el-container>
        <el-header>
          <commonh-name />
        </el-header>
        <commont-name />
        <el-main>
          <!-- 路由出口,路由在地址路径匹配到的组件将渲染在这里 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import ComnonName from '@/views/ComnonName.vue';
import CommonhName from '@/views/CommonhName.vue';
import CommontName from '@/views/CommontName.vue';
// 引入组件
// import ComnonName from '../views/ComnonName.vue'

export default {
  components: { ComnonName, CommonhName, CommontName },
  name: "MainName",
  data() {
    return {};
  },
   // 使用组件
  // comments:{
  //   ComnonName
  // }
};
</script>

<style scoped>
.el-header{
  padding: 0;
}

</style>