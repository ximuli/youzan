import Address from 'js/addressService.js'

// 使用 vuex 插件
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 创建 Store 实例
const store = new Vuex.Store({
    state: {
        lists: null
    },
    mutations: {
        init(state, lists) {
            state.lists = lists
        },
        add(state, instance) {
            state.lists.push(instance)
        },
        remove(state, id) {
            let lists = state.lists 
            let index = lists.findIndex(item => {
                return item.id === id
            })
            lists.splice(index, 1)
        },
        update(state, instance) {
            let lists = JSON.parse(JSON.stringify(state.lists))
            let index = lists.findIndex(item => {
                return item.id === instance.id
            })
            lists[index] = instance
            state.lists = lists
        },
        setDefault(state, id) {
            let lists = state.lists 
            lists.forEach(item => {
                item.isDefault = item.id === id ? true : false
            })
        }
    },
    actions: {
        getLists({commit}) {
            Address.list().then(res => {
                commit('init', res.data.lists)
            })
        },
        addAction({commit}, instance) {
            Address.add(instance).then(res => {
                //模拟添加 id，其实 instance 最好后台返回
                instance.id = parseInt(Math.random()*10000)
                commit('add', instance)
            })
        },
        removeAction({commit}, id) {
            Address.remove(id).then(res => {
                commit('remove', id)
            })
        },
        updateAction({commit}, instance) {
            Address.update(instance).then(res => {
                commit('update', instance)
            })
        },
        setDefaultAction({commit}, id) {
            Address.setDefault(id).then(res => {
                commit('setDefault', id)
            })
        }
    }    
})

export default store