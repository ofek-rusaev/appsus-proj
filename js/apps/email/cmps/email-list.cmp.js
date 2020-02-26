import emailPreview from './email-preview.cmp.js'

export default {
    name: 'email-list',
    template: `
    <section class="emails-container">
    <h1>Emailllllls</h1>
     <router-link v-for="(email, idx) in emails" :to="'email/'+email.id" exact>
        <email-preview :key="idx" :email="email"></email-preview>
    </router-link>
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
        emailPreview
    },
    created() {
        console.log(emails)
    }
}