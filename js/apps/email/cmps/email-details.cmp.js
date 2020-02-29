import { emailService } from '../services/email.service.js'

export default {
    name: 'email-details',
    template: `
    <section class="email-long">
    <h1>{{email.subject}}</h1>
    <div>{{email.from}}</div>
    <section>{{email.body}}</section>
    </section>`,
    data() {
        return {
            email: null
        }
    },
    created() {
        const emailId = this.$route.params.id;
        if (emailId) {
            emailService.getById(emailId)
                .then(email => {
                    // DEEP copy
                    const copyemail = JSON.parse(JSON.stringify(email))
                    this.email = copyemail;
                    return this.email;
                })
        }
    }

}