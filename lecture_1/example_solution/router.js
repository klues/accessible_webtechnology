import HomeView from './views/HomeView.js';
import StandardCoinsView from './views/StandardCoinsView.js';
import SpecialCoinsView from './views/SpecialCoinsView.js';
import EuroSelect from './components/EuroSelect.js';
import CountrySelect from './components/CountrySelect.js';

const routes = [
  { path: '/', component: HomeView },
  { path: '/special-coins', component: SpecialCoinsView },
  { path: '/standard-coins', component: StandardCoinsView },
  { path: '/euro-select', component: EuroSelect },
  { path: '/country-select', component: CountrySelect }
];

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
});