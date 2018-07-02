<template>
  <div class="side-menu-index">
    <el-menu
      router
      :collapse="collapse"
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu :key="index" v-for="(item,index) in menuList" :index="index+''">
        <template slot="title"><i :class="item.icon"></i>{{item.title}}</template>
        <el-menu-item :key="i" v-for="(subItem,i) in item.subMenuList" :index="subItem.router"><i :class="item.icon"></i>{{subItem.title}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
import { Vue } from 'vue-property-decorator'
export default class HelloWorld extends Vue {
  collapse = false
  menuList = [
    { title: '导航1',
      icon: 'el-icon-location',
      subMenuList: [
        { title: '选项1', icon: 'el-icon-location', router: 'content1' },
        { title: '选项2', icon: 'el-icon-location', router: 'content2' },
        { title: '选项3', icon: 'el-icon-location', router: 'content3' },
        { title: '选项4', icon: 'el-icon-location', router: 'content4' }
      ]
    },
    { title: '导航2',
      icon: 'el-icon-location',
      subMenuList: [
        { title: '选项1', icon: 'el-icon-location', router: 'content5' },
        { title: '选项2', icon: 'el-icon-location', router: 'content6' },
        { title: '选项3', icon: 'el-icon-location', router: 'content7' }
      ]
    },
    { title: '导航3',
      icon: 'el-icon-location',
      subMenuList: [
        { title: '选项1', icon: 'el-icon-location', router: 'content8' },
        { title: '选项2', icon: 'el-icon-location', router: 'content9' },
        { title: '选项3', icon: 'el-icon-location', router: 'content10' },
        { title: '选项4', icon: 'el-icon-location', router: 'content11' }
      ]
    },
    { title: '导航4',
      icon: 'el-icon-location',
      subMenuList: [
        { title: '选项1', icon: 'el-icon-location', router: 'content12' }
      ]
    }
  ]
  handleOpen (key, keyPath) {
    console.log('1', key, keyPath)
  }
  handleClose (key, keyPath) {
    console.log('2', key, keyPath)
  }
}
</script>
<style lang="less" scoped>
  .side-menu-index, .el-menu {
    width: 100%;
    height: 100%;
    border-right: initial;
    overflow: hidden;
  }
</style>
