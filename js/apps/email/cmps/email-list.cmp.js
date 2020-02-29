import { emailService } from '../services/email.service.js'
import emailPreview from './email-preview.cmp.js'
import emailFilter from './email-filter.cmp.js'



export default {
    name: 'email-list',
    template: `
    <section class="emails-container">
    <email-filter @filterTxt="setFilterTxt" @filterStatus="setFilterStatus"></email-filter>
    <div class="email-preview" v-for="(email, idx) in emailsToShow">
    <email-preview :key="idx" :email="email" ></email-preview>
    </div> 
    </section>
    `,
    data() {
        return {
            emails: [],
            filterType: 'All',
            filterBy: ''
        }
    },
    computed: {
        emailsToShow() {
            if (!this.filterBy && this.filterType === 'All') return this.emails;
            // this.emails.filter(email => {
            //     const status = Object.values(this.filterType).join('')
            //     console.log(status)
            // })

            return this.emails.filter(email => {
                const txt = Object.values(this.filterBy).join('');
                return email.from.includes(txt) || email.subject.includes(txt) || email.body.includes(txt)
            })
        }
    },
    methods: {
        setFilterTxt(filterBy) {
            this.filterBy = filterBy;
        },
        setFilterStatus(filterType) {
            this.filterType = filterType;
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