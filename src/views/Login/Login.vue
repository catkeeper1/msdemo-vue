<template>
  <div class="login">
    <el-form :model="loginForm"
             ref="loginForm"
             label-width="100px"
             class="loginForm">
      <el-form-item label="用户名:"
                    prop="userName">
        <el-input v-model="loginForm.userName"
                  autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码:"
                    prop="password">
        <el-input type="password"
                  v-model.number="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="submitForm()">提交</el-button>
        <el-button @click="resetForm('loginForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import userServices from "@/api/services/user.js";
export default {
  name: 'Login',
  created () {
    console.log(this.$store.state.test);
  },
  data () {
    return {
      loginForm: {
        userName: '',
        password: ''
      },
    }
  },
  methods: {
    submitForm () {
      userServices.login(this.loginForm).then(res => {
        console.log(res);

      })
    }
  },
}
</script>
<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .loginForm {
    width: 700px;
  }
}
</style>