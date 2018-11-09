<template>
    <div>
        <div>{{ title }}</div>
        <img alt="Vue logo" :src=imgPath />
    </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      title: "这是我的博客 主页",
      imgPath: require("../assets/logo.png")
    };
  }
};
</script>
