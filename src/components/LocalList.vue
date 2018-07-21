<script>
import { merge } from 'lodash'
export default {
  name: 'LocalList',
  props: { // 接收用户配置数据源data
    data: {
      type: Array,
      default () { return [] }
    }
  },
  data () { // 设置分页数据pageSize和pageIndex
    return {
      pageSize: 10,
      pageIndex: 1
    }
  },
  computed: {
    sourceData () { // clone源数据
      return merge([], this.data)
    },
    resultData () { // 过滤得到最终数据
      const start = (this.pageIndex - 1) * this.pageSize
      const end = start + this.pageSize
      return this.sourceData.slice(start, end)
    },
    total () { // 总数
      return this.sourceData.length
    }
  },
  render () {
    return this.$scopedSlots.default({
      tableAttrs: { // 抛出table相关属性
        'data': this.resultData
      },
      pageAttrs: { // 抛出page相关属性
        'current': this.pageIndex,
        'page-size': this.pageSize,
        'total': this.total
      },
      pageEvents: { // 抛出page相关事件句柄
        'on-page-size-change': (size) => {
          this.pageIndex = 1
          this.pageSize = size
        },
        'on-change': (index) => {
          this.pageIndex = index
        }
      }
    })
  }
}
</script>
