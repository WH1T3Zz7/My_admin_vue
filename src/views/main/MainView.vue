<!-- 

主页

-->

<template>
  <div class="Carouselchart">
    <!-- 轮播图 -->
    <div class="cycle">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="(item,index) in ImgSrc" :key="index">
          <img :src="item.url"  class="cycle"/>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 动态 -->
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>动态</span>
      </div>
      <div v-for="(item,index) in dynamicsrc" :key="index" class="text item">
        <div class="dynamic">
          <img :src="item.url">
          <div class="name">
            <span>{{item.dynamicname}}</span>
          </div>
          <span>{{item.time}}</span>
        </div>
      </div>
    </el-card>
    <div class="chart" style="height: 100px;">
      <!-- <div class="card-panel">
        <div class="icon-people">
          
        </div>
      </div> -->
      <el-row :gutter="20">
        <el-col :span="5">
          <div class="grid-content bg-purple" v-on:mouseover="touchi(1)" v-on:mouseout="leavei(1)">
            <i class="el-icon-user-solid HomeIcon" id="toichi1" style="background-color: #eeeeee;color:#2d8cf0;"></i>
            <div class="toichiinfo">
              <span style="font-size:16px;font-weight: 600;">新增用户</span>
              <span>89,00</span>
            </div>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="grid-content bg-purple" v-on:mouseover="touchi(2)" v-on:mouseout="leavei(2)">
            <i class="el-icon-s-goods HomeIcon" id="toichi2" style="background-color: #eeeeee;color:#f25d42;"></i>
            <div class="toichiinfo">
              <span style="font-size:16px;font-weight: 600;">新增商品</span>
              <span>6,700</span>
            </div>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="grid-content bg-purple" v-on:mouseover="touchi(4)" v-on:mouseout="leavei(4)">
            <i class="el-icon-s-finance HomeIcon" id="toichi4" style="background-color: #eeeeee;color:#f4516c"></i>
            <div class="toichiinfo">
              <span style="font-size:16px;font-weight: 600;">交易金额</span>
              <span>78,000</span>
            </div>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="grid-content bg-purple" v-on:mouseover="touchi(3)" v-on:mouseout="leavei(3)">
            <i class="el-icon-s-order HomeIcon" id="toichi3" style="background-color: #eeeeee;color:#64d572;"></i>
            <div class="toichiinfo">
              <span style="font-size:16px;font-weight: 600;">处理订单</span>
              <span>2,47</span>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div ref="chart1" class="chart" style="top:95%"></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      ImgSrc:[
        { url: require('/src/assets/Home/1.jpeg') },
        { url: require('/src/assets/Home/2.jpeg') },
        { url: require('/src/assets/Home/3.jpeg') },
        { url: require('/src/assets/Home/4.jpeg') },
      ],
      dynamicsrc:[
        { url: require('/src/assets/avata/avatar1.jpg'), dynamicname:'钢铁侠', time:'News released 2 hours ago'},
        { url: require('/src/assets/avata/avatar2.jpg'), dynamicname:'美国队长', time:'Released 9 hours ago'},
        { url: require('/src/assets/avata/avatar3.jpg'), dynamicname:'蜘蛛侠', time:'Released 10 hours ago'},
        { url: require('/src/assets/avata/avatar4.jpg'), dynamicname:'蝙蝠侠', time:'Released 32 hours ago'},
        { url: require('/src/assets/avata/avatar5.jpg'), dynamicname:'超人', time:'Two day release'},
        { url: require('/src/assets/avata/avatar6.jpg'), dynamicname:'绿巨人', time:'An update was released three days ago'},
      ],
    }
  },
  methods:{
    touchi(val){
      if (val == 1) {
        document.getElementById('toichi1').style.background = '#2d8cf0'
        document.getElementById('toichi1').style.color = '#eeeeee'
      }else if(val == 2){
        document.getElementById('toichi2').style.background = '#f25d42'
        document.getElementById('toichi2').style.color = '#eeeeee'
      }else if(val == 3){
        document.getElementById('toichi3').style.background = '#64d572'
        document.getElementById('toichi3').style.color = '#eeeeee'
      }else if(val == 4){
        document.getElementById('toichi4').style.background = '#f4516c'
        document.getElementById('toichi4').style.color = '#eeeeee'
      }
    },
    leavei(val){
      if (val == 1) {
        document.getElementById('toichi1').style.background = '#eeeeee'
        document.getElementById('toichi1').style.color = '#2d8cf0'
      }else if(val == 2){
        document.getElementById('toichi2').style.background = '#eeeeee'
        document.getElementById('toichi2').style.color = '#f25d42'
      }else if(val == 3){
        document.getElementById('toichi3').style.background = '#eeeeee'
        document.getElementById('toichi3').style.color = '#64d572'
      }else if(val == 4){
        document.getElementById('toichi4').style.background = '#eeeeee'
        document.getElementById('toichi4').style.color = '#f4516c'
      }
    },
    getEchartData() {
        const chart1 = this.$refs.chart1
        if (chart1) {
          const myChart = this.$echarts.init(chart1)
          const option = {
            title: {
              text: 'Stacked Line'
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            toolbox: {
              feature: {
                saveAsImage: {}
              }
            },
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月','八月','九月','十月','十一月','十二月']
            },
            yAxis: {
              type: 'value'
            },
            series: [
              {
                name: 'Email',
                type: 'line',
                stack: 'Total',
                data: [120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230]
              },
              {
                name: 'Union Ads',
                type: 'line',
                stack: 'Total',
                data: [220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330]
              },
              {
                name: 'Video Ads',
                type: 'line',
                stack: 'Total',
                data: [150, 232, 201, 154, 190, 330, 410,150, 232, 201, 154, 190, 330]
              },
              {
                name: 'Direct',
                type: 'line',
                stack: 'Total',
                data: [320, 332, 301, 334, 390, 330, 320,320, 332, 301, 334, 390, 330]
              },
              {
                name: 'Search Engine',
                type: 'line',
                stack: 'Total',
                data: [820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290, 1330]
              }
            ]

          }
          myChart.setOption(option)
          window.addEventListener("resize", function() {
            myChart.resize()
          })
        }
        // this.$on('hook:destroyed',()=>{
        //   window.removeEventListener("resize", function() {
        //     myChart.resize();
        //   });
        // })
      },
    },
  mounted(){
    this.getEchartData()
  }
}
</script>

