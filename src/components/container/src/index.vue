<template>
  <el-container>
    <el-aside width="auto">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
      >
        <el-menu-item index="1">
          <MenuIcon />
          <span>导航一</span>
        </el-menu-item>
        <el-menu-item index="2">
          <MenuIcon />
          <span>导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <MenuIcon />
          <span>导航三</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <span @click="toggle">
          <FoldIcon v-if="isCollapse" />
          <ExpandIcon v-else />
        </span>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from "vue";

let isCollapse = ref(false);

const toggle = () => {
  isCollapse.value = !isCollapse.value;
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
