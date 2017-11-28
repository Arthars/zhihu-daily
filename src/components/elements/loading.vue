<template>
  <div class="mint-indicator" v-show="isLoading">
    <div class="mint-indicator-wrapper" style="padding: 15px;">
      <span class="mint-indicator-spin">
        <div class="mint-spinner-snake" style="border-top-color: rgb(204, 204, 204); border-left-color: rgb(204, 204, 204); border-bottom-color: rgb(204, 204, 204); height: 32px; width: 32px;">
        </div>
      </span> 
      <span class="mint-indicator-text"></span>
    </div> 
    <div class="mint-indicator-mask"></div>
    </div>
</template>
<script>
import { Indicator } from 'mint-ui'

export default {
  name: 'loading',
  props: {
    isLoading: {
      type: Boolean,
      required: false
    }
  },
  methods: {
    openIndicator () {
      Indicator.open()
    }
  }
}
</script>