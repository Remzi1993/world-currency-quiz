import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VModal from 'vue-js-modal'

Vue.use(VModal, { dialog: true })
Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.prototype.$log = console.log

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
