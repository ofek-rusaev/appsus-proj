import { noteService } from '../services/note.service.js'
import noteText from './note-text.cmp.js';
import noteImg from './note-img.cmp.js';
import noteTodo from './note-todo.cmp.js';
import noteVid from './note-vid.cmp.js';
import actionBtns from './action-btns.cmp.js';
import {eventBus} from '../../../event-bus.service.js'
import noteFilter from './note-filter.cmp.js'



export default {
    name: 'note-list',
    template: `
    <section>
    <note-filter @filterTxt="setFilterTxt"></note-filter>
    <section class="notes-container">
        <div v-for="note in notesToShow" :key="note.id" class="note" @mouseover="hover = true" @mouseleave="hover = false" :style="{backgroundColor: note.style.backgroundColor}">
        <div v-if="noteEdit">
        <input type="text" v-model="note.info.txt" @keyup.enter="updateNote(note.id, note.info.txt)"/>
        </div>
        <component 
                :note="note"
                :is="note.type" 
                :info="note.info">
       </component>
            <!-- <action-btns :note="note"></action-btns> -->
            <!-- <div v-if="hover"> -->
            <div class="buttons-container-edit">
            <button @click="pinTheNote(note.id)"><img class="notes-container-image" src="img/pin.png"/></button>
            <button @click="removeNote(note.id)"><img class="notes-container-image" src="img/trash.png"/></button>
            <button @click="emailNote(note.id)"><img class="notes-container-image" src="img/email.png"/></button>
            <button @click="editNote(note.id)"><img class="notes-container-image" src="img/edit.png"/></button>
            <input type="color" id="color" v-model="backgroundColor"  @change="getColor(note.id)"/>
            <label for="color"><img class="notes-container-image" src="img/color.png"/></label>
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
            filterBy: ''
        }
    },
    watch: {
        notes: {
            handler(newVal) {
                console.log('NOTES CHANGED! To:', newVal);
                //  this.emitFilter();
            },
            deep: true,
        },
    },
    computed: {
        notesToShow() {
            if (!this.filterBy) return this.notes;
            return this.notes.filter(note => {
                const txt = Object.values(this.filterBy).join('');
                return note.info.txt.includes(txt)
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
                    eventBus.$emit('show-msg',msg)
                })
        },
        setFilterTxt(filterBy) {
            this.filterBy = filterBy;
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
                .then(note => { 
                    const msg = {
                        txt: `Note ${noteId} updated successfully.`,
                        type: 'success',
                    }
                    eventBus.$emit('show-msg',msg)
                    return this.note })
            noteService.query()
                .then(() => { return txt })
        }
    },
    components: {
        noteText,
        noteImg,
        noteTodo,
        noteVid,
        actionBtns,
        noteFilter
    },
}