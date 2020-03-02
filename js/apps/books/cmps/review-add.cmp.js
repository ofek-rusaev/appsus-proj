import { bookService } from '../services/book.service.js'

export default {
    template: `<section>
    <h1>KERERENNNNNNNNNNNN</h1>
    <form>
            <input required type="text" ref="myName" v-model="review.userName"/>
            <input type="date" ref="myDate" v-model="review.createdAt"/>
            <select title="Add Book Rating" v-model.number="review.rating" >
                <option v-for="i in 5">{{i}}</option>
            </select>
            <textarea placeholder="Put your review here..." v-model="review.desc"></textarea>

    </form>
    <button @click="saveReview">Save Review</button>
    </section>
`,
    mounted() {
        this.$refs.myDate.valueAsDate = new Date();
        this.$refs.myName.focus();
    },
    data() {
        return {
            review: bookService.getEmptyReview(),
            book: null
        }
    },
    methods: {
        saveReview() {
            const bookId = this.$route.params.id;
            const review = {...this.review }
            bookService.addReview(bookId, this.review)
                .then(review => {
                    this.$emit('review-added', review)
                    this.review = bookService.getEmptyReview()
                })
        },
        emitReview() {
            this.$emit('set-review', this.review)
        },
    }
}