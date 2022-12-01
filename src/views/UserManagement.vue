<!-- 用户管理 -->
<template>
  <div class="User" style="margin-right: 18px;">
    <div class="Management" v-if="IsManagement">
      <!-- 查询 -->
      <div class="screeningUser">
        <el-row :gutter="20">
          <el-col :span="18">
            <div class="grid-content bg-purple">
              <el-row :gutter="20">
                <el-col :span="6">
                  <div class="grid-content bg-purple">
                    <el-input v-model="query.UserIdValue" placeholder="请输入ID" style="width:80%"></el-input>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">
                    <el-select v-model="query.UserNameValue" filterable placeholder="请输入用户姓名">
                    <el-option
                      v-for="item in UserName"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">
                    <el-select v-model="query.UserItemValue" filterable placeholder="请输入团队">
                    <el-option
                      v-for="item in UserItem"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                  </div>
                </el-col>
                <el-col :span="6">
                  <div class="grid-content bg-purple">
                    <el-select v-model="query.UserPostionValue" filterable placeholder="请输入职位">
                    <el-option
                      v-for="item in UserPostion"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <el-button type="primary" @click="isaddDatadialog" plain>增加</el-button>
              <el-button type="primary" @click="queryData" plain>查询</el-button>
              <el-button type="primary" @click="resetData" plain>重置</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- 编辑添加遮罩 -->
      <el-dialog :title=dialogtitle :visible.sync="addDatadialog" width="40%">
        <el-form ref="form" :model="UserInfo" label-width="80px">
          <el-row :gutter="20">
            <el-col :span="12"><div class="grid-content bg-purple">
              <el-form-item label="姓名">
                <el-input v-model="UserInfo.UserName" placeholder="请输入姓名"></el-input>
              </el-form-item>
            </div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple">
              <el-form-item label="性别">
                <el-select v-model="UserInfo.UserGender" placeholder="请选择性别">
                <el-option
                  v-for="item in UserGender"
                  :key="item.value"
                  :label="item.label"
                  :value="item.label">
                </el-option>
              </el-select>
              </el-form-item>
            </div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12"><div class="grid-content bg-purple">
              <el-form-item label="团队" style="text-align:left">
                <el-select v-model="UserInfo.UserItemValue" placeholder="请选择团队">
                  <el-option
                    v-for="item in UserItem"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple">
              <el-form-item label="职位">
                <el-select v-model="UserInfo.UserPostionValue" placeholder="请选择职位">
                  <el-option
                    v-for="item in UserPostion"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12"><div class="grid-content bg-purple">
              <el-form-item label="电话">
                <el-input v-model="UserInfo.UserPhone" placeholder="请输入电话"></el-input>
              </el-form-item>
            </div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple">
              <el-form-item label="邮箱">
                <el-input v-model="UserInfo.UserEmail" placeholder="请输入邮箱"></el-input>
              </el-form-item>
            </div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12"><div class="grid-content bg-purple">
              <el-form-item label="入职时间">
                <el-input v-model="UserInfo.UserEntryTime" placeholder="请输入入职时间"></el-input>
              </el-form-item>
            </div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple">
              <el-form-item label="年龄">
                <el-input v-model="UserInfo.UserAge" placeholder="请输入年龄"></el-input>
              </el-form-item>
            </div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12"><div class="grid-content bg-purple">
              <el-form-item label="地址">
                <el-input v-model="UserInfo.Useraddress" placeholder="请输入地址" type="textarea"></el-input>
              </el-form-item>
            </div></el-col>
          </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addDatadialog = false">取 消</el-button>
          <el-button type="primary" @click="addData" v-show="Isfun == 1">确 定</el-button>
          <el-button type="primary" @click="editorData" v-show="Isfun == 2">确 定</el-button>
          <el-button type="primary" @click="addDatadialog = false" v-show="Isfun == 3">确 定</el-button>
        </div>
      </el-dialog>
      <Table :UserData="TableData" :tableConfig="tableconfig"></Table>
    </div>
    <router-view v-if="!IsManagement"></router-view>
  </div>
</template>

