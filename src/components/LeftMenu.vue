<template>
  <div class="leftMenu">
    <el-menu default-active="2"
             class="el-menu-vertical-demo"
             @select="select">
      <!-- @open="handleOpen"
             @close="handleClose" -->
      <template v-for="(item,index) in routerMap">
        <el-submenu v-if="isShow(item.children)"
                    :key="index"
                    :index="item.path">
          <template slot="title">
            <!-- <i class="el-icon-location"></i> -->
            <span>{{item.name}}</span>
          </template>
          <el-menu-item v-for="(cItem,cIndex) in item.children"
                        :key="cIndex"
                        :index="cItem.path">{{$t(cItem.name)}}</el-menu-item>
        </el-submenu>
        <el-menu-item v-if="!isShow(item.children)"
                      :key="index"
                      :index="item.path">{{item.name}}</el-menu-item>

      </template>
    </el-menu>
  </div>
</template>
<script>
/**。
 * 菜单
 * @module LeftMenu
 */
import routerMap from '@/router/routerMap'
export default {
  name: 'LeftMenu',
  data () {
    return {
      routerMap: routerMap
    }
  },
  created () {
    console.log(routerMap);
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

    select (key, keyPath) {
      console.log(key);
      console.log(keyPath);
    }
  },
}
</script>
<style lang="less" scoped>
.leftMenu {
  height: 100%;
}
</style>