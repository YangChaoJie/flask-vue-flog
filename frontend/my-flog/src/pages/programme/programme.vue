<template>
    <div class="programme">
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
<style lang="scss" scoped>
.programme {
  .el-container {
    background-color: rosybrown;
  }
}
</style>

