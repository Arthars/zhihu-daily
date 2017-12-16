<template>
  <div v-infinite-scroll="loadMore"
       infinite-scroll-disabled="inifiniteLoading"
       infinite-scroll-distance="10">
    <div class="list"
         v-for="dailyNews in list"
         :key="dailyNews.date">
      <p class="list-time">{{ dateFormat(dailyNews.date) }}</p>
      <div class="list-con"
           link
           v-for="item in dailyNews.stories"
           :key="item.id"
           @click="goDetail(item.id)">
        <img :src="item.images[0]" />
        <p>{{item.title}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
import { mapState } from 'vuex'

export default {
  name: 'inifinite-list',
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapState(['inifiniteLoading'])
  },
  methods: {
    loadMore: function() {
      this.$emit('loadMore')
    },
    goDetail: function(id) {
      this.$emit('goDetail', id)
    },
    dateFormat: function(date) {
      return moment(date).format('YYYY/MM/DD')
    }
  }
}
</script>
<style lang="less" scoped>
@import '~@/assets/list.less';
</style>
