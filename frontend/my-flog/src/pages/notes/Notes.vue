<template>
    <div class="note">
        <page-body :leftShow="false"></page-body>
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
.note {
  .el-container {
    background-color: aqua;
  }
}
</style>