<template>
    <div class="about">
        <page-body :leftShow="false">
            <div class="container" slot="page"></div>
        </page-body>
    </div>
</template>
<script>
import PageBody from 'components/PageBody.vue'
export default {
  components: {
    PageBody
  }
}
</script>
<style lang="scss">
.about {
  .container {
    background-color: goldenrod;
    height: 100%;
    width: 100%;
  }
}
</style>