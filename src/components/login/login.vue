<template>
    <div class="login-wrapper">
        <img src="../../assets/login/login.jpg"></img>
        <img src="../../assets/user/user-back.png" class="nav-back"></img>
        <img src="../../assets/shike.png" class="logo"></img>
        <div class="content">
            <img src="../../assets/login/username.png" class="username-img" style="left: 80px;top: 360px;"></img>
            <XInput  V-model='account' placeholder='请输入帐号' type='text' class="username"></XInput>
            <img src="../../assets/login/password.png" class="password-img" style="left: 80px;top: 420px;"></img>
            <XInput  V-model='account' placeholder='请输入密码' type='password' class="password"></XInput>
        </div>
        <button class="btn1"  @click="gotohome" style="left:70px;top: 475px;">登录</button>
        <div class="mima">
        <input type="checkbox" class="check"/>
        <span class="remember">记住密码</span>
        <span class="forget">忘记密码？</span>
        </div>
        <div class="foot">
            <img src="../../assets/login/line.png" class="line1-img"></img>
            <span class="zhuce" @click="gotoreg">注册</span>
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
    },
    gotoreg () {
      this.$router.push({ name: 'reg' })
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
      width: 10px;
      height: 30px;
      position:absolute;
  }
  .password-img {
      width: 20px;
      height: 30px;
      position:absolute;
  }
  .btn1 {
      position: absolute;
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
  .remember {
      position:absolute;
      left: 100px;
      top: 545px;
     
  }
  .forget {
      position:absolute;
      left: 250px;
      top: 545px;
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
