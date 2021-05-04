<template>

  <div>

  <div class="body">
    <Heads class="top"></Heads>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item
        ><img src="@/assets/img/切图/banner.jpg" alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img src="@/assets/img/切图/banner1.jpg" alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img src="@/assets/img/切图/banner2.jpg" alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img src="@/assets/img/切图/banner3.jpg" alt=""
      /></van-swipe-item>
    </van-swipe>
    <!-- 轮播图 -->
    <div class="iconnav">
      <ul>
        <li>
          <p style="background: #39c894"><i class="iconfont">&#xe602;</i></p>
          <p>装修方案</p>
        </li>
        <li>
          <p style="background: #feb505"><i class="iconfont">&#xe606;</i></p>
          <p>效果图</p>
        </li>
        <li>
          <p style="background: #eed215"><i class="iconfont">&#xe609;</i></p>
          <p>设计师</p>
        </li>
        <li>
          <p style="background: #00b2b2"><i class="iconfont">&#xe603;</i></p>
          <p>装修工地</p>
        </li>
        <li>
          <p style="background: #1b9af7"><i class="iconfont">&#xe60b;</i></p>
          <p>装修攻略</p>
        </li>
        <li>
          <p style="background: #7b72e9"><i class="iconfont">&#xe604;</i></p>
          <p>装修贷款</p>
        </li>
        <li>
          <p style="background: #ff4351"><i class="iconfont">&#xe62c;</i></p>
          <p>免费预约</p>
        </li>
        <li>
          <p style="background: #fe8864"><i class="iconfont">&#xe608;</i></p>
          <p>十秒报价</p>
        </li>
      </ul>
    </div>
    <!-- 九宫格 -->
    <div class="con">
      <div class="con-top">
        <ul>
          <li>全屋装修</li>
          <li>包设计、包主材、包水电、包施工</li>
        </ul>
      </div>
      <van-swipe
        class="my-swipe crice"
        :autoplay="3000"
        indicator-color="#39c894"
      >
        <van-swipe-item
          ><img src="@/assets/img/切图/img1.jpg" alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img src="@/assets/img/切图/banner1.jpg" alt=""
        /></van-swipe-item>
      </van-swipe>
      <div class="con-botton">
        <ul>
          <li><i class="iconfont">&#xe627;</i>0增项，标准施工</li>
          <li><i class="iconfont">&#xe628;</i>杜绝项目外包</li>
          <li><i class="iconfont">&#xe60c;</i>装修贷款</li>
        </ul>
      </div>
    </div>
    <!-- 全屋装修 -->
    <div class="order">
      <div class="order-top">
        <ul>
          <li>装修预约</li>
          <li>免费上门量房，设计方案满意为止</li>
        </ul>
      </div>
      <div class="input">
        <input type="text" placeholder="小区名" />
        <input type="text" placeholder="手机号" />
        <input type="text" placeholder="建筑面积" />
        <button>立即申请</button>
      </div>
    </div>
    <!-- 装修预约 -->
    <div class="designer">
      <div class="designer-top">
        <ul>
          <li>设计师</li>
        </ul>
      </div>
      <div class="con-van">
        <ul>
          <li>
            <img src="@/assets/img/syx/001.png" alt="">
            <p>吴飞柯</p>
            <p>优秀</p>
          </li>
          <li>
            <img src="@/assets/img/syx/002.png" alt="">
            <p>陆炎龙</p>
            <p>主任</p>
          </li>
          <li>
            <img src="@/assets/img/syx/003.png" alt="">
            <p>张海建</p>
            <p>总监</p>
          </li>
          <li>
            <img src="@/assets/img/syx/004.png" alt="">
            <p>陈冲</p>
            <p>优秀</p>
          </li>
        </ul>
      </div>
      <div class="con-btn">
        <ul>
          <li>
            换一换
            <i class="iconfont">&#xe62f;</i>
          </li>
          <li>
            更多设计师
            <i class="iconfont">&#xe605;</i>
          </li>
        </ul>
      </div>
    </div>
    <!-- 设计师 -->
     <div class="order xiao">
      <div class="order-top">
        <ul>
          <li>效果图</li>
        </ul>
      </div>
     <div class="xiao-img">
       <img src="@/assets/img/syx/005.png" alt="">
       <ul>
         <li><img src="@/assets/img/syx/006.png" alt=""></li>
         <li><img src="@/assets/img/syx/007.png" alt=""></li>
         <li><img src="@/assets/img/syx/008.png" alt=""></li>
         <li><img src="@/assets/img/syx/009.png" alt=""></li>
       </ul>
     </div>
      <div class="con-btn">
        <ul>
          <li>
            换一换
            <i class="iconfont">&#xe62f;</i>
          </li>
          <li>
            更多设计师
            <i class="iconfont">&#xe605;</i>
          </li>
        </ul>
      </div>
    </div>
    <!-- 效果图 -->
     <div class="order sinatv">
      <div class="order-top">
        <ul>
          <li>工地直播</li>
        </ul>
      </div>
     <div class="xiao-img">
       <img src="@/assets/img/syx/010.png" alt="">
     </div>
      <div class="con-btn">
        <ul>
          <li>
            换一换
            <i class="iconfont">&#xe62f;</i>
          </li>
          <li>
            更多设计师
            <i class="iconfont">&#xe605;</i>
          </li>
        </ul>
      </div>
    </div>
    <!-- 工地直播 -->
    <div class="order gong">
      <div class="order-top">
        <ul>
          <li>装修攻略</li>
        </ul>
      </div>
     <div class="xiao-img">
       <img src="@/assets/img/syx/011.png" alt="">
     </div>
      <div class="con-btn">
        <ul>
          <li>
            换一换
            <i class="iconfont">&#xe62f;</i>
          </li>
          <li>
            更多设计师
            <i class="iconfont">&#xe605;</i>
          </li>
        </ul>
      </div>
    </div>
    <div class="foot">
      <img src="@/assets/img/syx/012.png" alt="">
    </div>
  </div>
</template>

<script>
import "@/assets/css/syx.css";
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.top{
  background-color: #fff;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  width: 100%;
  height: 3.2rem;
}
.body {
  background-color: #eaeaea;
  padding: 0;
  margin: 0;
  list-style: none;
}
img {
  width: 100%;
  height: 100%;
}
.iconnav {
  width: 100%;
  height: 4.8rem;
  background-color: #fff;
  margin-bottom: 0.36rem;
}
.iconnav ul {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.iconnav ul li {
  width: 25%;
  height: 50%;
  text-align: center;
  line-height: 1.1rem;
}
.iconnav ul li p:nth-child(1) {
  width: 1.1rem;
  height: 1.1rem;
  border: 1px solid #ccc;
  margin: 0.2rem auto 0;
  border-radius: 50%;
}
.iconnav ul li .iconfont {
  font-size: 0.65rem;
  color: #fff;
}
.iconnav ul li p {
  font-size: 0.32rem;
  color: #333;
}
</style>
