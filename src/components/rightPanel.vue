<template>
  <div class="right-panel-index">
    <el-button class="my-btn2" @click="$emit('changeStatus','rightBoxOffset',offset===0?-300:0)">
      <i :class="offset===0?'el-icon-arrow-right':'el-icon-arrow-left'"></i>
    </el-button>
    <div class="right-con">
      <div v-for="(item,index) in data.data2" :key="index">
        <p class="right-con-title">犯罪人{{index+1}}：</p>
        <p>犯罪类型：{{item.crimeType}}</p>
        <p>犯罪方式：{{item.crimeWays}}</p>
        <p>犯罪描述：{{item.crimeDec}}</p>
        <p>犯罪时间：{{item.detTime}}</p>
        <p>犯罪人身份证号：{{item.idcard}}</p>
        <p>id：{{item.id}}</p>
        <p>事件id：{{item.eventId}}</p>
        <p>相似：{{item.similary}}</p>
        <p>终端id：{{item.terminalId}}</p>
      </div>
      <div v-for="(item,index) in data.data1" :key="index">
        <p class="right-con-title">犯罪人{{index+6}}：</p>
        <p>犯罪类型：{{item.crimeType}}</p>
        <p>犯罪方式：{{item.crimeWays}}</p>
        <p>犯罪描述：{{item.crimeDec}}</p>
        <p>犯罪时间：{{item.detTime}}</p>
        <p>犯罪人身份证号：{{item.idcard}}</p>
        <p>id：{{item.id}}</p>
        <p>事件id：{{item.eventId}}</p>
        <p>相似：{{item.similary}}</p>
        <p>终端id：{{item.terminalId}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component({})
export default class Index extends Vue {
  @Prop()
  offset
  @Prop()
  data
  created () {
    console.warn('ddd', this.data)
  }
}
</script>
<style lang="less">
  .right-panel-index {
    text-align: left;
    p {
      padding: 0 10px;
      color: #ffffff;
    }
    .right-con-title {
      text-align: center;
    }
    .right-con {
      width: 100%;
      height: 100%;
      overflow-y: scroll;
    }
  }
</style>
