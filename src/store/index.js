import Vue from 'vue'
import Vuex from 'vuex'
import APIService from '../api'

Vue.use(Vuex)

const Types = {
  SET_LOADING_STATE: 'setLoading',
  SET_NEWS: 'setNews',
  SET_TOP_NEWS: 'setTopNews'
}

const state = {
  topNews: [],
  news: [],
  isLoading: false
}

const mutations = {
  [Types.SET_LOADING_STATE] (state, loading) {
    state.isLoading = loading
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
    commit(Types.SET_LOADING_STATE, true)
    return APIService.getNews().then((response) => {
      console.log(response)
      let topNews = response.data.topStories
      let news = response.data.stories
      commit(Types.SET_TOP_NEWS, topNews)
      commit(Types.SET_NEWS, news)
      commit(Types.SET_LOADING_STATE, false)
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
