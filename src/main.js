import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import API from '@/api'
import services from '@/services'

Vue.use(API)
Vue.use(services)

store.$api = Vue.prototype.$api
store.$services = Vue.prototype.$services
Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  render: h => h(App)
})
.$mount('#app')
