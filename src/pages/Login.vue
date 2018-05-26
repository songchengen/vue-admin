<template>
  <div class="form-container">
    <div class="login-box">
      <img src="./../assets/logo.png" alt="LOGO">
    </div>
    <el-form :model="loginForm" size="small">
      <el-form-item>
        <el-input placeholder="Username" />
      </el-form-item>
      <el-form-item>
        <el-input type="password" placeholder="Password" />
      </el-form-item>
      <el-form-item>
        <el-button style="width: 100%" type="primary">Sign in</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        user_name: '',
        password: ''
      }
    }
  }
}
</script>

<style scoped>
  .form-container{
    width: 320px;
    height: 320px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -160px;
    margin-top: -200px;
    padding: 36px;
    box-shadow: 0 0 100px rgba(0,0,0,.08);
  }
  .login-box{
    height: 120px;
    text-align: center;
  }
  .login-box img{
    height:100%;
  }
</style>
