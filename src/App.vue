<template>
  <div id="app">
    <h1>列表1</h1>
    <LocalList
      :data="data1">
      <div slot-scope="{ tableAttrs, pageAttrs, pageEvents }">
        <Table
          :columns="columns"
          stripe
          v-bind="tableAttrs"></Table>
        <Page
          show-sizer
          show-total
          show-elevator
          v-bind="pageAttrs"
          v-on="pageEvents"></Page>
      </div>
    </LocalList>

    <h1>列表2</h1>
    <LocalList
      :data="data2">
      <div slot-scope="{ tableAttrs, pageAttrs, pageEvents }">
        <Table
          size="small"
          :columns="columns"
          v-bind="tableAttrs"></Table>
        <Page
          simple
          v-bind="pageAttrs"
          v-on="pageEvents"></Page>
      </div>
    </LocalList>

    <h1>列表3</h1>
    <LocalList
      :data="data3">
      <div slot-scope="{ tableAttrs, pageAttrs, pageEvents }">
        <Table
          border
          :columns="columns"
          v-bind="tableAttrs"></Table>
        <Row>
          <Col span="12" style="padding:5px 10px;text-align: left;">
            <span>共{{ pageAttrs.total }}条</span>
          </Col>
          <Col span="12">
            <Page
              size="small"
              v-bind="pageAttrs"
              v-on="pageEvents"></Page>
          </Col>
        </Row>
      </div>
    </LocalList>
  </div>
</template>

<script>
import LocalList from './components/LocalList'
import { data1, data2, data3 } from './assets/mockData'
export default {
  name: 'App',
  components: {
    LocalList
  },
  data () {
    return {
      columns: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        }
      ],
      data1,
      data2,
      data3
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.ivu-page {
  text-align: right;
  margin: 5px 10px 5px 0;
}
</style>
