import emailPreview from './email-preview.cmp.js'
import emailDetails from './email-details.cmp.js'

export default {
    name: 'email-list',
    template: `
    <section class="emails-container">
     <!-- <router-link v-for="(email, idx) in emails" :to="'email/'+email.id" exact> -->
        <div class="email-preview" v-for="(email, idx) in emails">
            <email-preview :key="idx" :email="email">
                <email-details></email-details>
            </email-preview>
        </div>
    <!-- </router-link> -->
 </section>
    `,
    props: ['emails'],
    methods: {
        emitSelected(email) {
            console.log(emails)
            this.$emit('selected', email)
        }
    },
    components: {
        emailPreview,
        emailDetails
    }
}