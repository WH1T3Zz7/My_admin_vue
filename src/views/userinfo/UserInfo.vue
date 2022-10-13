<template>
  <div class="UserInfo">
    <el-col :span="24">
      <el-card shadow="hover">
          <el-descriptions title="用户信息" style="line-height:100px">
            <el-descriptions-item label="用户名">zhong</el-descriptions-item>
            <el-descriptions-item label="性别">男</el-descriptions-item>
            <el-descriptions-item label="手机号">15896314255</el-descriptions-item>
            <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
            <el-descriptions-item label="备注">
              <el-tag size="small">学校</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
          </el-descriptions>

      </el-card>
    </el-col>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
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

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
/deep/.el-carousel__container {
  height: 600px;
}
/deep/.el-carousel__item h3 {
  height: 600px;
}
.UserInfo{
  overflow: hidden;
}
</style>
