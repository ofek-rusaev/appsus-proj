import { noteService } from '../services/note.service.js';
import noteCreation from './note-creation.cmp.js';
import noteList from './note-list.cmp.js';

export default {
    name: 'app-note',
    template: `
    <section class="note-app">
        <note-creation></note-creation>
        <hr />
        <h1>Your Notes</h1>
        <note-list :notes="notesPinned"></note-list>
        <note-list :notes="notesUnPinned"></note-list>

   </section>
    `,
    data() {
        return {
            notesPinned: [],
            notesUnPinned: []
        }
    },
    created() {
        noteService.queryPin()
            .then(notes => {
                console.log('pin out', notes)

                this.notesPinned = notes
            })
        noteService.queryUnpin()
            .then(notes => {
                console.log('unpin out', notes)
                this.notesUnPinned = notes
            })
    },

    components: {
        noteList,
        noteCreation,
        noteService
    }
}