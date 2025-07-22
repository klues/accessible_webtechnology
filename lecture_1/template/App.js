import { router } from './router.js';
const { createApp } = Vue;

const htmlTemplate = /*html*/`
<div>
    <header>
        <h1>My App</h1>
        <h2 id="main-nav">Hauptnavigation</h2>
        <nav aria-labelledby="main-nav">
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
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