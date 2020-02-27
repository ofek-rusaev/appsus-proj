import { emailService } from '../services/email.service.js'
import emailList from './email-list.cmp.js'
import emailSideBar from './email-side-bar.cmp.js'

export default {
    template: `
    <section class="all-container">
       <section class="left-bar">
       <email-side-bar></email-side-bar>
       </section>
       <router-view></router-view>
    </section>`,
    data() {
        return {
            emails: [],
            chosenEmail: null
        }
    },
    computed: {
        emailsToShow() {
            return this.emails;
        }
    },
    created() {
        console.log('app');
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