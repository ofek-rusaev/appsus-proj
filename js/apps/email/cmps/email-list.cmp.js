import { emailService } from '../services/email.service.js'
import emailPreview from './email-preview.cmp.js'
import emailDetails from './email-details.cmp.js'
import emailFilter from './email-filter.cmp.js'



export default {
    name: 'email-list',
    template: `
    <section class="emails-container">
    <email-filter></email-filter>
    <div class="email-preview" v-for="(email, idx) in emails">
    <email-preview :key="idx" :email="email"></email-preview>
    </div> 
    </section>
    `,
    data() {
        return {
            emails: [],
        }
    },

    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        // emitSelected(email) {
        //     this.$emit('selected', email)
        // }
    },
    components: {
        emailPreview,
        emailDetails,
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