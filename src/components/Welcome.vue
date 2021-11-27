<script setup lang="ts">
import dayjs from "dayjs";
import { onBeforeUnmount, ref } from "vue";
const name = window.localStorage.getItem("name");
const time = ref();
time.value = dayjs().format("YYYY/MM/DD HH:mm:ss");
const timer = window.setInterval(() => {
  time.value = dayjs().format("YYYY/MM/DD HH:mm:ss");
}, 1000);
onBeforeUnmount(() => {
  window.clearInterval(timer);
});
</script>

<template>欢迎您，{{ name }}！当前系统时间：{{ time }}</template>

<style></style>
