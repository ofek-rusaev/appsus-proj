export default {
    template: `
    <section class="email-filter">
        <input type="search" 
            placeholder="Search your email here..." 
            v-model="filterBy.from" 
            @input="emitFilter"
        />
    </section>
    `,
    data() {
        return {
            filterBy: { from: '' }
        }
    },
    methods: {
        emitFilter() {
            this.$emit('set-filter', {...this.filterBy })
        }
    }
}