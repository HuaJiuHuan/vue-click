import Vue from 'vue'
import e1 from './views/ExampleView.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({ 
  router,
  store,
  render: h => h(e1)
}).$mount('#app')
