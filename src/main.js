import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import http from 'api/http'
import 'common/stylus/index.less'
fastclick.attach(document.body)
Vue.config.productionTip = false
Vue.use(http)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
