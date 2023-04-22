<!-- 文章 -->
<template>
  <div class="Article">
    <div class="Article">
      <el-row>
        <el-col :span="1">
          <div class="grid-content bg-purple">
            <el-avatar shape="square" :size="50" :src="imgurl1"></el-avatar>
          </div>
        </el-col>
        <el-col :span="23" style="padding: 10px 10px 20px 20px;">
          <div class="AritcleTitle" @click="ViewDetails('gtx')">计算机技术的应用促进各个领域发展，加快了社会的发展。</div>
          <el-divider content-position="right"><div style="font-weight: 300;color: #4f4b4b;">关键字：计算机技术,社会发展,影响</div></el-divider>
          <div class="AritcleMain" style="font-size:15px;letter-spacing: 1.5px" @click="ViewDetails('gtx')">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 在知识经济时代参与下，资本的分配形式发生改变，不是以工作量与工作时间进行计算，而是以知识技术的参与度进行资产的分配，重视知识在生产过程中创造的价值，
            计算机技术的应用总体促进了社会发展，但也存在一定问题，从不同方面阐述计算机技术对社会发展的影响，希望为研究计算机技术应用的专家与学者提供理论参考。
          </div>
          <div class="ViewDetails">
            <span style="margin-right:100px">2022-11-23 15:00</span>
            <el-link @click="ViewDetails('gtx')">查看详情<i class="el-icon-view el-icon--right"></i></el-link>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="Article">
      <el-row>
        <el-col :span="1">
          <div class="grid-content bg-purple">
            <el-avatar shape="square" :size="50" :src="imgurl2"></el-avatar>
          </div>
        </el-col>
        <el-col :span="23" style="padding: 10px 10px 20px 20px;">
          <div class="AritcleTitle" @click="ViewDetails('cr')">计算机技术应用在社会发展过程存在的弊端。</div>
          <el-divider content-position="right"><div style="font-weight: 300;color: #4f4b4b;">关键词：计算机应用;发展现状;发展趋势</div></el-divider>
          <div class="AritcleMain" style="font-size:15px;letter-spacing: 1.5px" @click="ViewDetails('cr')">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 计算机技术的应用改变了社会，但人们应该积极面对相关问题，提出解决措施，但还是要积极应用计算机技术解决工作中的实际问题，我们必须正确应用计算机技术。
            计算机技术的使用不利于知识产权的保护,现在国家越来越重视知识产权的保护，侵权是一种违法行为,各行各业均已广泛使用到计算机技术，然而却加大了对知识产权的保护难度。
            计算机技术的使用不利于做好知识产权的保护工作,从经济角度分析，这将不利于文化的发展与社会的进步,降低个人隐私的安全程度。
          </div>
          <div class="ViewDetails">
            <span style="margin-right:100px">2022-11-23 15:00</span>
            <el-link @click="ViewDetails('cr')">查看详情<i class="el-icon-view el-icon--right"></i> </el-link>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="Article">
      <el-row>
        <el-col :span="1">
          <div class="grid-content bg-purple">
            <el-avatar shape="square" :size="50" :src="imgurl3"></el-avatar>
          </div>
        </el-col>
        <el-col :span="23" style="padding: 10px 10px 20px 20px;">
          <div class="AritcleTitle" @click="ViewDetails('zzx')">计算机应用的发展趋势。</div>
          <el-divider content-position="right"><div style="font-weight: 300;color: #4f4b4b;">关键词:计算机;应用软件;开发;维护水平;服务功能</div></el-divider>
          <div class="AritcleMain" style="font-size:15px;letter-spacing: 1.5px" @click="ViewDetails('zzx')">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 计算机应用软件的相关内容,计算机应用软件的开发,计算机应用软件的有效维护。
          </div>
          <div class="ViewDetails">
            <span style="margin-right:100px">2022-11-23 15:00</span>
            <el-link @click="ViewDetails('zzx')">查看详情<i class="el-icon-view el-icon--right"></i> </el-link>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="Article">
      <el-row>
        <el-col :span="1">
          <div class="grid-content bg-purple">
            <el-avatar shape="square" :size="50" :src="imgurl4"></el-avatar>
          </div>
        </el-col>
        <el-col :span="23" style="padding: 10px 10px 20px 20px;">
          <div class="AritcleTitle" @click="ViewDetails('bfx')">计算机技术的应用促进各个领域发展，加快了社会的发展。</div>
          <el-divider content-position="right"><div style="font-weight: 300;color: #4f4b4b;">关键字：计算机；影响提取；道路勘察设计；应用</div></el-divider>
          <div class="AritcleMain" style="font-size:15px;letter-spacing: 1.5px" @click="ViewDetails('bfx')">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 经济的快速发展对我国公路建设提出了更高的要求，新建公路总里程不断增加。
            由于公路、铁路等道路的勘察地形复杂、工作难度大、误差机率高等因素使得道路勘察工作成为了道路建设发展的瓶颈。
            计算机技术及影像提取测量技术的应用为道路勘察设计带来了新的发展契机，文中就计算机技术在道路勘查设计中的应用进行了简要的论述。
          </div>
          <div class="ViewDetails">
            <span style="margin-right:100px">2022-11-23 15:00</span>
            <el-link @click="ViewDetails('bfx')">查看详情<i class="el-icon-view el-icon--right"></i> </el-link>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="Article">
      <el-row>
        <el-col :span="1">
          <div class="grid-content bg-purple">
            <el-avatar shape="square" :size="50" :src="imgurl5"></el-avatar>
          </div>
        </el-col>
        <el-col :span="23" style="padding: 10px 10px 20px 20px;">
          <div class="AritcleTitle" @click="ViewDetails('cr')">计算机硬件安全维护的重要性。</div>
          <el-divider content-position="right"><div style="font-weight: 300;color: #4f4b4b;">关键字：计算机技术,社会发展,影响</div></el-divider>
          <div class="AritcleMain" style="font-size:15px;letter-spacing: 1.5px" @click="ViewDetails('cr')">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 计算机硬件故障的分析方法,计算机硬件安全维护相关措施。
          </div>
          <div class="ViewDetails">
            <span style="margin-right:100px">2022-11-23 15:00</span>
            <el-link @click="ViewDetails('cr')">查看详情<i class="el-icon-view el-icon--right"></i> </el-link>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="Article">
      <el-row>
        <el-col :span="1">
          <div class="grid-content bg-purple">
            <el-avatar shape="square" :size="50" :src="imgurl6"></el-avatar>
          </div>
        </el-col>
        <el-col :span="23" style="padding: 10px 10px 20px 20px;">
          <div class="AritcleTitle" @click="ViewDetails('ljr')"> 虚拟络技术的具体价值所在</div>
          <el-divider content-position="right"><div style="font-weight: 300;color: #4f4b4b;">关键字：计算机；具体应用；络技术</div></el-divider>
          <div class="AritcleMain" style="font-size:15px;letter-spacing: 1.5px" @click="ViewDetails('ljr')">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 虚拟络技术日益成熟，其应用范围也不变得更加广泛。
            虚拟计算机络技术与现代络之间有着密切的联系，在络的技术下，对相关的软件进行应用，共享信息资源，
            从而使信息资源的利用率能够打破传统，信息资源的利用效果能够得到进一步提升。
          </div>
          <div class="ViewDetails">
            <span style="margin-right:100px">2022-11-23 15:00</span>
            <el-link @click="ViewDetails('ljr')">查看详情<i class="el-icon-view el-icon--right"></i> </el-link>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-dialog
      title="文章"
      :visible.sync="ViewDetailsdialog"
      width="60%"
      :before-close="ViewDetailshandle">
      <gtx v-if="gtxDetailsdialog"></gtx>
      <bfx v-if="bfxDetailsdialog"></bfx>
      <cr v-if="crDetailsdialog"></cr>
      <dz v-if="dzDetailsdialog"></dz>
      <ljr v-if="ljrDetailsdialog"></ljr>
      <zzx v-if="zzxDetailsdialog"></zzx>
      <span slot="footer" class="dialog-footer">
        <el-button @click="ViewDetailsdialog = false">取 消</el-button>
        <el-button type="primary" @click="ViewDetailsdialog = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import gtx from './components/article/gtx.vue'
