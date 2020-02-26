import routes from './routes.js'
// import appHeader from './cmps/app-header.cmp.js'
import emailApp from './apps/email/cmps/email-app.cmp.js'
import noteApp from './apps/note/cmps/note-app.cmp.js'
// import userMsg from './cmps/user-msg.cmp.js'

const router = new VueRouter({ routes })

new Vue({
    el: '#app',
    router,
        template: `
        <section class="email-app">
            <!-- <h1>Email App</h1> -->
            <email-app></email-app>
            <user-msg></user-msg>
            <note-app></note-app>
        </section>
    `,
        components: {
            emailApp,
            noteApp
            // appHeader,
            // userMsg
        }
})