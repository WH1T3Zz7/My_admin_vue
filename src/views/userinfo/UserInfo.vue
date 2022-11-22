<template>
  <div class="User">
    <!-- 用户名片 -->
    <el-card class="box-card business">
      <div slot="header" class="clearfix">
        <h1 style="margin:0;text-align: left;">个人信息</h1>
      </div>
      <div class="xwc">
        <img src="@/assets/img/xwc.jpg" alt="" style="width:100%;">
      </div>
      <img :src="imgurl" style="width: 78px;float: left;margin-top: 14px;margin: 15px 20px 0 0;border-radius: 8px;">
      <div class="UserInfo">
        <h1>您好,admin,休息一会吧！</h1>
        <p>Java工程师 | 蚂蚁金服-计算服务事业群-微信平台部</p>
      </div>
      <div class="Skills">
        VUE
        <el-progress :percentage="70"></el-progress>
        JavaScript
        <el-progress :percentage="18"></el-progress>
        Css
        <el-progress :percentage="12"></el-progress>
        ESLint
        <el-progress :percentage="100" status="success"></el-progress>
      </div>
    </el-card>
    <!-- 团队 -->
    <el-card class="box-card team">
      <div slot="header" class="clearfix" style="overflow:hidden">
        <h1 style="margin:0px;float:left">团队</h1>
      </div>
      <el-row>
        <el-col :span="8"><div class="grid-content bg-purple teamInfo">
          <img src="@/assets/img/app/APPC.png" alt="APPC">
          <p>复仇者联盟</p>
        </div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple-light">
          <img src="@/assets/img/app/dingtalk.png" alt="DingTalk">
          <p>塔斯克工业</p>
        </div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple">
          <img src="@/assets/img/app/QQ.png" alt="QQ">
          <p>奥创科技</p>
        </div></el-col>
      </el-row>
      <el-row style="margin-top:20px">
        <el-col :span="8"><div class="grid-content bg-purple">
          <img src="@/assets/img/app/steam.png" alt="Steam">
          <p>瓦坎达军团</p>
        </div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple-light">
          <img src="@/assets/img/app/taobao.png" alt="taobao">
          <p>神盾局</p>
        </div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple">
          <img src="@/assets/img/app/WeChatSetup.png" alt="WeChatSetup">
          <p>阿斯加德</p>
        </div></el-col>
      </el-row>
    </el-card>
    <!-- 进行中的项目 -->
    <el-card class="box-card OngoingDemo" style="padding:0px" :body-style="{padding:'0px'}">
      <div slot="header" class="clearfix">
        <div slot="header" class="clearfix" style="overflow: hidden;">
          <h1 style="margin:0;float: left;">进行中的项目</h1>
          <el-button style="float: right; padding: 3px 0" type="text">全部项目</el-button>
        </div>
      </div>
      <el-row>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-card shadow="hover" class="demoinfo">
              <div class="DemoinfoHeader">
                <img src="@/assets/img/app/APPC.png" alt="APPC">
                <span>APPC</span>
              </div>
              <div class="DemoinfoMain">
                那是一种内在的东西， 他们到达不了，也无法触及的 
              </div>
              <div class="Demoinfobottom">
                <span>复仇者联盟</span>
                <time>刚刚</time>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple-light">
            <el-card shadow="hover" class="demoinfo">
              <div class="DemoinfoHeader">
                <img src="@/assets/img/app/dingtalk.png" alt="dingtalk">
                <span>DingTalk</span>
              </div>
              <div class="DemoinfoMain">
                希望是一个好东西，也许是最好的，好东西是不会消亡的  
              </div>
              <div class="Demoinfobottom">
                <span>塔斯克工业</span>
                <time>3个小时前</time>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-card shadow="hover" class="demoinfo">
              <div class="DemoinfoHeader">
                <img src="@/assets/img/app/QQ.png" alt="QQ">
                <span>QQ</span>
              </div>
              <div class="DemoinfoMain">
                城镇中有那么多的酒馆，她却偏偏走进了我的酒馆
              </div>
              <div class="Demoinfobottom">
                <span>奥创科技</span>
                <time>7个小时前</time>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-card shadow="hover" class="demoinfo">
              <div class="DemoinfoHeader">
                <img src="@/assets/img/app/steam.png" alt="steam">
                <span>Steam</span>
              </div>
              <div class="DemoinfoMain">
                那是一种内在的东西， 他们到达不了，也无法触及的 
              </div>
              <div class="Demoinfobottom">
                <span>瓦坎达军团</span>
                <time>一天前</time>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple-light">
            <el-card shadow="hover" class="demoinfo">
              <div class="DemoinfoHeader">
                <img src="@/assets/img/app/taobao.png" alt="taobao">
                <span>TaoBao</span>
              </div>
              <div class="DemoinfoMain">
                生命就像一盒巧克力，结果往往出人意料 
              </div>
              <div class="Demoinfobottom">
                <span>神盾局</span>
                <time>两天前</time>
              </div>
            </el-card>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <el-card shadow="hover" class="demoinfo">
              <div class="DemoinfoHeader">
                <img src="@/assets/img/app/WeChatSetup.png" alt="WeChatSetup">
                <span>WeChatSetup</span>
              </div>
              <div class="DemoinfoMain">
                太阳不会因为你的失意，明天不再升起。
              </div>
              <div class="Demoinfobottom">
                <span>阿斯加德</span>
                <time>三天前</time>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <!-- 动态 -->
    <el-card class="box-card dynamic">
      <div slot="header" class="clearfix">
        <span><h1 style="margin:0px">动态</h1></span>
      </div>
      <div class="dynamicInfo">
        <img src="@/assets/avata/avatar1.jpg" alt="">
        <span>@杠铁侠</span>在
        <span style="color:#66b1ff;cursor:pointer;margin: 0px;">塔斯克工业</span>
        <span>更新</span>
        <span style="color:#66b1ff;cursor:pointer;margin: 0px;">番组计划</span>
        <p>2022/10/24  11:30:57</p>
      </div>
      <div class="dynamicInfo">
        <img src="@/assets/avata/avatar2.jpg" alt="">
        <span>@对胀</span>在
        <span style="color:#66b1ff;cursor:pointer;margin: 0px;">复仇者联盟</span>
        <span>更新</span>
        <span style="color:#66b1ff;cursor:pointer;margin: 0px;">优化项目</span>
        <p>2022/10/24  11:30:57</p>
      </div>
      <div class="dynamicInfo">
        <img src="@/assets/avata/avatar3.jpg" alt="">
        <span>@只猪霞</span>在
        <span style="color:#66b1ff;cursor:pointer;margin: 0px;">奥创科技</span>
        <span>更新</span>
        <span style="color:#66b1ff;cursor:pointer;margin: 0px;">版本迭代</span>
        <p>2022/10/24  11:30:57</p>
      </div>
      <div class="dynamicInfo">
        <img src="@/assets/avata/avatar4.jpg" alt="">
        <span>@鞭福峡</span>在
        <span style="color:#66b1ff;cursor:pointer;margin: 0px;">瓦坎达军团</span>
        <span>更新</span>
        <span style="color:#66b1ff;cursor:pointer;margin: 0px;">项目需求</span>
        <p>2022/10/24  11:30:57</p>
      </div>
      <div class="dynamicInfo">
        <img src="@/assets/avata/avatar5.jpg" alt="">
        <span>@抄仁</span>在
        <span style="color:#66b1ff;cursor:pointer;margin: 0px;">神盾局</span>
        <span>更新</span>
        <span style="color:#66b1ff;cursor:pointer;margin: 0px;">修复BUG</span>
        <p>2022/10/24  11:30:57</p>
      </div>
      <div class="dynamicInfo">
        <img src="@/assets/avata/avatar6.jpg" alt="">
        <span>@率距人</span>在
        <span style="color:#66b1ff;cursor:pointer;margin: 0px;">阿斯加德</span>
        <span>更新</span>
        <span style="color:#66b1ff;cursor:pointer;margin: 0px;">测试结果</span>
        <p>2022/10/24  11:30:57</p>
      </div>
    </el-card>
  </div>
