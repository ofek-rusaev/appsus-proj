import routes from './routes.js'
import appHeader from './app-header.cmp.js'
import userMsg from './user-msg.cmp.js'
// import noteApp from './apps/note/cmps/note-app.cmp.js'
// import userMsg from './cmps/user-msg.cmp.js'

const router = new VueRouter({ routes })

new Vue({
    el: '#app',
    router,
    template: `
        <section class="email-app">
        <app-header></app-header>
        <user-msg></user-msg>
            <h1>Welcome To Appsus</h1>
            <!-- <user-msg></user-msg> -->
            <!-- <note-app></note-app> -->
            <router-view></router-view>
        </section>
    `,
    components: {
        appHeader,
        userMsg
    }
})