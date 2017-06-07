<template>
    <div class="Album-wrapper">
        <div class="Album-nav">
        <img src="../../assets/user/user-back.png" class="nav-menu4"  @click="gotouser"></img>
        <p class="nav-title">我的相册</p>
        </div>
        <div class="collection-content">
            您还没有任何相片
        </div>
    </div>
    
</template>

<script type="text/javascript" src="">
export default {
  methods: {
    gotouser () {
      this.$router.push({ name: 'user' })
    }
  }
}
</script>

<style type="text/css">
  .Album-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
  }
  .Album-nav {
      height: 50px;
      width: 100%;
      background-color: #2b3f8c;
  }
  .nav-menu4 {
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
  .collection-content {
      width: 100%;
      height: 50px;
      text-align: center;
      line-height: 50px;
      margin-top: 20px;
      background-color: white;
  }
</style>
