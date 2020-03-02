export default {
    template: `
    <section class="book-filter">
        <h3>Filter Books</h3>
        <input type="text" 
            placeholder="Start typing book title.." 
            v-model="filterBy.title" 
            @submit="emitFilter"
        />
        <input type="text" 
            v-model.number="filterBy.fromPrice" 
            @submit="emitFilter"
        />
        <input type="text" 
            v-model.number="filterBy.toPrice" 
            @submit="emitFilter"
        />
        <button @click="emitFilter">Filter</button>
    </section>
    `,
    data() {
        return {
            filterBy: { title: '', fromPrice: 0, toPrice: 1000 }
        }
    },
    methods: {
        emitFilter() {
            this.$emit('set-filter', {...this.filterBy })
        }
    }
}