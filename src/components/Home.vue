<template>
  <div class="hello">
      <mt-swipe :auto="4000">
        <mt-swipe-item style="background-color:red">1</mt-swipe-item>
        <mt-swipe-item style="background-color:blue">2</mt-swipe-item>
        <mt-swipe-item style="background-color:green">3</mt-swipe-item>
      </mt-swipe>
      <div v-for="topic in topNews" :key="topic.title">
        <p>
          {{ topic.title }}
        </p>
      </div>
      <loading :isLoading="isLoading"></loading>
  </div>
</template>
<script>
import loading from 'Components/elements/loading'
import {
  mapState
} from 'vuex'
export default {
  name: 'home',
  components: {
    loading
  },
  created () {
    this.$store.dispatch('initLastedNews')
  },
  computed: {
    ...mapState(['topNews', 'news', 'isLoading'])
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/custom.scss';
</style>