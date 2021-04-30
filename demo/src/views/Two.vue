<template>
  <div>
    <input type="text" placeholder="请输入关键字" class="ipt" />
    <button class="search">搜索</button>
    <div class="bulid">
      <ul class="uu">
        <li>装修前</li>
        <li>装修中</li>
        <li>装修后</li>
      </ul>
      <van-grid :column-num="4">
        <van-grid-item
          v-for="value in 4"
          :key="value"
          icon="photo-o"
          text="预算文字"
        />
      </van-grid>
      <button class="lc">了解装修流程</button>

      <h1>为您推荐</h1>
      <!-- 这是一个下面的第一个列表 -->

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

      <button class="change">换一下</button>
      <div class="zi">房先森互联网家装有别于传统装修公司与其他装修中介平台，以自营模式整合设计师与项目经理，杜绝项目转包外包，利用互联网将工地惊醒在线全景直播，通过去中间环节，提供装吸引套餐+个性化服务。</div>
    </div>
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
.ipt {
  width: 5rem;
  height: 0.5rem;
  font-size: 20px;
  border: 1px solid #39c894;
}
.search {
  width: 1.5rem;
  height: 0.7rem;
  font-size: 20px;
  background-color: #39c894;
  color: aliceblue;
}
.uu {
  width: 100%;
  height: 0.5rem;
  /* margin-top: 5px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
ul li {
  font-size: 0.4rem;
}
.bulid {
  width: 100%;
  height: 4.5rem;
  margin-top: 10px;
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
h1 {
  font-size: 20px;
  border-left: 5px solid #39c894;
  padding: 0 10px;
}
.pic {
  width: 3rem;
  height: 2.1rem;
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
}
.icon-view {
  padding: 0 20px;
}
.change{
  width: 5.5rem;
  height: .8rem;
  font-size: 20px;
  margin-left: 40px;
  color: #39c894;
  background-color: #fff;
  
}
.zi{
  width: 100%;
  height: 3rem;
  margin-top: 10px;
  font-size: 20px;
  background-color: lightgray;
  text-align: center;
  padding: 15px 0px;
  border-radius: 10px;
}
</style>
