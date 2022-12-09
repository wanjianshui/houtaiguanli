<!--
 * @Author: 王建水-ss 11877704+wang-jianshui-ss@user.noreply.gitee.com
 * @Date: 2022-11-14 10:16:36
 * @LastEditors: 王建水-ss 11877704+wang-jianshui-ss@user.noreply.gitee.com
 * @LastEditTime: 2022-11-14 11:37:34
 * @FilePath: \app\src\views\Commont.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->


<!-- 该文件用于创建面包屑可移除标签-->


<!--设置标签样式、高亮、大小、默认首页-->
<template>
  <div class="tabs">
    <el-tag
    v-for="(item,index) in tags"
    :key="item.path"
    :closable="item.name !== 'home'"
    :effect="$route.name === item.name ? 'dark' : 'plain'"
    @click="changeMenu(item)"
    @close="handleClose(item,index)"
    size="small"
    >
    {{ item.label }}
    </el-tag>
  </div>
</template>

<script>
// 使用辅助函数引入vuex
import {mapState, mapMutations} from 'vuex' 

export default {
    name:'commontName',
    data(){
        return{}
    },
    computed:{
        ...mapState({
            // 传入需要的数据
            tags:state => state.tab.tabsList
        })
    },
    methods:{
      ...mapMutations(['closeTag']),
  //  点击标签tag跳转的功能
      changeMenu(item) {
        this.$router.push({name:item.name})
      },
      // 点击标签tag删除的功能
      handleClose(item,index){
          // 调用store中的mutation
          this.closeTag(item)
          const length = this.tags.length 
          // 删除之后的跳转逻辑
          if(item.name !== this.$route.name){
            return
          }
          // 表示的是删除最后一项
          if(index === length) {
            this.$router.push({
              name:this.tags[index - 1].name
            })
          }else {
            this.$router.push({
              name:this.tags[index].name
            })
          }
      }
    }
}
</script>

<style lang="less" scoped>
  .tabs{
    padding: 15px;
    .el-tag{
      margin-right: 10px;
      // 改变鼠标样式
      cursor: pointer;
    }
  }
</style>

