import { createRouter, createMemoryHistory } from 'vue-router';
import routes from './index';

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;