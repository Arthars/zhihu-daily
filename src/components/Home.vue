<template>
  <div class="hello">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="topic in this.topNews" :key="topic">
        <div>
          {{ topic.title }}
        </div>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import {
  mapState
} from 'vuex'
export default {
  name: 'home',
  async created () {
    await this.$store.dispatch('initLastedNews')
  },
  computed: {
    ...mapState(['topNews', 'news', 'loading'])
  }
}
</script>
