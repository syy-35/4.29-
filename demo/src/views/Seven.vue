<template>
  <div>
    <Heads>装修预算</Heads>

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item
        ><img width="100%" src="@/assets/img/ql/swiper.png" alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img width="100%" src="@/assets/img/ql/swiper.png" alt=""
      /></van-swipe-item>
    </van-swipe>

    <div class="gray">房先森/装修攻略/装修预算/正文</div>

    <h2>装修预算注意事项</h2>
    <p>2021-04-27</p>
    <ul class="uu">
      <li>客户装修隔断</li>
      <li>客户装修图</li>
      <li>客户装修效果</li>
      <li>客户装修隔离</li>
      <li>客户装修图</li>
      <li>客户装修隔断</li>
    </ul>

    <p class="yy">
      导语：在装修时如果没有提前最好装修预算，很容易造成最后开支过大，天之很多没必要的增项。那么在做预算的时候又有什么需要注意的地方呢
    </p>
    <div class="ppp">
      <img width="100%" src="@/assets/img/ql/hose.png" alt="" />
    </div>
    <button class="lc">点击展开全文</button>
    <div class="two">
      <i class="iconfont icon-pencle"></i>
      <i class="iconfont icon-share"></i>
    </div>

    <button class="lc">进入装修预算</button>

    <h1>为您推荐</h1>

    <div class="lie">
      <div class="lie-left">
        <img src="@/assets/img/ql/wx.jpg" class="pic" />
      </div>
      <div class="lie-right">
        <p>开发商延期交房，业主如何维权呢？</p>

        <span>
          <i class="iconfont icon-taiji">2016-07-07</i>
          <i class="iconfont icon-view">156</i>
        </span>
      </div>
    </div>

    <div class="lie">
      <div class="lie-left">
        <img src="@/assets/img/ql/wx.jpg" class="pic" />
      </div>
      <div class="lie-right">
        <p>开发商延期交房，业主如何维权呢？</p>

        <span>
          <i class="iconfont icon-taiji">2016-07-07</i>
          <i class="iconfont icon-view">156</i>
        </span>
      </div>
    </div>


    <div class="lie">
      <div class="lie-left">
        <img src="@/assets/img/ql/wx.jpg" class="pic" />
      </div>
      <div class="lie-right">
        <p>开发商延期交房，业主如何维权呢？</p>

        <span>
          <i class="iconfont icon-taiji">2016-07-07</i>
          <i class="iconfont icon-view">156</i>
        </span>
      </div>
    </div>


    <div class="lie">
      <div class="lie-left">
        <img src="@/assets/img/ql/wx.jpg" class="pic" />
      </div>
      <div class="lie-right">
        <p>开发商延期交房，业主如何维权呢？</p>

        <span>
          <i class="iconfont icon-taiji">2016-07-07</i>
          <i class="iconfont icon-view">156</i>
        </span>
      </div>
    </div>

    <div class="zi">房先森互联网家装有别于传统装修公司与其他装修中介平台，以自营模式整合设计师与项目经理，杜绝项目转包外包，利用互联网将工地惊醒在线全景直播，通过去中间环节，提供装吸引套餐+个性化服务。</div>
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
.gray {
  background-color: #f4f4f4;
  height: 0.7rem;
  font-size: 0.37rem;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
h2 {
  font-size: 30px;
  text-align: center;
  color: #999;
}
p {
  font-size: 20px;
  text-align: center;
  color: #999;
}
.uu {
  width: 100%;
  height: 1.4rem;
  display: flex;
  flex-wrap: wrap;
}
ul li {
  width: 2.5rem;
  background-color: #f4f4f4;
  border-radius: 10px;
  font-size: 15px;
  text-align: center;
  margin-left: 5px;
}
.yy {
  color: black;
  font-size: 20px;
  margin-left: 20px;
}
.ppp {
  width: 100%;
  height: 5rem;

  box-sizing: border-box;
  padding: 10px;
}
.lc {
  width: 300px;
  height: 50px;
  font-size: 20px;
  margin-left: 40px;
  color: #39c894;
  border: #39c894 1px solid;
  background-color: white;
  border-radius: 10px;
}
.two {
  width: 100%;
  height: 2rem;
  margin-top: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.icon-pencle {
  font-size: 1rem;
}
.icon-share {
  font-size: 1rem;
}
h1 {
  font-size: 20px;
  border-left: 5px solid #39c894;
  padding: 0 10px;
}
.lie {
  width: 100%;
  height: 2.1rem;
  display: flex;
  border-bottom: 1px solid #f4f4f4;
  margin-top: 25px;
}
.lie-right {
  font-size: 0.45rem;
  /* p{
    color: black;
  } */
}
.zi{
  width: 100%;
  height: 3rem;
  margin-top: 20px;
  font-size: 20px;
  background-color: lightgray;
  text-align: center;
  padding: 15px 0px;
  border-radius: 10px;
}
</style>
