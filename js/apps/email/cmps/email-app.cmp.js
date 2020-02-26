import { emailService } from '../services/email.service.js'

export default {
    template: `
    <section class="email-app">
        <h1>Your Emails</h1>
        <!-- <email-filter @set-filter="setFilter"></email-filter> -->
        <!-- <email-compose @added="composeEmail"></email-compose> -->
        <email-list v-else  @selected="selectEmail" :emails="emailsToShow"></email-list>
        <!-- <email-details @back="resetSelect" v-if="chosenEmail" @click.native="resetSelect" :email="chosenEmail"></email-details>  -->
        <!-- <email-status></email-status> // Renders how many read from the emails -->
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
            if (!this.filterBy) return this.emails;
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
    // components: {
    //     'email-filter': emailFilter,
    //     'email-list': emailList,
    //     'email-compose': emailCompose,

    // }
}