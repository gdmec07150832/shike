<template>
    <div class="user-wrapper">
        <div class="shangchen">
            <img src="../assets/user/user-back.png" class="nav-back" @click="gotohome"></img>
            <img src="../assets/user/user-shezhi.png" class="nav-shezhi"></img>
            <img src="../assets/user/user-img1.png" class="nav-userimg"></img>
        </div>
        <div class="content">
            <ul class="content-ul">
                <li @click="gotomsg">我滴信息
                <img src="../assets/user/user-back1.png" class="back1"></img>
                </li>
                <li @click="gotofriend">我滴好友
                <img src="../assets/user/user-back1.png" class="back1"></img>
                </li>
                <li @click="gotoalbum">我滴相册
                <img src="../assets/user/user-back1.png" class="back1"></img>
                </li>
                <li @click="gotocollection">我滴收藏
                <img src="../assets/user/user-back1.png" class="back1"></img>
                </li>
                <li @click="gotoSuggest">反馈
                <img src="../assets/user/user-back1.png" class="back1"></img>
                </li>
            </ul>
        </div>
        <button class="btn1"  @click="gotologin" style="background-color: #1e298a;color: #fff;left:70px;
      top: 600px;">退出帐号</button>
    </div>
</template>

<script>
export default {
  methods: {
    gotohome () {
      this.$router.push({ name: 'home' })
    },
    gotologin () {
      this.$router.push({ name: 'login' })
    },
    gotomsg () {
      this.$router.push({name: 'mymsg'})
    },
    gotocollection () {
      this.$router.push({name: 'collection'})
    },
    gotoalbum () {
      this.$router.push({name: 'Album'})
    },
    gotoSuggest () {
      this.$router.push({name: 'Suggest'})
    },
    gotofriend () {
      this.$router.push({name: 'friend'})
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
  .shangchen {
      background-color: #162252;
      width: 100%;
      height: 223px;
  }
  .nav-back {
      width: 18px;
      height: 25px;
      position: absolute;
      left: 30px;
      top: 30px;
  }
  .nav-shezhi {
      width: 25px;
      height: 25px;
      position: absolute;
      right: 30px;
      top: 28px;
  }
  .nav-userimg {
      width: 99px;
      height: 99px;
      position: absolute;
      left: 158px;
      top: 81px;
  }
  .content {
      width: 100%;
      height: 100%;
  }
  ul {
      list-style:none;
      display:block;
      line-height:20px;
  }
  li {
      position: relative;
      line-height:60px;
  }
  .back1 {
      position: absolute;
      width: 18px;
      height: 25px;
      right: 30px;
      top: 10px;
  }
  .btn1 {
      position: absolute;
      width: 190px;
      height: 45px;
      border-radius: 20px;
  }
</style>
