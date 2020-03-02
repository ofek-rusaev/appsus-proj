import { bookService } from "../services/book.service.js";
import reviewAdd from "../cmps/review-add.cmp.js"

export default {
    template: `
    <section v-if="book" class="book-app">
        <button @click="emitGoBack">Go Back</button>
        <section v-if="nextPrevBookIds">
            <router-link :to="nextPrevBookIds.prevId">PREV</router-link>
            <router-link :to="nextPrevBookIds.nextId">NEXT</router-link>
        </section>
        <review-add></review-add>
        <h1>The Book You chosen</h1>
        <h2>Title : {{book.title}}</h2>
        <div>Authors: {{book.authors[0]}}   {{book.authors[1]}}</div>
        <div>Subtitle: {{book.subtitle}}</div>
        <div>Published Date :{{formattedPublishedYear}}</div>
        <div>Page Count:{{fomattedPageCountDisplay}}</div>
        <div>Categories: {{book.categories[0]}} ,{{book.categories[1]}}</div>
        <div>Language: {{book.language}}</div>
        <div :class="priceColor">Price: {{book.listPrice.amount}} {{book.listPrice.currencyCode}}</div>
        <div>{{isOnSale}}</div>
        <div v-if="formatSaleMsg" class="sale"><img class="sale" :src=formatSaleMsg /></div>
        <!-- <book-desc :txt="book.description" class="desc"> </book-desc> -->
        <div><img :src=book.thumbnail /></div>   
        <div class="review">
             <div v-for="review in book.reviews" :key="review"> Review By: {{review.userName}} - Read At: {{review.createdAt}} - Rate: {{review.rating}} 
             - Review: {{review.desc}} 
             <button @click="deleteReview(review)" title="Delete Review">x</button></div>
         </div>
         </section>
    `,
    props: ['review'],
    data() {
        return {
            book: null,
            nextPrevBookIds: null
        }
    },
    computed: {
        fomattedPageCountDisplay() {
            var amountOfPages = this.book.pageCount;
            if (amountOfPages > 500) return amountOfPages + ' Long Reading';
            if (amountOfPages > 200) return amountOfPages + ' Decent Reading';
            if (amountOfPages < 100) return amountOfPages + ' Light Reading';
        },
        formattedPublishedYear() {
            var year = this.book.publishedDate;
            if (year > 10) return year + ' Veteran Book';
            if (year < 1) return year + ' New!'
        },
        priceColor() {
            return { red: this.book.listPrice.amount > 150, green: this.book.listPrice.amount < 20 }
        },
        isOnSale() {
            return this.book.listPrice.isOnSale ? 'You got a Sale!!!!!' : 'No Sale';
        },
        formatSaleMsg() {
            if (this.book.listPrice.isOnSale) {
                return "img/sale.png"
            }
        }
    },
    methods: {
        emitFilter() {
            this.$emit('set-filter', this.filter)
        },
        emitGoBack() {
            this.$emit('back')
        },
        deleteReview(review) {
            const bookId = this.$route.params.id;
            bookService.deleteReviewData(bookId, review.id)
        },
        getBook() {
            const bookId = this.$route.params.id
            bookService.getById(bookId)
                .then(book => {
                    this.book = book;
                    this.nextPrevBookIds = bookService.getNextPrevBookIds(bookId);
                })
        }
    },
    watch: {
        '$route.params.id' (to, from) {
            this.getBook()
        }
    },
    created() {
        this.getBook()
    },
    components: {
        'review-add': reviewAdd
    }
}