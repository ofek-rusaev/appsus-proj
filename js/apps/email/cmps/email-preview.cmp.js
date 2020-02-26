// import { emailService } from "../services/email.service";

export default {
    name: 'email-preview',
    template: `
     <section class="email-preview">
        <div class="email-sender">
        <td class="email-item bold">{{email.from}}</td>
        </div>
        <div class="email-title">
        <td class="email-item bold">{{email.subject}}</td>
        </div>
        <div class="email-content">
        <td class="email-item">{{email.body}}</td>
        </div>
        <div class="email-date">
        <td class="email-item">{{formattedTime}}</td>
        </div>
    </section>
  `,
    props: ['email'],
    data() {
        return {
            time: new Date()
        }
    },
    computed: {
        formattedTime() {
            console.log('keren', this.time)
            var ampm = this.time.getHours() >= 12 ? 'PM' : 'AM';
            return this.time.getHours() + ":" + this.time.getMinutes() + ":" + this.time.getSeconds() + ' ' + ampm
        },
    }
}