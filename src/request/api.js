let url = {
  bannerList: "index/banner"
};

let host = "http://rap2api.taobao.org/app/mock/7058/";
// let host = "http://yapi.demo.qunar.com/mock/72845/youzan/"

for (let key in url) {
  // hasOwnProperty
  // 这个方法可以用来检测一个对象是否含有特定的自身属性；该方法会忽略掉那些从原型链上继承到的属性。
  if (url.hasOwnProperty(key)) {
    url[key] = host + url[key];
  }
}

export default url;
