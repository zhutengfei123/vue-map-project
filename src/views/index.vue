<template>
  <div class="index" v-loading="loading">
    <baidu-map class="map" center="太原市" :scroll-wheel-zoom='true' :mapStyle="mapStyle">
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
      <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
      <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
      <bm-point-collection :points="points" shape="BMAP_POINT_SHAPE_STAR" color="red" ></bm-point-collection>
    </baidu-map>
    <transition name="el-zoom-in-left">
      <left-panel :memberChartInfo="memberChartInfo" :numData="numData" :checkinNum="checkinNum" :checkoutNum="checkoutNum" :offset="leftBoxOffset" :style="`left:${leftBoxOffset}px;`" class="left-panel" @changeStatus="handleChangeStatus"/>
    </transition>
    <transition name="el-zoom-in-right">
      <right-panel :data="dataInfo" :offset="rightBoxOffset" :style="`right:${rightBoxOffset}px;`" class="right-panel" @changeStatus="handleChangeStatus"/>
    </transition>
    <top-panel class="top-panel"/>
  </div>
</template>
<script>
import { Vue, Component } from 'vue-property-decorator'
import {State, Action, namespace} from 'vuex-class'
import { points } from '../js/constants.js'
const leftPanel = () => import('@/components/leftPanel')
const RightPanel = () => import('@/components/rightPanel')
const TopPanel = () => import('@/components/topPanel')
const IndexAction = namespace('index', Action)
const IndexState = namespace('index', State)
@Component({
  components: { leftPanel, RightPanel, TopPanel }
})
export default class Index extends Vue {
  @IndexAction init
  @IndexAction getNum
  @IndexAction getCheckinNum
  @IndexAction getCheckoutNum
  @IndexAction getCheckData
  @IndexAction getSensitiveData
  @IndexAction getCrimeData
  @IndexAction getMemberChartInfo
  @IndexState initData
  @IndexState numData
  @IndexState checkinNum
  @IndexState checkoutNum
  @IndexState checkData
  @IndexState sensitiveData
  @IndexState crimeData
  @IndexState memberChartInfo
  loading = false
  leftBoxOffset = -300
  rightBoxOffset = -300
  points = points
  dataInfo = {
    data1: [],
    data2: []
  }
  mapStyle = {
    styleJson: [
      {
        'featureType': 'land',
        'elementType': 'geometry',
        'stylers': {'color': '#212121'}
      },
      {
        'featureType': 'building',
        'elementType': 'geometry',
        'stylers': {'color': '#2b2b2b'}
      },
      {
        'featureType': 'highway',
        'elementType': 'all',
        'stylers': {'lightness': -42, 'saturation': -91}
      },
      {
        'featureType': 'arterial',
        'elementType': 'geometry',
        'stylers': {'lightness': -77, 'saturation': -94}
      },
      {
        'featureType': 'green',
        'elementType': 'geometry',
        'stylers': {'color': '#1b1b1b'}
      },
      {
        'featureType': 'water',
        'elementType': 'geometry',
        'stylers': {'color': '#181818'}
      },
      {
        'featureType': 'subway',
        'elementType': 'geometry.stroke',
        'stylers': {'color': '#181818'}
      },
      {
        'featureType': 'railway',
        'elementType': 'geometry',
        'stylers': {'lightness': -52}
      },
      {
        'featureType': 'all',
        'elementType': 'labels.text.stroke',
        'stylers': {'color': '#313131'}
      },
      {
        'featureType': 'all',
        'elementType': 'labels.text.fill',
        'stylers': {'color': '#8b8787'}
      },
      {
        'featureType': 'manmade',
        'elementType': 'geometry',
        'stylers': {'color': '#1b1b1b'}
      },
      {
        'featureType': 'local',
        'elementType': 'geometry',
        'stylers': {'lightness': -75, 'saturation': -91}
      },
      {
        'featureType': 'subway',
        'elementType': 'geometry',
        'stylers': {'lightness': -65}
      },
      {
        'featureType': 'railway',
        'elementType': 'all',
        'stylers': {'lightness': -40}
      },
      {
        'featureType': 'boundary',
        'elementType': 'geometry',
        'stylers': {'color': '#8b8787', 'weight': '1', 'lightness': -29}
      }
    ]
  }
  created () {
    this.loading = true
    setTimeout(() => {
      this.loading = false
    }, 2000)
    this.initGetNum()
    this.initMemberChartInfo()
    this.getCheckinNum()
    this.getCheckoutNum()
    this.getCheckData({pageSize: 5, currentPage: 1}).then(() => {
      this.dataInfo.data1 = this.checkData.result
    }).catch(error => {
      this.$message.error(error)
    })
    this.getSensitiveData({pageSize: 5, currentPage: 1}).then(() => {
      this.dataInfo.data2 = this.sensitiveData.result
    }).catch(error => {
      this.$message.error(error)
    })

    this.getCrimeData({pageSize: 5, currentPage: 1})
  }
  handleChangeStatus (a, b) {
    this[a] = b
  }
  initMemberChartInfo () {
    const params = {}
    this.getMemberChartInfo(params).then(() => {
      console.log('memberChartInfo', this.memberChartInfo)
    }).catch(error => {
      this.$message.error(error)
    })
  }
  clickHandler (e) {
    alert(`单击点${e.point.name}的坐标为：${e.point.lng}, ${e.point.lat}`)
  }
  initGetNum () {
    const params = {}
    this.getNum(params).then(() => {
      console.log('numData', this.numData)
    }).catch(error => {
      this.$message.error(error)
    })
  }
}
</script>
<style lang="less">
  .index {
    position: relative;
    height: 100%;
    width: 100%;
    .map {
      height: 100%;
      width: 100%;
      background-color: #50738a;
    }
    .top-panel {
      padding: 20px;
      font-size: 28px;
      position: absolute;
      top: 0;
      left: 50%;
      height: 40px;
      margin-left: -150px;
      color: #ffffff;
      width: 300px;
      line-height: 40px;
      text-align: center;
    }
    .left-panel {
      left: -300px;
    }
    .right-panel {
      right: -300px;
    }
    .left-panel, .right-panel {
      opacity: 0.7;
      position: absolute;
      height: 600px;
      margin-top: -300px;
      top: 50%;
      background: #000;
      width: 300px;
    }
    .my-btn1, .my-btn2 {
      position: absolute;
      width: 30px;
      padding: 0;
      height: 100px;
      top: 50%;
      margin-top: -50px;
    }
    .my-btn1 {
      right: -30px;
    }
    .my-btn2 {
      left: -30px;
    }
    .BMap_cpyCtrl, .anchorBL {
      display: none;
    }
  }
</style>
