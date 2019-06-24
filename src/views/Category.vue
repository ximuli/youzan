<template>
  <div class="category">
    <div class="search-bar">
      <input type="text" placeholder="搜索更赞的商品" />
    </div>
    <div class="content">
      <div class="sidebar">
        <ul @click="handleClick">
          <li class="active">综合排行</li>
          <li>食品酒水</li>
          <li>女人穿着</li>
          <li>男士穿着</li>
          <li>箱包配饰</li>
          <li>护肤彩妆</li>
          <li>数码电器</li>
          <li>母婴用品</li>
          <li>运动户外</li>
          <li>居家百货</li>
        </ul>
      </div>
      <div class="main">
        <div class="title">热门品牌</div>
        <ul>
          <li v-for="n in 6" :key="n">
            <img
              src="https://img.yzcdn.cn/o_1a2m590lg110p1mp21nr11ffmpsl9.jpg?imageView2/2/w/120/h/0/q/75/format/jpg"
              alt=""
            />
            <div>良品铺子</div>
          </li>
        </ul>
        <div class="title">热门分类</div>
        <ul>
          <li v-for="n in 9" :key="n">
            <img
              src="https://img.yzcdn.cn/upload_files/2015/12/28/Fk8hpTtgWFr_q7FCCGdzqXsOkYms.jpg?imageView2/2/w/120/h/0/q/75/format/jpg"
              alt=""
            />
            <div>水果</div>
          </li>
        </ul>
      </div>
    </div>
    <Foot selected="category" />
  </div>
</template>

<script>
import Foot from "./Foot";

export default {
  components: {
    Foot
  },
  name: "category",
  mounted() {},
  methods: {
    handleClick() {
      // let liList = this.$el.querySelectorAll('.sidebar > ul > li')
      // event.target.classList.add('active')
    }
  }
};
</script>

<style lang="scss" scoped>
.category {
  height: 100vh;
  overflow: scroll;

  .search-bar {
    text-align: center;
    padding: 6px 15px;
    background-color: #fafafa;

    input {
      display: inline-block;
      width: 100%;
      height: 32px;
      padding: 0px 10px 0 40px;
      box-sizing: border-box;
      border-radius: 4px;
      border: 1px solid #e5e5e5;
      font-size: 14px;
      outline: none;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAAXNSR0IArs4c6QAAA2xJREFUWAnNV79rU1EUTh4NsYNImyHYTk4lCSUtRFRIkQri1hR0chX/gE4uHTK4OLnr7qTQuImDiIFWDNgQkpLJKZUOaRCHpqQ2ft/lnsvNa9/L68uj+iCcH/ec73zv3HvfvYnF/pMnHoRHs9lcRty64zgrw+FwHvqcztuPx+Od09PTL7C3crncd+2/sPAlAgKPUPw5UBcCIrdBahOE3gaMN2HnEqnX6zcSicQbvO1tE3kBBV3bGQwGj/P5/I+gaWeI7O3t3QXQO5BICQjsHuwKZAWyhbfe5xi6NQdfDr41yBLkjJXThf0wk8l8Fp+fHCGiSXwEQEIn9VH05dHR0YtCofDLD6hWq12bnp5+BnIbiLvCWJAbAOt+EDKGiJ6Ob0iUTnROTk7WFxcXa34E3GONRqMwNTW1BT8XNcl0MU03x02TI0B6TRgSx8fHty5KgljMYS7UDm2+GLGp+z2KCHcHEmRh9tmJpaUlBeSX7DXGXGJgvM8YYrOGVzz9iojeoiqOayJMJ9xFiEEs8ds1xGdLR3+s1HcC89njwrQDJtGJRUyNsaBrnQvJjrCF6kELK+N2h8QGkcQiphVralk+paJjzoo4wd5OEvdEEpjvBcCuJT6RDgLVNqMD7FsyEJUEZlOw7FriE8mpkQMsJl9MGYxCujBNLTe22jVuZ5R2r9czH010Z+iFTSLq3GAA5tCTsRfAOH8qlbouMZian6K7pQOW5sOFwKw7YFIbmDnBsGuJT6SDOeSlRj0ILIkelQTmmmDZtcQnklPDA0o9YF/iKSr2pJJYxLRwTC3Lp1RHX+/atMB+hke5OyisTSxi6vy231VS7Rq0bFOKYcFu8CgXO6wkBrEk364hPluardVqtbbBXk7gDo/ysCfw7u7ufDKZ/IpCcifZyWazd+zCbt18R3jHxHx2dYACCtMZ5tgkNJ5TrVavuovbtukInVFfFe1CeMntw8PDB8Vi8bftF32ECJ0hLs9ZTGmJu8NamLwi9mGru6sU8yNzhgiTIvo78RRXxFcgM7I2vMicS0TegNc7rPzQf7C4LmZnZz8EIeNLxCK0DD3UX86gZAIREUJhpR+Zg4ODe6urq32zfcMWCZLHncIdw/Vhx3PK0un0E/ouhQgL+ZBJXioRmwx03mP/4Pep2+2+5tg/e8rl8shs/AUCtdXXCXeHEgAAAABJRU5ErkJggg==);
      background-position: 12px center;
      background-size: 16px;
      background-repeat: no-repeat;
      background-color: #fff;
    }
  }

  .content {
    display: flex;

    .sidebar {
      > ul {
        > li {
          padding: 20px 10px;
          width: 82px;
          box-sizing: border-box;
          font-size: 13px;
          line-height: 13px;
          background-color: #f4f4f4;
          border-bottom: 1px solid #e5e5e5;

          &.active {
            background-color: #fff;
            color: #fa6060;
          }
        }
      }
    }

    .main {
      img {
        width: 100%;
      }

      width: 100%;
      background-color: #fff;
      padding-left: 20px;
      padding-top: 12px;

      .title {
        color: #b3b3b3;
        font-size: 12px;
        margin-bottom: 5px;
        margin-left: 4%;
      }

      ul {
        display: flex;
        flex-wrap: wrap;

        li {
          width: 33.33%;
          flex-grow: 1;
          box-sizing: border-box;
          text-align: center;
          padding-bottom: 12px;
          margin-bottom: 10px;

          > img {
            width: 60px;
            height: 60px;
          }
        }
      }
    }
  }
}
</style>
