<template>
  <div class="hello">
    <mt-swipe :auto="4000"
              :show-indicators="false">
      <mt-swipe-item v-for="topic in topNews"
                     :key="topic.title">
        <div @click="goDetail(topic.id)"
             class="swiper-slide">
          <img :src="topic.image">
          <div></div>
          <h3>{{topic.title}}</h3>
        </div>
      </mt-swipe-item>
    </mt-swipe>
    <inifinite-list :list="news"
                    :loading="inifiniteLoading"
                    @loadMore="loadMore"
                    @goDetail="goDetail"></inifinite-list>
    <loading :isLoading="isLoading"></loading>
  </div>
</template>
<script>
import loading from 'Components/elements/loading'
import inifiniteList from 'Components/elements/inifinite-list'
import { mapState } from 'vuex'
export default {
  name: 'home',
  components: {
    loading,
    inifiniteList
  },
  created() {
    this.$store.dispatch('initLastedNews')
  },
  data() {
    return {
      inifiniteLoading: false
    }
  },
  computed: {
    ...mapState(['topNews', 'news', 'isLoading']),
    dateFormat() {
      return '2017/12/10'
    }
  },
  methods: {
    goDetail(id) {
      console.log(id)
    },
    loadMore() {
      this.inifiniteLoading = true
      setTimeout(() => {
        console.log('Home loadMore')
        this.inifiniteLoading = false
      }, 2500)
    }
  }
}
</script>
<style lang="less" scoped>
@import '~@/assets/home.less';
</style>
