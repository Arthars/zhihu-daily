import axios from 'axios'
import router from './router'
import Parser from '../utilities/object-parser'
/* import MockData from '../api/mock'
import _ from 'lodash' */

export default {
  getNews: function () {
    return new Promise((resolve, reject) => {
      axios.get(router.NewsUrl, { cache: true }).then((response) => {
        let news = Parser.toCamelCase(response)
        resolve(news)
      })

      /* let results = _.map(MockData.lastedNews, (item) => {
        item.image = item.images && item.images[0]
        return item
      })

      resolve({
        data: Parser.toCamelCase(results)
      }) */
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
