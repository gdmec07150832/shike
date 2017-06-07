<template>
    <div class="Suggest-wrapper">
        <div class="Suggest-nav">
        <img src="../../assets/user/user-back.png" class="nav-menu5"  @click="gotouser"></img>
        <p class="nav-title">发消息</p>
        </div>
        <div style="text-align: center;margin-top:30px">
        <textarea style="width: 90%;height:50px" placeholder="请填写您的宝贵意见"></textarea>
        </div>
        <div style="text-align: center;margin-top:20px">
        <button class="write-btn">提交</button>
        </div>
    </div>
</template>

<script type="text/javascript" src="">
export default {
  methods: {
    gotouser () {
      this.$router.push({name: 'user'})
    }
  }
}
</script>

<style type="text/css">
  .Suggest-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
  }
  .Suggest-nav {
      height: 50px;
      width: 100%;
      background-color: #2b3f8c;
  }
  .nav-menu5 {
      position: absolute;
      width: 25px;
      height: 25px;
      left: 25px;
      top: 10px;
      z-index: 10;
  }
  .write-btn {
      width: 80%;
      height: 45px;
      background-color: #2B3F8C;
      color: #fff;
  }
</style>
