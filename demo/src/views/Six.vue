<template>
  <div>
    <!-- 头部导航 -->
    <van-nav-bar title="欧美文化的抽象美感" left-text right-text="三" left-arrow />
    <!-- 图片 -->
    <div class="sj-tp">
      <img src="@/assets/img/sj/img.jpg" alt />

      <!-- 小字 -->
      <div class="sj-xz">
        <div class="dqq">
          <div class="xqq"></div>
        </div>
        <div class="dqq">
          <div class="xqq"></div>
        </div>
        <div class="dqq">
          <div class="xqq"></div>
        </div>
        <div class="dqq">
          <div class="xqq"></div>
        </div>
        <div class="dqq">
          <div class="xqq"></div>
        </div>
        <div class="dqq">
          <div class="xqq"></div>
        </div>
      </div>

      <div class="zt"> 
        <p>设计诠释：less is more 不需要过多的装饰</p>
        <p>简单的墙面背景与简洁的家具即可组成一个温</p>
        <p>暖的家</p>
      </div>
    </div>
    <div class="dhz">
      <p>设计诠释：less is more 不需要过多的装饰</p>
        <p>简单的墙面背景与简洁的家具即可组成一个温</p>
        <p>暖的家</p>
    </div>

    <div class="db"> 
      <span>预约免费设计</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>

<style scoped>
.sj-tp {
  width: 100%;
  height: 10rem;
  background: black;
    font-size: 0.1rem;
    color: white;
}
.sj-tp img {
  width: 100%;
  margin-top: 1rem;
}
.dqq {
  width: 0.4rem;
  height: 0.4rem;
  border: 1px solid #2bb281;
  border-radius: 50%;
}
.xqq {
  width: 0.3rem;
  height: 0.3rem;
  background: #2bb281;
  border-radius: 50%;
  margin-left: 0.05rem;
  margin-top: 0.04rem;
}
.sj-xz {
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-around;

}
.zt{
  margin-top: 0.2rem;
  font-size: 0.3rem;
  margin-left: 0.6rem;
}
.zt p{
  margin-top: 0.1rem;
}
.dhz{
  font-size: 0.3rem;
    margin-top: 0.2rem;
    margin-left: 0.6rem;
}
.db{
  background-color: #ff4351;
  font-size: 0.4rem;
  line-height:1rem;
  text-align: center;
  position: fixed;
  bottom: 0;
  height: 1rem;
  width: 100%;
  color: white;
opacity: 0.4;
}
</style>
