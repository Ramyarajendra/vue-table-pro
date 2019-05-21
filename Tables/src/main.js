import Vue from 'vue'
import App from './App.vue'
import './../node_modules/bulma/css/bulma.css';
import store from './Store/store'
import router from './Router/index'
import VModal from 'vue-js-modal'

Vue.use(VModal, { dialog:true  })
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    store,
    router,
}).$mount('#app')
