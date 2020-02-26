
import notePreview from './note-preview.cmp.js'

export default {
    name: 'note-list',
    template: `
    <section class="notes-container">
     <router-link v-for="(note, idx) in notes" :to="'note/'+note.id" exact>
       <note-preview :key="idx" :note="note"></note-preview>
    </router-link>
    </section>
    `,
    props: ['notes'],
    methods: {
        emitSelected(note) {
            console.log(notes)
            this.$emit('selected', note)
        }
    },
    components: {
        notePreview
    }
}
