import routes from './routes.js'
import appHeader from './apps/email/cmps/app-header.cmp.js'
import emailApp from './apps/email/cmps/email-app.cmp.js'
// import userMsg from './cmps/user-msg.cmp.js'

const router = new VueRouter({ routes })

new Vue({
    el: '#app',
    router,
    template: `
        <section class="email-app">
        <app-header></app-header>
            <h1>Email App</h1>
            <!-- <user-msg></user-msg> -->
            <router-view></router-view>
        </section>
    `,
    components: {
        emailApp,
        appHeader,
        // userMsg
    }
})