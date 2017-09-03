import {
  API_ROOT
} from './config.js'
var zhihuAPIs = {
  startImage: '/4/start-image/1080*1776',
  news: '/4/news/latest',
  newsbyid: '/4/news/',
  newsbydate: '/4/news/before/',
  newsinfo: '/4/story-extra',
  topics: '/4/themes',
  topicbyid: '/4/theme/',
  sections: '/3/sections',
  sectionbyid: '/3/section'
}
export default {
  NewsUrl: API_ROOT.concat(zhihuAPIs.news),
  NewsDetailUrl: API_ROOT.concat(zhihuAPIs.newsbyid),
  NewsDateUrl: API_ROOT.concat(zhihuAPIs.newsbydate),
  NewsInfoUrl: API_ROOT.concat(zhihuAPIs.newsinfo),
  TopicsUrl: API_ROOT.concat(zhihuAPIs.topics),
  TopicsIdUrl: API_ROOT.concat(zhihuAPIs.topicbyid),
  SectionsUrl: API_ROOT.concat(zhihuAPIs.sections),
  SectionIdUrl: API_ROOT.concat(zhihuAPIs.sectionbyid)
}
