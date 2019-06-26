<template>
  <div class="cart">
    <div class="shop-wrapper">
      <div class="shop-item">
        <div class="shop-header">
          <span class="check"></span>
          <span class="shop-name">寻找田野</span>
          <span class="edit-btn">编辑</span>
        </div>
        <div class="shop-content">
          <div class="good">
            <span class="check"></span>
            <div class="good-info">
              <img
                class="goods-img"
                src="https://img.yzcdn.cn/upload_files/2017/07/04/Fqp4EItsHaclmGQPBoMkR1qKmKGi.jpg?imageView2/2/w/200/h/200/q/75/format/webp"
                alt=""
              />
              <div class="detail">
                <div class="title">
                  寻找田野|最正宗的上海南汇8424 得奖最多奥运会指定西瓜1只/箱
                  9-11斤
                </div>
                <div class="size">
                  4500g-5000g
                </div>
                <div class="price">
                  ￥98.00
                </div>
                <div class="quantity">
                  <span>-</span>
                  <span>0</span>
                  <span>+</span>
                </div>
                <!-- <div class="num">
                  x3
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cart"
};
</script>

<style lang="scss" scoped>
.cart {
  .check {
    width: 18px;
    height: 18px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAVFBMVEUAAACampqioqKZmZmampqampqampqampqcnJyqqqqampqampqampqampqbm5v///+ZmZn5+fn09PTw8PDm5ubR0dHPz8/Jycm7u7uxsbGdnZ3d3d2KAK0RAAAAD3RSTlMAvRDz2cWQUTsDXdaioVxmAFd6AAAA6klEQVQ4y42UWRaEIAwEEfeVxn25/z2H6OhTB5jUdz9SBBJxRzZ1EIVhFNSNFHbSADeC1BLJYryIs1ckT0AsQ99p3fXDAiLJHzJUaZ20utDTSjXlLVMCmFv1oJ0BlFcqp3NG9cNIZ50VyWdTFjby+t7rPMd+1nHH2PgoB8Yr3nsIrK0r1K4AddVYT8rJZNzN9QFod0gDkKIAFuVhAQpRAYMvNAAVKfW+UE9SEdD5Qh0QiXD39pqHrBCrHE+8/t+CmtPMhvUsnAdmfRXOp2N9X84gsEaKM5ycMWcvDP7q4S8xQhbVsQ6r4iHzAbrdPVnePehPAAAAAElFTkSuQmCC);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  .shop-wrapper {
    .shop-item {
      .shop-header {
        display: flex;
        padding: 0 10px;
        background-color: #fff;
        height: 54px;
        align-items: center;
        .check {
          margin-right: 10px;
        }
        .shop-name {
          padding-left: 24px;
          flex-grow: 1;
          background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAe1BMVEUAAABmZmZmZmZmZmZmZmZpaWlmZmZoaGhsbGxmZmZmZmZkZGR3d3dnZ2dpaWlmZmZmZmaKiopnZ2dmZmZnZ2dnZ2dnZ2dmZmZoaGhoaGhnZ2dnZ2dpaWlqampmZmZnZ2dmZmZnZ2dmZmZmZmZnZ2dmZmZnZ2dnZ2dmZmY+hk1GAAAAKHRSTlMAHuHm+xnrKBDXyzgHWjP4zwOckonzuXRpT0dAFxS+U+/HsYKwr6Z+1CmDegAAATRJREFUOMu1ksmWgyAQRUEU0QbBeYoZe3j//4WtqejJIqQ7i9yFPk7dU7wF7P/suIfdaqhCwoss1NUJABF4EECwWAVOnHnhJxTzT4IcnwU5d4ZgTxHYsehvKXqTlOk16cwnDajWWGG4lzSgtkm6TtLNV8C838HQMXewnCK3cDlFA3f9ShpdEGKvr432c7yQLmnHJ45drMYzwiFA0kdRnyAYQpxHFXdHfN1uJeSBxY6ii9lBUlwbA420STktvdq0rtN26TOViZUNwIg5eHm/lLXf1SF/KukSC2n8TCpgS9MmEMovjaiXHbpB4Zcq/NyetvBLe4wUAkReKUVGIUH8uiQx+aQJkhENOp/UoWFEj9rkj6Tc1OjZjRKwAWEREoCYDyjZhnEhHhA6w+7RnMg+NjjX7AV+AbbXK771Kk31AAAAAElFTkSuQmCC");
          background-size: 18px 18px;
          background-position: 0;
          background-repeat: no-repeat;
        }
        .edit-btn {
          font-size: 12px;
          color: #38f;
        }
      }
    }
  }
}
</style>
