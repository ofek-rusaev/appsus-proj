import { emailService } from "../services/email.service.js";


export default {
    name: 'email-preview',
    template: `
     <section class="email-preview">
     <div @click="starEmail(email.id)">
     <div v-if="clickedStar"><img src="img/color2.png"/></div>
     <div v-else><img src="img/emptystar.png"/></div>
     </div>
        <div class="email-sender">
        <td :class="{read: this.email.isRead, unread: !this.email.isRead}">{{email.from}}</td>
        </div>
        <div class="email-title">
        <td class="email-item bold">{{email.subject}}</td>
        </div>
        <div :class="className" @click="changeBodyClass(email.id)">
        <td class="email-item">{{email.body}}</td>
        </div>
        <div class="email-date">
        <td :class="emailIsRead">{{formattedTime}}</td>
        <div v-if="isClicked">
        <button @click="deleteEmail(email.id)"><img src="img/trash.png"/></button>
        <router-link :to="'inbox/'+email.id"><button><img src="img/extand.png"/></button></router-link>
               <router-link :to="'compose/'+email.id"><button><img src="img/forward.png"/></button></router-link>
        <button><img src="img/save.png"/></button>
        </div>
        
        </div>
        </section>
        `,
    props: ['email'],
    data() {
        return {
            time: new Date(),
            className: 'email-content',
            isClicked: false,
            clickedStar: false
        }
    },
    computed: {
        emailIsRead() {
            console.log('hi')
            return { read: this.email.isRead, unread: !this.email.isRead }
        }
    },
    methods: {
        changeBodyClass(emailId) {
            if (this.className === 'email-content') {
                this.className = 'email-content-extended';
                this.isClicked = true;
                emailService.getById(emailId)
                    .then(email => {
                        console.log('keren', email)
                        this.email.isRead = true;
                    })
            } else {
                this.className = 'email-content';
                this.isClicked = false;

            }
        },
        deleteEmail(emailId) {
            emailService.deleteEmail(emailId);
        },
        starEmail(emailId) {
            this.clickedStar = !this.clickedStar;
            emailService.addToStarred(emailId);
        },
    },
    computed: {
        formattedTime() {
            var ampm = this.time.getHours() >= 12 ? 'PM' : 'AM';
            return this.time.getHours() + ":" + this.time.getMinutes() + ":" + this.time.getSeconds() + ' ' + ampm
        },
    },
}