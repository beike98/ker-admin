<script setup lang="ts">
import $http from '../utils/request'

const login = async () => {
  const res = await $http.get('/login')
  console.log(res)
}
const error = async () => {
  const res = await $http.get('/error')
  console.log(res);
}
</script>

<template>
  <div>
    用户名：
    <el-input />
  </div>
  <div>
    密码：
    <el-input />
  </div>
  <div>
    <el-button @click="login()">登录</el-button>
    <el-button @click="error()">找回密码</el-button>
  </div>
</template>

<style scope lang="scss">
</style>
