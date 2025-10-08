import HomeView from './views/HomeView.js';
import UsersView from './views/UsersView.js';
import ConversationView from './views/ConversationView.js';
import MessageListBasic from './components/Basic/MessageListBasic.js';
import ConversationWithSave from './components/ConversationWithSave.js';
import SettingsView from './views/SettingsView.js';

const routes = [
  { path: '/', component: HomeView },
  { path: '/users', component: UsersView },
  { path: '/message-list-basic', component: MessageListBasic },
  { path: '/conversation', component: ConversationView },
  { path: '/conversation-with-save', component: ConversationWithSave },
  { path: '/settings', component: SettingsView }
];

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});