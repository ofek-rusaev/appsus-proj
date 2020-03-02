import { eventBus } from '../../../general-services/event-bus.service.js';
import { noteService } from '../services/note.service.js';
import noteText from './note-text.cmp.js';
import noteImg from './note-img.cmp.js';
import noteTodo from './note-todo.cmp.js';
import noteVid from './note-vid.cmp.js';
import actionBtns from './action-btns.cmp.js';
import noteFilter from './note-filter.cmp.js';



export default {
    name: 'note-list',
    template: `
    <section>
    <note-filter @filterTxt="setFilterTxt"></note-filter>
    <section class="notes-container">
        <div v-for="note in notesToShow" :key="note.id" class="note" :style="{backgroundColor: note.style.backgroundColor}">
        <div v-if="noteEdit">
        <input type="text" class="edit-text-input" v-model="note.info.txt" @keyup.enter="updateNote(note.id, note.info.txt)"/>
        </div>
        <component 
                :note="note"
                :is="note.type" 
                :info="note.info">
       </component>
            <div class="buttons-container-edit">
            <button @click="pinTheNote(note.id)">
            <img v-if="pinned" class="notes-container-image pin" src="img/redpin.png"/>
            <img v-else class="notes-container-image pin" src="img/pin.png"/></button>
            <button @click="removeNote(note.id)"><img class="notes-container-image" src="img/trash.png"/></button>
            <button @click="emailNote(note.id)"><img class="notes-container-image" src="img/email.png"/></button>
            <button @click="editNote(note.id)"><img class="notes-container-image" src="img/edit.png"/></button>
            
            <label for="color"><input hidden type="color" id="color" v-model="backgroundColor" @change="getColor(note.id)"/><img class="notes-container-image" src="img/color.png"/></label>
            </div>
       </div>
       </section>
    </section>`,
    props: ['notes'],
    data() {
        return {
            hover: false,
            backgroundColor: '',
            noteEdit: false,
            filterBy: '',
            pinned: false
        }
    },
    computed: {
        notesToShow() {
            if (!this.filterBy) return this.notes;
            return this.notes.filter(note => {
                const txt = Object.values(this.filterBy).join('').toLowerCase();
                console.log(txt)
                return note.info.txt.includes(txt.toLowerCase())
            })
        },
        render() {
            noteService.queryPin()
                .then(notes => {
                    this.notesPinned = notes
                })
            noteService.queryUnpin()
                .then(notes => {
                    this.notesUnPinned = notes
                })
        }
    },
    methods: {
        removeNote(noteId) {
            noteService.removeNote(noteId)
                .then(() => {
                    const msg = {
                        txt: `Note ${noteId} deleted successfully.`,
                        type: 'success',
                    }
                    eventBus.$emit('show-msg', msg)
                    this.$emit('render')
                })
        },
        setFilterTxt(filterBy) {
            this.filterBy = filterBy;
        },
        pinTheNote(noteId) {
            this.pinned = !this.pinned;
            noteService.changePinned(noteId)
                .then(pin => {
                    this.$emit('render')
                    return this.note = pin
                })
        },
        editNote() {
            this.noteEdit = !this.noteEdit
        },
        getColor(noteId) {
            noteService.changeColor(noteId, this.backgroundColor)
                .then(note => {
                    return this.note = note
                })
            this.$emit('render')
        },
        updateNote(noteId, txt) {
            noteService.updateNote(noteId, txt)
                .then(note => {
                    const msg = {
                        txt: `Note ${noteId} updated successfully.`,
                        type: 'success',
                    }
                    eventBus.$emit('show-msg', msg)
                    return this.note
                })
            this.editNote();
            this.$emit('render')
        }
    },

    components: {
        noteText,
        noteImg,
        noteTodo,
        noteVid,
        actionBtns,
        noteFilter
    }
}