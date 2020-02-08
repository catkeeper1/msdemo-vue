<template>
  <div class="main" v-if="showCurrentView">
    <el-container style="border: 3px solid #eee; height:100%">
      <el-header height="100px">
        <el-container>
          <el-aside width="200px">
            <img style="width:100px;height:100px" src="./../../../public/CMHK_logo.jpeg"/>
            <img style="width:80px;height:80px" src="./../../../public/MYLINK_logo.jpeg"/>
          </el-aside>
          <el-main>
            <div style="font-size:24px; color:#707377" align="center">{{$t('main.appTitle')}}</div>
            <div style="font-size:18px; color:#707377" align="center">{{viewName}}</div>
          </el-main>
        </el-container>

        
      </el-header>
      <el-container class="container">
        <el-aside width="200px" height="100%">
          <my-left-menu v-bind:userRole="userRole"/>
        </el-aside>
        <el-main style="padding:5px;">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import myLeftMenu from '@/components/LeftMenu'
import routerMap from '@/router/routerMap'
import userServices from "@/api/services/user.js";

export default {
  name: 'Main',
  components: {
    myLeftMenu
  }, 
  data() {
    return {
      viewName: '',
      showCurrentView: false,
      userRole: ''
    }
  },
  methods: {
    
    updateViewName(item, routePath) {

      if(routePath == '/') {
        this.viewName = '';
        return true;
      }

      if(routePath == '/Dashboard') {
        this.viewName = this.$t("main.dashboard");
        return true;
      }

      if(item.path == routePath) {
        this.viewName = this.$t('menus.'+ item.name);
        return true;
      }
      for(var i = 0 ; i < item.children.length; i++) {
        if(this.updateViewName(item.children[i], routePath)) {
          return true;
        }
      }
      return false;
    }
    
  },
  created () {
    
    userServices.queryCurrentUser().then(res => {
      
      this.userRole = res.data.role;
      console.log(this.userRole);

      this.showCurrentView = true;

      if(this.$route.path == '/') {
        
        this.$router.replace({
          path:'/Dashboard'
        });
      }
    });

    
  },
  watch: {
    $route: {
      handler: function(val){
        
        for(var i = 0 ; i < routerMap.length; i++ ) {
          if(this.updateViewName(routerMap[i], val.path)) {
            break;
          }
        }
      },
      deep: true,
      immediate: true
    }
  }
}
</script>
<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>