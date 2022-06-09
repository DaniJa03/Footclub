<template>
  <div>
    <nav class="container flex justify-around py-8 mx-auto bg-white">
      <div class="flex items-center">
        <a>
          <h3 class="text-2xl font-medium text-blue-500"><RouterLink to="/home">FOOTCLUB</RouterLink></h3>
        </a>
      </div>
      <div class="items-center hidden space-x-8 lg:flex">
        <a href=""><RouterLink to="/spieler">Spieler</RouterLink></a>
        <a href=""><RouterLink to="/trainer">Trainer</RouterLink></a>
        <a href=""><RouterLink to="/medizinpersonal">Medizinpersonal</RouterLink></a>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { RouterLink, createWebHistory, RouterView } from 'vue-router';
</script>
