<script setup lang="ts">
import $http from "../utils/request";
import { User, Lock } from "@element-plus/icons";
import { ElMessage } from "element-plus";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { SHA256 } from "crypto-js";

const username = ref("");
const password = ref("");
const router = useRouter();
const login = async () => {
  if (!username.value || !password.value) {
    ElMessage.warning("用户名或密码未填写！");
    return;
  }
  await $http
    .post("/login", {
      username: username.value,
      password: SHA256(password.value),
    })
    .then((res: any) => {
      const { name, token } = res;
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("token", token);
      router.push("/welcome");
    })
    .catch((err) => console.log(err));
};
</script>

<template>
  <div class="bg">
    <el-card class="login">
      <div class="text">后台管理系统</div>
      <el-input
        placeholder="请输入用户名"
        :prefix-icon="User"
        style="margin-bottom: 20px"
        v-model="username"
      />
      <el-input
        placeholder="请输入密码"
        :prefix-icon="Lock"
        show-password
        v-model="password"
      />
      <div class="button">
        <el-button type="primary" @click="login()">登录</el-button>
      </div>
    </el-card>
  </div>
</template>

<style scope lang="scss">
.bg {
  width: 100vw;
  height: 100vh;
  background-image: url("~/assets/img/bg.png");
}
.login {
  background-color: #ebeef5;
  width: 500px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  opacity: 0.95;
  .text {
    text-align: center;
    font-size: 20px;
    margin-bottom: 30px;
  }
  .button {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    .el-button {
      width: 100px;
    }
  }
}
</style>
