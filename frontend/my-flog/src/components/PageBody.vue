<template>
  <div class="page-body">
    <div class="scroller">
      <el-carousel
        :interval="5000"
        arrow="always"
        height="500px"
        :autoplay="false"
      >
        <el-carousel-item
          v-for="item in imgArray"
          :key="item"
        >
          <img :src=item />
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-container class="content">
      <el-aside width="30%">
        <el-card
          class="box-card"
          v-if="leftShow"
        >
          <div
            slot="header"
            class="clearfix"
          >
            <i
              class="iconfont icon-biaoqian"
              style="font-size: 20px;"
            ></i>
            <span> 标签</span>
          </div>
          <el-button
            type="primary"
            size="small"
            :style="randomRgb()"
            v-for="o in buttonItems"
            :key="o"
            class="text item"
          >
            {{ o }}
          </el-button>
        </el-card>
        <el-card
          class="box-card"
          style="margin-top: 20px;"
          v-if="leftShow"
        >
          <div
            slot="header"
            class="clearfix"
          >
            <i
              class="iconfont icon-lianjie"
              style="font-size: 20px;"
            ></i>
            <span> 链接</span>
          </div>
          <ul>
            <li>github</li>
            <li>简书</li>
          </ul>
        </el-card>
      </el-aside>
      <el-main class="main-content">
        <slot
          name="page"
          style="width: 100%; height: 100%;"
        ></slot>
      </el-main>
      <el-aside width="5%"></el-aside>
    </el-container>
    <el-footer height="100px">
      <label>Flask && Vue</label>
      <label>@2018</label>
      <label>对方互电饭锅规划局</label>
    </el-footer>
  </div>
</template>
<script>
export default {
  props: {
    /**
     * 控制 左边 标签栏显示
     */
    leftShow: {
      type: Boolean,
      default: true
    },
    imageArray: []
  },
  data() {
    return {
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
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
    randomRgb: function () {
      var R = Math.floor(Math.random() * 255)
      var G = Math.floor(Math.random() * 255)
      var B = Math.floor(Math.random() * 255)
      return { background: 'rgb(' + R + ',' + G + ',' + B + ')' }
    }
  }
}
</script>
<style lang="scss" scoped>
.page-body {
  z-index: 0;
  .scroller {
    margin-top: -100px;
    overflow-x: visible;
    height: 500px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .el-container {
    height: 100%;
    background: #f5f5f5;
  }
  .main-content {
    box-sizing: border-box;
    background: white;
    // height: 100%;
    min-height: 800px;
    margin: -200px 0 50px 0;
    border-radius: 10px;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
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