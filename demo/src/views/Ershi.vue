<template>
  <div>
      <div class="dt"><img src="@/assets/img/sj/dt.jpg" alt=""></div>
      <div class="dwdh">
          <div>
              <p><img src="@/assets/img/sj/dw.jpg" alt=""></p>
              <p>杭州市滨江区长河街道越</p>
              <p>达巷79号连连大厦A栋301</p>
          </div>
          <div>
              <p><img src="@/assets/img/sj/dh.jpg" alt=""></p>
              <p>400-997-658</p>
          </div>
      </div>
      <div class="qq">
          <img src="@/assets/img/sj/ewm.jpg" alt="">
      </div>
      <div class="zhbf">
          <img src="@/assets/img/sj/zhbf2.jpg" alt="">
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
.qq{
    width: 100%;
}
.qq img{
    width: 100%;
}
.dwdh{
    text-align: center;
    justify-content: space-around;
    font-size: 0.3rem;
    display: flex;
    margin-bottom: 0.4rem;
}
.dwdh div{
width: 50%;
}
.dt{
    width: 100%;
}
.dt img{ 
width:100%;
}
</style>

