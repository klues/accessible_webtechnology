import HomeView from './views/HomeView.js';
import AboutView from './views/AboutView.js';

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView }
];

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});