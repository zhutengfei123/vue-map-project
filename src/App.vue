<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import { Vue } from 'vue-property-decorator'
export default class App extends Vue {}
</script>
<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  .el-main {
    line-height: initial;
    text-align: initial;
  }
}
</style>
