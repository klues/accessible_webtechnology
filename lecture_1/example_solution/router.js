import HomeView from './views/HomeView.js';
import StandardCoinsNav from './views/StandardCoinsNav.js';
import StandardCoinsCountry from './views/StandardCoinsCountry.js';
import SpecialCoinsNav from './views/SpecialCoinsNav.js';

const routes = [
  { path: '/', component: HomeView },
  { path: '/special-coins', component: SpecialCoinsNav },
  { path: '/standard-coins', component: StandardCoinsNav },
  { path: '/standard-coins/:country', component: StandardCoinsCountry }
];

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});