import { emailService } from '../services/email.service.js';
import { eventBus } from '../../../general-services/event-bus.service.js';

export default {
    name: 'email-compose',
    template: `
    <section class="new-mail">
        <div class="new-msg">New Message</div>
        <div class="input-mail">To:<input class="txt-inupt" type="text" name="To" v-model="email.from"></div>
        <div class="input-mail">CC:<input type="text" class="txt-input" name="Cc" v-model="email.cc"></div>
        <div class="input-mail">Bcc:<input type="text" v-model="email.bcc"></div>
        <div class="input-mail">Subject:<input type="text" v-model="email.subject"></div>
        <div class="input-mail"><textarea name="message" rows="10" cols="30" v-model="email.body"></textarea></div>
        <div class="email-bottom">
         <div class="email-bottom-right"><button class="send-button" @click="sendEmail">Send</button>
         <button @click="saveToDrafts" title="Save to drafts" class="draft-button"><img src="img/draft.png"/></button></div>
         <div class="email-bottom-left"><button><img src="img/trash.png"/></button></div>
        </div>
    </section>`,

    data() {
        return {
            email: {}
        }
    },
    methods: {
        sendEmail() {
            emailService.addEmail(this.email)
                .then(email => {
                    this.email = emailService.getEmptyEmail()
                    const msg = {
                        txt: `Email sent successfully.`,
                        type: 'success',
                    }
                    eventBus.$emit('show-msg', msg)
                    return this.email;
                })
            this.$router.push('/email/inbox')
        },
        saveToDrafts() {
            emailService.draftEmail(this.email)
                .then(email => {
                    this.email = emailService.getEmptyEmail()
                    const msg = {
                        txt: `Email saved to draft successfully.`,
                        type: 'success',
                    }
                    eventBus.$emit('show-msg', msg)
                    return this.email;
                })
            this.$router.push('/email/drafts')
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
                })
        }

    }
}