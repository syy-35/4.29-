<template>
  <div class="all">
    <Heads class="tou">设计师</Heads>
    <div class="nav">
      <ul>
        <li>筛选</li>
        <li>风格</li>
        <li>排序</li>
        <li id="nav_r"><img src="/syy/search.png" alt="" /></li>
      </ul>
    </div>

    <div class="main">
      <div class="top">
        <h4>级别</h4>
        <ul>
          <li>不限</li>
          <li>总监</li>
          <li>主任</li>
          <li>优秀</li>
        </ul>
      </div>
      <div class="top">
        <h4>收费</h4>
        <ul>
          <li>不限</li>
          <li>0-50元/㎡</li>
          <li>50-100元/㎡</li>
          <li>100-150元/㎡</li>
          <li>200元/㎡以上</li>
        </ul>
      </div>
      <div class="bottom">
        确认
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
  mounted() {},
};
</script>

<style scoped>
.all {
  height: 13.3rem;
  background-color: rgba(64, 64, 64, 0.3);
}
.tou {
  background-color: #fff;
}
.nav {
  font-size: 0.3rem;
}
.nav ul {
  display: flex;
  justify-content: space-around;
  padding: 0.1rem 0;
  border-top: 0.02rem solid #ccc;
  background-color: #fff;
}
.nav ul li {
  border-right: 0.02rem solid #ccc;
  text-align: center;
  width: 25%;
  height: 0.8rem;
  line-height: 0.8rem;
}
.nav ul li img {
  width: 0.5rem;
  vertical-align: middle;
}
#nav_r {
  border-right: none ;
}
.main {
  background-color: #eaeaea;
  font-size: .4rem;
  overflow: hidden;
}
.top {
  margin-bottom: .3rem;
  margin: .4rem .2rem 0;
}
.top ul {
  display: flex;
  flex-wrap: wrap;
  color: #999;
  font-size: .3rem;
  justify-content: space-between;
}
.top ul li {
  width: 30%;
  height: .6rem;
  text-align: center;
  line-height: .6rem;
  background-color: #fff;
  margin-top: .2rem;
}
.bottom {
  height: 1rem;
  line-height: 1rem;
  background-color: #39c894;
  color: white;
  margin-top: .8rem;
  text-align: center;
}
</style>
