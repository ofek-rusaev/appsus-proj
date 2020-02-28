export default {
    template: `
    <section class="email-filter">
        <input type="search" 
            placeholder="Search your email here..." 
            v-model="filterByTxt " 
            @input="emitFilterText"
        />
        <select v-model="filterByStatus">
            <option>All</option>
            <option>Read</option>
            <option>Unread</option>
            @change="emitFilterStatus"
    </select>
    </section>
    `,
    data() {
        return {
            filterByTxt: '',
            filterByStatus: ''
        }
    },
    methods: {
        emitFilterText() {
            this.$emit('filterTxt', {...this.filterByTxt })
        },
        emitFilterStatus() {
            this.$emit('filterStatus', {...this.filterByStatus })
        }
    }
}

// || filterBy.subject || filterBy.body