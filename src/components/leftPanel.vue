<template>
  <div class="left-panel-index">
    <div class="left-con">
      <div class="top-part">
        <div class="total">共计<span class="number">{{numData}}</span>人</div>
        <div class="block">
          <div class="title">
            刷证通过
          </div>
          <div class="number">
            {{checkinNum}}
          </div>
        </div>
        <div class="block">
          <div class="title">
            刷证不通过
          </div>
          <div class="number">
            {{checkoutNum}}
          </div>
        </div>
      </div>
      <div class="bottom-part">
        <div class="title">人员来源统计图</div>
        <chart :options="polar" :auto-resize="true" class="pie-chart"></chart>
        <div class="right-part">
          <div :key="index" v-for="(item, index) in memberChartInfo">{{item.name+'，'+item.value}}</div>
        </div>
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
}
</script>
<style lang="less">
.left-panel-index {
  color: white;
  width: 100%;
  .left-con {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    direction: rtl;
    unicode-bidi: bidi-override;
  }
  .top-part {
    padding-top: 10%;
    height: 30%;
    .total {
      font-size: 16px;
      .number {
        font-size: 28px;
        margin-left: 5px;
        margin-right: 5px;
      }
    }
    .block {
      margin-top: 5%;
      display: inline-block;
      width: 40%;
      .title {
        padding: 16px 0;
        background-color: rgba(76, 108, 157, 0.9);
      }
      .number {
        padding: 12px 0;
        background-color: rgba(68, 103, 142, 0.7);
      }
    }
  }
  .bottom-part {
    height: 50%;
    .title {
      font-size: 18px;
    }
    .pie-chart {
      display: inline-block;
      width: 50%;
      height: 50%;
    }
    .right-part {
      display: inline-block;
      text-align: left;
      width: 40%;
      height: 60%;
      vertical-align: middle;
    }
  }
}
</style>
