import { emailService } from "../services/email.service.js";
import { eventBus } from '../../../general-services/event-bus.service.js';

export default {
    name: 'email-preview',
    template: `
    <section class="email-preview" :class="{'open-email-preview': this.isClicked}" @click="changeBodyClass(email.id)">
        <div class="email-main-section" >
            <div @click="starEmail(email.id)" class="star">
                <div v-if="clickedStar"><img src="img/color2.png"/></div>
                <div v-else><img src="img/emptystar.png"/></div>
            </div>

            <div class="email-sender">
                <td :class="{read: this.email.isRead, unread: !this.email.isRead}">{{email.from}}</td>
            </div>

            <div class="email-title"  @click="toggleTextLength">
                <td :class="{read: this.email.isRead, unread: !this.email.isRead}">{{email.subject}}</td>
            </div>

        </div>
                <div class="email-content" :class="{'email-content-expended': this.isClicked}" >
                    <td class="email-item">{{formattedTxt}}<span v-if="isHidden">...</span></td>
                </div>

        <div class="email-secondary-section">
            <div class="email-date">
                <td :class="{read: this.email.isRead, unread: !this.email.isRead}">{{formattedTime}}</td>
                <div v-if="isClicked" class="email-secondary-section-open">
                    <button @click="deleteEmail(email.id)"><img src="img/trash.png"/></button>
                    <router-link :to="'inbox/'+email.id"><button><img src="img/extand.png"/></button></router-link>
                    <router-link :to="'compose/'+email.id"><button><img src="img/forward.png"/></button></router-link>
                    <button><img src="img/save.png"/></button>
                </div>
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
            // isClicked: false,
            clickedStar: false,
            isHidden: false,
        }
    },
    methods: {
        changeBodyClass(emailId) {
            if (this.className === 'email-content') {
                this.className = 'email-content-extended';
                this.isClicked = true;
                emailService.getById(emailId)
                    .then(email => {
                        this.email.isRead = true;
                    })
            } else {
                this.className = 'email-content';
                this.isClicked = false;

            }
        },
        deleteEmail(emailId) {
            emailService.deleteEmail(emailId);
            const msg = {
                txt: `Email deleted successfully.`,
                type: 'success',
            }
            eventBus.$emit('show-msg', msg)
        },
        starEmail(emailId) {
            this.clickedStar = !this.clickedStar;
            emailService.addToStarred(emailId);
        },
        toggleTextLength() {
            this.isClicked = !this.isClicked;
        }
    },
    computed: {
        formattedTime() {
            return this.time.getHours() + ":" + this.time.getMinutes() + ":" + this.time.getSeconds()
        },
        formattedTxt() {
            if (this.email.body.length > 50 && !this.isClicked) {
                this.isHidden = true;
                return this.email.body.substring(0, 50);
            } else {
                this.isHidden = false;
                return this.email.body;
            }
        }
    },
}