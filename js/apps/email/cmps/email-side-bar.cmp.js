import emailCompose from './email-compose.cmp.js'

export default {
    name: 'email-side-bar',
    template: `
    <section class="email-side-bar">
    <router-link to="/email/compose"><button class="compose">+Compose</button></router-link>
    <router-link to="/email/inbox">Inbox</router-link>
        <div>Starred</div>
        <div>Sent Mail</div>
        <div>Drafts</div>
    </section>`,
        components: {
            // emailList,
            emailCompose,
        }
}