// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Store from './store'
import { sync } from 'vuex-router-sync'

Vue.config.productionTip = false

Vue.use(MintUI)

sync(Store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: Store,
  template: '<App/>',
  components: { App }
})
