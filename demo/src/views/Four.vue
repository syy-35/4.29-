<template>
  <div class="all">
    <div class="nav">
      <ul>
        <li>户型</li>
        <li>区域</li>
        <li>风格</li>
        <li><img src="/syy/search.png" alt=""></li>
      </ul>
    </div>

    <div class="main">
      <ul>
        <li v-for="item in list" :key="item.id">
          <img :src="item.img" alt="">
          <p>{{item.title}}</p>
          <span>{{item.style}}</span>
          <span>{{item.number}}</span>
          <span>{{item.price}}</span>
        </li>
      </ul>
    </div>

    <div class="fenye">
      <ul>
        <li>上一页</li>
        <li>2/30</li>
        <li>下一页</li>
      </ul>
    </div>

    <footer>
      <img src="/syy/footer.jpg" alt="">
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
    this.$http("/four.json","get").then((res)=>{
      console.log(res.data.list);
      this.list = res.data.list;
    })
  },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.all {
  background-color: #ccc;
}
.nav {
  font-size: .3rem;
}
.nav ul {
  display: flex;
  justify-content: space-around;
  padding: .2rem 0;
  border-top: .02rem solid #ccc;
  background-color: #fff;
}
.nav ul li {
  border-right: .02rem solid black;
  text-align: center;
}
.main ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: .3rem .2rem;
  font-size: .2rem;
  margin-top: .3rem;
}
.main ul li {
  width: 48%;
  margin-bottom: .2rem;
  background-color: #fff;
  text-align: center;
}
.main ul li img {
  width: 100%;
}
.fenye {
  margin: .2rem .2rem;
  font-size: .3rem;
}
.fenye ul {
  display: flex;
  justify-content: space-around;
}
footer img {
  width: 100%;
}
</style>