import bfx from './components/article/bfx.vue'
import cr from './components/article/cr.vue'
import dz from './components/article/dz.vue'
import ljr from './components/article/ljr.vue'
import zzx from './components/article/zzx.vue'
export default {
  components:{
    gtx,bfx,cr,dz,ljr,zzx
  },
  data(){
    return{
      imgurl1:require('@/assets/avata/avatar1.jpg'),
      imgurl2:require('@/assets/avata/avatar2.jpg'),
      imgurl3:require('@/assets/avata/avatar3.jpg'),
      imgurl4:require('@/assets/avata/avatar4.jpg'),
      imgurl5:require('@/assets/avata/avatar5.jpg'),
      imgurl6:require('@/assets/avata/avatar6.jpg'),
      ViewDetailsdialog:false,
      gtxDetailsdialog:false,
      bfxDetailsdialog:false,
      crDetailsdialog:false,
      dzDetailsdialog:false,
      ljrDetailsdialog:false,
      zzxDetailsdialog:false,
    }
  },
  methods:{
    ViewDetails(val){
      if (val == 'gtx') {
        this.gtxDetailsdialog = true
      }else if(val == 'bfx'){
        this.bfxDetailsdialog = true
      }else if(val == 'cr'){
        this.crDetailsdialog = true
      }else if(val == 'dz'){
        this.dzDetailsdialog = true
      }else if(val == 'ljr'){
        this.ljrDetailsdialog = true
      }else if(val == 'zzx'){
        this.zzxDetailsdialog = true
      }
      this.ViewDetailsdialog = true
    },
    ViewDetailshandle(){
      this.ViewDetailsdialog = false
      this.gtxDetailsdialog = false
      this.bfxDetailsdialog = false
      this.crDetailsdialog = false
      this.dzDetailsdialog = false
      this.ljrDetailsdialog = false
      this.zzxDetailsdialog = false
    }
  },
}
</script>

<style>
.ViewDetails{
  margin: 20px 20px 0px 0px;
  float:right;
}
.Article{
  width: 98.3%;
}
.Article{
  border-radius: 4px;
  background-color: #ffffff;
  border: 1px solid #EBEEF5;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 10px 5px 5px 5px;
  margin-bottom: 20px;
}
.AritcleTitle{
  font-size: 20px;
  text-align: left;
  cursor: pointer;
  color: #000;
  width: fit-content;
}
.AritcleTitle:hover{
  color: #409eff;
}
.AritcleMain{
  font-size: 20px;
  text-align: left;
  cursor: pointer;
  width: fit-content;
}
.AritcleMain:hover{
  color: #409eff;
}
.Article{
  font-weight: 300;
}
.el-dialog__body{
  background-color: #f5f7f7;
}
</style>