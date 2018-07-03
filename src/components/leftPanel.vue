<template>
  <div class="left-panel-index">
    <div class="top-part">{{numData}} {{checkinNum}} {{checkoutNum}}</div>
    <div class="bottom-part">
      <chart :options="polar" :auto-resize="true" class="pie-chart"></chart>
      <div class="right-part">
        <div :key="index" v-for="(item, index) in memberChartInfo">{{item.name+'，'+item.value}}</div>
      </div>
    </div>
    <el-button class="my-btn1" @click="$emit('changeStatus','leftBoxOffset',offset===0?-300:0)">
      <i :class="offset===0?'el-icon-arrow-left':'el-icon-arrow-right'"></i>
    </el-button>
  </div>
</template>
<script>
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import { peoples } from '../js/constants.js'

@Component({})
export default class Index extends Vue {
  @Prop() offset;
  @Prop() numData;
  @Prop() checkinNum;
  @Prop() checkoutNum;
  @Prop() memberChartInfo;
  peoples = peoples;
  polar = {};
  @Watch('memberChartInfo')
  onChildChanged () {
    this.polar = {
      // grid: { width: '20%' },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      series: [
        {
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: this.memberChartInfo
        }
      ]
    }
  }
  created () {
    console.log('1121', this.checkoutNum)

    console.warn('ddd', this.polar)
  }
}
</script>
<style lang="less">
.left-panel-index {
  width: 100%;
  .top-part {
    height: 50%;
  }
  .bottom-part {
    height: 50%;
    .pie-chart {
      display: inline-block;
      width: 40%;
      height: 100%;
    }
    .right-part {
      display: inline-block;
      text-align: left;
      width: 50%;
      height: 70%;
      color: white;
      vertical-align: bottom;
    }
  }
}
</style>
