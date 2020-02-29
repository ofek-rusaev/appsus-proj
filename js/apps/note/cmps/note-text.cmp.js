export default {
  name: 'noteText',
  template: `
  <section class="note-text" @click="toggleTextLength">
      <!-- <div > -->
      <p>{{formattedTxt}}</p>
      <!-- </div> -->
      <img src="img/text.svg"/>
  </section>
    `,
  props: ['info'],
  data() {
    return {
        className: 'note-text-container',
        shorten: '',
        isClicked: false,
    }
  },
  computed: {
      formattedTxt() {
        console.log(this.info.txt);
        
        if (this.info.txt.length > 100 && !this.isClicked) {
          return this.info.txt.substring(0,100);
        } else {
          return this.info.txt;
        }
      }
    },
      methods: {
        toggleTextLength() {

          console.log('this.isClicked', this.isClicked);
          console.log(this.info.txt);
          this.isClicked = !this.isClicked;
          }
    }
  
}