<template>
  <div>
    <!-- 大盒子 -->
    <div>
      <!-- 第一部分 -->
      <div class="qq">
        <div>
          观澜时代国际花园云邸5栋
          <spa class="nm">泥木工程</spa>
        </div>
        <div class="hx">
          户型:
          <span>二室</span> 面积:
          <span>60-90m²</span> 装修预算:
          <span>18万</span>
        </div>
        <div>
          工地概况:
          <span>百万平米超级大盘,占据钱塘江北岸最美的江湾和湿地</span>
        </div>
        <div class="an">
          <button>🖊 评论 (10)</button>
          <button>🔖 预约参观工地</button>
        </div>
      </div>
      <!-- 第二部分 -->
      <div class="debf">
        <div class="wz">
          <div class="wz1">
            设计师:
            <span>
              <u>吴飞柯</u>
            </span>
            <sapn class="ee">项目经理</sapn>:
            <span>王永龙</span>
          </div>
          <div class="wz2">
            <span></span>
            <span></span>
            <span>2016-07-11</span>
            <span>泥木</span>
            <span>验收阶段</span>
            <div></div>
          </div>
          <div class="fztp">
            <p>泥木工程验收成功</p>
            <img src="@/assets/img/sj/fztp.jpg" alt />
          </div>
        </div>
      </div>

      <div class="debf">
        <div class="wz">
          <div class="wz1">
        
          </div>
          <div class="wz2">
            <span></span>
            <span></span>
            <span>2016-04-27</span>
            <span>水电</span>
            <span>验收阶段</span>
            <div></div>
          </div>
          <div class="fztp">
            <p>泥木工程验收成功</p>
            <img src="@/assets/img/sj/fztp1.jpg" alt />
          </div>
        </div>
      </div>
      <div class="debf">
        <div class="wz">
          <div class="wz1">

          </div>
          <div class="wz2">
            <span></span>
            <span></span>
            <span>2016-07-11</span>
            <span>水电</span>
            <span>施工阶段</span>
            <div></div>
          </div>
          <div class="fztp fztp2">
            <p>泥木工程验收成功</p>
            <img src="@/assets/img/sj/fztp2.jpg" alt/>
          </div>
        </div>
      </div>
      <div class="zhbf">
          <img src="@/assets/img/sj/zhbf.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang='scss' scoped>
.zhbf{
    width: 100%;
}
.zhbf img{
    width: 100%;
}
.sg{
    
    background: #999999;
}
.fztp img{
    width: 95%;
}
.debf {
  background: #eaeaea;
}
.fztp {
  width: 100%;
  text-align: center;
  margin-top: 0.2rem;
}
.fztp p {
  margin-left: -4rem;
  margin-bottom: 0.2rem;
  font-size: 0.3rem;
}
.wz2 {
  margin-top: 0.4rem;
  margin-left: 0.2rem;
}
.wz2 div {
  position: absolute;
  margin-top: -0.2rem;
  margin-left: 0.6rem;
  width: 0.9rem;
  border-top: 2px solid #39c894;
}
.wz2 span:nth-child(1) {
  padding: 0.1rem 0.3rem;
  border-radius: 50%;
  background-color: #39c894;
}
.wz2 span:nth-child(3) {
  background-color: #c0bfbf;
  padding: 0.15rem 0.25rem;
  color: #999999;
  margin-left: 0.9rem;
}
.wz2 span:nth-child(4) {
  background-color: #39c894;
  padding: 0.15rem 0.25rem;
  color: white;
}
.wz1 span:nth-child(3) {
  color: #999999;
  font-size: 0.3rem;
}
.wz2 span:nth-child(5) {
  background-color: #feb505;
  padding: 0.15rem 0.25rem;
  margin-left: 0.2rem;
  color: white;
}
.ee {
  margin-left: 1rem;
}
.wz1 {
  padding-left: 0.25rem;
  padding-top: 0.4rem;
}
.wz1 span:nth-child(1) {
  color: #39c894;
  font-size: 0.3rem;
}
.debf {
  width: 100%;
}
.wz {
  font-size: 0.35rem;
}
.an button {
  width: 49%;
  height: 0.7rem;
  border: 1px solid #eaeaea;
  background-color: white;
  margin-bottom: 0.2rem;
}
.an button:nth-child(1) {
  color: #39c;
}
.an button:nth-child(2) {
  color: #39c894;
}
.nm {
  background-color: #39c894;
  color: white;
  font-size: 0.25rem;
  padding: 0.05rem 0.1rem;
  border-radius: 0.1rem;
}
.qq {
  width: 100%;
  height: 3rem;
  font-size: 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid #eaeaea;
}
.hx {
  width: 90%;
  display: flex;
  justify-content: space-between;
}
.hx span:nth-child(2) {
  margin-top: 0.07rem;
}
.hx span:nth-child(3) {
  margin-top: 0.03rem;
}
.qq div {
  margin-left: 0.2rem;
}
.qq span {
  font-size: 0.25rem;
  color: #999999;
}
</style>

