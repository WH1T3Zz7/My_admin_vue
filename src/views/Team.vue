<!-- 团队 -->
<template>
  <div class="Team">
    <el-row :gutter="20">
      <el-col :span="8" style="margin-bottom:50px">
        <div class="grid-content bg-purple">
          <el-card shadow="hover">
            <div class="team-top">
              <el-avatar :size="imgsize" style="float: left;"><img src="@/assets/img/app/APPC.png"></el-avatar>
              <el-divider direction="vertical"></el-divider>
              <p class="team-top-p" style="margin-top:7px">富仇者联盟</p>
              <p class="team-top-p" style="font-size:20px;margin-top:13px">APPC</p>
            </div>
            <div class="team-bottom">
              <p class="team-bottom-p">&nbsp;&nbsp;&nbsp;&nbsp;每个人都会有技不如人寄人篱下的时候，不要自惭，也不必自卑，我们都是凡人，夹杂在人流中，过的是平凡的生活。当被别人忽略笑话非议陷害的时候，要学会把握自己的节奏，只要内心不乱，外界就很难改变你什么。不要艳羡他人，谁都有苦痛;不要输掉自己，振作比一切都强。</p>
            </div>
            <el-link style="float:right;margin-bottom:20px" @click="viewdetails('APPC')">查看详情<i class="el-icon-view el-icon--right"></i> </el-link>
          </el-card>
        </div>
      </el-col>
      <el-col :span="8" style="margin-bottom:50px">
        <div class="grid-content bg-purple">
          <el-card shadow="hover">
            <div class="team-top">
              <el-avatar :size="imgsize" style="float: left;"><img src="@/assets/img/app/dingtalk.png" style="background:#fff;"></el-avatar>
              <el-divider direction="vertical"></el-divider>
              <p class="team-top-p" style="margin-top:7px">斯塔克工业</p>
              <p class="team-top-p" style="font-size:20px;margin-top:13px">DingTalk</p>
            </div>
            <div class="team-bottom">
              <p class="team-bottom-p">&nbsp;&nbsp;&nbsp;&nbsp;我们说过的话做过的事，走过的路遇过的人，每一个现在都是我们以后的回忆，无须缅怀昨天不必奢望明天，只要认真过好每个今天，说能说的话做可做的事，走该走的路见想见的人，脚踏实地不虚度继续唱着歌前行，快乐悲伤都要记得，就算心碎也要拥有最美的姿态。</p>
            </div>
            <el-link style="float:right;margin-bottom:20px" @click="viewdetails('DingTalk')">查看详情<i class="el-icon-view el-icon--right"></i> </el-link>
          </el-card>
        </div>
      </el-col>
      <el-col :span="8" style="margin-bottom:50px">
        <div class="grid-content bg-purple">
          <el-card shadow="hover">
            <div class="team-top">
              <el-avatar :size="imgsize" style="float: left;"><img src="@/assets/img/app/QQ.png" style="background:#fff" ></el-avatar>
              <el-divider direction="vertical"></el-divider>
              <p class="team-top-p" style="margin-top:7px">奥创科技</p>
              <p class="team-top-p" style="font-size:20px;margin-top:13px">QQ</p>
            </div>
            <div class="team-bottom">
              <p class="team-bottom-p">&nbsp;&nbsp;&nbsp;&nbsp;生活放轻松一些，过些时候，再去重新找一个正确的方向，再去努力。最近这些天，你不妨找点自己喜欢的事情做做，把烦恼写在日记上。等过一阵之后，你会发现，那失败的痛楚已经逐渐痊愈，那时你会有新的勇气和力量去为自己开拓新的前程。</p>
            </div>
            <el-link style="float:right;margin-bottom:20px" @click="viewdetails('QQ')">查看详情<i class="el-icon-view el-icon--right"></i> </el-link>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8" style="margin-bottom:50px">
        <div class="grid-content bg-purple">
          <el-card shadow="hover">
            <div class="team-top">
              <el-avatar :size="imgsize" style="float: left;"><img src="@/assets/img/app/steam.png" style="background:#fff;"></el-avatar>
              <el-divider direction="vertical"></el-divider>
              <p class="team-top-p" style="margin-top:7px">瓦坎达军团</p>
              <p class="team-top-p" style="font-size:20px;margin-top:13px">steam</p>
            </div>
            <div class="team-bottom">
              <p class="team-bottom-p">&nbsp;&nbsp;&nbsp;&nbsp;在我们生命当中，我们每一个人都有仅仅属于自己的东西，我们没有必要一味地瞧着别人的财富与飞黄腾达而羡慕不已，因为真正的快乐，与金钱和其它外在的评判准则无关，它是来自内心的，来自你对于自身所拥有物的满足，和对生命的依恋。</p>
            </div>
            <el-link style="float:right;margin-bottom:20px" @click="viewdetails('steam')">查看详情<i class="el-icon-view el-icon--right"></i> </el-link>
          </el-card>
        </div>
      </el-col>
      <el-col :span="8" style="margin-bottom:50px">
        <div class="grid-content bg-purple">
          <el-card shadow="hover">
            <div class="team-top">
              <el-avatar :size="imgsize" style="float: left;"><img src="@/assets/img/app/taobao.png" style="background:#fff;"></el-avatar>
              <el-divider direction="vertical"></el-divider>
              <p class="team-top-p" style="margin-top:7px">神盾局</p>
              <p class="team-top-p" style="font-size:20px;margin-top:13px">TaoBao</p>
            </div>
            <div class="team-bottom">
              <p class="team-bottom-p">&nbsp;&nbsp;&nbsp;&nbsp;人生的路上，不一定处处都能如愿，保持一份内心的平淡，虽然有些东西放下会有些难，但我们必须面对这种得失的斑驳。有拥有，就有失去，多一份谦让，还自己一份心宽。无所谓失去，而只是经过而已;亦无所谓失败，而只是经验而已。</p>
            </div>
            <el-link style="float:right;margin-bottom:20px" @click="viewdetails('TaoBao')">查看详情<i class="el-icon-view el-icon--right"></i> </el-link>
          </el-card>
        </div>
      </el-col>
      <el-col :span="8" style="margin-bottom:50px">
        <div class="grid-content bg-purple">
          <el-card shadow="hover">
            <div class="team-top">
              <el-avatar :size="imgsize" style="float: left;"><img src="@/assets/img/app/WeChatSetup.png" style="background:#fff;"></el-avatar>
              <el-divider direction="vertical"></el-divider>
              <p class="team-top-p" style="margin-top:7px">阿斯加德</p>
              <p class="team-top-p" style="font-size:20px;margin-top:13px">WeChatSetup</p>
            </div>
            <div class="team-bottom">
              <p class="team-bottom-p">&nbsp;&nbsp;&nbsp;&nbsp;人生在世如身处荆棘之中，心不动，人不妄动，不动则不伤;如心动则人妄动，伤其身痛其骨，于是体会到世间诸般痛苦。我们日复一日地写下自身的命运，因为我们的所为，毫不留情地决定我们的命运。我相信这就是人生的最高逻辑和法则。</p>
            </div>
            <el-link style="float:right;margin-bottom:20px" @click="viewdetails('WeChatSetup')">查看详情<i class="el-icon-view el-icon--right"></i> </el-link>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-dialog
      :title="dialogTitle"
      :visible.sync="Isviewdetails"
      width="60%"
      :before-close="handleClose">
      <APPC v-if="APPCDetailsdialog"></APPC>
      <DingTalk v-if="DingTalkDetailsdialog"></DingTalk>
      <QQ v-if="QQDetailsdialog"></QQ>
      <steam v-if="steamDetailsdialog"></steam>
      <TaoBao v-if="TaoBaoDetailsdialog"></TaoBao>
      <WeChatSetup v-if="WeChatSetupDetailsdialog"></WeChatSetup>
      <span slot="footer" class="dialog-footer">
        <el-button @click="Isviewdetails = false">取 消</el-button>
        <el-button type="primary" @click="Isviewdetails = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import APPC from '@/views/components/Team/APPC.vue'
