<template>
  <div v-infinite-scroll="loadMore"
       infinite-scroll-disabled="loading"
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
export default {
  name: 'inifinite-list',
  props: {
    list: {
      type: Array,
      required: true
    },
    loading: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  methods: {
    loadMore: function() {
      this.$emit('loadMore')
    },
    goDetail: function(id) {
      this.$emit('goDetail', id)
    },
    dateFormat: function(date) {
      console.log(date)
      return '2017/12/10'
    }
  }
}
</script>
<style lang="less" scoped>
@import '~@/assets/list.less';
</style>
