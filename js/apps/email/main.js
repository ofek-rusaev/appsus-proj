import routes from './routes.js'
// import appHeader from './cmps/app-header.cmp.js'
// import bookApp from './pages/book-app.cmp.js'
// import userMsg from './cmps/user-msg.cmp.js'

const router = new VueRouter({ routes })

new Vue({
    el: '#app',
    router,
    //     template: `
    //     <section class="book-app">
    //         <h1>Book App</h1>
    //         <app-header></app-header>
    //         <user-msg></user-msg>
    //         <router-view></router-view>
    //     </section>
    // `,
    //     components: {
    //         bookApp,
    //         appHeader,
    //         userMsg
    //     }
})