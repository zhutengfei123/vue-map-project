<template>
  <div class="content2-index">
    <baidu-map class="map" center="太原市"></baidu-map>
  </div>
</template>
<script>
import { Vue } from 'vue-property-decorator'
export default class Content2 extends Vue {}
</script>
<style lang="less">
.content2-index {
  width: 100%;
  height: 100%;
  .map {
    width: 100%;
    height: 100%;
  }
}
</style>
