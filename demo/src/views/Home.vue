<template>
  <div id="body">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item
        ><img src="@/assets/img/切图/banner.jpg" alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img src="@/assets/img/切图/banner1.jpg" alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img src="@/assets/img/切图/banner2.jpg" alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img src="@/assets/img/切图/banner3.jpg" alt=""
      /></van-swipe-item>
    </van-swipe>
    <div class="iconnav">
      <ul>
        <li>
          <i class="iconfont">&#xe602;</i>
          <p>装修方案</p>
        </li>
        <li>
          <i class="iconfont">&#xe606;</i>
          <p>效果图</p>
        </li>
        <li>
          <i class="iconfont">&#xe609;</i>
          <p>设计师</p>
        </li>
        <li>
          <i class="iconfont">&#xe603;</i>
          <p>装修工地</p>
        </li>
        <li>
          <i class="iconfont">&#xe60b;</i>
          <p>装修攻略</p>
        </li>
        <li>
          <i class="iconfont">&#xe604;</i>
          <p>装修贷款</p>
        </li>
        <li>
          <i class="iconfont">&#xe62c;</i>
          <p>免费预约</p>
        </li>
        <li>
          <i class="iconfont">&#xe608;</i>
          <p>十秒报价</p>
        </li>
      </ul>
    </div>
    <div class="con"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  width: 100%;
  height: 3.2rem;
}
#body {
  background-color: #eaeaea;
}
img {
  width: 100%;
  height: 100%;
}
.iconnav {
  width: 100%;
  height: 4.46rem;
  background-color: #fff;
  margin-bottom: 0.36rem;
}
.iconnav ul {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
.iconnav ul li {
  width: 24%;
  height: 49%;
  border: 1px solid #000;
}
p {
  font-size: 0.32rem;
  color: #333;
}
.con {
  width: 100%;
  height: 3rem;
  background-color: #fff;
}
</style>
