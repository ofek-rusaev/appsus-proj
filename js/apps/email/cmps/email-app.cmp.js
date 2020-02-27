import { emailService } from '../services/email.service.js'
import emailList from './email-list.cmp.js'
import emailCompose from './email-compose.cmp.js'

export default {
    template: `
    <section>
        <input type="search" class="search"/>
        <section class="email-bar">
            <section class="left-bar">
            <router-link to="/email/compose" @click="composeEmail"><button class="compose">+Compose</button></router-link>
            <div class="left-bar-item">Starred</div>
            <div class="left-bar-item">Sent Mail</div>
            <div class="left-bar-item">Drafts</div>
            </section>
            <section class="emails-container">
            <router-view></router-view>
        <!-- <email-filter @set-filter="setFilter"></email-filter> -->
        <!-- <email-status></email-status> // Renders how many read from the emails -->
        <router-link to="/email/"><email-list @selected="selectEmail" :emails="emailsToShow"></email-list>
        </router-link>
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
        },
        composeEmail() {

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
        emailCompose,

    }
}