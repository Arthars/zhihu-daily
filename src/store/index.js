import Vue from 'vue'
import Vuex from 'vuex'
import APIService from '../api'

Vue.use(Vuex)

const Types = {
  SET_LOADING: 'setLoading',
  SET_NEWS: 'setNews',
  SET_TOP_NEWS: 'setTopNews'
}

const state = {
  route: {
    name: '',
    path: '',
    hash: '',
    query: {
    },
    params: {
    },
    fullPath: '',
    meta: {}
  },
  screen: {
    mobile: false,
    tablet: false,
    desktop: false,
    smallScreen: false
  }
}

const mutations = {
  [Types.SET_LOADING] (state, loading) {
    state.loading = loading
  },
  [Types.SET_TOP_NEWS] (state, topNews) {
    state.topNews = topNews
  },
  [Types.SET_NEWS] (state, news) {
    state.news = news
  }
}

const getters = {}

const actions = {
  initLastedNews ({ commit, state }) {
    commit(Types.SET_LOADING, true)
    return APIService.getNews().then((response) => {
      let topNews = response.top_stories
      let news = response.top_stories
      commit(Types.SET_TOP_NEWS, topNews)
      commit(Types.SET_NEWS, news)
      commit(Types.SET_LOADING, false)
    })
  }
}

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  getters: getters,
  actions: actions,
  mutations: mutations,
  modules: {}
})
