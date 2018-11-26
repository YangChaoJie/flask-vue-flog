<template>
  <div class="main">
    <el-container>
      <el-header height="70px">
        <el-row justify="center" type="flex">
          <el-col :span="12"></el-col>
          <el-col :span="7" style="line-height: 70px; text-align: right;">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="rgba(84, 92, 100, 0)" text-color="#fff" active-text-color="#ffd04b" height="70px;">
              <el-menu-item index="1">首页</el-menu-item>
              <el-submenu index="2">
                <template slot="title">归档</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="2-4-1">选项1</el-menu-item>
                  <el-menu-item index="2-4-2">选项2</el-menu-item>
                  <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="3">编程</el-menu-item>
              <el-menu-item index="4">关于</el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="5" style="line-height: 70px; text-align: right;">
            <span class="title">LingXi's Blog</span>
            <div style="display: inline-block; height: 60px;">
              <img :src=imgPath />
            </div>
          </el-col>
        </el-row>
      </el-header>
       <!-- <page-body></page-body> -->
       <router-view/>
    </el-container>
  </div>

</template>
<script>
// import PageBody from '../components/PageBody.vue'
export default {
  name: 'Home',
  components: {
    // PageBody
  },
  data() {
    return {
      title: '这是我的博客 主页',
      imgPath: require('../assets/images/touxiang.gif'),
      activeIndex: '1',
    }
  },
  mounted() {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
      if (key === '4') {
        this.$router.replace('/about')
      }else if (key === '1') {
        this.$router.replace('/home')
      }else if (key === '3'){
        this.$router.replace('/note')
      }
    }
  }
}
</script>
<style lang="scss">
.main {
  z-index: 2;
  height: 100%;
  overflow-y: auto;
  .el-carousel__item h3 {
    overflow: hidden;
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 400px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
  .el-header {
    z-index: 10;
    position: fixed;
    width: 100%;
    background-color: rgba(84, 92, 100, 0.3);
    height: 70px;
    line-height: 70px;
    overflow: hidden;
    .el-menu {
      vertical-align: middle;
      text-align: right;
    }
    .el-menu-item:hover {
      outline: 0 !important;
      // color: #409eff !important;
      background-color: rgba(84, 92, 100, 0) !important;
    }

    .el-submenu__title:focus,
    .el-submenu__title:hover {
      outline: 0 !important;
      background-color: rgba(84, 92, 100, 0.2) !important;
    }
    .el-menu--horizontal > .el-menu-item,
    .el-menu--horizontal > .el-submenu .el-submenu__title {
      height: 70px;
      line-height: 70px;
      font-size: 18px;
    }
    img {
      margin-left: 12px;
      width: 55px;
      height: 55px;
      border-radius: 55px;
      vertical-align: middle;
    }
    .title {
      color: white;
      font-family: Roboto, -apple-system, 'Helvetica Neue', 'PingFang SC',
        'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
      font-weight: 900;
      font-size: 1.5rem;
    }
  }
}
</style>

