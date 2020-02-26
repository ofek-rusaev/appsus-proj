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
    data() {
        return {
            routerLink: ''
        }
    },
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
<<<<<<< HEAD
        emailDetails
=======
        emailDetails,
        // emailCompose
>>>>>>> f60ac8b655588acc9b194ae0d7d1389b9af4cc0b
    }
}