import emailCompose from './email-compose.cmp.js'
import emailList from './email-list.cmp.js'

export default {
    name: 'email-side-bar',
    template: `
    <section class="email-side-bar">
    <router-link to="/email/compose"><button class="compose">+ Compose</button></router-link>
    <router-link to="/email/inbox"><div class="item"><img src="img/inbox.svg" /><span class="txt-side-bar">Inbox</span></div></router-link>
    <router-link to="/email/starred"><div class="item"><img src="img/star.svg" /><span class="txt-side-bar">Starred</span></div></router-link>
    <router-link to="/email/inbox"><div class="item"><img src="img/sent.svg" /><span class="txt-side-bar">Sent</span></div></router-link>
    <router-link to="/email/drafts"><div class="item"><img src="img/draft.svg" /><span class="txt-side-bar">Draft</span></div></router-link>
    </section>`,
    components: {
        emailList,
        emailCompose
    }
}