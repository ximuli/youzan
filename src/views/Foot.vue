<template>
  <div class="foot">
    <ul class="foot-list">
      <li
        v-for="item in navList"
        :key="item.icon"
        @click="$router.push(`/${item.icon}`)"
        :class="{ active: selected === item.icon }"
      >
        <i :class="`icon icon-${item.icon}`"></i>
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "foot",
  props: {
    selected: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      navList: [
        { name: "有赞", icon: "home" },
        { name: "分类", icon: "category" },
        { name: "购物车", icon: "cart" },
        { name: "我", icon: "member" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.foot {
  position: fixed;
  height: 50px;
  width: 100%;
  bottom: 0;
  left: 0;
  background-color: #fff;
  .foot-list {
    height: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    li {
      padding-top: 5px;
      flex-grow: 1;
      text-align: center;
      font-size: 12px;
      color: #333;
      &.active {
        color: #ff525e;
        .icon-home {
          background-image: url("data:image/png;base64,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");
        }
        .icon-category {
          background-image: url("data:image/png;base64,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");
        }
        .icon-cart {
          background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAABGdBTUEAALGPC/xhBQAABMJJREFUeAHtWs2PFEUU7+qZHUWcxY/swesEo0j8hIs3FENCOHmYDRv+As/EgzEmaDSeTOTEwXAzWZjJ7kII2YuHvWCMAUXQNbDJEi7Augo4w7q7dE8Xv9dMLVU93duzUzU4tVQnu1WvXtV7r3793qvqqvE89zgEHAIOAYeAQ8Ah4BBwCGghwOTRwdjYl4zzjz3GSnL7pqhz3sI8bnPGzvEw/LxUr1+U56UAEY6NNcAsyx02ZZ3z/yLO95ZOnvxJzM8XFSo550dRrFAl808eYGudsWcYY9/K5iseITOy6vCaG+C9lMW3ph0v++Lc3FO7L1wIyGbFI7qZBI3vpt/A92EsFCCQrRsGAon0t4GfZHcG/i132zAQURRtCiC4513SAsILw80RGpz/ogXEad+fw4qyLAuxsY5VQg+I0Xq9Bbf63cbJyzaHQaAHBAkDmraHx92nJybmZWA2nCxpcOR5VidMePSvMghU7wkIFkV2e0QUKWHRMxCNZvNyvAVPwmoJHTFmBogXp6cb2Fhds2TenWYmEiV16Ck0aKDFW+2lrycmrtIc5KdnIICElQmTXuCRON/LMGh4BJZQK4HAwVNHfiBIevaIIAisXDnSEqUWEFsmJ68jPP5VHWzwKRzVmfUImjKE2uUVnK/+ePPmbNrr6jk0YmGWJUz69H5vZiY0DgQEW5UwcU6ZGhYEjK5HWBUaOFQ6n+YN2kBcbzT+QMJMdbUshf9bO+417vv+mSz9Wh7x8vT0KsLjSpbwQWpHYv/q2fHxhSybilmMbtsRdxQeO9v98YXu3Y/rnCevClQaA9tjHha6/ZPyPG8J3noLL+pPfC0fH6rVTin6EoQ2EByHucz3D8VyOb9WPHFie0KHFaRWaMQz9H05YVb+2b9/2IqZJ4zUBmJlZeXREgr3HN627c2EDitIbSDKU1N/USyK2SIm3xZ1m0ptIGiymPxaePiMvWUTAMJWI0BA2Fp44Hv/yQUCn7ZrQGBN3Hl+164hgbQtpRmPkE+18WubNyoV6/KEESBOR9FVJMxF8fZZofBdUK2+e2vfvq2ibdBLdXenYW1w8OAXWD0/6xCBpIE2+v0S7Tqpjqsy9rCMiZx/6o7zkb1iJ9nJF7JJ3zK21seGxsc/ydFCt3dmnrsHDjy/tVz+Afa9Y0aiMSnRZBiW6M52PYlGQoMUPHf27J1mq/U+HOBTvJKfESoL+FtdT/lj4EWw4XgeCGSHMY9Yb1JHEucer1Writ6RxUWFLjebCr2lUlHo0r17Cl1cXlbpkZGYXpifV34etJ6NjucQUBFQXEplmaNq1Wrhw2LxMCSO4oLlFWRyOsypTYXhN93Er7DElBwhTy77DkRsfKFAq8keWTHVkVhnplqtD7oBw5ScpA2CNrZqCIHJkjwhDQTqR+1tT0kO66BNyekQ3G7oOxDQM5qlvN2exxfD8/rl8YWc1LLvQFBOSNXcbszji7F5/fL4Qk5W2Xcg2okxSz9dG3Z1Cp7XL4+faUCb0XcgoKeWY0QeXwzP65fHF3JSy74DQUskrQ5p2uNVA/w0XrLNlJykXEEXRKVfZX12lr++Y8f3r/r+EnS8gFgehhtfRv0ols6Pulk6yTZTckiWexwCDgGHgEPAIaCHwAMJYdPtuf90jwAAAABJRU5ErkJggg==");
        }
        .icon-member {
          background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAABGdBTUEAALGPC/xhBQAABLNJREFUeAHtW0toE1EUnZekrfVT1IVWqS1CiwvFLir4wUItCEI3Wp02deVOcFEUVyJCFn5WRdCFC0FQEZtEW0EFF4IFPxutohZ1UXGhbaB+UCm2zWee545BsFhyZ3JnGHEehCaZM+fce3Lnzbw7U8MIR+hA6EDoQOhA6ADXAcUFSuAShhE5appbjEhkp6FUCzhXIoCVxK0NYxx/xg2thw3LunEinX6UMAyLtvkxfDHiXVvbvLoVK3ohdhhJLWMmNgFz+j5kMmdWDw1NM/dxDfPciHxX125UwGlUwCpXUWr9HhVyKJZKXXe1P3OnCBPnBqZy8fgJIxq95toEUiUDwWFz4ZObQDj7eEWs8vH4VSTRzQmCjdE6Gevv7wEeR43s8KQi8OsdFzeB8oaxNresBzabeEXYcwIdDl6OQmGP9JwhWhF0drAnRi9NIG5MvraWoI6oEXSKtCc3wQD/SoUJ1Nb660Z3X4oZkcDvhOOMrhN8GaSVgKaUmNgckTPNrSoWuy8VGIdH5/OtFen0Aw62FEbMUfuyuZSa9Ha6VBcackb8WjsIhcWkEdSUM6K4eGKmIAWzF2wSZGJGYLIRC4qbmKSmmBHc4EVxSoldaosZUewniOZZikxrnSmF4W4XMwKC1Fjxe4hpyhlBnSW/h6CmnBFor/ntA7X0pDTFjKAeI4KakAqMwTNR1GRAS0PEjEig0Uo9xtKSMgjSIk0ZNsFFCwVEjVZ0od9LBTcnDzRsrTkBzjeIVQRJ291mNFqdh+FwD2hId7ZFjaB0qHOE8/tJh6mx4cQt3Z0icbFl+KxMwuZt0RBN3WbJyrArwaMOtpcV8btA/pUbPF4dGr+NoDfhLb8/7DCMBE7XQb0JPCvU8GPoQOjALwc8nSwnTHPhkmh0I9YFa5XW9bj504BXPd7TMxLVeF+NS/L5xR9jGp9n8Hka+M/4bkwpNYbT5pil9Rt893heMvm2iBX/I2rEvba2WOvy5TuQUAcC3wzydXgfFYta6y/gfYLXnVw2279gYECsQyViRLa7uxlE+1QkshdJc5+IKdcfFIq+p5W6/DCTubJtaChfDmFZRvzo7KyrrKzsw6/eVU4Q5e4LQ16jSdNbkUrddcvlygg6BLbW1h7GMXwMwgvcikvvB0MGpwuF/YvS6Y9OuR0b8aSlpaK5qSkJE3Y5FfMDj/nj5dTkZHvNzZufnOg5MqJYCWRCpxMRv7GojBdTMzPtNYODdPZhDUf9iNba2otBN4GyRozrq6uqbiUcdODYFYGHw3ZBYYBlb0BAlmUdqEwmz3HCYVcETlOnOIRBwkSUOpIyTdZ1DMuIXE9PO0pnTZCSZMWCR4w6o9EdHCzLCBB1cMiCiEElb+fExTNC6y0cskBitN7EiYtlBGbhBg5ZEDE4pFnPgLOMQIJLgpgkKyallnJwXCO+c8gCidH6KyculhG4UhvhkAURg8nyKSculhFoltzmkAURowqF85y4WEY8Hx09i8XMKw5hkDCo5Du4Pch6hoJlxIbh4ZyVze4G8bMgJVoilvT3b9/Y/y/CXmuQqL0Eb2w8iDWHiVNqE75aXCIYvzd/RuWOaMu6gDXGJb/FQ73QgdCB0IHQgf/FgZ+UQn2ZrGr7bgAAAABJRU5ErkJggg==");
        }
      }
    }
  }
}
</style>
