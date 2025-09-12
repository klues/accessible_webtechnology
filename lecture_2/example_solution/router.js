import HomeView from './views/HomeView.js';
import UsersView from './views/UsersView.js';
import ConversationView from './views/ConversationView.js';

const routes = [
  { path: '/', component: HomeView },
  { path: '/users', component: UsersView },
  { path: '/conversation', component: ConversationView }
];

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});