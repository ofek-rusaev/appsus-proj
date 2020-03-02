import { eventBus } from '../services/event-bus.service.js'
export default {
    template: `
            <transition name="fade">
                <section class="msg-container" v-if="msg" :class="msg.type">
                    <button @click="closeMsg">x</button>
                    <h1>{{msg.txt}}</h1>
                    <router-link :to="msg.link">Check it Out</router-link>
                 </section>
            </transition>
    `,
    data() {
        return {
            msg: null
        }
    },

    created() {
        eventBus.$on('show-msg', (msg) => {
            this.msg = msg
            setTimeout(() => {
                this.msg = null
            }, 2000);
        })
    },
    methods: {
        closeMsg() {
            this.msg = null
        }
    }
}