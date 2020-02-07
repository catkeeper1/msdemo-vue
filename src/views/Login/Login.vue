<template>
  <div class="login">
    
    <div class="pageBorder">
      <div class="pageTitle" align="center">
        {{$t("views.login.pageTitle")}}
      </div>
      <el-form :model="loginForm"
              ref="loginForm"
              status-icon
              :rules = "validateRules"
              class="loginForm">
        <el-form-item 
                      prop="userName">
          <el-input v-model="loginForm.userName" :placeholder="$t('views.login.userName')"
                    autocomplete="off" prefix-icon="el-icon-user-solid">
          </el-input>
        </el-form-item>
        <el-form-item 
                      prop="password">
          <el-input type="password" :placeholder="$t('views.login.password')"
                    v-model.number="loginForm.password" prefix-icon="el-icon-s-goods"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%"
                    @click="submitForm()">{{$t("views.login.login")}}</el-button>
          
        </el-form-item>
        <el-form-item align="right">
          <!--现在先只支持繁体中文所以下面这些切换语言的按钮先被注释掉。
          <el-button type="info" circle style="align:right;" @click="changeLang('zh_TW')">繁</el-button>
          
          <el-button type="info" circle style="align:right;" @click="changeLang('zh_CN')">简</el-button>
          
          <el-button type="info" circle style="align:right;" @click="changeLang('en_US')">Ｅ</el-button>
          -->
        </el-form-item>
      </el-form>
    </div>
    
    
  </div>
</template>

<script>
import userServices from "@/api/services/user.js";
import errorMsgHandler from "@/api/common/errorMsgHandler.js"
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
      validateRules: {
        userName: [
            { required: true, message: this.$t("views.login.msg.userIDIsEmpty"), trigger: 'blur' }
        ],
        password: [
          { required: true, message: this.$t("views.login.msg.passwordIsEmpty"), trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm () {

      this.$refs['loginForm'].validate((valid) => {
        
          if (valid) {
            userServices.login(this.loginForm).then(() => {
              
              this.$router.replace({
                path: '/',
            
              });

            }, err => {
              
              errorMsgHandler.handleError(this, err);            

            });
          } 
      });  

      
    },
    changeLang(lang) {
      sessionStorage.setItem('lang', lang);
      location.reload();
      
    }
  }
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
    width: 500px;
  }
  .pageBorder {
    border:solid 1px black; 
    padding:10px; 
  }
  .pageTitle {
    font-size:24px; 
    font-family:'Helvetica', '黑体', '宋体';
  }
}
</style>