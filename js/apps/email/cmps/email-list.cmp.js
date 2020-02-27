import { emailService } from '../services/email.service.js'
import emailPreview from './email-preview.cmp.js'
import emailDetails from './email-details.cmp.js'

export default {
    name: 'email-list',
    template: `
    <section class="emails-container">
    <input type="search" class="search" placeholder="Type here to search.."/>
    <div class="email-preview" v-for="(email, idx) in emails">
    <email-preview :key="idx" :email="email"></email-preview>
    </div> 
    </section>
    `,
    data() {
        return {
            emails: [],
            // chosenEmail: null
        }
    },

    methods: {
        // setFilter(filterBy) {
        //     this.filterBy = filterBy;
        // },
        emitSelected(email) {
            console.log(emails)
            this.$emit('selected', email)
        }
    },
    components: {
        emailPreview,
        emailDetails
    },
    created() {
        emailService.query()
            .then(emails => {
                console.log
                this.emails = emails;
            })
    }
}