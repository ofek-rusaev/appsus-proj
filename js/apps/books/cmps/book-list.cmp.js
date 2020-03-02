import bookPreview from './book-preview.cmp.js'

export default {
    name: 'book-list',
    template: `
    <section class="books-container">
      <router-link v-for="(book, idx) in books" :to="'/book/'+book.id" exact>
        <book-preview  :key="idx" :book="book" >keren</book-preview>
        </router-link>
 </section>
    `,
    props: ['books'],
    methods: {
        emitSelected(book) {
            this.$emit('selected', book)
        }

    },
    components: {
        'book-preview': bookPreview
    },
    created() {
        console.log(emails)
    }
}