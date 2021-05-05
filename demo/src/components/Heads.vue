<template>
  <div>
    <ul>
      <li><img src="@/assets/img/切图/logo.png" alt=""></li>
      <li class="center">
        <slot></slot>
      </li>
      <li>我的</li>
      <li>导航</li>
    </ul>
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
ul {
  display: flex;
  justify-content: space-between;
  font-size: .3rem;
  padding: 0 .2rem;
}
ul li {
  height: 1rem;
  line-height: 1rem;
  color: grey;
}
.center {
  width: 30%;
  font-size: .5rem;
  text-align: center;
  color: black;
}
ul li img {
  width: 2rem;
  vertical-align: middle;
}
</style>
