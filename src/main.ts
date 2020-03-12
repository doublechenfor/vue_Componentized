import Vue from 'vue/dist/vue.common.js'
import app from './app.vue'
import comment from './components/comment'
import cutInterval from './components/timeInterval'
import layoutBox from 'cs-com-cslayoutbox'
import headerNav from 'cs-com-csheaderbox'
Vue.config.productionTip = false

Vue.use(layoutBox)
Vue.use(headerNav)
Vue.use(comment)
Vue.use(cutInterval)
new Vue({
  render: h => h(app),
}).$mount('#app')
