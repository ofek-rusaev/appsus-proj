import { emailService } from '../services/email.service.js'
import emailList from './email-list.cmp.js'

export default {
    template: `
    <section>
    <input type="search"/>
    <section class="email-bar">
        <section class=".left-bar">
            <button class="button">+Compose</button>
            <div>Starred</div>
            <div>Sent Mail</div>
            <div>Drafts</div>
        </section>
        <section class="emails-container">
        <!-- <email-filter @set-filter="setFilter"></email-filter> -->
        <!-- <email-compose @added="composeEmail"></email-compose> -->
        <email-list @selected="selectEmail" :emails="emailsToShow"></email-list>
        <!-- <email-status></email-status> // Renders how many read from the emails -->
        <email-details @back="resetSelect" v-if="chosenEmail" @click.native="resetSelect" :email="chosenEmail"></email-details>
        </section>
    </section>
    </section>
   `,
    data() {
        return {
            emails: [],
            filterBy: { read: '', unread: '' },
            chosenEmail: null,
        }
    },
    computed: {
        emailsToShow() {
            return this.emails;
        }
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        selectEmail(email) {
            this.chosenEmail = email;
        },
        resetSelect() {
            this.chosenEmail = null;
        }
    },
    created() {
        emailService.query()
            .then(emails => {
                this.emails = emails
            });
    },
    components: {
        // 'email-filter': emailFilter,
        emailList,
        // 'email-compose': emailCompose,

    }
}