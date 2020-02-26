import { emailService } from '../services/email.service.js'
import emailList from './email-list.cmp.js'

export default {
    template: `
    <section class="email-app">
        <h1>Your Emails</h1>
        <!-- <email-filter @set-filter="setFilter"></email-filter> -->
        <!-- <email-compose @added="composeEmail"></email-compose> -->
        <email-list @selected="selectEmail" :emails="emailsToShow"></email-list>
<<<<<<< HEAD
        <!-- <email-details @back="resetSelect" v-if="chosenEmail" @click.native="resetSelect" :email="chosenEmail"></email-details> -->
        <!-- <email-status></email-status> // Renders how many read from the emails -->
=======
        <email-details @back="resetSelect" v-if="chosenEmail" @click.native="resetSelect" :email="chosenEmail"></email-details>
>>>>>>> 1d8c59158c43d59b0b6d16d9b00e4c6ddbb17d72
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