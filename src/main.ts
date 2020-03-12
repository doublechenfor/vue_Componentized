import Vue from 'vue'
import app from './app.vue'
import comment from './components/comment'
import cutInterval from './components/timeInterval'
import layoutBox from 'cs-com-cslayoutbox'
Vue.config.productionTip = false

Vue.use(layoutBox)
Vue.use(comment)
Vue.use(cutInterval)
new Vue({
  render: h => h(app),
}).$mount('#app')
