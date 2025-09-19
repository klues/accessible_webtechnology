import { router } from './router.js';
const { createApp } = Vue;

const htmlTemplate = /*html*/`
<div>
    <header>
        <h1>My Messenger</h1>
        <h2 id="main-nav">Main navigation</h2>
        <nav aria-labelledby="main-nav">
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/users">Users</router-link></li>
                <li><router-link to="/message-list-basic">Demo 1: MessageList (basic)</router-link></li>
                <li><router-link to="/conversation">Demo 2: Conversation (pass props)</router-link></li>
                <li><router-link to="/conversation-with-save">Demo 3: Conversation (with save)</router-link></li>
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
    template: htmlTemplate
};

createApp(App).use(router).mount('#app');