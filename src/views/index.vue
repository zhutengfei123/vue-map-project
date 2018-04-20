<template>
  <div class="index">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <side-menu/>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { Vue, Component } from 'vue-property-decorator'
import {State, Action, namespace} from 'vuex-class'
const SideMenu = () => import('@/components/sideMenu/index')
const IndexAction = namespace('index', Action)
const IndexState = namespace('index', State)
@Component({
  components: { SideMenu }
})
export default class Index extends Vue {
  @IndexAction init
  @IndexState initData
  created () {
    const params = {
      shopperId: '',
      userType: 'parentShop',
      shopperPid: 9355,
      payModels: '0,1',
      startTime: '2018-04-01',
      endTime: '2018-04-17',
      shopperIds: '',
      reportType: 'date',
      pageNum: 1,
      pageSize: 20
    }
    this.init(params).then(msg => {
      if (msg) {
        this.$message.warning(msg)
      } else {
        console.log('initData', this.initData)
      }
    }).catch(error => {
      this.$message.error(error)
    })
  }
}
</script>
<style lang="less">
  .index {
    height: 100%;
    .el-container {
      height: 100%;
    }
    .el-header {
      background-color: #B3C0D1;
      color: #333;
      text-align: center;
      line-height: 60px;
    }
    .el-aside {
      color: #333;
      text-align: center;
      line-height: 200px;
    }
    .el-main {
      background-color: #E9EEF3;
      color: #333;
      text-align: center;
      line-height: 160px;
      overflow-x: hidden;
      overflow-y: auto;
    }
  }
</style>
