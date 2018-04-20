<template>
  <div class="side-menu-index">
    <el-menu
      router
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-location"></i>导航一</template>
        <el-menu-item index="content1">用户列表</el-menu-item>
        <el-menu-item index="content2">商家列表</el-menu-item>
        <el-menu-item index="content3">食品列表</el-menu-item>
        <el-menu-item index="content4">订单列表</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
        <el-menu-item index="shopList">商家列表</el-menu-item>
        <el-submenu index="4">
          <template slot="title"><i class="el-icon-setting"></i>选项一</template>
          <el-menu-item index="">用户列表</el-menu-item>
          <el-menu-item index="">商家列表</el-menu-item>
          <el-menu-item index="">食品列表</el-menu-item>
          <el-menu-item index="">订单列表</el-menu-item>
        </el-submenu>
        <el-menu-item index="">订单列表</el-menu-item>
        <el-menu-item index="">管理员列表</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-document"></i>导航三</template>
        <el-menu-item index="">用户列表</el-menu-item>
        <el-menu-item index="">食品列表</el-menu-item>
        <el-menu-item index="">订单列表</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title"><i class="el-icon-setting"></i>导航四</template>
        <el-menu-item index="">用户列表</el-menu-item>
        <el-menu-item index="">商家列表</el-menu-item>
        <el-menu-item index="">食品列表</el-menu-item>
        <el-menu-item index="">订单列表</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
import { Vue } from 'vue-property-decorator'
export default class HelloWorld extends Vue {
  handleOpen (key, keyPath) {
    console.log(key, keyPath)
  }
  handleClose (key, keyPath) {
    console.log(key, keyPath)
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
