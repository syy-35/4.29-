<template>
  <div class="fang">
    <heads class="top">装修方案</heads>
    <div class="box">
      <ul>
        <li><img src="@/assets/img/syx/013.png" alt="" /></li>
        <li>
          <ol>
            <li>699全包精装套餐</li>
            <li>价格：<span>￥699元</span></li>
            <li>已预约：<span>221套</span></li>
            <li>正式发售：<span>全包套餐火爆预约中</span></li>
          </ol>
        </li>
      </ul>
      <p>
        精装全包套餐，包设计/包主材/包施工/包监工。采用知名辅材、一线<br />
        主材，工厂直供F2C模式
      </p>
    </div>
    <div class="con">
      <ul>
        <li>套餐详情</li>
        <li>配置清单</li>
        <li>施工工艺</li>
        <li>服务流程</li>
      </ul>
      <img src="@/assets/img/syx/014.png" alt="">
    </div>
    <div class="bon">
      <img src="@/assets/img/syx/015.png" alt="">
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
.fang {
  background-color: #eaeaea;
}
.top {
  background-color: #fff;
}
.box {
  width: 100%;
  height: 2.8rem;
  margin-top: 0.2rem;
  background-color: #fff;
  margin-bottom: 0.2rem;
  padding: 0.2rem;
}
.box ul {
  display: flex;
}
.box ul li:nth-child(1) {
  flex: 4;
}
.box ul li:nth-child(1) img {
  width: 2.7rem;
}
.box ul li:nth-child(2) {
  flex: 6;
  line-height: 0.48rem;
}
.box ul li:nth-child(2) ol li:nth-child(1) {
  color: #333;
  font-size: 0.36rem;
}
.box ul li:nth-child(2) ol li {
  color: #999;
  font-size: 0.2rem;
}
.box ul li:nth-child(2) ol li:nth-child(even) span {
  color: #ff4351;
}
.box ul li:nth-child(2) ol li:nth-child(3) span {
  color: #333;
}
.box p {
  font-size: 0.1rem;
  color: #333;
}
.con {
  width: 100%;
  height: 7.6rem;
  background-color: #fff;
   margin-bottom: 0.2rem;
}
.con ul {
  display: flex;
  font-size: 0.3rem;
}
.con ul li {
  flex: 1;
  text-align: center;
  line-height: 1rem;
  border: 0.01rem solid #eaeaea;
}
.con ul li:nth-child(2):hover {
  border-bottom: 0.05rem solid #2bb281;
}
.con img{
  width: 100%;
}
.bon {
  width: 100%;
  height: 6.38rem;
  background-color: #fff;
}
.bon img{
  width: 100%;
}
</style>
