<template>
  <div class="left-panel-index">
    <h1>left-panel</h1>
    <div class="bottom-part">
      <chart :options="polar" :auto-resize="true" class="pie-chart"></chart>
      <div class="left-text"><div v-for="(item, index) in items" :key="index">{{item.name+'-'+item.value}}</div></div>
    </div>
    <img src="../imgs/title.png" />
  </div>
</template>
<script>
import { Vue } from 'vue-property-decorator'

export default class Index extends Vue {
  items = [
    {value: 335, name: '直接访问'},
    {value: 310, name: '邮件营销'},
    {value: 234, name: '联盟广告'},
    {value: 135, name: '视频广告'},
    {value: 1548, name: '搜索引擎'}
  ]
  polar = {
    // grid: {
    //   right: '30%'
    // },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    // legend: {
    //   orient: 'vertical',
    //   x: 'right',
    //   top: 'middle',
    //   right: -200,
    //   data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    // },
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
    .bottom-part {
      width: 100%;
      height: 50%;
      .pie-chart {
      display: inline-block;
      width: 40%;
      height: 50%;
      vertical-align: text-bottom;
    }
    .left-text {
      text-align: left;
      display: inline-block;
      width: 50%;
      height: 50%;
      color: #c0c2bc;
      font-size: 14px;
    }
    }
  }
</style>
