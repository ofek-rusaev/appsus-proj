export default {
    template: `
    <section class="email-filter">
        <input class="input-filter" type="search" 
            placeholder="Search your email here..." 
            v-model="filterByTxt " 
            @input="emitFilterText"
        />
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
            console.log(this.filterByTxt)
            this.$emit('filterTxt', this.filterByTxt)
        },
        emitFilterStatus() {
            console.log(this.filterByStatus)
            this.$emit('filterStatus', this.filterByStatus)
        }
    }
}

// || filterBy.subject || filterBy.body
// <select @change="emitFilterStatus" v-model="filterByStatus">
//     <option>All</option>
//     <option>Read</option>
//     <option>Unread</option>

// </select>