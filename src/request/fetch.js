import axios from "axios";
import Vue from "vue";
import { Toast } from "vant";

Vue.use(Toast);

const fetch = {
  get(url, data) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, data)
        .then(res => {
          if (res.status === 200) {
            resolve(res);
          }
        })
        .catch(res => {
          Toast.fail("请求失败，请稍后重试");
          reject(res);
        });
    });
  },
  post(url, data) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, data)
        .then(res => {
          if (res.status === 200) {
            resolve(res);
          }
        })
        .catch(res => {
          Toast.fail("请求失败，请稍后重试");
          reject(res);
        });
    });
  }
};

export default fetch;
