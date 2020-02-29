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
        <note-list :notes="notesPin"></note-list>
        <note-list :notes="notesUnpin"></note-list>
   </section>
    `,
    data() {
        return {
            notesPin: [],
            notesUnpin: [],
        }
    },
    computed: {
        pinnedNotes() {
            this.notesPin = noteService.queryPin();
            console.log(this.note);
            
        },
        unPinnedNotes() {
            this.notesUnpin = noteService.queryUnpin();
            console.log(this.note);
        },
    },
    created() {
        noteService.queryPin()
        .then(notes => {
            this.notesPin = notes
            }),
        noteService.queryUnpin()
        .then(notes => {
            this.notesUnpin = notes
            })
    },
    // noteService.query2()
    // .then(notes => {
    //     this.notes = notes
    // })

    // },
    components: {
        noteList,
        noteCreation,
        noteService
    }
}