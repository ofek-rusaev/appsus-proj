export default {
    template: `
    <section class="note-filter">
        <input type="search" 
            placeholder="Search your note here..." 
            v-model="filterByTxt" 
            @input="emitFilterText"
        />
        </section>
        `,
    data() {
        return {
            filterByTxt: '',
            filterByType: ''
        }
    },
    methods: {
        emitFilterText() {
            console.log(this.filterByTxt)
            this.$emit('filterTxt', this.filterByTxt)
        },
        emitFilterType() {
            console.log(this.filterByType)
            this.$emit('filterType', this.filterByType)
        }
    }
}

// || filterBy.subject || filterBy.body
//     <select @change="emitFilterType" v-model="filterByType">
//         <option>Text</option>
//         <option>Todo</option>
//         <option>Video</option>

// </select>