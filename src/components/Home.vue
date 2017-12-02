<template>
  <div class="hello">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="topic in topNews"
                     :key="topic.title">
        <div class="top-news">
          {{ topic.title }}
        </div>
      </mt-swipe-item>
    </mt-swipe>
    <p v-for="topic in news"
       :key="topic.title"
       @click="goDetail(topic.id)">
      {{ topic.title }}
    </p>
    <loading :isLoading="isLoading"></loading>
  </div>
</template>
<script>
import loading from 'Components/elements/loading'
import { mapState } from 'vuex'
export default {
  name: 'home',
  components: {
    loading
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
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/home.scss';
</style>
