import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SpielerView from '../views/SpielerView.vue';
import TrainerView from '../views/TrainerView.vue';
import MedizinPersonalView from '../views/MedizinPersonalView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      alias: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/spieler',
      name: 'spieler',
      component: SpielerView,
    },
    {
      path: '/trainer',
      name: 'trainer',
      component: TrainerView,
    },
    {
      path: '/medizinpersonal',
      alias: '/personal',
      name: 'medizinpersonal',
      component: MedizinPersonalView,
    },

  ],
});

export default router;