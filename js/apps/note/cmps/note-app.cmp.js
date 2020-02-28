import { noteService } from '../services/note.service.js';
// import noteInputText from './note-input-text.cmp.js';
// import noteInputImg from './note-input-img.cmp.js';
import noteCreation from './note-creation.cmp.js';
import noteList from './note-list.cmp.js';

export default {
    name: 'app-note',
    template: `
    <section class="note-app">
        <note-creation></note-creation>
        <hr />
        <h1>Your Notes</h1>
        <note-list :notes="notes"></note-list>
    </section>
    `,
    data() {
        return {
            notes: [],
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
        noteList,
        noteCreation,
        noteService
    }
}