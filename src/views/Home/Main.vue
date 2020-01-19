<template>
  <div class="main">
    <el-container>
      <el-header>Header</el-header>
      <el-container class="container">
        <el-aside width="200px">
          <my-left-menu />
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import myLeftMenu from '@/components/LeftMenu'
export default {
  name: 'Main',
  components: {
    myLeftMenu
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