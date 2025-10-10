import { router } from './router.js';
import defaultDataService from './service/defaultDataService.js';
const { createApp } = Vue;

const htmlTemplate = /*html*/`
<div>
    <header>
        <div class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <h1 class="navbar-brand">My Messenger</h1>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <nav class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li><router-link class="nav-link" to="/chats">Chats</router-link></li>
                        <li><router-link class="nav-link" to="/calls">Calls</router-link></li>
                        <li><router-link class="nav-link" to="/settings">Settings</router-link></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    <main class="container-fluid">
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