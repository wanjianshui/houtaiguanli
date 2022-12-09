<!--
 * @Author: 王建水-ss 11877704+wang-jianshui-ss@user.noreply.gitee.com
 * @Date: 2022-11-10 17:02:28
 * @LastEditors: tiecui tiecui@qq.com
 * @LastEditTime: 2022-12-09 08:59:32
 * @FilePath: \app\src\components\Home.Name.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<!--创建子路由-->

<template>
  <!-- 表示一行 -->
  <el-row>
    <!-- 表示内容 -->
    <el-col :span="8">
      <!-- 设置用户区域 -->
      <el-card class="box-card">
        <div class="user">
          <img src="../assets/user.png" alt="" />
          <div class="userinfo">
            <p class="name">王建水</p>
            <p class="access">管理员---</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登陆时间：<span>2021-7-1</span></p>
          <p>上次登陆地点：<span>武汉</span></p>
        </div>
      </el-card>
      <el-card class="bodys">
        <!-- 设置表格数据区域 -->
        <el-table :data="tableData">
          <!-- 遍历tableLabel数据渲染到页面 -->
          <el-table-column
            v-for="(val, key) in tableLabel"
            :prop="key"
            :label="val"
            :key="key"
          ></el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16">
      <div class="num">
        <!-- v-for="items遍历countData拿到到每一项数据 ,body-style类型为对象 设置弹性布局-->
        <el-card
          v-for="items in countData"
          :key="items.name"
          :body-style="{ display: 'flex', padding: 0 }"
        >
          <!-- 使用模板字符串加动态class把遍历获取到的${items.icon每一项icom渲染到页面,:style设置动态样式 将遍历获取到的color动态渲染到页面 -->
          <i
            class="icon"
            :class="`el-icon-${items.icon}`"
            :style="{ background: items.color }"
          ></i>

          <div class="detail">
            <!-- 把遍历获取到的value，name数据渲染到页面 -->
            <p class="price">￥{{ items.value }}</p>
            <p class="desc">{{ items.name }}</p>
          </div>
        </el-card>
      </div>
      <!-- 折线图区域 -->
      <el-card style="height: 200px">
        <!-- div用来存放图表 -->
        <div ref="echartsl" style="height: 220px"></div>
      </el-card>
      <!-- 柱状形区域 -->
      <el-card class="graph1">
         <!-- div用来存放图表 -->
        <div ref="echarts2" style="height: 220px"></div>
      </el-card>
      <!-- 饼状形区域 -->
      <el-card class="graph2">
         <!-- div用来存放图表 -->
        <div ref="echarts3" style="height: 160px"></div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
// 引入创建好的api文件
import { getData } from "../api";
// 引入echarts
import * as echarts from "echarts";

export default {
  name: "HomeName",
  data() {
    return {
      // 表格数据
      tableData: [],
      // 表格数据
      tableLabel: {
        name: "课程",
        todayBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买",
      },
      // 订单区域
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
    };
  },
  mounted() {
    // 调用getData方法拿到返回的数据
    getData().then(({ data }) => {
      // 获取api文件下的home首页data数据
      const { tableData } = data.data;
      this.tableData = tableData;

      // 处理线状图表
      // 基于准备好的dom 初始echartsl实列
      const echartsl = echarts.init(this.$refs.echartsl);
      // 指定图标的配置项和数据
      var echartslOtion = {};
      // 处理数据xaxis
      const { orderData, userData,videoData } = data.data;
      const xAxis = Object.keys(orderData.data[0]);
      const xAxisData = {
        data: xAxis,
      };
      // console.log(xAxis)
      echartslOtion.xAxis = xAxisData;
      echartslOtion.yAxis = {};
      echartslOtion.legend = xAxisData;

      echartslOtion.series = [];
      xAxis.forEach((key) => {
        echartslOtion.series.push({
          name: key,
          data: orderData.data.map((item) => item[key]),
          type: "line",
        });
      });
      // console.log(echartsOtion)
      // 使用刚指定的配置项和数据显示图表。
      echartsl.setOption(echartslOtion);

      // 处理树状图
      // 获取当前实列
      const echarts2 = echarts.init(this.$refs.echarts2);
      // 配置数据
      const echarts2Option = {
        legend: {
          // 图例文字颜色
          textStyle: {
            color: "#333",
          },
        },
        grid: {
          left: "20%",
        },
        // 提示框
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category", // 类目轴
          data: userData.map((item) => item.date),
          axisLine: {
            lineStyle: {
              color: "#17b3a3",
            },
          },
          axisLabel: {
            interval: 0,
            color: "#333",
          },
        },
        yAxis: [
          {
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
          },
        ],
        color: ["#2ec7c9", "#b6a2de"],
        series: [
          {
            name: "新增用户",
            data: userData.map((item) => item.nwe),
            type: "bar",
          },
          {
            name: "活跃用户",
            data: userData.map((item) => item.active),
            type: "bar",
          },
        ],
      };
      echarts2.setOption(echarts2Option);


      //处理饼状图
      // 获取当前实列
      const echarts3 = echarts.init(this.$refs.echarts3)
      // 配置数据
      const echarts3Option = {
          tooltip: {
            trigger: "item",
          },
          color: [
            "#0f78f4",
            "#dd536b",
            "#9462e5",
            "#a6a6a6",
            "#e1bb22",
            "#39c362",
            "#3ed1cf",
          ],
          series: [
          {
            data:videoData,
            type:'pie'
          }
          ], 
      }
         // 调用echarts3Option
        echarts3.setOption(echarts3Option)


    });
  },
};
</script>

<style lang="less" scoped>

.box-card {
  width: 420px;
}
.user {
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  // 弹性布局
  display: flex;
  // 文字垂直居中
  align-items: center;
  img {
    // 向右边距
    margin-right: 40px;
    width: 150px;
    height: 150px;
    // 图片设置成圆角50%
    border-radius: 50%;
  }
  .userinfo {
    .name {
      font-size: 32px;
      margin-bottom: 10px;
    }
    .access {
      color: #999999;
    }
  }
}
.login-info {
  p {
    line-height: 28px;
    font-size: 14px;
    color: #999999;
    span {
      color: #999999;
      // margin向左边偏移60px
      margin-left: 60px;
    }
  }
}
// 设置表格样式
.bodys {
  margin-top: 10px;
  width: 420px;
  height: 310px;
}
// 设置单独区域样式
.num {
  // 弹性布局
  display: flex;
  // 设置强制换行
  flex-wrap: wrap;
  // 贴边
  justify-content: space-between;

  // 设置icon图标样式
  .icon {
    width: 80px;
    height: 80px;
    font-size: 30px;
    text-align: center;
    line-height: 80px;
    color: #fff;
  }
  .detail {
    margin-left: 15px;
    display: flex;
    // 改变主轴为上下方向显示
    flex-direction: column;
    // 在主轴的方向居中
    justify-content: center;
    .price {
      font-size: 30px;
      margin-bottom: 10px;
      // 边框线条高度
      line-height: 30px;
      height: 30px;
    }
    .desc {
      font-size: 14px;
      color: #999;
      text-align: center;
    }
  }
  .el-card {
    width: 32%;
    margin-bottom: 20px;
  }
}
.graph1 {
  margin: 10px;
  // position: absolute;
  // top: 100px;
  width: 400px;
  height: 200px;
  // display: flex;
  // flex-wrap: wrap;
}
.graph2 {
  margin: 10px;
  position: absolute;
  right: 1px;
  top: 406px;
  width: 400px;
  height: 200px;
  // display: flex;
}
</style>