<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swp-page swiper-slide" v-for="list in lists">
            <a :href="list.clickUrl">
                <img class="fadeIn" :src="list.img">
            </a>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<style>
.swiper-slide img { width: 100%; height: 100%; }
</style>

<script>
    // swiper 是对 DOM 节点进行操作的，那么 DOM 节点什么时候才能生成？  （mounted）
    //在 index.html 中引用组件的地方，一开始 bannerList 的值为 null，请求的数据还没有传过来
    //所以添加了 v-if="bannerLists" ，即只有等 bannerLists 有数据了之后，才去渲染这个组件
    //之后可以在 mounted 阶段来初始化 swiper
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.css'

    export default {
        name: "swipe",
        props: {
            lists: {
                type: Array,
                required: true
            }
        },
        created() {
            
        },
        mounted() {
            new Swiper ('.swiper-container', {
                // Optional parameters
                loop: true,
                autoplay: true,

                // If we need pagination
                pagination: {
                el: '.swiper-pagination',
                }
                
            })
        }
    }
</script>