import DingTalk from '@/views/components/Team/DingTaIk.vue'
import QQ from '@/views/components/Team/QQ.vue'
import steam from '@/views/components/Team/steam.vue'
import TaoBao from '@/views/components/Team/TaoBao.vue'
import WeChatSetup from '@/views/components/Team/WeChatSetup.vue'
export default {
  components:{
    APPC,DingTalk,QQ,steam,TaoBao,WeChatSetup
  },
  data(){
    return{
      APPCDetailsdialog:false,
      DingTalkDetailsdialog:false,
      QQDetailsdialog:false,
      steamDetailsdialog:false,
      TaoBaoDetailsdialog:false,
      WeChatSetupDetailsdialog:false,
      imgsize:45,
      Isviewdetails:false,  //查看详情弹窗
      dialogTitle:'', //弹窗标题
    }
  },
  methods:{
    viewdetails(val){
      this.Isviewdetails = true
      this.APPCDetailsdialog = false
      this.DingTalkDetailsdialog = false
      this.QQDetailsdialog = false
      this.steamDetailsdialog = false
      this.TaoBaoDetailsdialog = false
      this.WeChatSetupDetailsdialog = false
      if (val == 'APPC') {
        this.dialogTitle = '富仇者联盟'
        this.APPCDetailsdialog = true
      }else if(val == 'DingTalk'){
        this.dialogTitle = '斯塔克工业'
        this.DingTalkDetailsdialog = true
      }else if(val == 'QQ'){
        this.dialogTitle = '奥创科技'
        this.QQDetailsdialog = true
      }else if(val == 'steam'){
        this.dialogTitle = '瓦坎达军团'
        this.steamDetailsdialog = true
      }else if(val == 'TaoBao'){
        this.dialogTitle = '神盾局'
        this.TaoBaoDetailsdialog = true
      }else if(val == 'WeChatSetup'){
        this.dialogTitle = '阿斯加德'
        this.WeChatSetupDetailsdialog = true
      }
    },
    handleClose(){
      this.Isviewdetails = false
    },
  }
}
</script>

<style lang="less" scoped>
.Team{
  margin-right: 1%;
  .team-top{
    width: 100%;
    height: 45px;
    text-align: left;
  }
  .team-top-p{
    font-size: 25px;
    font-weight: 100;
    margin-left: 20px;
    float: left;
    margin-top: 10px;
  }
  .team-bottom{
    text-align: left;
  }
  .team-bottom-p{
    border-top-width: 1px;
    border-top-style: solid;
    padding-top: 15px;
    font-size: 16px;
    line-height: 30px;
  }
}
.el-divider--vertical{
  height: 100%;
  vertical-align: baseline;
  float: left;
}
</style>