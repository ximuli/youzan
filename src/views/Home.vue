<template>
  <div class="home">
    <van-swipe :autoplay="3000" indicator-color="blue" :height="180">
      <template v-if="bannerList.length > 0">
        <van-swipe-item
          v-for="(item, index) in bannerList"
          :key="index"
          @click="$router.push(item.clickUrl)"
        >
          <img :src="item.img" alt="" />
        </van-swipe-item>
      </template>
      <van-swipe-item v-else>
        <img src="./../assets/imgs/banner.jpg" alt="" />
      </van-swipe-item>
    </van-swipe>
    <div class="recommend">
      <div class="recommend-title">
        优店推荐
      </div>
      <div class="recommend-content">
        <div class="shop-item" v-for="n of 3" :key="n">
          <a href="#">
            <!-- v-for 下，必须使用 require 引入图片，否则报错，why? -->
            <img :src="require(`./../assets/imgs/shop${n}.png`)" alt="" />
          </a>
        </div>
      </div>
    </div>
    <div class="goods">
      <div class="goods-title">
        <span>最热商品推荐</span>
      </div>
      <div class="goods-wrapper">
        <ul>
          <li v-for="n of 15" :key="n + 20">
            <a href="#">
              <div class="goods-img">
                <img src="./../assets/imgs/goodsImg.jpg" alt="" />
              </div>
              <div class="goods-info">
                <div class="title">
                  【现挖48小时内发货】假一罚十
                  ！正宗天目山小香薯，不让朴实薯农血本无归！
                </div>
                <div class="price">￥48.88</div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <Foot selected="home" />
  </div>
</template>

<script>
import Foot from "./Foot";
import url from "./../request/api.js";
import fetch from "./../request/fetch.js";
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";

Vue.use(Swipe).use(SwipeItem);

export default {
  name: "home",
  components: {
    Foot
  },
  data() {
    return {
      bannerList: []
    };
  },
  mounted() {
    console.log(111222);
    fetch.get(url.bannerList).then(res => {
      console.log("res");
      console.log(res.data);
      this.bannerList = res.data.lists;
    });
  }
};
</script>

<style lang="scss" scoped>
.home {
  .van-swipe {
    .van-swipe-item {
      > img {
        width: 100%;
      }
    }
  }
  .recommend {
    > .recommend-title {
      color: #999;
      padding: 15px 0 0 10px;
    }
    > .recommend-content {
      display: flex;
      .shop-item {
        flex-grow: 1;
        > a {
          img {
            width: 100%;
          }
        }
      }
      .shop-item:nth-child(2) {
        border-left: 1px solid #e5e5e5;
        border-right: 1px solid #e5e5e5;
      }
    }
  }
  .goods {
    .goods-title {
      margin: 0 10px;
      padding: 12px;
      text-align: center;
      position: relative;
      &::after {
        position: absolute;
        content: "";
        left: 0;
        top: 50%;
        width: 100%;
        height: 1px;
        background-color: #ababab;
        transform: scaleY(0.5);
      }
      > span {
        padding: 0 10px;
        font-size: 16px;
        color: #999;
        background-color: #eee;
        position: relative;
        z-index: 2;
      }
    }
    .goods-wrapper {
      > ul {
        display: flex;
        flex-wrap: wrap;
        padding: 0 6px;
        > li:nth-child(odd) {
          padding-right: 3px;
        }
        > li:nth-child(even) {
          padding-left: 3px;
        }
        > li {
          width: 50%;
          box-sizing: border-box;
          > a {
            > .goods-img {
              > img {
                width: 100%;
              }
            }
            > .goods-info {
              .title {
                // 文字两行后显示 ...
                display: -webkit-box;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                color: #666;
              }
              .price {
                padding-bottom: 8px;
                font-size: 14px;
                color: #ff525e;
              }
            }
          }
        }
      }
    }
  }
}
</style>
