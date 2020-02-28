
import { noteService } from '../services/note.service.js'
// import notePreview from './note-preview.cmp.js'
import noteText from './note-text.cmp.js';
import noteImg from './note-img.cmp.js';
import noteTodo from './note-todo.cmp.js';


export default {
    name: 'note-list',
    template: `
    <section class="notes-container">
        <div v-for="note in notes" :key="note.id">
        <component 
            :is="note.type" 
            :info="note.info">
        </component>
        </div>
    </section>
    `,
    props: ['notes'],
    // methods: {
    //     editNote(idx, ans) {
    //         this.results.splice(idx, 1, ans)
    //     }
    // },
    components: {
        noteText,
        noteImg,
        noteTodo,
        // noteCreation,
        noteService
    }
}
