import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      alias: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/spieler',
      name: 'spieler',
      component: () => import('../views/SpielerView.vue'),
    },
    {
      path: '/trainer',
      name: 'trainer',
      component: () => import('../views/TrainerView.vue'),
    },
    {
      path: '/medizinpersonal',
      name: 'medizinpersonal',
      component: () => import('../views/MedizinpersonalView.vue'),
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
});

export default router;
