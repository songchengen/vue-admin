<template>
    <div class="login-component">
      <div class="login-form-container">
        <el-form :model="loginForm">
          <el-form-item label-position="left"	>
            <el-input v-model="loginForm.user_name"></el-input>
          </el-form-item>
        </el-form>
      </div>
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
  .login-component{
    height: 100vh;
    background-color: #f1f1f1;
  }
  .login-form-container{
    position: relative;
    top: 50%;
    left: 50%;
    transform: rotateY(-50%) rotateX(-50%);
    padding: 60px;
    width: 300px;
    background: #ffffff;
    text-align: center
  }
</style>


