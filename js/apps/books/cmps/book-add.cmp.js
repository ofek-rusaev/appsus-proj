import { bookService } from '../services/book.service.js'
import { eventBus } from '../services/event-bus.service.js'

export default {
    name: 'book-add',
    template: `<section>
    <h1>keren</h1>
    Add A Book: <input type="search" placeholder="Search for a book..." v-model="value" @input="searchBooks">
    <div class="gBooks">
        <div v-for="book in gBooks" :key="book.id">{{book.title}}
        <button @click="addGoogleBook(book)" title="Add a book">+</button></div>
        </div>
    </section>`,
    data() {
        return {
            value: null,
            gBooks: [],
        }
    },
    methods: {
        searchBooks() {
            bookService.getGoogleBooks(this.value)
                .then(books => {
                    this.gBooks = books;
                    return Object.values(this.gBooks);
                })
        },
        addGoogleBook(book) {
            bookService.query();
            bookService.addBook(book)
                .then(() => {
                    const msg = {
                        txt: `Book ${book.title} was succssfully added!`,
                        type: 'success',
                        link: `/book/${book.id}`
                    }
                    eventBus.$emit('show-msg', msg)
                })
        }
    }
}