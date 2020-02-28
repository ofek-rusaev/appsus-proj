import { noteService } from '../services/note.service.js'
import noteText from './note-text.cmp.js';
import noteImg from './note-img.cmp.js';
import noteTodo from './note-todo.cmp.js';
import noteVid from './note-vid.cmp.js';


export default {
    name: 'note-list',
    template: `
    <section class="notes-container">
        <div v-for="note in notes" :key="note.id" class="note" :style="{backgroundColor: note.style.backgroundColor}">
        <component 
                :note="note"
                :is="note.type" 
                :info="note.info">
       </component>
            <div>
            <button><img class="notes-container-image" src="img/pin.png"/></button>
            <button @click="removeNote(note.id)"><img class="notes-container-image" src="img/trash.png"/></button>
            <button><img class="notes-container-image" src="img/email.png"/></button>
            <button><img class="notes-container-image" src="img/edit.png"/></button>
            <input type="color" id="color" v-model="backgroundColor" hidden @change="getColor(note.id)"/>
            <label for="color"><img class="notes-container-image" src="img/color.png"/></label>
            </div>


            
        </div>
    </section>
    `,
    // @mouseover="hover = true" @mouseleave="hover = false"
    props: ['notes'],
    data() {
        return {
            hover: true,
            backgroundColor: ''
        }
    },
    methods: {
        removeNote(noteId) {
            noteService.removeNote(noteId)
                .then(() => {
                    console.log(`Note ${noteId} deleted successfully`);
                })
        },
        getColor(noteId) {
            noteService.changeColor(noteId, this.backgroundColor)
                .then(note => {
                    return this.note;
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