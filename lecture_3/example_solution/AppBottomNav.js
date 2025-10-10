import { router } from './router.js';
import defaultDataService from './service/defaultDataService.js';
const { createApp } = Vue;

const htmlTemplate = /*html*/`
<div class="container-fluid">
    <header>
        <h1>My Messenger</h1>
        <h2 class="visually-hidden" id="main-nav">Main navigation</h2>
        <nav class="bottom-nav" aria-labelledby="main-nav">
            <ul>
                <li>
                    <router-link to="/chats">
                        <span><i class="fa-solid fa-message"></i> Chats</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/calls">
                        <span><i class="fa-solid fa-phone"></i> Calls</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/settings">
                        <span><i class="fa-solid fa-gear"></i> Settings</span>
                    </router-link>
                </li>
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
    methods: {
        getAriaCurrent(path) {
            return this.$route.path.startsWith(path) ? 'page' : '';
        }
    },
    mounted() {
        defaultDataService.createDefaultData();
    }
};

createApp(App).use(router).mount('#app');