<!-- 

主页

-->

<template>
  <div class="Carouselchart">
    <el-row :gutter="50">
      <el-col :span="18">
        <div class="grid-content bg-purple-dark">
          <el-row>
            <el-col :span="24" style="margin-bottom:20px">
              <div class="grid-content bg-purple-dark">
                <!-- 轮播图 -->
                <div class="cycle">
                  <el-carousel :interval="5000" arrow="always">
                    <el-carousel-item v-for="(item,index) in ImgSrc" :key="index">
                      <img :src="item.url"  class="cycle"/>
                    </el-carousel-item>
                  </el-carousel>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24" style="margin-bottom:20px">
              <div class="grid-content bg-purple-dark">
                <el-col :span="4">
                  <div class="grid-content bg-purple border" v-on:mouseover="touchi(1)" v-on:mouseout="leavei(1)">
                    <i class="el-icon-user-solid HomeIcon" id="toichi1" style="background-color: #fff;color:#2d8cf0;"></i>
                    <div class="toichiinfo">
                      <span style="font-size:16px;font-weight: 600;">新增用户</span>
                      <span>89,00</span>
                    </div>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="grid-content bg-purple border" v-on:mouseover="touchi(2)" v-on:mouseout="leavei(2)">
                    <i class="el-icon-s-goods HomeIcon" id="toichi2" style="background-color: #fff;color:#f25d42;"></i>
                    <div class="toichiinfo">
                      <span style="font-size:16px;font-weight: 600;">新增商品</span>
                      <span>6,700</span>
                    </div>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="grid-content bg-purple border" v-on:mouseover="touchi(4)" v-on:mouseout="leavei(4)">
                    <i class="el-icon-s-finance HomeIcon" id="toichi4" style="background-color: #fff;color:#f4516c"></i>
                    <div class="toichiinfo">
                      <span style="font-size:16px;font-weight: 600;">交易金额</span>
                      <span>78,000</span>
                    </div>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="grid-content bg-purple border" v-on:mouseover="touchi(3)" v-on:mouseout="leavei(3)">
                    <i class="el-icon-s-order HomeIcon" id="toichi3" style="background-color: #fff;color:#64d572;"></i>
                    <div class="toichiinfo">
                      <span style="font-size:16px;font-weight: 600;">处理订单</span>
                      <span>2,47</span>
                    </div>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="grid-content bg-purple border" v-on:mouseover="touchi(5)" v-on:mouseout="leavei(5)">
                    <i class="el-icon-share HomeIcon" id="toichi5" style="background-color: #fff;color:#e46cbb;"></i>
                    <div class="toichiinfo">
                      <span style="font-size:16px;font-weight: 600;">分享统计</span>
                      <span>6,57</span>
                    </div>
                  </div>
                </el-col>
                <el-col :span="4">
                  <div class="grid-content bg-purple border" v-on:mouseover="touchi(6)" v-on:mouseout="leavei(6)">
                    <i class="el-icon-box HomeIcon" id="toichi6" style="background-color: #fff;color:#40c9c6;"></i>
                    <div class="toichiinfo">
                      <span style="font-size:16px;font-weight: 600;">出库数量</span>
                      <span>1,254</span>
                    </div>
                  </div>
                </el-col>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24" style="margin-bottom:20px">
              <div class="grid-content bg-purple-dark border">
                <h1 style="margin:0px;background-color:#fff;padding-top: 10px;font-weight: 300;">每天访问数量</h1>
                <div id="map" style="width:100%;height:326px;background-color:#fff"></div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="6" style="padding:0px"><div class="grid-content bg-purple-light" >
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
      </div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data(){
    return{
      charts: "",
      opinionData: ["3", "2", "4", "4", "5"],
      ImgSrc:[
        { url: require('/src/assets/Home/1.jpeg') },
        { url: require('/src/assets/Home/2.jpeg') },
        { url: require('/src/assets/Home/3.jpeg') },
        { url: require('/src/assets/Home/4.jpeg') },
      ],
      dynamicsrc:[
        { url: require('/src/assets/avata/avatar1.jpg'), dynamicname:'杠铁侠', time:'News released 2 hours ago'},
        { url: require('/src/assets/avata/avatar2.jpg'), dynamicname:'对胀', time:'Released 9 hours ago'},
        { url: require('/src/assets/avata/avatar3.jpg'), dynamicname:'只猪霞', time:'Released 10 hours ago'},
        { url: require('/src/assets/avata/avatar4.jpg'), dynamicname:'鞭福峡', time:'Released 32 hours ago'},
        { url: require('/src/assets/avata/avatar5.jpg'), dynamicname:'抄仁', time:'Two day release'},
        { url: require('/src/assets/avata/avatar6.jpg'), dynamicname:'率距人', time:'An update was released three days ago'},
      ],
    }
  },
  methods:{
    getMap() {
      var myChart = this.$echarts.init(document.getElementById('map'))
      let option = {
        xAxis: {
          type: 'category',
          // data: this.dataX,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          boundaryGap: false, //控制日期是否在中间显示
          axisLabel: {
            show: true, //是否显示日期
            interval: 0, //强制显示全部 // rotate: 40,//倾斜的角度
            textStyle: {
              color: '#000', //日期的颜色
              fontSize: 12 //字体的大小
            }
          },
          axisLine: {
            lineStyle: {
              color: '#ccc' // x轴的颜色
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value}',
            textStyle: {
              color: '#000' //数字的颜色
            },
            inside: false //控制数据是否在内侧还是外侧显示
          },
          axisLine: {
            lineStyle: {
              color: '#ccc' // 折线的颜色
            }
          }
        },
        series: [
          {
            // data: this.dataY,
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            symbol: 'circle', //是否显示实心的折线圆点
            smooth: true, //让折线有弧度
            symbolSize: 7, //折线圆点的大小
            itemStyle: {
              normal: {
                color: '#efc883', //折线点的颜色
                lineStyle: {
                  color: '#efc883' //折线的颜色
                },
                label: { show: true } //是否在折线点上显示数字
              }
            }
          }
        ]
      }
      myChart.setOption(option)
    },
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
      }else if(val == 5){
        document.getElementById('toichi5').style.background = '#e46cbb'
        document.getElementById('toichi5').style.color = '#eeeeee'
      }else if(val == 6){
        document.getElementById('toichi6').style.background = '#40c9c6'
        document.getElementById('toichi6').style.color = '#eeeeee'
      }
    },
    leavei(val){
      if (val == 1) {
        document.getElementById('toichi1').style.background = '#fff'
        document.getElementById('toichi1').style.color = '#2d8cf0'
      }else if(val == 2){
        document.getElementById('toichi2').style.background = '#fff'
        document.getElementById('toichi2').style.color = '#f25d42'
      }else if(val == 3){
        document.getElementById('toichi3').style.background = '#fff'
        document.getElementById('toichi3').style.color = '#64d572'
      }else if(val == 4){
        document.getElementById('toichi4').style.background = '#fff'
        document.getElementById('toichi4').style.color = '#f4516c'
      }else if(val == 5){
        document.getElementById('toichi5').style.background = '#fff'
        document.getElementById('toichi5').style.color = '#e46cbb'
      }else if(val == 6){
        document.getElementById('toichi6').style.background = '#fff'
        document.getElementById('toichi6').style.color = '#40c9c6'
      }
    },
  },
  mounted(){
    this.getMap()
  }
}
</script>

<style lang="less" scoped>
.HomeIcon{
  font-size: 50px;
  float: left;
  padding: 10px;
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
  padding: 20px;
  width: 97%;
}
.cycle{
  width: 100%;
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
  width:96%;
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
.bg-purple {
  background: #fff;
  text-align: left;
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
.border{
  border: 1px solid #EBEEF5;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
</style>