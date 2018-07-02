<template>
  <transition name="el-zoom-in-left">
    <div v-show="showLeftBox" class="left-panel-index">
      <h1>left-panel</h1>
      <chart :options="polar" :auto-resize="true" class="pie-chart"></chart>
      <el-button class="my-btn1" @click="showLeftBox=!showLeftBox">
        <i class="el-icon-arrow-right"></i>
      </el-button>
    </div>
  </transition>
</template>
<script>
import { Vue } from 'vue-property-decorator'

export default class Index extends Vue {
  showLeftBox = true
  polar = {
    grid: {width: '20%'},
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      x: 'right',
      data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
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
        data: [
          {value: 335, name: '直接访问'},
          {value: 310, name: '邮件营销'},
          {value: 234, name: '联盟广告'},
          {value: 135, name: '视频广告'},
          {value: 1548, name: '搜索引擎'}
        ]
      }
    ]
  }
}
</script>
<style lang="less">
  .left-panel-index {
    width: 100%;
    .pie-chart {
        width: 100%;
    }
  }
</style>
