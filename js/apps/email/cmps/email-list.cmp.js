import { emailService } from '../services/email.service.js'
import emailPreview from './email-preview.cmp.js'
import emailFilter from './email-filter.cmp.js'



export default {
    name: 'email-list',
    template: `
    <section class="emails-container">
    <email-filter @filterTxt="setFilter" @filterStatus="setFilter"></email-filter>
    <div class="email-preview" v-for="(email, idx) in emails" :emails="emailsToShow">
    <email-preview :key="idx" :email="email" ></email-preview>
    </div> 
    </section>
    `,
    data() {
        return {
            emails: [],
            filterBy: ''
        }
    },
    computed: {
        emailsToShow() {
            if (!this.filterBy) return this.emails;
            return this.emails.filter(email => {
                // var currEmail = email.from.toLowerCase();
                const keren = Object.values(this.filterBy).join('');
                return email.from.includes(keren)
            })
        }
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy;
        }
    },
    components: {
        emailPreview,
        emailFilter

    },
    created() {
        if (this.$route.path.includes('/inbox')) {
            emailService.query()
                .then(emails => {
                    this.emails = emails;
                })
        };
        if (this.$route.path.includes('/starred')) {
            emailService.filterStarred()
                .then(emails => {
                    this.emails = emails;
                })
        };

        if (this.$route.path.includes('/drafts')) {
            emailService.filterDrafts()
                .then(drafts => {
                    this.emails = drafts;
                })
        }
    }
}