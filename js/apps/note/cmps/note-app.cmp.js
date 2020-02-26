import {noteService} from '../services/note.service.js';
import noteList from './note-list.cmp.js';

export default {
    template: `
    <section class="note-app">
        <h1>Your Notes</h1>
        <!-- <note-filter @set-filter="setFilter"></note-filter> -->
        <!-- <note-compose @added="composeNote"></note-compose> -->
        <note-list @selected="selectNote" :notes="notesToShow"></note-list>
        <note-details @back="resetSelect" v-if="chosenNote" @click.native="resetSelect" :note="chosenNote"></note-details> 
        <!-- <note-status></note-status> // Renders how many read from the notes -->
    </section>
    `,
    data() {
        return {
            notes: [],
            filterBy: {read: '', unread: ''},
            chosenNote: null,
        }
    },
    computed: {
        notesToShow() {
            // if (!this.filterBy) 
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
                console.log('note created: ', notes);
                
                this.notes = notes
            });
    },
    components: {
    //     'note-filter': noteFilter,
        noteList
    //     'note-compose': noteCompose,

    }
}