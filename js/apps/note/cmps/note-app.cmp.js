import { noteService } from '../services/note.service.js';
import noteCreation from './note-creation.cmp.js';
import noteList from './note-list.cmp.js';

export default {
    name: 'app-note',
    template: `
    <section class="note-app">
        <note-creation @render="render"></note-creation>
        <hr />
        <img class="pinned" src="img/pinned.svg" />
        <note-list @render="render" :notes="notesPinned"></note-list>
        <hr/>
        <note-list @render="render" :notes="notesUnPinned"></note-list>

   </section>
    `,
    data() {
        return {
            notesPinned: [],
            notesUnPinned: []
        }
    },
    methods: {
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
    // watch: {
    //     notesPinned: {
    //         handler(newVal) {
    //              console.log('NOTES CHANGED! To:', newVal);
    //             //  this.emitFilter();
    //         },
    //         deep: true
    //     } ,
    //     notesUnPinned: {
    //         handler(newVal) {
    //              console.log('NOTES CHANGED! To:', newVal);
    //             //  this.emitFilter();
    //         },
    //         deep: true
    //     } ,
    //  },
    created() {

        noteService.queryPin()
            .then(notes => {
                this.notesPinned = notes
            })
        noteService.queryUnpin()
            .then(notes => {
                this.notesUnPinned = notes
            })
    },

    components: {
        noteList,
        noteCreation,
        noteService
    }
}