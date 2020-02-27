import { emailService } from '../services/email.service.js'
import emailList from './email-list.cmp.js'
import emailSideBar from './email-side-bar.cmp.js'

export default {
    template: `
    <section>
    <input type="search"/>
    <section class="email-bar">
        <section class=".left-bar">
            <router-link to="/email/compose" @added="composeEmail"><button class="button">+Compose</button></router-link>
            <router-link to="/email">EMAILS</router-link>
            <router-view></router-view>
            <email-side-bar></email-side-bar>
        </section>
        <section class="emails-container">
        <!-- <email-filter @set-filter="setFilter"></email-filter> -->
        <!-- <email-compose @added="composeEmail"></email-compose> -->
        <email-list @selected="selectEmail" :emails="emailsToShow"></email-list>
        <!-- <email-status></email-status> // Renders how many read from the emails -->
        <email-details @back="resetSelect" v-if="chosenEmail" @click.native="resetSelect" :email="chosenEmail"></email-details>
        <!-- <router-link to="/email/compose">COMPOSE</router-link> -->
            |
        </section>
    </section>
    </section>
   `,
    data() {
        return {
            emails: [],
            filterBy: { read: '', unread: '' },
            chosenEmail: null,
            isCompose: false
        }
    },
    computed: {
        emailsToShow() {
            this.isCompose = true;
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
        emailSideBar
        // 'email-compose': emailCompose,

    }
}