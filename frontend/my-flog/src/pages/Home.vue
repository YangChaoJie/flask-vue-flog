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
      <div class="scroller">
        <el-carousel :interval="5000" arrow="always" height="500px" :autoplay="false">
          <el-carousel-item v-for="item in imgArray" :key="item">
            <!-- <h3>{{ item }}</h3> -->
            <img :src=item />
          </el-carousel-item>
        </el-carousel>
      </div>
      <el-container class="content">
        <el-aside width="30%">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>标签</span>
            </div>
            <el-button type="primary" size="small" :style="randomRgb()" v-for="o in buttonItems" :key="o" class="text item">
              {{ o }}
            </el-button>
          </el-card>
          <el-card class="box-card" style="margin-top: 20px;">
            <div slot="header" class="clearfix">
              <span>链接</span>
            </div>
            <ul>
              <li>github</li>
              <li>简书</li>
            </ul>
          </el-card> 
        </el-aside>
        <el-main>
        </el-main>
        <el-aside width="5%"></el-aside>
      </el-container>
      <el-footer height="100px">
        <label>Flask && Vue</label>
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
      activeIndex: '1',
      imgArray: [
        require('../assets/images/the_one.jpg'),
        require('../assets/images/the_two.jpg'),
        require('../assets/images/the-three.jpg')
      ],
      buttonItems: [
        'iOS',
        '前端',
        '测试',
        'vue',
        'python',
        'swift',
        'object-c',
        '数据结构和算法'
      ]
    }
  },
  mounted() {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    randomRgb: function() {
      var R = Math.floor(Math.random() * 255)
      var G = Math.floor(Math.random() * 255)
      var B = Math.floor(Math.random() * 255)
      return { background: 'rgb(' + R + ',' + G + ',' + B + ')' }
    }
  }
}
</script>
<style lang="scss">
.main {
  height: 100%;
  overflow-y: auto;
  .scroller {
    margin-top: -100px;
    overflow-x: visible;
    height: 500px;
    z-index: 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .el-carousel {
    // overflow: hidden;
    // margin-top: -100px;
    // overflow-x: visible;
    // height: 400px;
    // z-index: 0;
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
    z-index: 1;
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
  .el-container {
    height: 100%;
    background: #f5f5f5;
  }
  .el-main {
    box-sizing: border-box;
    background: white;
    // height: 100%;
    min-height: 800px;
    margin: -200px 0 50px 0;
    border-radius: 10px;
    box-shadow: 0 3px 3px rgba(0,0,0,.2);
    z-index: 2;
  }
  .el-aside {
    height: 100%;
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
  .content {
    min-height: 800px;
    .el-button {
      margin-top: 8px;
      border-width: 0px;
    }
    .box-card {
      min-height: 250px;
      margin: 10px 20px;
      border-radius: 8px;
      ul {
        padding: 0 20px;
        li {
          padding-top: 12px;
        }
      }
    }
  }
}
</style>

