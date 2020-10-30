<template>
<div>
  <el-button type="info" @click="logout">退出</el-button>
</div>
</template>

<script>
    export default {
        name: "home",
      methods:{
          logout(){
            // 退出———— 1.清空 token。 2.回到登录页。
            window.sessionStorage.clear();
            this.$router.push('/login');
          }
      }
    }
</script>

<style lang="less" scoped>

</style>
