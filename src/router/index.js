import { createRouter, createWebHashHistory } from 'vue-router';
import KanbanBoard from '../views/KanbanBoard.vue';

const routes = [
  {
    path: '/kanban-board',
    name: 'KanbanBoard',
    component: KanbanBoard
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
