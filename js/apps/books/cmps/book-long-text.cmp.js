Vue.component('book-desc', {
    template: `
    <section class="books-desc">
    Description: {{formattedDescription}}
    <button v-if="isLongTxt" @click="toggleTxt">{{buttonTxt}}</button>
   </section>`,
    props: ['txt'],
    data() {
        return {
            isLongTxt: false,

        }
    },
    computed: {
        formattedDescription() {
            if (this.txt.length > 100) {
                this.isLongTxt = !this.isLongTxt;
                return this.txt.substring(0, 99);
            }
        },
        buttonTxt() {
            if (this.isLongTxt === true) {
                this.toggleTxt();
                return 'Read More';
            }
            if (this.toggleTxt()) return 'Read Less';
        }
    },
    methods: {
        toggleTxt() {
            return this.txt;
        }
    }
})