<template>
    <div class="write-wrapper">
        <div class="nav">
        <img src="../../assets/user/user-back.png" class="nav-menu"  @click="gotomsg"></img>
        <p class="nav-title">发消息</p>
        </div>
        <div style="text-align: center;margin-top:30px">
        <textarea style="width: 90%;height:50px" placeholder="收件人"></textarea>
        </div>
        <div style="text-align: center;margin-top:20px">
        <textarea style="width: 90%;height:100px" placeholder="内容"></textarea>
        </div>
        <div style="text-align: center;margin-top:20px">
        <button class="write-btn">发送</button>
        </div>
    </div>
</template>

<script type="text/javascript" src="">
export default {
  methods: {
    gotomsg () {
      this.$router.push({name: 'mymsg'})
    }
  }
}
</script>

<style type="text/css">
  .mymsg-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
  }
  .nav {
      height: 50px;
      width: 100%;
      background-color: #2b3f8c;
  }
  .nav-menu {
      position: absolute;
      width: 25px;
      height: 25px;
      left: 25px;
      top: 30px;
      z-index: 10;
  }
  .write-btn {
      width: 80%;
      height: 45px;
      background-color: #2B3F8C;
      color: #fff;
  }
</style>
