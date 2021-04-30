<template>
  <div class="all">
    <Heads class="tou">设计师</Heads>
    <div class="nav">
      <ul>
        <li>筛选</li>
        <li>风格</li>
        <li>排序</li>
        <li><img src="/syy/search.png" alt=""></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {

  },
  mounted() {

  },
}
</script>

<style scoped>
.all {
  height: 13.3rem;
  background-color: rgba(64,64,64,.3);
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
  border-right: 0.02rem solid black;
  text-align: center;
}
</style>
