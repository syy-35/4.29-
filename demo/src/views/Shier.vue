<template>
  <div class="all">
    <Heads class="tou">设计师</Heads>
    <div class="nav">
      <div class="top">
        <img class="top_l" src="@/assets/img/syy/chong.jpg" alt="">
        <img class="top_r" src="@/assets/img/syy/chongr.jpg" alt="">
      </div>
      <div class="bottom">
        <span>个人简介:</span> 毕业于中国美术学院，从事家装行业3年，积累了一定的经验。具有良好的审美能力以及独立完成项目方案设计的能力。
        工作期间曾完成多个室内精装修项目，熟悉室内装修施工工艺材料的运用。切合实际生活的设计，营造舒适的私人空间。
      </div>
    </div>

    <div class="main">
      <h4>设计作品</h4>
      <ul>
        <li v-for="item in list" :key="item.id">
          <img :src="item.img" alt="" />
          <p>{{ item.title }}</p>
          <span>{{ item.style }}</span>
          <span>{{ item.size }}</span>
          <span>{{ item.price }}</span>
        </li>
      </ul>
    </div>

    <footer>
      <img src="@/assets/img/syy/bottom.jpg" alt="">
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list:[]
    }
  },
  methods: {

  },
  mounted() {
    //获取数据
    this.$http("/shier.json","get").then((res)=>{
      console.log(res.data.list);
      this.list = res.data.list;
    })
  },
}
</script>

<style scoped>
.tou {
  background-color: #fff;
}
.all {
  background-color: #eaeaea;
}
.top {
  height: 3rem;
}
.top_l {
  width: 20%;
  vertical-align: top;
  margin-top: .7rem;
}
.top_r {
  width: 80%;
  height: 100%;
}
.bottom {
  background-color: #fff;
  color: #999;
  font-size: .3rem;
  padding: .2rem;
}
.bottom span {
  color: black;
}
.main {
  margin-top: .3rem;
  background-color: #fff;
  padding: .3rem .2rem;
}
.main h4 {
  font-size: .3rem;
}
.main ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0.3rem 0.2rem;
  font-size: 0.2rem;
  margin-top: 0.3rem;
}
.main ul li {
  width: 48%;
  margin-bottom: 0.2rem;
  background-color: #fff;
  text-align: center;
  border: 1px solid #999;
  padding-bottom: .2rem;
}
.main ul li img {
  width: 100%;
}
</style>
