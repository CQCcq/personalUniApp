import Vue from 'vue'
import App from './App'
import store from './store/store.js'
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"
Vue.component('mescroll-body', MescrollBody)
Vue.component('mescroll-uni', MescrollUni)	
 Vue.prototype.$store = store  

Vue.config.productionTip = false
// Vue.use(store)
App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
