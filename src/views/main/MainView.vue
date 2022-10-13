<template>
  <div id="main">
    <!--轮播图-->
    <div v-if="imgList.length > 0" id="Shuffling">
      <el-carousel height="400px">
        <el-carousel-item v-for="(item, index1) in imgList" :key="index1" :autoplay="false">
          <el-image style="width: 75%; height: 100%" :src="item" :preview-src-list="imgList"> </el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div v-else class="item-card none-img">暂无照片！</div>
    <el-divider direction="vertical"></el-divider>
    <!--新闻列表 -->
    <el-collapse accordion>
      <el-collapse-item>
        <template slot="title"> 一致性 Consistency </template>
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </el-collapse-item>
      <el-collapse-item title="反馈 Feedback">
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </el-collapse-item>
      <el-collapse-item title="效率 Efficiency">
        <div>简化流程：设计简洁直观的操作流程；</div>
        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
      </el-collapse-item>
      <el-collapse-item title="可控 Controllability">
        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
      </el-collapse-item>
    </el-collapse>
    <!-- 数据可视化 -->
    <div id="datavisualization">
      <div style="width: 900px; height: 500px; float: left" ref="chart"></div>
    </div>
    <!-- 日历 -->
    <el-calendar :range="['2022-01-01', '2022-12-31']"> </el-calendar>
    <!-- 时间戳 -->
    <div class="block" style="float: left">
      <el-timeline>
        <el-timeline-item timestamp="2018/4/12" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/12 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/3" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/3 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/2" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/2 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/3/17" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/3/17 8:56</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: new Date()
    }
  },
  name: 'AttributeTable',
  props: {
    imgList: {
      type: Array,
      default: () => {
        return [
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg95.699pic.com%2Fdesgin_photo%2F40118%2F5785_list.jpg&refer=http%3A%2F%2Fimg95.699pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664012877&t=0412ea57fa8fbbf35afc0bf692b88d23',
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.zhuang520.com%2Fd%2Ffile%2Fpictrue%2F2018-08-31%2Ff551e6a35569237b6034380435e2ea7d.jpg&refer=http%3A%2F%2Fwww.zhuang520.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664012877&t=4e484cfc8dc4caa863d6d0df7c94611a',
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.phosion.cn%2Fuploadfiles%2Fimage%2F201812%2F3.jpg&refer=http%3A%2F%2Fwww.phosion.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664013486&t=1e2286f6f6471b96f867fd792e501536',
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbkimg.cdn.bcebos.com%2Fpic%2Ff9dcd100baa1cd1155f5d18bb112c8fcc2ce2ddd&refer=http%3A%2F%2Fbkimg.cdn.bcebos.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664013591&t=5ef6e046aee5dad7f940c8af545cec9c'
        ]
      }
    }
  },
  methods: {
    initCharts() {
      const myChart = this.$echarts.init(this.$refs.chart)
      // console.log(this.$refs.chart)
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Direct',
            type: 'bar',
            emphasis: {
              focus: 'series'
            },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: 'Email',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Union Ads',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Video Ads',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'Search Engine',
            type: 'bar',
            data: [862, 1018, 964, 1026, 1679, 1600, 1570],
            emphasis: {
              focus: 'series'
            },
            markLine: {
              lineStyle: {
                type: 'dashed'
              },
              data: [[{ type: 'min' }, { type: 'max' }]]
            }
          },
          {
            name: 'Baidu',
            type: 'bar',
            barWidth: 5,
            stack: 'Search Engine',
            emphasis: {
              focus: 'series'
            },
            data: [620, 732, 701, 734, 1090, 1130, 1120]
          },
          {
            name: 'Google',
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 290, 230, 220]
          },
          {
            name: 'Bing',
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
              focus: 'series'
            },
            data: [60, 72, 71, 74, 190, 130, 110]
          },
          {
            name: 'Others',
            type: 'bar',
            stack: 'Search Engine',
            emphasis: {
              focus: 'series'
            },
            data: [62, 82, 91, 84, 109, 110, 120]
          }
        ]
      })
    }
  },
  mounted() {
    this.initCharts()
  }
}
</script>

<style lang="less" scoped>
.switchtype {
  float: left;
  margin-left: 30px;
}
#main {
  background-color: #ffffff;
  padding: 100px 20px 30px 0;
  overflow: hidden;
}
#Shuffling {
  width: 50%;
  float: left;
  margin-bottom: 5%;
}
.item-card {
  height: 150px;
  width: 100%;
  cursor: pointer;
}
.none-img {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #dcdfe6;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 600px;
  margin: 0;
}
/deep/.el-divider {
  background-color: #2c3e50;
  float: left;
  height: 26rem;
  margin-top: -10px;
  margin-right: 80px;
}
/deep/.el-carousel__indicators--horizontal {
  line-height: 60px;
}
/deep/.el-carousel__container {
  height: 600px;
}
/deep/.el-carousel__item h3 {
  height: 600px;
}
/deep/.el-carousel__arrow--left {
  left: 5%;
}
/deep/.el-carousel__arrow--right {
  right: 5%;
}
/deep/.el-collapse {
  border-top: 0px solid #ebeef5;
  border-bottom: 0px solid #ebeef5;
  float: right;
  width: 45%;
  height: 400px;
  margin-bottom: 5%;
}
/deep/.el-card {
  line-height: 5px;
}
/deep/.el-calendar {
  line-height: 0px;
  width: 32%;
  float: left;
}
/deep/.el-calendar-day {
  height: 65px;
}
.el-calendar-day {
  height: 65px;
}
</style>
