<template>
  <div>
    <Heads>专修方案</Heads>
    <div class="one">
      <img src="@/assets/img/切图/case/case.jpg" alt="" width="100%" />
      <div class="font">
        <p>399元/m半包装修套餐</p>
        特惠：<span>可选300元/平品牌主材包</span>
      </div>
    </div>
    <div class="one">
      <img src="@/assets/img/切图/case/case.jpg" alt="" width="100%" />
      <div class="font">
        <p>399元/m半包装修套餐</p>
        特惠：<span>可选300元/平品牌主材包</span>
      </div>
    </div>
    <div class="zi">房先森互联网家装有别于传统装修公司与其他装修中介平台，以自营模式整合设计师与项目经理，杜绝项目转包外包，利用互联网将工地惊醒在线全景直播，通过去中间环节，提供装吸引套餐+个性化服务。</div>
  </div>
</template>

<script>
import Heads from "../components/Heads.vue";
export default {
  components: { Heads },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.one{
  width: 100%;
  height: 4.5rem;
  /* background-color: pink; */
  margin-bottom: 30px;
}
.font{
  font-size: .4rem;
}
span{
  color: red;
  font-size: .3rem;

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
