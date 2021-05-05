<template>
  <div>
    <Heads>业主评价</Heads>
    <div class="fa">
      <ul>
        <li>
          <span><i class="iconfont">&#xe602;</i></span
          ><span>x*h</span>
        </li>
        <li>2016-05-19</li>
      </ul>
      <p>这篇文章很实用，正在装修，刚好可以用来参考一下。</p>
    </div>

    <div class="fa">
      <ul>
        <li>
          <span><i class="iconfont">&#xe602;</i></span
          ><span>z*o</span>
        </li>
        <li>2016-04-11</li>
      </ul>
      <p>喜欢这篇文章很实用。</p>
    </div>

    <div class="fa">
      <ul>
        <li>
          <span><i class="iconfont">&#xe602;</i></span
          ><span>h*5</span>
        </li>
        <li>2016-04-11</li>
      </ul>
      <p>这个设计师为人和随和，很喜欢他。画图也很仔细，暂时就这些。</p>
    </div>
    <div class="modal"></div>
    <div class="center">
        请先<span>登录</span>或<span>注册成为房先森用户</span>
        <br/>登录后才可以评论。
    </div>
   <div class="img">
      <img src="@/assets/img/syx/016.png" alt="">
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
.fa {
  width: 100%;
  height: 2.3rem;
  font-size: 0.3rem;
  border-bottom: 0.01rem solid #eaeaea;
}
.fa ul {
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.fa ul li:nth-child(1) span:nth-child(1) {
  display: inline-block;
  width: 0.65rem;
  height: 0.65rem;
  background-color: #666;
  border-radius: 50%;
  text-align: center;
  line-height: 0.65rem;
  margin: 0 0.2rem;
}
.fa li {
  height: 1.3rem;
  line-height: 1.3rem;
}
.fa i {
  font-size: 0.5rem;
  color: #fff;
}
.fa ul li:nth-child(1) span:nth-child(2) {
  color: #39c894;
  font-size: 0.36rem;
}
.fa ul li:nth-child(2) {
  color: #999;
  padding-right: 0.2rem;
}
p {
  font-size: 0.35rem;
  padding: 0 0.2rem;
  color: #333;
}
.modal {
  width: 100%;
  height: 4.65rem;
  position: absolute;
  top: 1rem;
  /* z-index: 333; */
  background-color: rgb(0, 0, 0, 0.75);
}
.center {
  width: 100%;
  /* height: 3rem; */
  position: absolute;
  top: 5.65rem;
  /* z-index: 333; */
  background-color: #ccc;
  font-size: .32rem;
  text-align: center;
  padding: 1.1rem 0;
}
.center span{
  color: #39c894;
}
.img{
  width: 100%;
  position: absolute;
  top: 8.7rem;
}
img{
  width: 100%;
}
</style>
