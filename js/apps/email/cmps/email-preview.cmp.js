import { emailService } from "../services/email.service.js";


export default {
    name: 'email-preview',
    template: `
     <section class="email-preview">
     <div @click="starEmail(email.id)">
     <div v-if="isClicked"><img src="img/color2.png"/></div>
     <div v-else><img src="img/emptystar.png"/></div>
     </div>
        <div class="email-sender">
        <td class="email-item bold">{{email.from}}</td>
        </div>
        <div class="email-title">
        <td class="email-item bold" >{{email.subject}}</td>
        </div>
        <div :class="className" @click="changeBodyClass">
        <td class="email-item">{{email.body}}</td>
        </div>
        <div class="email-date">
        <td class="email-item bold">{{formattedTime}}</td>
        <div v-if="isClicked">
        <button @click="deleteEmail(email.id)">Delete</button>
        <router-link :to="'inbox/'+email.id"><button>Long</button></router-link>
               <router-link :to="'compose/'+email.id"><button @click="forwardEmail(email.id)">Forward</button></router-link>
        <button >Starred</button>
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
                this.email.isRead = true;
                console.log(this.email)
            } else {
                this.className = 'email-content';
                this.isClicked = false;
            }
        },
        deleteEmail(emailId) {
            emailService.deleteEmail(emailId);
        },
        starEmail(emailId) {
            this.isClicked = !this.isClicked;
            emailService.addToStarred(emailId);
        },
        forwardEmail(emailId) {
            if (emailId) {
                emailService.getById(emailId)
                    .then(email => {
                        console.log(email)
                        this.email = email
                    })
            }
        },

        emailIsRead() {
            console.log('hi')
            return { read: this.email.isRead === true, 'email-item-bold': !this.email.isRead }
        }
    },

    computed: {
        formattedTime() {
            var ampm = this.time.getHours() >= 12 ? 'PM' : 'AM';
            return this.time.getHours() + ":" + this.time.getMinutes() + ":" + this.time.getSeconds() + ' ' + ampm
        },
    },
}