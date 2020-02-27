import { emailService } from '../services/email.service.js'
import emailList from './email-list.cmp.js'
import emailSideBar from './email-side-bar.cmp.js'

export default {
    template: `
    <section class="all-container" :key="this.$route.path">
       <section class="left-bar">
            <email-side-bar></email-side-bar>
       </section>
       <router-view></router-view>
    </section>`,
    data() {
        return {
            emails: [],
            chosenEmail: null,
            filterBy: { from: '' }

        }
    },
    computed: {
        emailsToShow() {
            if (!this.filterBy.from) return this.emails;
            return this.emails.filter(email => {
                var currEmail = email.from.toLowerCase();
                return currEmail.includes(this.filterBy.from.toLowerCase())
            })
        }
    },
    created() {
        emailService.query()
            .then(emails => {
                this.emails = emails;
            });
    },
    components: {
        emailList,
        emailSideBar

    }
}