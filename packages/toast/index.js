// import Vue from 'vue'
import cToast from './src/cToast.vue'

cToast.install = function (Vue) {
  Vue.component(cToast.name, cToast)
}
export default cToast