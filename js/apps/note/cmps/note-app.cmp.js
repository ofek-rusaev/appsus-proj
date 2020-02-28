import {noteService} from '../services/note.service.js';
import noteInputText from './note-input-text.cmp.js';
import noteInputImg from './note-input-img.cmp.js';
import noteInputTodo from './note-input-todos.cmp.js';

export default {
    template: `
    <section class="note-app">
        <!-- <note-creation></note-creation> -->
        <!-- <h1>Your Pinned Notes</h1> -->
        <!-- <note-list @selected="selectNote" :notes="notesToShow"></note-list> -->
        <!-- <h1>Other notes...</h1> -->
        <!-- <note-list @selected="selectNote" :notes="otherNotesToShow"></note-list> -->
        <h1>Your Notes</h1>
            <hr />
            <pre>{{results}}</pre>
    </section>
    `,
    data() {
        return {
            results: [],
            cmps: surveyCmps
        }
    },
    // computed: {
    //     // pinnedNotesToShow(){
    //     //     console.log('im pinned notes: ', this.notes);
    //     //     this.notes = noteService.getPinnedNotes()
    //     // },
        
    //     // otherNotesToShow(){
    //     //     console.log('im other notes: ', this.notes);
    //     //     this.notes = noteService.getOtherNotes();

    //     // },
    //     notesToShow() {
    //         console.log('ORIGINAL NOTE TO SHOW: ', this.notes);
    //         return this.notes;
    //     }
    // },
    methods: {
        methods: {
            setAns(idx, ans) {
                this.results.splice(idx, 1, ans)
                // this.results[idx] = ans;
        }
    },
    created() {
        noteService.query()
            .then(notes => {
                console.log('notes created: ', notes);
                
                this.notes = notes
            });
    },
    components: {
        noteInputText,
        noteInputImg,
        noteInputTodo
    }
}}