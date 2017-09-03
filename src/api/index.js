import axios from 'axios'
import router from './router'
import Parser from '../utilities/object-parser'
export default {
  getNews: function () {
    return new Promise((resolve, reject) => {
      axios.get(router.NewsUrl, { cache: true }).then((response) => {
        let news = Parser.toCamelCase(response)
        resolve(news)
      })
    })
  },
  getNewDetail: function (id) {
    return new Promise((resolve, reject) => {
      axios.get(router.NewsDetailUrl + id, { cache: true }).then((response) => {
        let newsDetail = Parser.toCamelCase(response)
        resolve(newsDetail)
      })
    })
  },
  getNewsByDate: function (date) {
    return new Promise((resolve, reject) => {
      axios.get(router.NewsDateUrl + date, { cache: true }).then((response) => {
        let news = Parser.toCamelCase(response)
        resolve(news)
      })
    })
  }
}