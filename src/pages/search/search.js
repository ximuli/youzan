import 'css/common.css'
import './search.css'
import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import qs from 'qs'
import mixin from 'js/mixin.js'
import Velocity from 'velocity-animate'

import { InfiniteScroll } from 'mint-ui'
Vue.use(InfiniteScroll)

let { keyword, id } = qs.parse(location.search.substr(1))

new Vue({
    el: '.container',
    data: {
        keyword: keyword,
        searchList: null,
        isShow: false,
        loading: false,
        pageNum: 1,
        pageSize: 8,
        // allLoaded: false
    },
    created() {//异步数据请求放到这边来调用
        this.getSearchList()
    },
    methods: {
        getSearchList() {
            this.loading = true
            axios.post(url.searchList, {
                keyword,
                id,
                pageNum: this.pageNum,
                pageSize: this.pageSize
            }).then(res => { 
                let currentList = res.data.lists
                if (this.searchList) {
                    this.searchList = this.searchList.concat(currentList)
                }else {
                    //第一次获取数据
                    this.searchList = currentList
                }
                this.loading = false
                this.pageNum++
            })
        },
        move() {
            if ( document.documentElement.scrollTop > 100) {//一开始我想在这里用 document.body.scrollTop，但是它的值始终为 0
                this.isShow = true
            } 
            else {
                this.isShow = false
            }
        },
        toTop() {
            Velocity(document.documentElement, 'scroll', {duration: 500})
            this.isShow = false
        }
    },
    mixins: [mixin]
})