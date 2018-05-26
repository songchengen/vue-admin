<template>
    <div class="login-component">
      <form>
        <div class="from-item">
          <self-input placeholder="Username" label="用户名" name="user_name" :border="false" />
        </div>
        <div class="form-item">
          <self-input placeholder="Password" type="password" name="password" />
        </div>
      </form>
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
</style>
