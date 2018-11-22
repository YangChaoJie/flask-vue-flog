<template>
  <div class="main">
    <el-container>
      <el-header height="80px">
        <el-row justify="center" type="flex">
          <el-col :span="12"></el-col>
          <el-col :span="7" style="line-height: 80px; text-align: right;">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" height="80px;">
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
          <el-col :span="5" style="line-height: 80px; text-align: right;">
            <span class="title">LingXi's Blog</span>
            <div style="display: inline-block; height: 60px;">
              <img :src=imgPath />
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-carousel :interval="5000" arrow="always" height="400px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
       <el-container>
        <el-aside width="20%">Aside</el-aside>
        <el-main>Main</el-main>
        <el-aside width="20%">Aside</el-aside>
      </el-container>
      <el-footer height="100px">
        <label >Flask && Vue</label>
        <label>@2018</label>
        <label>对方互电饭锅规划局</label>
      </el-footer>
    </el-container>

  </div>

</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
      title: '这是我的博客 主页',
      imgPath: require('../assets/images/touxiang.gif'),
      activeIndex: '1'
    }
  },
  mounted() {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="scss">
.main {
  height: 100%;
  .el-carousel {
    // overflow: hidden;
    margin-top: -100px;
    overflow-x: visible;
    height: 400px;
    z-index: 0;
  }
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
    z-index: 1000;
    background-color: rgb(84, 92, 100);
    height: 80px;
    line-height: 80px;
    .el-menu {
      // height: 100%;
      // line-height: 80px;
      vertical-align: middle;
      text-align: right;
    }
    .el-menu--horizontal > .el-menu-item,
    .el-menu--horizontal > .el-submenu .el-submenu__title {
      height: 80px;
      line-height: 80px;
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
  .el-container {
    height: 100%;
    background: wheat;
  }
  .el-main {
    background: white;
    height: 100%;
  }
  .el-aside {
    height: 100%;
    background-color: rgb(84, 92, 100);
  }
  .el-footer {
    // padding: 18px 0;
    color: #aaa;
    background-color: #e8e8e8;
    box-sizing: border-box;
    text-align: center;
    line-height: 100px;
    label {
      font-size: 22px;
    }
  }
}
</style>

