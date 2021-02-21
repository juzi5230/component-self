import Vue from 'vue'
import App from './App.vue'
import cToast from '../packages/toast'

Vue.config.productionTip = false

Vue.use(cToast)

new Vue({
  render: h => h(App),
}).$mount('#app')
