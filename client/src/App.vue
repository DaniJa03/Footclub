<template>
  <div>
    <Navbar></Navbar>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, createWebHistory, RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
</script>

<style></style>
