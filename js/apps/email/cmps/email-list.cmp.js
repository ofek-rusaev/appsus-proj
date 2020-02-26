import emailPreview from './email-preview.cmp.js'

export default {
    name: 'email-list',
    template: `
    <section class="emails-container">
     <router-link v-for="(email, idx) in emails" :to="'email/'+email.id" exact>
        <div class="email-preview"><email-preview :key="idx" :email="email"></email-preview></div>
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
    }
}