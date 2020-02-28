import { noteService } from '../services/note.service.js'
import notePreview from './note-preview.cmp.js'

const surveyCmps = [{
        type: 'noteInputText',
        info: {
            placeholder: "Add text"
        }
    },
    {
        type: 'noteInputImg',
        info: {
            placeholder: "Add image url"
        }
    },
    {
        type: 'noteInputTotos',
        info: {
            placeholder: "Separate by comma"
        }
    },
]
export default {
    name: 'note-list',
    template: `
    <section class="notes-container">
    <component v-for="(note, idx) in notes" :key="note.id"
                        :is="cmp.type" 
                        :info="cmp.info"
                        @changed="editNote(idx, $event)"></component>
    </section>
    `,
    props: ['notes'],
    data() {
        return {
            results: [],
            cmps: surveyCmps
        }
    },
    methods: {
        // emitSelected(note) {
        //     console.log(notes)
        //     this.$emit('selected', note)
        // }
        editNote(idx, ans) {
            this.results.splice(idx, 1, ans)
        }
    },
    // created() {
    //     this.results = new Array(this.cmps.length)
    // },
    components: {
        notePreview,
        // noteCreation,
        noteService
    }
}