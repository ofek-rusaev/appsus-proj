import emailCompose from './email-compose.cmp.js'
import emailList from './email-list.cmp.js'

export default {
    name: 'email-side-bar',
    template: `
    <section class="email-side-bar">
    <router-link to="/email/compose"><button class="compose">+Compose</button></router-link>
    <router-link to="/email/inbox"><div>Inbox</div></router-link>
    <router-link to="/email/starred"><div>Starred</div></router-link>
    <router-link to="/email/inbox"><div>Sent Mail</div></router-link>
    <router-link to="/email/inbox"><div>Drafts</div></router-link>
    </section>`,
    components: {
        emailList,
        emailCompose
    }
}