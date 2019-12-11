import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import ElementUI from 'element-ui'
import i18n from "./i18n/i18n";

Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')