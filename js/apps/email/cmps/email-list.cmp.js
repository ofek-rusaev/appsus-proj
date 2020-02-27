import emailPreview from './email-preview.cmp.js'
import emailDetails from './email-details.cmp.js'

export default {
    name: 'email-list',
    template: `
    <section class="emails-container">
        <div class="email-preview" v-for="(email, idx) in emails">
            <email-preview :key="idx" :email="email">
                <email-details></email-details>
            </email-preview>
        </div>
    </section>
    `,
    props: ['emails'],
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        emitSelected(email) {
            console.log(emails)
            this.$emit('selected', email)
        }
    },
    components: {
        emailPreview,
        emailDetails,
    }
}