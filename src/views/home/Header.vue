<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
const exit = () => {
  window.localStorage.clear();
  router.push("/login");
};
</script>
<template>
  <div class="header">
    <div class="header-exit" @click="exit()">退出登录</div>
  </div>
</template>
<style scoped lang="scss">
.header {
  height: 50px;
  &-exit {
    float: right;
    line-height: 60px;
    cursor: pointer;
  }
}
</style>
