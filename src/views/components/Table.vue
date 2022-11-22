<!-- 

  component:列表
  time:2022/11/15

  UserData:列数据
  tableConfig:表格的列配置，[UserId,key,label,width]
  getTableHeaderStyle:表格CSS类名

  表格数据：
  tableConfig:[
    {
      label:'姓名',
      width:150,
      key:'UserName'
    }
  ]
  UserData:[
    {
      "UserId":"1",
      "UserName":"杠铁侠",
      "UserNameValue":'1',
      "UserGender":"男",
      "UserAge":"31",
      "UserItem":"斯塔克工业",
      "UserItemValue":"1",
      "UserPostion":"Java工程师",
      "UserPostionValue":"1",
      "UserPhone": "15987462455",
      "UserEmail": "154893@163.com",
      "UserEntryTime":"2020-8-27",
      "Useraddress":"上海市普陀区金沙江路 1518 弄"
    },
  ]

-->
<template>
  <div class="UserTable">
    <el-table
      :data="UserData"
      style="width: 100%"
      :header-cell-style="getTableHeaderStyle"
    >
      <template slot="empty">
        <el-empty :image-size="100" description='暂无数据'></el-empty>
      </template>
      <el-table-column
        v-for="column in tableConfig"
        :key="column.UserId"
        :prop=column.key
        :label=column.label
        :width=column.width>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="viewuserdata(scope.row)" type="text" size="small">查看</el-button>
          <el-button @click="editortypeuserdata(scope.row)" type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="用户信息"
      :visible.sync="userInfo"
      width="50%"
      :before-close="closeUserInfo">
        <el-form ref="form" :model="Userdata" label-width="80px">
          <el-row :gutter="20">
            <el-col :span="12"><div class="grid-content bg-purple">
              <el-form-item label="姓名">
                <el-input v-model="Userdata.UserName" placeholder="请输入姓名"></el-input>
              </el-form-item>
            </div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple">
              <el-form-item label="性别" style="text-align:left">
                <el-select v-model="Userdata.UserGender" placeholder="请选择性别">
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
                <el-select v-model="Userdata.UserItem" placeholder="请选择团队">
                  <el-option
                    v-for="item in UserItem"
                    :key="item.value"
                    :label="item.label"
                    :value="item.label">
                  </el-option>
                </el-select>
              </el-form-item>
            </div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple">
              <el-form-item label="职位" style="text-align:left">
                <el-select v-model="Userdata.UserPostion" placeholder="请选择职位">
                  <el-option
                    v-for="item in UserPostion"
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
              <el-form-item label="电话">
                <el-input v-model="Userdata.UserPhone" placeholder="请输入电话"></el-input>
              </el-form-item>
            </div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple">
              <el-form-item label="邮箱">
                <el-input v-model="Userdata.UserEmail" placeholder="请输入邮箱"></el-input>
              </el-form-item>
            </div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12"><div class="grid-content bg-purple">
              <el-form-item label="入职时间">
                <el-input v-model="Userdata.UserEntryTime" placeholder="请输入入职时间"></el-input>
              </el-form-item>
            </div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple">
              <el-form-item label="年龄">
                <el-input v-model="Userdata.UserAge" placeholder="请输入年龄"></el-input>
              </el-form-item>
            </div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12"><div class="grid-content bg-purple">
              <el-form-item label="地址">
                <el-input v-model="Userdata.Useraddress" placeholder="请输入地址" type="textarea"></el-input>
              </el-form-item>
            </div></el-col>
          </el-row>
        </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="userInfo = false">取 消</el-button>
        <el-button type="primary" @click="userInfo = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="用户信息"
      :visible.sync="showuserInfo"
      width="50%"
      :before-close="closeUserInfo">
        <el-form ref="form" :model="Userdata" label-width="80px">
          <el-row :gutter="20">
            <el-col :span="12"><div class="grid-content bg-purple">
              <el-form-item label="姓名">
                <el-card shadow="hover" body-style="padding: 0px 0px 0px 20px;text-align: left;">
                  {{ Userdata.UserName }}
                </el-card>
              </el-form-item>
            </div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple">
              <el-form-item label="性别">
                <el-card shadow="hover" body-style="padding: 0px 0px 0px 20px;text-align: left;">
                  {{ Userdata.UserGender }}
                </el-card>
              </el-form-item>
            </div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12"><div class="grid-content bg-purple">
              <el-form-item label="团队">
                <el-card shadow="hover" body-style="padding: 0px 0px 0px 20px;text-align: left;">
                  {{ Userdata.UserItem }}
                </el-card>
              </el-form-item>
            </div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple">
              <el-form-item label="职位">
                <el-card shadow="hover" body-style="padding: 0px 0px 0px 20px;text-align: left;">
                  {{ Userdata.UserPostion }}
                </el-card>
              </el-form-item>
            </div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12"><div class="grid-content bg-purple">
              <el-form-item label="电话">
                <el-card shadow="hover" body-style="padding: 0px 0px 0px 20px;text-align: left;">
                  {{ Userdata.UserPhone }}
                </el-card>
              </el-form-item>
            </div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple">
              <el-form-item label="邮箱">
                <el-card shadow="hover" body-style="padding: 0px 0px 0px 20px;text-align: left;">
                  {{ Userdata.UserEmail }}
                </el-card>
              </el-form-item>
            </div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12"><div class="grid-content bg-purple">
              <el-form-item label="入职时间">
                <el-card shadow="hover" body-style="padding: 0px 0px 0px 20px;text-align: left;">
                  {{ Userdata.UserEntryTime }}
                </el-card>
              </el-form-item>
            </div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple">
              <el-form-item label="年龄">
                <el-card shadow="hover" body-style="padding: 0px 0px 0px 20px;text-align: left;">
                  {{ Userdata.UserAge }}
                </el-card>
              </el-form-item>
            </div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12"><div class="grid-content bg-purple">
              <el-form-item label="地址">
                <el-card shadow="hover" body-style="padding: 0px 0px 0px 20px;text-align: left;">
                  {{ Userdata.Useraddress }}
                </el-card>
              </el-form-item>
            </div></el-col>
          </el-row>
        </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showuserInfo = false">取 消</el-button>
        <el-button type="primary" @click="showuserInfo = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>

export default {
  data(){
    return{
      Userdata:{
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
      tableconfig:[],
      userInfo:false, //控制遮罩显示
      showuserInfo:false,
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
  props:{
    tableConfig:{
      default(){
        return [];
      }
    },
    UserData:{
      default(){
        return [];
      }
    },
  },
  methods: {
    getTableHeaderStyle(){
      return "background:#eee"
    },
    editortypeuserdata(row) {
      this.userInfo = true
      this.Userdata = row
    },
    viewuserdata(row){
      this.showuserInfo = true
      this.Userdata = row
    },
    closeUserInfo(){
      this.showuserInfo = false
      this.userInfo = false
    }
  },
}
</script>

<style>
.el-table{
  padding: 0px 10px 0px 0px;
}
.el-table__body-wrapper{
  padding-bottom: 10px;
}
</style>