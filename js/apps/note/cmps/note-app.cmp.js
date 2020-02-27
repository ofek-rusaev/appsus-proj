import {noteService} from '../services/note.service.js';
import noteList from './note-list.cmp.js';
import noteCreation from './note-creation.cmp.js'

export default {
    template: `
    <section class="note-app">
        <!-- <note-filter @set-filter="setFilter"></note-filter> -->
        <!-- <note-compose @added="composeNote"></note-compose> -->
        <note-creation></note-creation>
        <h1>Your Pinned Notes</h1>
        <note-list @selected="selectNote" :notes="notesToShow"></note-list>
        <!-- <h1>Other notes...</h1> -->
        <!-- <note-list @selected="selectNote" :notes="otherNotesToShow"></note-list> -->
        <!-- <note-details @back="resetSelect" v-if="chosenNote" @click.native="resetSelect" :note="chosenNote"></note-details>  -->
        <!-- <note-status></note-status> // Renders how many read from the notes -->
    </section>
    `,
    data() {
        return {
            // pinNotes: [],
            // otherNotes: [],
            notes: [],
            filterBy: {read: '', unread: ''},
            chosenNote: null,
        }
    },
    computed: {
        // pinnedNotesToShow(){
        //     console.log('im pinned notes: ', this.notes);
        //     this.notes = noteService.getPinnedNotes
        // },
        
        // otherNotesToShow(){
        //     console.log('im other notes: ', this.notes);
        //     this.notes = noteService.getOtherNotes
        //     return this.notes;
        // },
        notesToShow() {
            // if (!this.filterBy) 
            console.log('ORIGINAL NOTE TO SHOW: ', this.notes);
            return this.notes;
        }
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy;
        },
        selectNote(note) {
            this.chosenNote = note;
        },
        resetSelect() {
            this.chosenNote = null;
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
    //     'note-filter': noteFilter,
        noteList,
        noteCreation
    //     'note-compose': noteCompose,

    }
}