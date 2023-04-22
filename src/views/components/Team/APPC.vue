<!-- 团队APPC -->
<template>
  <div class="APPC">
    <el-row :gutter="20">
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <el-card shadow="hover">
            <el-row>
              <el-col :span="7">
                <div class="grid-content bg-purple">
                  <el-image
                    style="width: 80px; height: 80px"
                    :src="require('@/assets/img/app/APPC.png')">
                  </el-image>
                </div>
              </el-col>
              <el-col :span="17">
                <div class="grid-content bg-purple-light" style="text-align: left;margin-top: 10px;">
                  <span class="Name">富仇者联盟 &nbsp;&nbsp; APPC</span>
                </div>
              </el-col>
              <el-col :span="17">
                <div class="grid-content bg-purple-light" style="text-align: left;margin-top: 10px;">
                  <el-row :gutter="12">
                    <el-col :span="5">
                      <el-card shadow="hover" body-style="padding: 1px; text-align: center;cursor: pointer;">
                        <span>开发</span>
                      </el-card>
                    </el-col>
                    <el-col :span="5">
                      <el-card shadow="hover" body-style="padding: 1px; text-align: center;cursor: pointer;">
                        <span>工程师</span>
                      </el-card>
                    </el-col>
                    <el-col :span="6">
                      <el-card shadow="hover" body-style="padding: 1px; text-align: center;cursor: pointer;">
                        <span>日理万机</span>
                      </el-card>
                    </el-col>
                    <el-col :span="5">
                      <el-card shadow="hover" body-style="padding: 1px; text-align: center;cursor: pointer;">
                        <span>兼容</span>
                      </el-card>
                    </el-col>
                  </el-row>
                </div>
              </el-col>
            </el-row>
          </el-card>
        </div>
      </el-col>
      <el-col :span="12"><div class="grid-content bg-purple-light">
        <div style="background-color: #fff;overflow: hidden;">
          <h1 class="memberH1">成员</h1>
          <el-avatar shape="square" style="float: left;margin:10px 0px 20px 30px" :size="50" :src="require('@/assets/avata/avatar1.jpg')"></el-avatar>
          <el-avatar shape="square" style="float: left;margin:10px 0px 20px 30px" :size="50" :src="require('@/assets/avata/avatar2.jpg')"></el-avatar>
          <el-avatar shape="square" style="float: left;margin:10px 0px 20px 30px" :size="50" :src="require('@/assets/avata/avatar3.jpg')"></el-avatar>
          <el-avatar shape="square" style="float: left;margin:10px 0px 20px 30px" :size="50" :src="require('@/assets/avata/avatar4.jpg')"></el-avatar>
        </div>
      </div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.Name{
  font-size: 23px;
}
.el-dialog__body {
  background-color: #f5f7f7;
}
.memberH1{
  font-size: 20px;
  margin: 10px;
  font-weight: 500;
  width: 100%;
  text-align: left;
}
</style>