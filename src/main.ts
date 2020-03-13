import Vue from 'vue/dist/vue.common.js'
import app from './app.vue'
// import comment from './components/comment'
// import cutInterval from './components/timeInterval'
import csUI from 'cs-com-cscontainerbox'
Vue.config.productionTip = false

Vue.use(csUI)
// Vue.use(comment)
// Vue.use(cutInterval)
new Vue({
  render: h => h(app),
}).$mount('#app')
