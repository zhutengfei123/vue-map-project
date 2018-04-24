<template>
  <div class="my-table-index">
    <el-table :data="tableData" :span-method="objectSpanMethod">
      <el-table-column prop="id" label="序号"></el-table-column>
      <el-table-column prop="city" label="城市"></el-table-column>
      <el-table-column prop="shop" label="店铺"></el-table-column>
      <el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column label="实收款构成">
        <el-table-column prop="cash" label="现金"></el-table-column>
        <el-table-column prop="alipay" label="支付宝"></el-table-column>
        <el-table-column prop="weixin" label="微信"></el-table-column>
        <el-table-column prop="subtotal" label="小计"></el-table-column>
        <el-table-column prop="other" label="其他"></el-table-column>
      </el-table-column>
      <el-table-column prop="total" label="合计"></el-table-column>
    </el-table>
  </div>
</template>
<script>
import { Vue } from 'vue-property-decorator'
export default class MyTable extends Vue {
  tableData = [
    { id: '1', total: '234235435.5', date: '2016-05-03', city: '上海', shop: '肯德基号店肯德基的鸡', subtotal: '235434.55', cash: '23423.55', alipay: '234.55', weixin: '8765.55', other: '846.69' },
    { id: '2', total: '234235435.5', date: '2016-05-03', city: '上海', shop: '武林门店', subtotal: '235434.55', cash: '23423.55', alipay: '234.55', weixin: '8765.55', other: '846.69' },
    { id: '3', total: '234235435.5', date: '2016-05-03', city: '上海', shop: '武林门店', subtotal: '235434.55', cash: '23423.55', alipay: '234.55', weixin: '8765.55', other: '846.69' },
    { id: '4', total: '234235435.5', date: '2016-05-03', city: '上海', shop: '肯德基1号店的鸡小计：', subtotal: '235434.55', cash: '23423.55', alipay: '234.55', weixin: '8765.55', other: '846.69' },
    { id: '5', total: '234235435.5', date: '2016-05-03', city: '上海', shop: '肯德基号店肯德基的鸡', subtotal: '235434.55', cash: '23423.55', alipay: '234.55', weixin: '8765.55', other: '846.69' },
    { id: '6', total: '234235435.5', date: '2016-05-03', city: '上海', shop: '武林门店', subtotal: '235434.55', cash: '23423.55', alipay: '234.55', weixin: '8765.55', other: '846.69' },
    { id: '7', total: '234235435.5', date: '2016-05-03', city: '上海', shop: '武林门店', subtotal: '235434.55', cash: '23423.55', alipay: '234.55', weixin: '8765.55', other: '846.69' },
    { id: '8', total: '234235435.5', date: '2016-05-03', city: '上海', shop: '肯德基1号店的鸡小计：', subtotal: '235434.55', cash: '23423.55', alipay: '234.55', weixin: '8765.55', other: '846.69' },
    { id: '9', total: '234235435.5', date: '2016-05-03', city: '杭州小计：', shop: '武林门店', subtotal: '235434.55', cash: '23423.55', alipay: '234.55', weixin: '8765.55', other: '846.69' },
    { id: '合计：', total: '234235435.5', date: '2016-05-03', city: '上海', shop: '武林门店', subtotal: '235434.55', cash: '23423.55', alipay: '234.55', weixin: '8765.55', other: '846.69' }
  ]
  objectSpanMethod ({ row, column, rowIndex, columnIndex }) {
    if (rowIndex === 9) {
      if (columnIndex === 0) {
        return [1, 4]
      }
      if (columnIndex > 0 && columnIndex < 4) {
        return [0, 0]
      }
    }
    if (rowIndex === 3 || rowIndex === 7 || rowIndex === 8) {
      if (columnIndex === 2) {
        return [1, 2]
      }
      if (columnIndex === 3) {
        return [0, 0]
      }
    }
    if (columnIndex === 1) {
      if (rowIndex === 0) {
        return {
          rowspan: 8,
          colspan: 1
        }
      } else if (rowIndex > 0 && rowIndex < 8) {
        return {
          rowspan: 0,
          colspan: 0
        }
      } else {
        return {
          rowspan: 1,
          colspan: 1
        }
      }
    }
    if (columnIndex === 2) {
      if (rowIndex === 0 || rowIndex === 4) {
        return {
          rowspan: 3,
          colspan: 1
        }
      } else if ((rowIndex > 0 && rowIndex < 3) || (rowIndex > 4 && rowIndex < 7)) {
        return {
          rowspan: 0,
          colspan: 0
        }
      } else {
        return {
          rowspan: 1,
          colspan: 1
        }
      }
    }
  }
}
</script>
<style lang="less" scoped>
  .my-table-index {
    .el-table th, td {
      text-align: center;
    }
  }
</style>
