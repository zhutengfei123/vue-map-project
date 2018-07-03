<template>
  <div class="right-panel-index">
    <h1>right-panel</h1>
    <el-button class="my-btn2" @click="$emit('changeStatus','rightBoxOffset',offset===0?-300:0)">
      <i :class="offset===0?'el-icon-arrow-right':'el-icon-arrow-left'"></i>
    </el-button>
  </div>
</template>
<script>
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component({})
export default class Index extends Vue {
  @Prop()
  offset
}
</script>
<style lang="less">
  .right-panel-index {}
</style>
