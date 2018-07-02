<template>
  <div class="index" v-loading="loading">
    <baidu-map class="map" center="太原市" :scroll-wheel-zoom='true' :mapStyle="mapStyle">
      <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
      <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list>
      <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
      <bm-point-collection :points="points" shape="BMAP_POINT_SHAPE_STAR" color="red" ></bm-point-collection>
    </baidu-map>
    <left-panel class="left-panel"/>
    <right-panel class="right-panel"/>
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
  @IndexState initData
  loading = false
  created () {
    this.loading = true
    setTimeout(() => {
      this.loading = false
    }, 2000)
  }
  points = points
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
  methods = {
    clickHandler (e) {
      alert(`单击点${e.point.name}的坐标为：${e.point.lng}, ${e.point.lat}`)
    }
  }
  // created () {
  //   const params = {
  //     shopperId: '',
  //     userType: 'parentShop',
  //     shopperPid: 9355,
  //     payModels: '0,1',
  //     startTime: '2018-04-01',
  //     endTime: '2018-04-17',
  //     shopperIds: '',
  //     reportType: 'date',
  //     pageNum: 1,
  //     pageSize: 20
  //   }
  //   this.init(params).then(msg => {
  //     if (msg) {
  //       this.$message.warning(msg)
  //     } else {
  //       console.log('initData', this.initData)
  //     }
  //   }).catch(error => {
  //     this.$message.error(error)
  //   })
  // }
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
    }

    .top-panel {
      position: absolute;
      top: 0;
      height: 80px;
      background: blue;
      left: 100px;
      right: 100px;
      margin-left: auto;
      margin-right: auto;
      opacity:0.3;
    }
    .left-panel {
      left: 50px;
    }
    .right-panel {
      right: 50px;
    }
    .left-panel, .right-panel {
      // opacity:0.3;
      position: absolute;
      top: 120px;
      bottom: 120px;
      background: red;
      width: 300px;
    }
  }
</style>
