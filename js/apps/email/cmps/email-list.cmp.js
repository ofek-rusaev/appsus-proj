import emailPreview from './email-preview.cmp.js'
import emailCompose from './email-compose.cmp.js'
// import emailService from '../services/storage.service.js'
export default {
    name: 'email-list',
    template: `
    <section>
    <input type="search" class="search"/>
    <section class="email-bar">
         <section class="left-bar">
         <button class="compose" @click="changePage">+Compose</button>
         <div>Inbox</div>
         <div>Starred</div>
         <div>Sent Mail</div>
         <div>Drafts</div>
         </section>
         <section class="emails-container">
         <router-link v-for="(email, idx) in emails" :to="'email/'+email.id" exact>
         <div class="email-preview"><email-preview :key="idx" :email="email"></email-preview></div>
         </router-link>
         <router-link :to="email/compose"></router-link>
      </section>
    </section>
 </section>
    `,
    props: ['emails'],
    data() {
        return {
            routerLink: ''
        }
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        emitSelected(email) {
            console.log(emails)
            this.$emit('selected', email)
        },
        changePage() {
            to = "/email/compose"
        },
    },
    components: {
        emailPreview,
        emailCompose
    }
}