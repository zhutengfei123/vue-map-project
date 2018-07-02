<template>
  <transition name="el-zoom-in-right">
    <div v-show="showRightBox" class="right-panel-index">
      <h1>right-panel</h1>
      <el-button class="my-btn2" @click="handleClick">
        <i class="el-icon-arrow-left"></i>
      </el-button>
    </div>
  </transition>
</template>
<script>
import { Vue } from 'vue-property-decorator'

export default class Index extends Vue {
  showRightBox = true
  handleClick () {
    console.log('df')
    this.showRightBox = !this.showRightBox
  }
}
</script>
<style lang="less">
  .right-panel-index {}
</style>
