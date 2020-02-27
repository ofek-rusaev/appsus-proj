
import { noteService } from '../services/note.service.js'
import notePreview from './note-preview.cmp.js'
// import noteCreation from './note-creation.cmp.js'

export default {
    name: 'note-list',
    template: `
    <section class="notes-container">
    <!-- <note-creation></note-creation> -->
    <!-- <router-link v-for="(note, idx) in notes" :key="idx"  :to="'note/'+note.id">
    </router-link> -->
        <note-preview v-for="note in notes" :key="note.id" :original-note="note"></note-preview>
    </section>
    `,
    props: ['notes'],
    methods: {
        // emitSelected(note) {
        //     console.log(notes)
        //     this.$emit('selected', note)
        // }
    },
    components: {
        notePreview,
        // noteCreation,
        noteService
    },
    // created() {
    //     noteService.query()
    //     console.log('tesing notes,.df')
    //     .then(emails => {
    //         console.log('emails in created note list: ', emails)
    //         this.emails = emails;
    //     })
    // }
}
