<template>
  <div> 
    <div class="lyy">
      <img src="@/assets/img/切图/process/process1.jpg" alt="" width="100%" >
      <img src="@/assets/img/切图/process/process2.jpg" alt="" width="100%" >
      <img src="@/assets/img/切图/process/process3.png" alt="" width="100%" >
      <img src="@/assets/img/切图/process/process4.jpg" alt="" width="100%" >
    </div>

    <div class="ly1">
      【装修前】
    </div>
     <div class="ly2">
      NO.1收房验房
    </div>
     <div class="ly3">
      NO.2装修预算
    </div>
     <div class="ly4">
      NO.3装修风水
    </div>

      <div class="ly5">
      NO.4装修设计
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

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
}
.lyy{
   position: relative;

}

.ly1{
  position: absolute;
  top: 3rem;
  left: 1rem;
  font-size: .36rem;
  color: #ff4351;
  
}
.ly2{
   position: absolute;
  top: 4.7rem;
  left: 1.8rem;
  font-size: .26rem;
  color: #000;
}
.ly3{
   position: absolute;
  top: 6.2rem;
  left: 4rem;
  font-size: .26rem;
  color: #000;
}
.ly4{
   position: absolute;
  top: 7.8rem;
  left: 1.8rem;
  font-size: .26rem;
  color: #000;
}
.ly5{
   position: absolute;
  top: 9.4rem;
  left: 4rem;
  font-size: .26rem;
  color: #000;
}

</style>