<style lang="less" scoped>
.HomeIcon{
  font-size: 50px;
  float: left;
  padding: 10px;
}
.chart{
  width: 60%;
  margin-left: 0%;
  height: 376px;
  float: left;
  position: absolute;
  top: 80%;
}
.dynamic{
  width: 100%;
  height: 150px;
  background-color: #eeeeee;
  text-align: left;
  padding: 5px;
  border-radius: 5px;
}
.dynamic img{
  width: 50px;
  float: left;
}
.dynamic span{
  float: left;
  margin-left: 10px;
  margin-bottom: 5px;
}
.name{
  width: 22%;
  overflow: hidden;
}
.Carouselchart{
  overflow: hidden;
  background-color: #ffffff;
  padding: 20px;
  width: 97%;
}
.cycle{
  width: 67%;
  height: 100%;
  float: left;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
/deep/.el-carousel__item{
  width: 150%;
}
/deep/.el-carousel__container{
  height: 600px;
}
.text {
  font-size: 14px;
}
.item {
  margin-bottom: 18px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix{
  text-align: left;
  font-size: 18px;
}
.clearfix:after {
  clear: both
}
.box-card {
  float:left;
  width:30%;
  margin-left: 2%;
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
  background: #eee;
  text-align: left;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  overflow: hidden;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.toichiinfo{
  float: left;
  margin: 10px;
  margin-right: 10px;
  font-size: 18px;
  line-height: 18px;
  color: rgba(0,0,0,.45);
  font-weight: 600;
  margin-left: 15%;
}
.toichiinfo span{
  width: 100%;
  display: block;
  margin-top: 5px;
}
</style>