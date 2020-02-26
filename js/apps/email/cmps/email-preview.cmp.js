import { emailService } from "../services/email.service.js";

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
        <div :class="className" @click="changeBodyClass">
        <td class="email-item">{{email.body}}</td>
        </div>
        <div class="email-date">
        <td class="email-item">{{formattedTime}}</td>
        <div v-if="isClicked">
        <button @click="deleteEmail(email.id)">Delete</button>
        <button>Long</button>
        <button>Forward</button>
        <button>SaveTo..</button>
        </div>

        </div>
    </section>
  `,
    props: ['email'],
    data() {
        return {
            time: new Date(),
            className: 'email-content',
            isClicked: false
        }
    },
    methods: {
        changeBodyClass() {
            if (this.className === 'email-content') {
                this.className = 'email-content-extended';
                this.isClicked = true;
            } else {
                this.className = 'email-content';
                this.isClicked = false;
            }
        },
        deleteEmail(emailId) {
            emailService.deleteEmail(emailId);
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