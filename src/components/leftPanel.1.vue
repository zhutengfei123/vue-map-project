<template>
  <div class="left-panel-index">
    <div class="top-part">left-panel</div>
    <div class="bottom-part">
      <chart :options="polar" :auto-resize="true" class="pie-chart"></chart>
      <div class="right-part">
        <div :key="index" v-for="(item, index) in peoples">{{item.name+'，'+item.value}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { Vue } from 'vue-property-decorator'
import { peoples } from '../js/constants.js'

export default class Index extends Vue {
  peoples = peoples;
  polar = {
    // grid: { width: "20%" },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    series: [
      {
        name: '访问来源',
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
        data: peoples
      }
    ]
  };
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
