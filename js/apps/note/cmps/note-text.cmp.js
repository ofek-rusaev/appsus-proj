export default {
    name: 'noteText',
    template: `
  <section class="note-text" @click="toggleTextLength">
      <p>{{formattedTxt}}<span v-if="isHidden">...</span></p>
      <img src="img/text.svg"/>
  </section>
    `,
    props: ['info'],
    data() {
        return {
            className: 'note-text-container',
            shorten: '',
            isClicked: false,
            isHidden: false
        }
    },
    computed: {
        formattedTxt() {
            if (this.info.txt.length > 100 && !this.isClicked) {
                this.isHidden = true;
                return this.info.txt.substring(0, 100);
            } else {
                this.isHidden = false;
                return this.info.txt;
            }
        }
    },
    methods: {
        toggleTextLength() {
            this.isClicked = !this.isClicked;
        }
    }
}