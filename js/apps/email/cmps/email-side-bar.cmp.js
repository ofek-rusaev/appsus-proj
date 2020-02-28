import emailCompose from './email-compose.cmp.js'
import emailList from './email-list.cmp.js'

export default {
    name: 'email-side-bar',
    template: `
    <section class="email-side-bar">
    <router-link to="/email/compose"><button class="compose">+ Compose</button></router-link>
    <router-link to="/email/inbox"><div class="item"><img src="img/inbox.svg" />Inbox</div></router-link>
    <router-link to="/email/starred"><div class="item"><img src="img/star.svg" />Starred</div></router-link>
    <router-link to="/email/inbox"><div class="item"><img src="img/sent.svg" />Sent</div></router-link>
    <router-link to="/email/drafts"><div class="item"><img src="img/draft.svg" />Draft</div></router-link>
    </section>`,
    components: {
        emailList,
        emailCompose
    }
}