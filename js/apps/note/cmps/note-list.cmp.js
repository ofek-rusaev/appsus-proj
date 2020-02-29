import { noteService } from '../services/note.service.js'
import noteText from './note-text.cmp.js';
import noteImg from './note-img.cmp.js';
import noteTodo from './note-todo.cmp.js';
import noteVid from './note-vid.cmp.js';


export default {
    name: 'note-list',
    template: `
    <section class="notes-container">
        <div v-for="note in notes" :key="note.id" class="note" @mouseover="hover = true" @mouseleave="hover = false" :style="{backgroundColor: note.style.backgroundColor}">
        <div v-if="noteEdit">
        <input type="text" v-model="note.info.txt" @keyup.enter="updateNote(note.id, note.info.txt)"/>
        </div>
        <component 
                :note="note"
                :is="note.type" 
                :info="note.info">
       </component>
            <div v-if="hover">
            <button @click="pinTheNote(note.id)"><img class="notes-container-image" src="img/pin.png"/></button>
            <button @click="removeNote(note.id)"><img class="notes-container-image" src="img/trash.png"/></button>
            <button><img class="notes-container-image" src="img/email.png"/></button>
            <button @click="editNote(note.id)"><img class="notes-container-image" src="img/edit.png"/></button>
            <input type="color" id="color" v-model="backgroundColor"  @change="getColor(note.id)"/>
            <label for="color"><img class="notes-container-image" src="img/color.png"/></label>
            </div>
   
    </section>
    `,
    // 
    props: ['notes'],
    data() {
        return {
            hover: false,
            backgroundColor: '',
            noteEdit: false
        }
    },
    watch: {
        notes: {
                handler(newVal) {
                     console.log('NOTES CHANGED! To:', newVal);
                    //  this.emitFilter();
                },
                deep: true
            } ,
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
        },
        pinTheNote(noteId) {
            noteService.changePinned(noteId)
                .then(pin => {
                    return this.note;
                })
        },
        editNote() {
            this.noteEdit = !this.noteEdit
        },
        updateNote(noteId, txt) {
            noteService.updateNote(noteId, txt)
                .then(note => { return this.note })
            noteService.query()
                .then(() => { return txt })
        }
    },
    components: {
        noteText,
        noteImg,
        noteTodo,
        noteVid,
        noteService
    },
}