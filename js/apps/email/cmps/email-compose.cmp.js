import { emailService } from '../services/email.service.js'

export default {
    name: 'email-compose',
    template: `<section class="new-mail">
    <div class="new-msg">New Message</div>
    <div class="flex">To:<input class="txt-inupt" type="text" name="To"></div>
    <div class="flex">CC:<input type="text" class="txt-inupt" name="Cc"></div>
    <div class="flex">Bcc:<input type="text"></div>
    <div class="flex">Subject:<input type="text"></div>
    <div class="flex"><textarea name="message" rows="10" cols="30">The cat was playing in the garden.</textarea></div>
    <div class="email-bottom flex">
    <button @click="writeEmail">Send</button><span>🗑️</span>
    </div>
    </section>`,
    props: ['email'],
    methods: {
        writeEmail() {
            console.log('hello')
            console.log(this.email)
            emailService.saveEmail(this.email)
                .then(email => {
                    console.log(email)
                    return this.email = email;
                })
        }
    }

}