<template>
  <div class="member">
    <div class="info">
      <div class="portrait"></div>
      <div class="nickname">乐亦栗</div>
    </div>
    <div class="order-related">
      <ul class="order-status">
        <li v-for="(item, index) in orderStatus" :key="index">
          <p>{{ item }}</p>
        </li>
      </ul>
    </div>
    <div class="block">
      <div v-for="(list, index) in blockList1" :key="index" class="block-item">
        <p>{{ list }}</p>
      </div>
    </div>
    <div class="block">
      <div v-for="(list, index) in blockList2" :key="index" class="block-item">
        <p>{{ list }}</p>
      </div>
    </div>
    <div class="block">
      <div v-for="(list, index) in blockList3" :key="index" class="block-item">
        <p>{{ list }}</p>
      </div>
    </div>
    <div class="block">
      <div v-for="(list, index) in blockList4" :key="index" class="block-item">
        <p>{{ list }}</p>
      </div>
    </div>
    <Foot selected="member"></Foot>
  </div>
</template>

<script>
import Foot from "./Foot.vue";

export default {
  components: {
    Foot
  },
  name: "member",
  data() {
    return {
      orderStatus: ["待付款", "待接单", "待发货", "待收货", "退款/维权"],
      blockList1: ["全部订单"],
      blockList2: ["收藏的商品", "收藏的店铺", "我买过的", "我的浏览记录"],
      blockList3: ["我的会员卡", "我的优惠券", "我的返现"],
      blockList4: ["个人设置", "联系有赞客服"]
    };
  }
};
</script>

<style lang="scss" scoped>
$border-color: #e5e5e5;

.member {
  > .info {
    background-color: #fc5050;
    display: flex;
    padding: 15px 0 15px 15px;
    .portrait {
      width: 60px;
      height: 60px;
      background: url("./../assets/imgs/portrait.png") center center;
      border-radius: 50%;
      margin-right: 16px;
    }
    .nickname {
      margin-top: 15px;
      color: #ffffff;
    }
  }
  .order-related {
    .order-status {
      display: flex;
      justify-content: space-around;
      padding: 10px 0;
      background-color: #fff;
      > li {
        padding: 42px 0 10px 0;
        background-repeat: no-repeat;
        background-size: 24px 24px;
        background-position: center 12px;
        > p {
          margin: 0;
          font-size: 12px;
          color: #333333;
        }
        &:first-child {
          background-image: url("https://b.yzcdn.cn/v2/image/wap/uc/order_list/icon_topay@2x.png");
        }
        &:nth-child(2) {
          background-image: url("https://b.yzcdn.cn/v2/image/wap/uc/order_list/icon_daijiedan@2x.png");
        }
        &:nth-child(3) {
          background-image: url("https://b.yzcdn.cn/v2/image/wap/uc/order_list/icon_tosend@2x.png");
        }
        &:nth-child(4) {
          background-image: url("https://b.yzcdn.cn/v2/image/wap/uc/order_list/icon_send@2x.png");
        }
        &:nth-child(5) {
          background-image: url("data:image/png;base64,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");
        }
      }
    }
  }
  .block {
    border-top: 1px solid $border-color;
    border-bottom: 1px solid $border-color;
    overflow: hidden;
    margin-bottom: 12px;
    padding-left: 10px;
    background-color: #fff;
    > .block-item {
      position: relative;
      padding: 10px 28px 10px 38px;
      &:not(:first-child) {
        border-top: 1px solid $border-color;
      }
      &::before {
        position: absolute;
        content: "";
        top: 8px;
        left: 5px;
        width: 26px;
        height: 26px;
        background-image: url("https://img.yzcdn.cn/public_files/2016/10/20/e43d97b09839ed5ed872d5c5e6bc9400.png");
        background-repeat: no-repeat;
        background-size: 18px 364px;
      }
    }
  }
  > .block:nth-child(3) {
    //要充分理解 :nth-child 选择器的用法是基于父元素的第某个子元素，例如这里的 .block:nth-child(3) 表达的含义是 .block 是其父元素的第三个子元素
    .block-item:first-child::before {
      background-position: 4px 3px;
    }
  }
  > .block:nth-child(4) {
    .block-item {
      &:nth-child(1)::before {
        background-position: 4px -25px;
      }
      &:nth-child(2)::before {
        background-position: 4px -52px;
      }
      &:nth-child(3)::before {
        background-position: 4px -80px;
      }
      &:nth-child(4)::before {
        background-position: 4px -108px;
      }
    }
  }
  > .block:nth-child(5) {
    .block-item {
      &:nth-child(1)::before {
        background-position: 4px -334px;
      }
      &:nth-child(2)::before {
        background-position: 4px -136px;
      }
      &:nth-child(3)::before {
        background-position: 4px -192px;
      }
    }
  }
  > .block:nth-child(6) {
    .block-item {
      &:nth-child(1)::before {
        background-position: 4px -248px;
      }
      &:nth-child(2)::before {
        background-position: 4px -305px;
      }
    }
  }
}
</style>