</template>

<script>
import userimgurl from '@/components/Header/userimgurl'
export default {
  data(){
    return{
      imgurl:''
    }
  },
  mounted(){
    console.log(userimgurl)
    this.imgurl = require('@/assets/avata/avatar' + userimgurl + '.jpg')
  }
}
</script>

<style lang="less" scoped>
.demoinfo{
  border-radius: unset;
}
.business{
  width: 30%;
  float: left;
}
.OngoingDemo{
  float: left;
  width: 40%;
  margin-left: 1%;
  margin-right: 1%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 600px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
/deep/.el-carousel__container {
  height: 600px;
}
/deep/.el-carousel__item h3 {
  height: 600px;
}
.User{
  overflow: hidden;
}
.UserInfo{
  text-align: left;
  border-bottom: 1px solid #EBEEF5;
  padding: 10px;
}
.Skills{
  text-align: left;
  margin: 10px;
}
.DemoinfoHeader{
  width: 100%;
  height: 30px;
}
.DemoinfoHeader img{
  width: 30px;
  float: left;
}
.DemoinfoHeader span{
  margin: 5px 0 0 15px;
  float: left;
  cursor:pointer;
}
.DemoinfoHeader span:hover{
  color: #66b1ff;
}
.DemoinfoMain{
  width: 100%;
  height: 40px;
  text-align: left;
  color: #8c8c8c;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 10px;
}
.Demoinfobottom{
  width: 100%;
  height: 20px;
}
.Demoinfobottom span{
  color: #8c8c8c;
  cursor:pointer;
  float: left;
}
.Demoinfobottom span:hover{
  color: #66b1ff;
}
.Demoinfobottom time{
  color: #d2bfd2;
  float: right;
}
.dynamic{
  width: 27%;
}
.dynamicInfo{
  width: 95%;
  padding: 5px;
  padding-top: 20px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #ebeef5;
  text-align: left;
}
.dynamicInfo img{
  width: 30px;
  border-radius: 8px;
  float: left;
}
.dynamicInfo span{
  margin: 10px;
}
.dynamicInfo p{
  margin: 20px 0px 10px 40px;
  color:rgba(0,0,0,.45);
}
.team{
  width: 40%;
  margin-left: 1%;
  float: left;
  margin-bottom: 1%;
}
.team img{
  width: 36px;
  float: left;
}
.team p{
  margin-top: 6px;
  margin-left: 10px;
  float: left;
}
.teamInfo{
  text-align: left;
}
</style>
