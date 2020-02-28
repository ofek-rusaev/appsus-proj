<<<<<<< HEAD
var inputText = {
    template: `
        <input type="text" 
            :placeholder="info.placeholder" 
            v-model="type" 
            @submit="$emit('changed', txt)"/>
    `,
    props: ['info'],
    data() {
        return {
            txt: ''
        }
    },
    methods: {

    }
}

const noteCmps = [{
        name: 'noteInputText',
        type: 'text',
        info: {
            placeholder: "Add text"
        }
    },
    {
        name: 'noteInputImg',
        type: 'text',
        info: {
            placeholder: "Add image url"
        }
    },
    {
        name: 'noteInputTotos',
        type: 'text',
        info: {
            placeholder: "Separate by comma"
        }
    },
]
=======
import {noteService} from '../services/note.service.js';
>>>>>>> 4f1eb795d9043476af6fc5bb9f68750f43749df0

export default {
    template: `
        <section class="note-add">
            <input type="text" :placeholder="updatePlaceholder" v-model="userText" @keyup.enter="addNote"/>            
                <input type="radio" id="text" name="text" v-model="type" value="noteText">
                <label for="text">Text</label><br>
                <input type="radio" id="img" name="text" v-model="type" value="noteImg">
                <label for="img">Image</label><br>
                <input type="radio" id="todo" name="text" v-model="type" value="noteTodo">
                <label for="todo">Todo</label>
                <input type="radio" id="video" name="text" v-model="type" value="noteVid">
                <label for="video">Video</label>
                <pre>{{note}}</pre>
        </section>
    `,
    data() {
        return {
            type: 'noteText',
            userText: '',
            note: {}
        }
    },
    computed: {
        updatePlaceholder() {
            if (this.type === 'noteText') {
                return 'What\'s on your mind...'
            }
            if (this.type === 'noteImg') {
                return 'Add image url'
            }
            if (this.type === 'noteTodo') {
                return 'Separate by comma...'
            }
            if (this.type === 'noteVid') {
                return 'Add video url'
            }

        }

    },
    methods: {
        addNote() {
            noteService.query()
            // .then(notes => {
                // console.log('notes created: ', notes);
                // this.notes = JSON.parse(JSON.stringify(notes))
                // this.notes = notes
            // });
            this.note = noteService.getEmptyNote();
            this.note.type = this.type;
            this.note.info.txt = this.userText;
            noteService.saveNote(this.note)
            .then(note => {
                console.log('adding note');
                console.log('user text: ', this.note);
                    return this.note;
                })
                // this.$router.push('/email/inbox')
                console.log(this.note);
            
        },
        // addNote() {
        //     noteService.saveNote(this.userText)
        //     .then(note => {
        //         console.log('adding note');
        //         console.log('user text: ', this.userText);
        //             this.note = noteService.getEmptyNote()
        //             return this.note;
        //         })
        //         // this.$router.push('/email/inbox')
        //         console.log(this.note);
            
        // },
        saveNote() {
            console.log('Saving', this.note);
            noteService.saveNote(this.note)
            .then((savedNote) => {
        })},
        
    }
}