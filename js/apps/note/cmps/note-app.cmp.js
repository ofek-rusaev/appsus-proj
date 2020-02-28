import { noteService } from '../services/note.service.js';
// import noteInputText from './note-input-text.cmp.js';
// import noteInputImg from './note-input-img.cmp.js';
// import noteInputTodo from './note-input-todos.cmp.js';
import noteList from './note-list.cmp.js';

export default {
    name: 'app-note',
    template: `
    <section class="note-app">
        <!-- <note-creation></note-creation> -->
        <h1>Your Notes</h1>
        <note-list :notes="notes"></note-list>
            <hr />
            <!-- <pre>{{results}}</pre> -->
    </section>
    `,
    data() {
        return {
            notes: null,
            // cmps: noteCmps
        }
    },
    created() {
        noteService.query()
            .then(notes => {
                console.log('notes created: ', notes);
                this.notes = JSON.parse(JSON.stringify(notes))
            });
    },
    components: {
        // noteInputText,
        // noteInputImg,
        // noteInputTodo,
        noteList,
        noteService
    }
}