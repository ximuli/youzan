import 'css/common.css'
import './category.css'
import Vue from 'vue'
import axios from 'axios'
import Foot from 'components/Foot.vue'
import url from 'js/api.js'

new Vue({
    el: '#app',
    data: {
        topLists: null,
        topIndex: 0,
        subData: null,
        rankData: null
    },
    created() {
        this.getTopList()
        this.getSubList(0)
    },
    methods: {
        getTopList: function() {
            axios.post(url.topList).then(res => {
                this.topLists = res.data.lists
            })
        },
        getSubList(index,id) {
            this.topIndex = index
            if (index === 0) {
                this.getRank()
            }
            else {
                axios.post(url.subList, {id}).then(res => {
                    this.subData = res.data.data
                })
            }
            
        },
        getRank() {
            axios.post(url.rank).then(res => {
                this.rankData = res.data.data
            })
        }
    },
    filters: {
        priceNumber(price) {
            price = String(price)
            if (price.indexOf('.') === -1 ) {
                price = price.concat('.00')
            } 
            else {
                price = price.concat('0')
            }
            return price
        }
    },
    components: {
        Foot
    }
})