export default {
    template: `
     <section >
        <div class="card">
            <h4>{{book.title}}</h4>
            <div>Price: {{showCurrencyIcon}} {{book.listPrice.amount}}</div>
            <img :src="book.thumbnail"/>
            <a :href="book.url" target="_blank">More Details</a>
            <button @click="removebook(book.id)">x</button>
        </div>
        </section>
  `,
    props: ['book'],
    computed: {
        showCurrencyIcon() {
            if (this.book.listPrice.currencyCode === 'EUR') return '€';
            if (this.book.listPrice.currencyCode === 'USD') return '$';
            if (this.book.listPrice.currencyCode === 'ILS') return '₪';
        }
    }
}