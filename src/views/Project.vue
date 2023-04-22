<!-- 项目 -->
<template>
  <div class="Project">
    <div class="tree">
      <h1 style="text-align: left;">项目目录</h1>
      <el-tree
        :data="data"
        :props="defaultProps"
        @node-click="handleNodeClick">
      </el-tree>
    </div>
    <div class="timeline">
      <h1 style="text-align: left;margin-left: 45px;">时间线</h1>
      <el-timeline>
        <el-timeline-item timestamp="2018/4/12" placement="top">
          <el-card>
            <h4>代码优化</h4>
            <p>Tian 提交于 2023/2/12</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/3" placement="top">
          <el-card>
            <h4>项目制作完成</h4>
            <p>Tian 提交于 2023/1/17</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/2" placement="top">
          <el-card>
            <h4>文章制作完成</h4>
            <p>Tian 提交于 2023/1/2</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/12" placement="top">
          <el-card>
            <h4>主义样式优化</h4>
            <p>Tian 提交于 2022/12/24</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/3" placement="top">
          <el-card>
            <h4>修改router的path </h4>
            <p>Tian 提交于 2022/12/12</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/2" placement="top">
          <el-card>
            <h4>面包屑制作完成</h4>
            <p>Tian 提交于 2022/12/10</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/12" placement="top">
          <el-card>
            <h4>主页制作完成</h4>
            <p>Tian 提交于 2022/11/24</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/3" placement="top">
          <el-card>
            <h4>个人信息制作完成</h4>
            <p>Tian 提交于 2022/11/24</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/2" placement="top">
          <el-card>
            <h4>项目创建</h4>
            <p>Tian 提交于 2022/11/13</p>
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
        data: [{
          label: 'assets',
          children: [{
            label: 'avata',
            children: [
              {
                label: 'avatar1.jpg'
              },
              {
                label: 'avatar2.jpg'
              },
              {
                label: 'avatar3.jpg'
              },
              {
                label: 'avatar4.jpg'
              },
              {
                label: 'avatar5.jpg'
              },
              {
                label: 'avatar6.jpg'
              },
            ],
          },
          {
            label: 'css',
            children: [{
              label: 'global.css'
            }],
          },
          {
            label: 'db',
            children: [{
              label: 'index.js'
            }],
          },
          {
            label: 'Home',
            children: [
              {
                label: '1.jpge'
              },
              {
                label: '2.jpge'
              },
              {
                label: '3.jpge'
              },
              {
                label: '4.jpge'
              },
              {
                label: '5.jpge'
              },
              {
                label: 'left.png'
              },
              {
                label: 'right.png'
              },
            ],
          },
          {
            label: 'img',
            children: [
              {
                label: 'app',
                children:[
                  {
                    label: 'APPC.png'
                  },
                  {
                    label: 'dingtalk.png'
                  },
                  {
                    label: 'QQ.png'
                  },
                  {
                    label: 'steam.png'
                  },
                  {
                    label: 'taobao.png'
                  },
                  {
                    label: 'WeChatSetup.png'
                  },
                ]
              },
              {
                label: 'xwc.jpg'
              }
            ],
          },
          {
            label: 'login_images',
            children: [{
              label: 'background.jpg'
            }],
          },
          {
            label: 'main',
            children: [
              {
                label: '1.png'
              },
              {
                label: '2.png'
              },
              {
                label: '3.png'
              },
              {
                label: '4.png'
              },
            ],
          },
          {
            label: 'logo.png'
          },
        ],
        }, {
          label: 'components',
          children: [{
            label: 'Header',
            children: [
              {
                label: 'AvatarHeader.vue'
              },
              {
                label: 'ScreenFull.vue'
              },
              {
                label: 'userimgurl.js'
              }
            ]
          }]
        }, {
          label: 'data',
          children: [{
            label: 'User.js',
          }]
        }, {
          label: 'router',
          children: [{
            label: 'index.js',
          }]
        }, {
          label: 'store',
          children: [{
            label: 'index.js',
          }]
        }, {
          label: 'views',
          children: [
            {
              label: 'components',
              children:[
                {
                  label:'article',
                  children:[
                    {
                      label:'bfx.vue'
                    },
                    {
                      label:'cr.vue'
                    },
                    {
                      label:'dz.vue'
                    },
                    {
                      label:'gtx.vue'
                    },
                    {
                      label:'ljr.vue'
                    },
                    {
                      label:'zzx.vue'
                    },
                  ]
                },
                {
                  label:'Team',
                  children:[
                    {
                      label:'APPC.vue'
                    },
                    {
                      label:'DingTalk.vue'
                    },
                    {
                      label:'QQ.vue'
                    },
                    {
                      label:'steam.vue'
                    },
                    {
                      label:'TaoBao.vue'
                    },
                    {
                      label:'WeChatSetup.vue'
                    },
                  ]
                },
                {
                  label:'Bread.vue'
                },
                {
                  label:'Table.vue'
                },
              ]
            },
            {
              label: 'main',
              children:[
                {
                  label:'MainView.vue'
                }
              ]
            },
            {
              label: 'sidebar',
              children:[
                {
                  label:'SidebarHeader.vue'
                },
                {
                  label:'SidebarView.vue'
                }
              ]
            },
            {
              label: 'userinfo',
              children:[
                {
                  label:'UserInfo.vue'
                }
              ]
            },
            {
              label: 'Analyse.vue',
            },
            {
              label: 'Article.vue',
            },
            {
              label: 'HomeView.vue',
            },
            {
              label: 'LoginView.vue',
            },
            {
              label: 'Team.vue',
            },
            {
              label: 'UserManagement.vue',
            }
          ]
        },{
          label:'App.vue'
        },{
          label:'main.js'
        }
      ],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    }
  };
</script>

<style>
.Project{
  width: 80%;
}
.tree{
  float: left;
  width: 30%;
  margin: 20px 0 0 10%;
}
.timeline{
  float: left;
  width: 30%;
  margin-top: 20px;
}
</style>