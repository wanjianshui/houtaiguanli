<!--
 * @Author: 王建水-ss 11877704+wang-jianshui-ss@user.noreply.gitee.com
 * @Date: 2022-11-11 20:14:39
 * @LastEditors: 王建水-ss 11877704+wang-jianshui-ss@user.noreply.gitee.com
 * @LastEditTime: 2022-11-14 10:06:26
 * @FilePath: \app\src\views\CommonhName.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="header-container">
    <div class="l-conter">
      <el-button
        @click="handleMenu"
        icon="el-icon-menu"
        size="mini"
        style="margin-right: 20px"
      ></el-button>
      <!-- 面包屑 -->
      <!-- <span class="text">首页</span> -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in tags" :key="item.path"  :to="{ path: item.path }">{{item.label}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-conter">
      <el-dropdown :hide-on-click="false">
        <span class="el-dropdown-link">
          <img src="../assets/user.png" alt="" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
// 引入mapState辅助函数
import {mapState} from 'vuex'

export default {
  data() {
    return {};
  },
  // 作用点击handleMenu按钮控制菜单展开或收起
  methods: {
    handleMenu() {
      this.$store.commit("CollapseMenu");
    },
  },
  computed:{
    // 调用mapState
    ...mapState({
      tags: state => state.tab.tabsList
    })
  },
  // mounted(){
  //   // console.log(this.tags,'tags')
  // }
};
</script>

<style lang="less" scoped>
.header-container {
  background-color: #333;
  height: 60px;
  // 设置图标位置
  display: flex;
  // 在页面靠边
  justify-content: space-between;
  // 在纵轴垂直居中
  align-items: center;
  padding: 0 20px;
  .l-conter{
    display: flex;
    align-items: center;
    // 修改首页字体颜色 /deep/作用穿刺样式
    /deep/.el-breadcrumb__item {
      .el-breadcrumb__inner{
        // 字体粗细
        font-weight: normal;
        // & 表示并且
        &.is-link{
          color: #666;
        }
      }
      // 伪类选择器，设置选项最后一个字体颜色为白色
      &:last-child{
        .el-breadcrumb__inner{
          color: #fff;
        }
      }
    }
  }
}
.text {
  // 字体颜色
  color: #fff;
  // 字体大小
  font-size: 14px;
  margin-left: 10px;
}
img {
  width: 40px;
  height: 40px;
  // 图片修改为圆角50%
  border-radius: 50%;
  
}
</style>