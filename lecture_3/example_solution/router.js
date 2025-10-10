import ChatsView from './views/ChatsView.js';
import ConversationView from './views/ConversationView.js';
import SettingsView from './views/SettingsView.js';
import CallsView from './views/CallsView.js';

const routes = [
  { path: '/chats', component: ChatsView },
  { path: '/calls', component: CallsView },
  { path: '/conversation/:contactId', component: ConversationView },
  { path: '/settings', component: SettingsView },
  { path: '/:pathMatch(.*)*', redirect: '/chats' }
];

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});