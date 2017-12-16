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
  computed: {
    ...mapState(['topNews', 'news', 'isLoading'])
  },
  methods: {
    goDetail(id) {
      console.log(id)
    },
    loadMore() {
      this.$store.dispatch('loadNextNews')
    }
  }
}
</script>
<style lang="less" scoped>
@import '~@/assets/home.less';
</style>
