
import { noteService } from '../services/note.service.js'
// import notePreview from './note-preview.cmp.js'
import noteText from './note-text.cmp.js';
import noteImg from './note-img.cmp.js';
import noteTodo from './note-todo.cmp.js';
import noteVid from './note-vid.cmp.js';


export default {
    name: 'note-list',
    template: `
    <section class="notes-container">
        <div v-for="note in notes" :key="note.id" class="note">
            <component 
                :is="note.type" 
                :info="note.info">
            </component>
            <button>{{note.type}}</button>
            <button @click="removeNote(note.id)">Delete</button>
            <button>Send email</button>
            <button>Edit</button>
            <button>Change BGC</button>
        </div>
    </section>
    `,
    props: ['notes'],
    // methods: {
    //     editNote(idx, ans) {
    //         this.results.splice(idx, 1, ans)
    //     }
    // },
    methods: {
        removeNote(noteId) {
            noteService.removeNote(noteId)
            .then(()=>{
                console.log(`Note ${noteId} deleted successfully`);
            })
        }
    },
    components: {
        noteText,
        noteImg,
        noteTodo,
        noteVid,
        // noteCreation,
        noteService
    }
}
