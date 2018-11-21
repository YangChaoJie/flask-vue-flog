<template>
  <div class="main">
    <!-- <div>{{ title }}</div>
        <img alt="Vue logo" :src=imgPath /> -->
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="8">
            Header
          </el-col>
          <el-col :span="8">
            Headerl
          </el-col>
           <el-col :span="8">
            Header1
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
         <el-aside width="200px">Aside</el-aside>
      </el-container>
    </el-container>
  </div>

</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
      title: '这是我的博客 主页',
      imgPath: require('../assets/logo.png')
    }
  }
}
</script>
<style lang="scss">
.main {
  height: 100%;
  .el-header {
    background: gray;
    height: 100px;
  }
  .el-container {
    height: 100%;
    background: wheat;
  }
  .el-main {
    background: white;
    height: 70%;
  }
  .el-aside {
    height: 70%;
  }
}
</style>

