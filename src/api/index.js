import axios from 'axios'
import router from './router'
import Parser from '../utilities/object-parser'
/* import MockData from '../api/mock'
import _ from 'lodash' */

export default {
  getNews: async function () {
    let response = await axios.get(router.NewsUrl, { cache: true })
    let news = Parser.toCamelCase(response)
    return news
  },
  getNewDetail: function (id) {
    return new Promise((resolve, reject) => {
      axios.get(router.NewsDetailUrl + id, { cache: true }).then((response) => {
        let newsDetail = Parser.toCamelCase(response)
        resolve(newsDetail)
      })
    })
  },
  getNewsByDate: async function (date) {
    let response = await axios.get(router.NewsDateUrl + date, { cache: true })
    let news = Parser.toCamelCase(response)
    return news
  }
}
