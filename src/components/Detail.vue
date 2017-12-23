<template>
  <div class="con">
    <div class="loading"
         v-if="!topic.body">
      <span class="left"></span>
      <span class="middle"></span>
      <span class="right"></span>
    </div>
    <div v-if="topic.image"
         class="con-img">
      <img :src="topic.image" />
      <div class="con-img-mask"></div>
      <h2 style="color: #5B7492;position: relative;font-size: 0.4rem;">{{topic.title}}</h2>
    </div>
    <div class="con-answer" style="position: relative;font-size: 0.4rem;"
         @click.prevent="go($event)"
         v-html="topic.body"></div>
  </div>
</template>
<script>
import loading from 'Components/elements/loading'
import { mapState } from 'vuex'

export default {
  name: 'detail',
  components: {
    loading
  },
  created() {
    this.$store.dispatch('initTopic')
  },
  computed: {
    ...mapState(['topic', 'isLoading'])
  },
  methods: {
    go(id) {
      console.log(id)
    }
  }
}
</script>
<style lang="less" scoped>
@import '~@/assets/detail.less';
</style>
