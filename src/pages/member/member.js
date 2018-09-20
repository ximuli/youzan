import './components/member_base.css'
import './components/member.css'

import Vue from 'vue'
import router from './router/index.js'
import store from './vuex/index.js'

// 根组件的注入
new Vue({
    el: '#app',
    // router: router
    router,
    store
})
