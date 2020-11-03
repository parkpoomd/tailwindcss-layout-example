import { createRouter, createWebHashHistory } from 'vue-router';
import KanbanBoard from '../views/KanbanBoard.vue';
import TuplePricingPage from '../views/TuplePricingPage.vue';

const routes = [
  {
    path: '/kanban-board',
    name: 'KanbanBoard',
    component: KanbanBoard
  },
  {
    path: '/tuple-pricing-page',
    name: 'TuplePricingPage',
    component: TuplePricingPage
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
