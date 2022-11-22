<!-- 分析页 -->
<template>
  <div class="Analyse">
    <div class="left">
      <!-- 数据统计 -->
      <el-row>
        <el-card class="box-card statistical" style="padding-top:10px">
          <div slot="header" class="clearfix">
            <h1 style="margin:0">数据统计:</h1>
          </div>
          <el-row :gutter="20">
            <el-col :span="4" style="background-color:#ffffff"><div class="grid-content bg-purple" style="background-color:#ff9800"><h2>当日数据:</h2></div></el-col>
            <el-col :span="5"><div class="grid-content bg-purple"><h3><span>547</span> 新增用户</h3></div></el-col>
            <el-col :span="5"><div class="grid-content bg-purple"><h3><span>1,482</span> 新增订单</h3></div></el-col>
            <el-col :span="5"><div class="grid-content bg-purple"><h3><span>78,482</span> 交易金额</h3></div></el-col>
            <el-col :span="5"><div class="grid-content bg-purple"><h3><span>7</span> 新增管理员</h3></div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="4" style="background-color:#ffffff"><div class="grid-content bg-purple" style="background-color:#20a0ff"><h2>总数据:</h2></div></el-col>
            <el-col :span="5"><div class="grid-content bg-purple"><h3><span style="color:#20a0ff">69,552</span>注册用户  </h3></div></el-col>
            <el-col :span="5"><div class="grid-content bg-purple"><h3><span style="color:#20a0ff">32,103</span> 订单</h3></div></el-col>
            <el-col :span="5"><div class="grid-content bg-purple"><h3><span style="color:#20a0ff">1,524,482</span> 交易金额</h3></div></el-col>
            <el-col :span="5"><div class="grid-content bg-purple"><h3><span style="color:#20a0ff">568</span> 管理员</h3></div></el-col>
          </el-row>
        </el-card>
      </el-row>
      <!-- 折线图 -->
      <el-row>
        <el-card class="box-card line_chart">
          <div slot="header" class="clearfix" style="overflow: hidden;" >
            <h1 style="margin:0;float: left;">每日销量:</h1>
          </div>
          <div id="line" class="proCharts" ref="charts"></div>
        </el-card>
      </el-row>
    </div>
    <!-- 饼图 -->
    <el-card class="box-card pie_chart">
      <div slot="header" class="clearfix" style="overflow: hidden;padding: 10px 0 10px 10px;">
        <h1 style="margin:0;float: left;">用户访客来源:</h1>
      </div>
      <div id="pie"></div>
    </el-card>
    <!-- 目标 -->
    <el-card class="box-card target" style="width:31%">
      <div slot="header" class="clearfix" style="overflow: hidden;padding: 10px 0 10px 10px;">
        <h1 style="margin:0;float: left;">目标完成:</h1>
      </div>
      <el-row :gutter="20">
        <el-col :span="8"><div class="grid-content bg-purple" style="background-color:#fff">
          <el-progress type="circle" :percentage="75" style="margin-right: 24px;margin-left: 20px;"></el-progress>
          <span>销售额</span>
        </div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple" style="background-color:#fff">
          <el-progress type="circle" :percentage="63" style="margin-right: 24px;margin-left: 20px;"></el-progress>
          <span>用户数量</span>
        </div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple" style="background-color:#fff">
          <el-progress type="circle" :percentage="100" status="success" style="margin-right: 24px;margin-left: 20px;"></el-progress>
          <span>管理员数</span>
        </div></el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data(){
    return{
      pieheight:'450',
      piewidth:'450',
      option:{
        color:["rgb(255, 112, 112)","rgb(92, 123, 217)","rgb(145, 204, 117)","rgb(115, 192, 222)","rgb(250, 200, 88)"],
        title: {
          text: ""
        },
        tooltip: { //提示框
          trigger: "axis",
        },
        legend: {//图例的类型
          icon:"roundRect",//图例icon图标
          data: [
            {
              name:"食品类",
              textStyle: {
                color: "rgb(51, 51, 51)"
              }
            },{
              name:"服装类",
              textStyle: {
                color: "rgb(51, 51, 51)"
              }
            },{
              name:"鞋帽类",
              textStyle: {
                color: "rgb(51, 51, 51)"
              }
            },{
              name:"日用品类",
              textStyle: {
                color: "rgb(51, 51, 51)"
              }
            },{
              name:"家用电器类",
              textStyle: {
                color: "rgb(51, 51, 51)"
              }
            },
          ],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top:"17%",
          containLabel: true //grid区域是否包含坐标轴的刻度标签
        },
        xAxis: {
          type: "category", //坐标轴类型。
          boundaryGap: false, //坐标轴两边留白策略
          data: ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期天"],
          axisLabel: {//坐标轴刻度标签的相关设置
            interval:0,
            textStyle: {
            color: "rgb(51, 51, 51)",
            fontSize :10
            },
          },
          axisLine:{//坐标轴轴线相关设置
            show :true,
            lineStyle:{
              color:"rgb(110, 112, 121)"
            }
          },
          axisTick:{ //坐标轴刻度相关设置。
            show :false,
          }
        },
        yAxis: {
          type: "value",
          axisLabel: { //x轴的坐标文字
            show: true,
            textStyle: {
              color: "rgb(51, 51, 51)" //文字的颜色
            },
          },
          max:100,//最大值100
          axisLine:{//坐标轴轴线相关设置
            show :true,
            lineStyle:{
              color:"rgb(110, 112, 121)"
            }
          },
          axisTick:{ //坐标轴刻度相关设置。
              show :false,
          },
          splitLine:{  //坐标在grid区域的分割线
            lineStyle: { //设置分割线的样式(图表横线颜色)
              color: ["rgb(224, 230, 241)"]
            }
          }
        },
        series: [
          {
            name: "食品类",
            type: "line",
            data: [28, 95, 23, 42, 24, 40, 16 ],
            lineStyle:{
              color:"rgb(255, 112, 112)"  //线的颜色
            }
          },
          {
            name: "服装类",
            type: "line",
            data: [32, 52, 99, 37, 15, 90, 38 ],
            lineStyle:{
              color:"rgb(92, 123, 217)" //线的颜色
            }
          },
          {
            name: "鞋帽类",
            type: "line",
            data: [31, 35, 48, 9, 45, 30, 8 ],
            lineStyle:{
              color:"rgb(145, 204, 117)" //线的颜色
            }
          },
          {
            name: "日用品类",
            type: "line",
            data: [8, 21, 88, 13, 22, 52, 14 ],
            lineStyle:{
              color:"rgb(126, 211, 244)" //线的颜色
            }
          },
          {
            name: "家用电器类",
            type: "line",
            data: [11, 18, 14, 8, 10, 2, 16 ],
            lineStyle:{
              color:"rgb(250, 200, 88)" //线的颜色
            }
          },
        ]
    }
    }
  },
  mounted(){
    this.headHeight()
    this.mycharts()
    // window.addEventListener('resize',this.headHeight)
  },
  methods:{
    mycharts(){
      let myChart =this.$echarts.init(this.$refs.charts,"macarons");
      myChart.setOption(this.option)
      //图表自适应
      window.addEventListener("resize",function(){
        myChart.resize()  // myChart 是实例对象
      })
    },
    headHeight(){
        this.piewidth = window.innerWidth*0.26+'px';
        this.pieheight = window.innerHeight*0.4+'px';
        this.getpieECharts();
    },
    getpieECharts() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("pie"), null, {
        width: this.piewidth,
        height: this.pieheight,
      });
      // 绘制图表
      myChart.setOption({
        tooltip: {trigger: 'item'},
        legend: { //图例
          orient: 'vertical',
          left: 'left'
        },
        color:['#5c7bd9', '#91cc75', '#fac858','#f56a6a','#73c0de'],
        series: [
          {
            name: '访客来源',
            type: 'pie',
            radius: '60%',
            data: [
              { value: 848, name: '直接访问' },
              { value: 735, name: '联盟广告' },
              { value: 580, name: '视频广告' },
              { value: 484, name: '搜索引擎' },
              { value: 357, name: '邮件营销' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ],
      });
      //防抖
      let timer;
      window.onresize = function () {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          myChart.resize();
        }, 500);
      };
    },
  }
}
</script>

<style scoped lang="less">
.target{
  float: left;
  width: 31%;
  height: auto;
  margin: 1% 0 0 1%;
}
.left{
  float: left;
  width: 67%;
}
.text {
  font-size: 14px;
}
.item {
  padding: 18px 0;
}
.box-card {
  width: 480px;
}
.Analyse{
  overflow: hidden;
  // margin-left: 20px;
}
.pie_chart{
  float: left;
  width: 31%;
  height: auto;
  margin: 0 0 0 1%;
}
.proCharts{
  width: 100%;
  height: 400px;
  background: rgb(255, 255, 255);
}
.line_chart{
  width: 99.5%;
}
.collapse{
  width: 30%;
  border-radius: 5px;
  height: 200px;
  float: left;
  margin-left: 1%;
  margin: 20px;
}
.statistical{
  width: 97%;
  text-align: left;
  padding: 30px;
  padding-right: 0px;
  float: left;
  h1{
    font-size: 30px;
    padding: 0;
  }
  h2{
    margin: 10px;
  }
  h3{
    margin: 9px;
  }
  span{
    font-size: 25px;
    color: #ff9800;
  }
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #e5e9f2;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  overflow: hidden;
  text-align: center;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>