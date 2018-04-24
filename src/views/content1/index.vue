<template>
  <div class="content1-index">
    <my-table/>
  </div>
</template>
<script>
import { Vue, Component } from 'vue-property-decorator'
const MyTable = () => import('@/components/table')
@Component({
  components: { MyTable }
})
export default class Content1 extends Vue {}
</script>
<style lang="less">
</style>
