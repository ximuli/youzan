import './components/address_base.css'

// 使用 vue-router
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let routes = [{
    path: '/',
    component: require('./components/member.vue').default
},{
    path: '/address',
    component: require('./components/address.vue').default,
    children: [{
        path: '',
        // component: require('./components/all.vue').default,
        redirect: 'all'
    },
    {
        path: 'all',
        component: require('./components/all.vue').default,
    },
    {
        path: 'form',
        component: require('./components/form.vue').default,
    }]
}]

// 创建 router 实例
let router = new Router({
    // routes: routes
    routes
})

// 根组件的注入
new Vue({
    el: '#app',
    // router: router
    router
})
