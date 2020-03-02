export default {
    template: `
    <section class="note-filter">
        <input class="search-note" type="search" 
            placeholder="Search your note here..." 
            v-model="filterByTxt" 
            @input="emitFilterText"
        />
        </section>
        `,
    data() {
        return {
            filterByTxt: '',
        }
    },
    methods: {
        emitFilterText() {
            this.$emit('filterTxt', this.filterByTxt)
        },
        emitFilterText() {
            this.$emit('filterTxt', this.filterByTxt)
        }
    }
}

// || filterBy.subject || filterBy.body
//     <select @change="emitFilterType" v-model="filterByType">
//         <option>Text</option>
//         <option>Todo</option>
//         <option>Video</option>

// </select>