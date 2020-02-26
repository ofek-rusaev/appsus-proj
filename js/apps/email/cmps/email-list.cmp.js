import emailPreview from './email-preview.cmp.js'

export default {
    name: 'email-list',
    template: `
    <section class="emails-container">
      <router-link v-for="(email, idx) in email" :to="'/email/'+email.id" exact>
        <email-preview  :key="idx" :email="email" ></email-preview>
        </router-link>
 </section>
    `,
    props: ['emails'],
    methods: {
        emitSelected(email) {
            this.$emit('selected', email)
        }

    },
    components: {
        emailPreview
    }
}