import { router } from './router.js';
import defaultDataService from './service/defaultDataService.js';
const { createApp } = Vue;

const htmlTemplate = /*html*/`
<div>
    <header>
        <h1>My Messenger</h1>
        <h2 id="main-nav">Main navigation</h2>
        <nav aria-labelledby="main-nav">
            <ul>
                <li><router-link to="/chats">Chats</router-link></li>
                <li><router-link to="/calls">Calls</router-link></li>
                <li><router-link to="/settings">Settings</router-link></li>
            </ul>
        </nav>
    </header>
    <main>
        <router-view></router-view>
    </main>
</div>
`

const App = {
    template: htmlTemplate,
    mounted() {
        defaultDataService.createDefaultData();
    }
};

createApp(App).use(router).mount('#app');