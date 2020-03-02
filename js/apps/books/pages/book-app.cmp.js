import { bookService } from '../services/book.service.js'
import bookFilter from '../cmps/book-filter.cmp.js'
import bookList from '../cmps/book-list.cmp.js'
import bookAdd from '../cmps/book-add.cmp.js'
import { eventBus, EVENT_SHOW_MSG } from '../services/event-bus.service.js';



export default {
    name: 'book-app',
    template: `
    <section class="book-app">
        <h1>Its all about the Books</h1>
        <book-filter  @set-filter="setFilter"></book-filter>
        <book-add></book-add>
        <book-details @back="resetSelect" v-if="chosenBook" @click.native="resetSelect" :book="chosenBook"></book-details>
        <book-list v-else :books="booksToShow"  @selected="selectBook"></book-list> 
    </section>
    `,
    data() {
        return {
            books: [],
            filterBy: { title: '', fromPrice: 0, toPrice: Infinity },
            chosenBook: null,
        }
    },
    computed: {
        booksToShow() {
            if (!this.filterBy.title && !this.filterBy.fromPrice && !this.filterBy.toPrice) return this.books;
            // if (this.filterBy.toPrice = '') this.filterBy.toPrice = Infinity;
            return this.books.filter(book => {
                if (book.listPrice.amount < this.filterBy.fromPrice) return;
                if (book.listPrice.amount > this.filterBy.toPrice) return;
                var currBook = book.title.toLowerCase();
                return currBook.includes(this.filterBy.title.toLowerCase())
            });
        }
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        selectBook(book) {
            this.chosenBook = book;
        },
        resetBook() {
            this.chosenBook = null;
        }

    },
    components: {
        'book-filter': bookFilter,
        'book-list': bookList,
        'book-add': bookAdd
    },
    created() {
        bookService.query()
            .then(books => {
                this.books = books
            });
    }
}