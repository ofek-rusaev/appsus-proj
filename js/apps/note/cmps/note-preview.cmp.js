import { noteService } from "../services/note.service.js";

export default {
    name: 'note-preview',
    template: `
     <section class="note-preview" >
     <form @submit.prevent="saveNote">
        <td class="note-item">{{note.info.txt}}</td>
        <button>{{note.type}}</button>
        <button @click="removeNote(note.id)">Delete</button>
        <!-- <button>Clone</button> -->
        <button>Edit</button>
        <!-- <button>Change BGC</button> -->
        <!-- <i class="fas fa-thumbtack"></i> -->
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
            .then(()=>{
                console.log(`Note ${noteId} deleted succesfully`);
                // eventBus.$emit(EVENT_SHOW_MSG, {
                    // txt: `Car ${carId} deleted succesfully`,
                    // type: 'success'
                // })
            })
      },
      togglePinNote(noteId) {
        noteService.changePinned(noteId);
        },
      saveNote() {
          console.log('Saving', this.note);
          noteService.saveNote(this.note)
          .then((savedNote) => {
              eventBus.$emit('showMsg',{txt:'Saved a Car'+savedNote.id})
              // this.$router.push('/note')
          })
      }
    },
    
    created(){
      const noteId = this.originalNote.id
      if (noteId) {
          noteService.getById(noteId)
              .then(noteResult => {
                  // DEEP copy
                  this.note = JSON.parse(JSON.stringify(noteResult))
          })
      }
    },
      
  }
