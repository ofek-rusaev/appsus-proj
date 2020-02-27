import { emailService } from '../services/email.service.js'
import emailList from './email-list.cmp.js'
import emailSideBar from './email-side-bar.cmp.js'

export default {
    template: `
    <section>
        <!-- <section class="email-bar"> -->
            <section class="left-bar">
                <email-side-bar></email-side-bar>
            <email-list :emails="emailsToShow"></email-list>
        <!-- </section> -->
        </section>
        <!-- <email-status></email-status> // Renders how many read from the emails -->
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
        return this.emails;
    },
    components: {
        emailList,
        emailSideBar

    }
}