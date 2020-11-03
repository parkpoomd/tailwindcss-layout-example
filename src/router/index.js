import { createRouter, createWebHashHistory } from 'vue-router';
import KanbanBoard from '../views/KanbanBoard.vue';
import TuplePricingPage from '../views/TuplePricingPage.vue';
import InboxUi from '../views/InboxUi.vue';

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
  },
  {
    path: '/inbox-ui',
    name: 'InboxUi',
    component: InboxUi
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
