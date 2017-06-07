<template>
    <div class="mymsg-wrapper">
        <div class="nav">
        <img src="../../assets/user/user-back.png" class="nav-menu1"  @click="gotouser"></img>
        <p class="nav-title">消息</p>
        <img src="../../assets/user/nav-write.png" class="nav-write" @click="gotowrite"></img>
        </div>
    </div>    
</template>

<script type="text/javascript" src="">
export default {
  methods: {
    gotouser () {
      this.$router.push({ name: 'user' })
    },
    gotowrite () {
      this.$router.push({ name: 'write' })
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
  .nav-menu1 {
      position: absolute;
      width: 25px;
      height: 25px;
      left: 20px;
      top: 10px;
      z-index: 10;
  }
  .nav-title {
      color: #fff;
      text-align: center;
      font-size: 20px;
      padding-top: 10px;
      z-index: 9;
  }
  .nav-write {
      position: absolute;
      width: 25px;
      height: 25px;
      right: 20px;
      top: 10px;
      z-index: 10;
  }
</style>
