<template>
  <div class="leftMenu">
    <el-menu default-active="2"
             class="el-menu-vertical-demo"
             @select="selectMenuItem">
      <!-- @open="handleOpen"
             @close="handleClose" -->
      <template v-for="(item,index) in routerMap">
        <el-submenu v-if="isShow(item.children) && hasAccessRight(item)"
                    :key="index"
                    :index="item.path">
          <template slot="title">
            <!-- <i class="el-icon-location"></i> -->
            <span>{{$t('menus.' + item.name)}}</span>
          </template>
          <template v-for="(cItem,cIndex) in item.children">
          <el-menu-item v-if="hasAccessRight(cItem)"
                        :key="cIndex"
                        :route="cItem"
                        :index="cItem.path">{{$t('menus.'+ cItem.name)}}</el-menu-item>
          </template>
        </el-submenu>
        <el-menu-item v-if="!isShow(item.children) && hasAccessRight(item)"
                      :key="index"
                      :route="item"
                      :index="item.path">{{$t('menus.' + item.name)}}</el-menu-item>

      </template>
      <el-menu-item :index="'logout'">{{$t('menus.logout')}}</el-menu-item>

    </el-menu>
  </div>
</template>
<script>
/**。
 * 菜单
 * @module LeftMenu
 */
import routerMap from '@/router/routerMap'
import userServices from "@/api/services/user.js";
export default {
  name: 'LeftMenu',
  data () {
    return {
      routerMap: routerMap
    }
  },
  created () {
    console.log("user role in left menu " + this.userRole);
  },
  methods: {
    isShow (parameter) {
      console.log(parameter);

      if (parameter) {
        return true
      } else {
        return false
      }
    },
    hasAccessRight(item) {
      if(item.needAccessRights == null) {
        return true;
      }

      for(var i = 0; i < item.needAccessRights.length; i++) {
        if(this.userRole == item.needAccessRights[i]) {
          return true;
        }
      }
      return false;
    },

    selectMenuItem (key, keyPath) {
      console.log('select menu item: ' + key + " --- " + keyPath);

      if(key == 'logout') {
        this.handleLogout();
        return;
      }

      if(this.$route.path != key) {
        

        this.$router.push({
          path: key
        });
      }
    },
    handleLogout() {
      this.$confirm(this.$t('main.msg.confirmToLogout'), '', {
          confirmButtonText: this.$t('buttons.confirm'),
          cancelButtonText: this.$t('buttons.cancel'),
          type: 'info'
        }).then(() => {
          userServices.logout();
            this.$router.push({
            path: '/Login'
          });
          
        }).catch(() => {
          //do nothing here.       
        });

    }
  },
  props:{
    userRole:{           
      type:String,
      required:true
    }
  }
}
</script>
<style lang="less" scoped>
.leftMenu {
  height: 100%;
}
</style>