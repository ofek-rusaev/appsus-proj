import routes from './routes.js';
import appHeader from './general-cmps/app-header.cmp.js';
import userMsg from './general-cmps/user-msg.cmp.js';


const router = new VueRouter({ routes })

new Vue({
    el: '#app',
    router,
    template: `
        <section class="email-app">
        <app-header></app-header>
        <user-msg></user-msg>
        <!-- <note-app></note-app> -->
        <router-view></router-view>
        <footer> © Ofek & Keren Ba'am</footer>
        </section>
    `,
    components: {
        appHeader,
        userMsg
    }
})