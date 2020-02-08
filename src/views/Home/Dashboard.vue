<template>
  <div>
    <div style="font 12px 宋体; border:1px solid black; padding: 1px">
        {{$t('views.dashboard.currentUser')}}:{{userId}} 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
        {{$t('views.dashboard.lastLoginTime')}}:{{lastLoginTime}}
    </div>
  </div>
</template>

<script>
import userServices from "@/api/services/user.js";

export default {
  data() {
    return {
      userId: "",
      lastLoginTime: ""  
    };
  },
  created() {
    userServices.queryCurrentUser().then(res => {
      var lastLogin = new Date(res.data.lastLoginTime);
      
      this.userId = res.data.userId;
      this.lastLoginTime = "" + lastLogin.getFullYear()
                           + "-" + (lastLogin.getMonth() + 1) 
                           + "-" + lastLogin.getDate() 
                           + " " + lastLogin.getHours()
                           + ":" + lastLogin.getMinutes()
                           + ":" + lastLogin.getSeconds();  

      console.log(this.lastLoginTime);
      
    });

    
  }
};
</script>
<style lang="less" scoped>
</style>