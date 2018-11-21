<template>
  <div id="app">
    <!-- <img alt="Vue logo" :src=imgPath /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <home></home>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Home from './pages/Home.vue'
export default {
  name: 'app',
  components: {
    Home
  },
  data() {
    return {
      imgPath: require('./assets/logo.png')
    }
  }
}
</script>

<style lang="scss">
// @import 'assets/styles/base.scss'
html,
body {
  width: 100%;
  height: 100%;
  min-width: 1024px;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
}

* {
  font-family: Microsoft YaHei;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

#app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>
