import { emailService } from '../services/email.service.js'

export default {
    name: 'email-compose',
    template: `
    <section class="new-mail">
        <div class="new-msg">New Message</div>
        <div class="flex">To:<input class="txt-inupt" type="text" name="To" v-model="email.from"></div>
        <div class="flex">CC:<input type="text" class="txt-inupt" name="Cc" v-model="email.cc"></div>
        <div class="flex">Bcc:<input type="text" v-model="email.bcc"></div>
        <div class="flex">Subject:<input type="text" v-model="email.subject"></div>
        <div class="flex"><textarea name="message" rows="10" cols="30" v-model="email.body"></textarea></div>
        <div class="email-bottom flex">
           <button></button><button @click="saveEmail">Send</button><button>🗑️</button><button><img src="img/draft.png"/></button>
        </div>
    </section>`,

    data() {
        return {
            email: {}
        }
    },
    methods: {
        saveEmail() {
            emailService.addEmail(this.email)
                .then(email => {
                    this.email = emailService.getEmptyEmail()
                    return this.email;
                })
            this.$router.push('/email/inbox')
        }
    },
    created() {
        const emailId = this.$route.params.id;
        if (emailId) {
            emailService.getById(emailId)
                .then(email => {
                    const copyEmail = JSON.parse(JSON.stringify(email))
                    this.email = copyEmail
                    this.email.subject = 'Re: ' + this.email.subject;
                    console.log(this.email.subject)
                })
        }

    }
}