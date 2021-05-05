<template>
  <div>
    <div class="dhz">
      <!-- 图片 -->
      <div>
        <img src="@/assets/img/sj/stp.jpg" alt />
      </div>
      <!-- 装修 -->
      <div class="zx">
        <p>申请房先森装修贷</p>
        <hr />
        <p>
          <input type="text" placeholder="电话" />
        </p>
        <p>
          <input type="text" placeholder="小区名" />
        </p>
        <p>
          <input type="text" placeholder="建筑面积" />
        </p>
        <span>m²</span>
        <p>
          <button>立即申请</button>
        </p>
      </div>
      <!-- 装修款 -->
      <div class="zxk">
        <div>什么是装修贷款？</div>
        <p class="xp">装修贷款是无担保个人信用贷款，是房先森装修和建行共同为</p>
        <p>准备装修的工薪人士发放的个人信用贷款，用于房屋装修相关的支</p>
        <p>
          出。
          <span>无需担保,无需抵押,</span>以个人信誉作为判断依据,
          <span>最高可贷50</span>
        </p>
        <p>
          <span>万</span>
        </p>
      </div>
      <!-- 申请 -->
      <div class="sq">
        <p class="lc">申请流程</p>
        <hr />
        <div class="sqhz">
          <div>
            <p>
              <img src="@/assets/img/sj/yq1.jpg" alt />
            </p>
            <p>01</p>
            <p>在线预约</p>
          </div>
          <div>
            <p>
              <img src="@/assets/img/sj/yq2.jpg" alt />
            </p>
            <p>02</p>
            <p>银行评估初审</p>
          </div>
          <div>
            <p>
              <img src="@/assets/img/sj/yq3.jpg" alt />
            </p>
            <p>03</p>
            <p>提交材料放款</p>
          </div>
        </div>
      </div>
      <!-- 申请条件 -->
      <div class="sqdk">
        <p class="tj">申请条件</p>
        <hr />
        <div class="sqtj">
          <div>
            <p>
              <img src="@/assets/img/sj/sqtj.jpg" alt />
            </p>
            <p>社保缴纳记录</p>
          </div>
          <div>
            <p>
              <img src="@/assets/img/sj/sqtj1.jpg" alt />
            </p>
            <p>购房资料或房产证</p>
          </div>
          <div>
            <p>
              <img src="@/assets/img/sj/sqtj2.jpg" alt />
            </p>
            <p>房管局拉房产证明</p>
          </div>
          <div>
            <p>
              <img src="@/assets/img/sj/sqtj3.jpg" alt />
            </p>
            <p>没有银行违约的信用记录</p>
          </div>
        </div>
      </div>
      <!-- 图片 -->
      <div class="sqdt">
        <img src="@/assets/img/sj/sqdt.jpg" alt="">
      </div>
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
.sqdt img{
  width: 100%;
}
.tj {
  margin-top: 0.2rem;
  font-size: 0.4rem;
  text-align: center;
}
.sqtj {
    margin-top: 0.3 rem;
  display: flex;
  flex-wrap: wrap;
  margin-left: 0.1rem;
}
.sqtj div {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 49%;
  height: 2rem;
  font-size: 0.25rem;
  text-align: center;
  border: 1px solid #eaeaea;
}
.sq {
  margin-top: 0.3rem;
}
.sq{
  font-size: 0.3rem;
  text-align: center;
}
.sq img {
  margin-top: 0.2rem;
}
.sqhz {
  display: flex;
}
.sqhz {
  display: flex;
  justify-content: space-around;
  margin-top: 0.2rem;
}
.sqhz div {
  width: 2.2rem;
  height: 2.8rem;
  border: 1px solid #39c894;
}
.xp {
  padding-left: 0.5rem;
}
.zxk p {
  margin-left: 0.1rem;
}
.zxk span {
  color: #39c894;
}
.dhz {
  width: 100%;
}
.zxk div {
  font-size: 0.4rem;
  margin-top: -0.3rem;
  background-color: white;
  width: 4rem;
  text-align: center;
  margin-left: 1.7rem;
  margin-bottom: 0.3rem;
}
.zxk {
  font-size: 0.24rem;
  border: 1px dashed #39c894;
  width: 95%;
  margin-left: 0.2rem;
  margin-top: 0.5rem;
}
.zx {
  text-align: center;
}
.zx p {
  font-size: 0.4rem;
}
.zx span {
  position: absolute;
  font-size: 0.4rem;
  margin-top: -0.65rem;
  margin-left: 2.5rem;
}
hr {
  width: 90%;
  margin-left: 0.3rem;
  margin-top: 0.2rem;
  background-color: #eaeaea;
}
.zx input {
  font-size: 0.25rem;
  padding-left: 0.2rem;
  width: 6rem;
  height: 0.7rem;
  margin-top: 0.2rem;
  color: #999999;
  border: 1px solid #eaeaea;
}
.zx button {
  font-size: 0.4rem;
  width: 6.3rem;
  height: 0.8rem;
  background-color: #feb505;
  border: 0rem;
  color: white;
  margin-top: 0.2rem;
  border-radius: 0.1rem;
}
</style>
