<template>
    <div class="reg-wrapper">
        <img src="../../assets/login/login.jpg"></img>
        <img src="../../assets/user/user-back.png" class="nav-back"></img>
        <img src="../../assets/shike.png" class="logo"></img>
        <div class="content">
            <img src="../../assets/login/username.png" class="username-img"></img>
            <XInput  V-model='account' placeholder='请输入帐号' type='text' class="username"></XInput>
            <img src="../../assets/login/password.png" class="password-img"></img>
            <XInput  V-model='account' placeholder='请输入密码' type='password' class="password"></XInput>
        </div>
        <div class="yanzhen">
            <XInput  title="验证码" V-model='account' type='text' class="yanzhenma"></XInput>
        </div>
        <button class="btn1"  @click="gotohome">注册</button>
        <div class="foot">
            <img src="../../assets/login/line.png" class="line1-img"></img>
            <span class="zhuce">登录</span>
            <img src="../../assets/login/line.png" class="line2-img"></img>
        </div>
    </div>
</template>

<script>
import { XInput } from 'vux'
export default {
  components: {
    XInput
  },
  methods: {
    gotohome () {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style type="text/css">
    .login-wrapper {
        width: 100%;
        height: 100%;
        position: relative;
    }
    .login-wrapper-img {
      width: 100%;
      height: 100%;
      z-index: 0;
  }
  .nav-back {
      width: 18px;
      height: 25px;
      position: absolute;
      left: 30px;
      top: 30px;
  }
  .logo {
      width: 110px;
      height: 110px;
      position: absolute;
      left: 150px;
      top: 200px;
  }
  .username-img {
      width: 20px;
      height: 30px;
      position:absolute;
      left: 80px;
      top: 350px;
  }
  .username {
      position:absolute;
      left: 140px;
      top: 345px;
  }
  .password-img {
      width: 20px;
      height: 30px;
      position:absolute;
      left: 80px;
      top: 425px;
  }
  .password {
      position:absolute;
      left: 140px;
      top: 415px;
  }
  .yanzhenma {
      position:absolute;
      left: 65px;
      top: 460px;
  }
  .btn1 {
      position: absolute;
      left:70px;
      top: 520px;
      width: 270px;
      height: 45px;
      border-radius: 20px;
      background-color: #fff;
      color: #000;
      font-size: 20px;
  }
  .check {
      width: 20px;
      height: 20px;
      position:absolute;
      left: 70px;
      top: 540px;
  }
  .zhuce {
      position:absolute;
      left: 190px;
      top: 730px;
      color: #fff;
      font-size: 16px;
      
  }
  .line1-img {
      position:absolute;
      left: 50px;
      top: 690px;
  }
  .line2-img {
      position:absolute;
      left: 233px;
      top: 690px;
  }
</style>
