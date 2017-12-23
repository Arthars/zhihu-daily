import Vue from 'vue'
import Vuex from 'vuex'
import APIService from '../api'
import _ from 'lodash'

Vue.use(Vuex)

const Types = {
  SET_LOADING_STATE: 'setLoading',
  SET_NEWS: 'setNews',
  SET_TOP_NEWS: 'setTopNews',
  SET_LASTED_DATE: 'setLastedDate',
  SET_INIFINITE_LOADING: 'setInifiniteLoading',
  SET_TOPIC: 'setTopic'
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
  topNews: [],
  news: [],
  isLoading: false,
  lastedDate: '',
  inifiniteLoading: false,
  topic: {}
}

const mutations = {
  [Types.SET_LOADING_STATE](state, loading) {
    state.isLoading = loading
  },
  [Types.SET_TOP_NEWS](state, topNews) {
    state.topNews = topNews
  },
  [Types.SET_NEWS](state, news) {
    state.news = news
  },
  [Types.SET_LASTED_DATE](state, date) {
    state.lastedDate = date
  },
  [Types.SET_INIFINITE_LOADING](state, status) {
    state.inifiniteLoading = status
  },
  [Types.SET_TOPIC](state, topic) {
    state.topic = topic
  }
}

const getters = {}

const actions = {
  async initLastedNews({ commit, state }) {
    commit(Types.SET_LOADING_STATE, true)
    let response = await APIService.getNews()
    let topNews = response.data.topStories
    let news = _.cloneDeep(state.news)
    news.push(response.data)
    commit(Types.SET_TOP_NEWS, topNews)
    commit(Types.SET_NEWS, news)
    commit(Types.SET_LASTED_DATE, response.data.date)
    commit(Types.SET_LOADING_STATE, false)
  },
  async loadNextNews({ commit, state }) {
    if (state.lastedDate) {
      commit(Types.SET_INIFINITE_LOADING, true)
      let response = await APIService.getNewsByDate(state.lastedDate)
      let news = _.cloneDeep(state.news)
      news.push(response.data)
      commit(Types.SET_NEWS, news)
      commit(Types.SET_LASTED_DATE, response.data.date)
      commit(Types.SET_INIFINITE_LOADING, false)
    }
  },
  async initTopic({ commit, state, rootState }) {
    let topicId = state.route.params.id
    commit(Types.SET_LOADING_STATE, true)
    let response = await APIService.getNewDetail(topicId)
    commit(Types.SET_TOPIC, response.data)
    commit(Types.SET_INIFINITE_LOADING, false)
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
