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
.lc{
  width: 300px;
  height: 50px;
  font-size: 20px;
  margin-left: 40px;
  color: #39c894;
  border: #39c894 1px solid;
  background-color: white;
  border-radius: 10px;
}
</style>