<script>
import UserData from '@/data/User'
import Table from '@/views/components/Table.vue'
export default {
  props:{UserData},
  components:{
    Table
  },
  data(){
    return{
      Userdata:[],
      TableData:[],
      tableconfig:[],
      IsManagement: true, //控制显示
      UserItem: [{
          value: '1',
          label: '塔斯克工业'
        }, {
          value: '2',
          label: '复仇者联盟'
        }, {
          value: '3',
          label: '奥创科技'
        }, {
          value: '4',
          label: '瓦坎达军团'
        }, {
          value: '5',
          label: '神盾局'
        }, {
          value: '6',
          label: '阿斯加德'
        }
      ],
      UserPostion: [{
          value: '1',
          label: 'Java工程师'
        }, {
          value: '2',
          label: 'Web前端工程师'
        }, {
          value: '3',
          label: '系统架构师'
        }, {
          value: '4',
          label: 'UI设计师'
        }, {
          value: '5',
          label: '数据分析师'
        }, {
          value: '6',
          label: '测试工程师'
        }
      ],
      UserName: [{
          value: '1',
          label: '杠铁侠'
        }, {
          value: '2',
          label: '对胀'
        }, {
          value: '3',
          label: '只猪霞'
        }, {
          value: '4',
          label: '鞭福峡'
        }, {
          value: '5',
          label: '抄仁'
        }, {
          value: '6',
          label: '率距人'
        }
      ],
      query:{
        UserIdValue: '',    //ID
        UserNameValue: '',  //姓名
        UserItemValue:'',   //团队
        UserPostionValue:'',//职位
      },
      addDatadialog:false,  //编辑添加遮罩
      dialogtitle:"新增用户", 
      Isfun:'1',  //控制遮罩中确认按钮的显示1：增加，2：编辑，3：查看
      UserInfo:{  //用户信息
        UserId:'',
        UserName:'',  //姓名
        UserNameValue:'',
        UserGender:'',  //性别
        UserItem:'',  //团队
        UserItemValue:'',
        UserAge:'', //年龄
        UserPostion:'', //职位
        UserPostionValue:'',
        UserPhone:'', //电话
        UserEmail:'', //邮箱
        UserEntryTime:'', //入职时间
        Useraddress:'', //地址
      },
      UserGender:[
        {
          value:'1',
          label:'男'
        },{
          value:'2',
          label:'女'
        }
      ]
    }
  },
  methods:{
    examine(row) {  //查看
      console.log(row);
      this.Isfun = 3
      this.dialogtitle = '查看用户'
      this.addDatadialog = true
    },
    Tableconfig(){  //列表配置
      this.tableconfig = [
        { //用户姓名
          label:'姓名',
          width:140,
          key:'UserName',
        },
        { //用户性别
          label:'性别',
          width:140,
          key:'UserGender',
        },
        { //用户年龄
          label:'年龄',
          width:140,
          key:'UserAge',
        },
        { //用户团队
          label:'团队',
          width:180,
          key:'UserItem',
        },
        { //用户职位
          label:'职位',
          width:200,
          key:'UserPostion',
        },
        { //用户电话
          label:'电话',
          width:200,
          key:'UserPhone',
        },
        { //用户邮箱
          label:'邮箱',
          width:250,
          key:'UserEmail',
        },
        { //用户入职时间
          label:'入职时间',
          width:150,
          key:'UserEntryTime',
        },
        { //用户地址
          label:'地址',
          width:300,
          key:'Useraddress',
        },
      ]
    },
    queryData(){  //查询
      this.TableData = []
      this.Userdata.forEach((item,index) => {
        if (this.query.UserIdValue != '') {
          if (this.query.UserIdValue == item.UserId) {
            this.TableData.push(this.Userdata[index])
            if (this.query.UserNameValue != '') {
              if (this.query.UserNameValue == item.UserNameValue) {
                return
              }else{
                this.TableData = []
                return
              }
            }
            if(this.query.UserItemValue != ''){
              if (this.query.UserItemValue == item.UserItemValue) {
                return
              }else{
                this.TableData = []
                return
              }
            }
            if(this.query.UserPostionValue != ''){
              if (this.query.UserPostionValue == item.UserPostionValue) {
                return
              }else{
                this.TableData = []
                return
              }
            }
          }
        }else if (this.query.UserNameValue != '') {
          if (this.query.UserNameValue == item.UserNameValue) {
            this.TableData.push(this.Userdata[index])
            if(this.query.UserItemValue != ''){
              if (this.query.UserItemValue == item.UserItemValue) {
                return
              }else{
                this.TableData = []
                return
              }
            }
            if(this.query.UserPostionValue != ''){
              if (this.query.UserPostionValue == item.UserPostionValue) {
                return
              }else{
                this.TableData = []
                return
              }
            }
          }
        }else if (this.query.UserItemValue != '') {
          if (this.query.UserItemValue == item.UserItemValue) {
            this.TableData.push(this.Userdata[index])
            if(this.query.UserPostionValue != ''){
              if (this.query.UserPostionValue == item.UserPostionValue) {
                return
              }else{
                this.TableData = []
                return
              }
            }
          }
        }else if (this.query.UserPostionValue != '') {
          if (this.query.UserPostionValue == item.UserPostionValue) {
            this.TableData.push(this.Userdata[index])
          }
        }else{
          this.TableData = this.Userdata
        }
      });
    },
    resetData(){  //重置
      this.query.UserIdValue = ''
      this.query.UserNameValue = ''
      this.query.UserItemValue = ''
      this.query.UserPostionValue = ''
    },
    isaddDatadialog(){  //增加遮罩事件
      this.dialogtitle = '新增用户'
      this.Isfun = 1
      this.addDatadialog = true
      this.UserInfo = {}
    },
    iseditorDatadialog(){   // 编辑遮罩事件
      this.dialogtitle = '编辑用户'
      this.Isfun = 2
      this.addDatadialog = true
    },
    addData(){  //增加
      this.UserInfo.UserId = this.Userdata.length + 1
      this.UserInfo.UserId = this.UserInfo.UserId.toString()
      this.UserInfo.UserNameValue = this.Userdata.length + 1
      this.UserInfo.UserItem = this.UserItem[this.UserInfo.UserItemValue - 1].label
      this.UserInfo.UserPostion = this.UserPostion[this.UserInfo.UserPostionValue - 1].label
      this.Userdata.push(this.UserInfo)
      this.addDatadialog = false
    },
    editorData(){  //编辑
      this.addDatadialog = false
    },
    path(){
      if (this.$route.path == '/home/usermanagement') {
        this.IsManagement = true
      }else{
        this.IsManagement = false
      }
    }
  },
  mounted(){
    this.path()
    this.Userdata = UserData
    this.TableData = UserData
    this.Tableconfig()
  },
  watch: {
    $route: {
      handler: function(){
        this.path()
      },
      // 深度观察监听
      deep: true
    }
  },
}
</script>

<style>
.el-dialog__body{
  padding-right: 40px;
  background: #f5f7f7;
  border-top: 1px solid #cfd9db;
  border-bottom: 1px solid #cfd9db;
}
.Management{
  border: 1px solid #EBEEF5;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
.screeningUser{
  padding: 20px;
}
.UserTable{
  padding: 10px;
  margin: 0px 20px 20px 20px ;
  border: 1px solid #EBEEF5;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
</style>