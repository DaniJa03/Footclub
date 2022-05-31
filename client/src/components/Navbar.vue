<script>
import { RouterLink, createWebHistory, RouterView } from 'vue-router';
</script>
<template>
  <div>
    <nav class="container flex justify-around py-8 mx-auto bg-white">
      <div>
        <a href="">
          <h3 class="text-2xl font-medium text-blue-500"><RouterLink to="/">FOOTCLUB</RouterLink></h3>
        </a>
      </div>
      <div class="space-x-8">
        <a href="">
          <RouterLink to="/spieler">Spieler auflisten</RouterLink>
        </a>
        <a href="">
          <RouterLink to="/trainer">Trainer auflisten</RouterLink>
        </a>
        <a href="">
          <RouterLink to="/medizinpersonal">Medizinpersonal auflisten</RouterLink>
        </a>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Hinzufügen
        </button>
      </div>
    </nav>
  </div>
</template>
