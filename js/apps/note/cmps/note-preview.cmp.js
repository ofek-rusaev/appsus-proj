import { noteService } from "../services/note.service.js";
import noteInputText from './note-input-text.cmp.js';
import noteInputImg from './note-input-img.cmp.js';
import noteInputTodo from './note-input-todo.cmp.js';

const surveyCmps = [{
        type: 'noteInputText',
        info: {
            placeholder: 'Add text'
        }
    },
    {
        type: 'noteInputImg',
        info: {
            placeholder: 'Add image url'
        }
    },
    {
        type: 'noteInputTodo',
        info: {
            placeholder: 'Separate by comma'
        }
    },
]

export default {
    name: 'note-preview',
    template: `
   <section class="note-preview" >
   <form @submit.prevent="saveNote">
      <td class="note-item">{{note.info.txt}}</td>
      <button>{{note.type}}</button>
      <button @click="removeNote(note.id)">Delete</button>
      <button>Send email</button>
      <button>Edit</button>
      <button>Change BGC</button>
      <button @click="togglePinNote(note.id)">Pin</button>
      </form>
  </section>
  `,
    props: ['originalNote'],
    data() {
        return {
            note: {}
        }
    },
    methods: {
        removeNote(noteId) {
            // console.log('Removing Car', carId);
            noteService.removeNote(noteId)
                .then(() => {
                    console.log(`Note ${noteId} deleted successfully`);

                })
        },
        togglePinNote(noteId) {
            noteService.changePinned(noteId);
        },
        saveNote() {
            noteService.saveNote(this.note)
                .then((savedNote) => {
                    eventBus.$emit('showMsg', { txt: 'Saved a Car' + savedNote.id })
                        // this.$router.push('/note')
                })
        }
    },

    created() {
        const noteId = this.originalNote.id
        if (noteId) {
            noteService.getById(noteId)
                .then(noteResult => {
                    // DEEP copy
                    this.note = JSON.parse(JSON.stringify(noteResult))
                })
        }
    },
    components: {
        noteInputText,
        noteInputImg,
        noteInputTodo
    }
}