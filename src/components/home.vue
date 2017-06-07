<template>
<div class="home-wrapper">
      <div class="nav">
        <img src="../assets/home/nav-menu.png" class="nav-menu0"></img>
        <p class="nav-title">时刻</p>
        <img src="../assets/home/nav-user.png" class="nav-user" @click="gotouser"></img>
      </div>
        <img src="../assets/home/homeimg.jpeg" class="home-wrapper-img"></img>        
      <div class="title">
        <img src="../assets/home/home1.png" class="titleimg"></img>
      </div>
      <div class="content">
      <div class="news">
        <img src="../assets/home/home-news.png" class="home-news"></img>
        <p>新闻</p>
      </div>
        <div class="car2">
        <img src="../assets/home/home-car2.png" class="home-car2"></img>
        <p>军事</p>
      </div>
        <div class="beauty">
        <img src="../assets/home/home-beauty.png" class="home-beauty"></img>
        <p>美女</p>
      </div>
        <div class="foods">
        <img src="../assets/home/home-foods.png" class="home-foods"></img>
        <p>美食</p>
      </div>
  </div>
 </div>
</template>

<script>
export default {
  methods: {
    gotouser () {
      this.$router.push({ name: 'user' })
    }
  }
}
</script>

<style>
  .home-wrapper {
     position: relative;
     width: 100%;
     height: 100%;
  }
  .home-wrapper-img {
      width: 100%;
      height: 100%;
      z-index: 0;
  }
  .nav {
      height: 50px;
      width: 100%;
      background-color: #2b3f8c;
  }
  .nav-menu0 {
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
  .nav-user {
      position: absolute;
      width: 25px;
      height: 25px;
      right: 20px;
      top: 10px;
      z-index: 10;
  }
  .title {
      position: absolute;
      width:100%;
      left: 4px;
      top: 54px;
  }
  .titleimg {
     width: 98%;
     height: 150px;
     z-index: 1;
  }
  .news {
      position: absolute;
      left: 45px;
      top: 269px;
  }
  .news p {
      color: #fff;
      padding-left: 25px;
      border-style:inset;
  }
  .car2 {
      position: absolute;
      right: 45px;
      top: 269px;
  }
  .car2 p {
      color: #fff;
      padding-left: 25px;
      border-style:inset;
  }
  .beauty {
      position: absolute;
      left: 45px;
      top: 481px;
  }
  .beauty p {
      color: #fff;
      padding-left: 25px;
      border-style:inset;
  }
  .foods {
      position: absolute;
      right: 45px;
      top: 481px;
  }
  .foods p {
      color: #fff;
      padding-left: 25px;
      border-style:inset;
  }
</style>

