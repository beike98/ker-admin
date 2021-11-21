<script setup lang="ts">
import Header from './home/Header.vue';
import Aside from './home/Aside.vue';

</script>

<template>
  <el-container>
    <el-aside width="200px">
      <Aside />
    </el-aside>
    <el-container>
      <el-header style="border-bottom: 1px solid #EBEEF5">
        <Header />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<style scope lang="scss">
</style>
