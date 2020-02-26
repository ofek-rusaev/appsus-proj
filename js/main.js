import routes from './routes.js'
import appHeader from './app-header.cmp.js'
// import emailApp from './apps/email/cmps/email-app.cmp.js'
// import noteApp from './apps/note/cmps/note-app.cmp.js'
// import userMsg from './cmps/user-msg.cmp.js'

const router = new VueRouter({ routes })

new Vue({
    el: '#app',
    router,
    template: `
        <section class="email-app">
        <app-header></app-header>
            <h1>Welcome</h1>
            <!-- <user-msg></user-msg> -->
            <!-- <note-app></note-app> -->
            <!-- <email-app></email-app> -->
            <router-view></router-view>
        </section>
    `,
    components: {
        // emailApp,
        appHeader,
        // noteApp
        // userMsg
    }
})