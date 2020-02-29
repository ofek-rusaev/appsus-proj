import { noteService } from '../services/note.service.js';

export default {
    template: `
        <section class="note-add">
            <input type="text" class="main-input" :placeholder="updatePlaceholder" v-model="userText" @keyup.enter="addNote"/>            
            <div class="button-container">    
             <input type="radio" id="text" name="text" v-model="type" value="noteText" class="radio">
                <label for="text"><img src="img/text.svg"/></label>
                <input type="radio" id="img" name="text" v-model="type" value="noteImg" class="radio">
                <label for="img"><img src="img/image.svg"/></label>
                <input type="radio" id="todo" name="text" v-model="type" value="noteTodo" class="radio">
                <label for="todo"><img src="img/todo.svg"/></label>
                <input type="radio" id="video" name="text" v-model="type" value="noteVid" class="radio">
                <label for="video"><img src="img/video.svg"/></label>
                </div>
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
                return 'What\'s on your mind...?'
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
            this.note = noteService.getEmptyNote();
            this.note.type = this.type;
            if (this.note.type === 'noteTodo') {
                this.note = noteService.setTodoNote(this.userText)
                noteService.saveNote(this.note)
                .then(note => {
                    return this.note
                })
            }
            else {
            this.note = noteService.getEmptyNote();
            this.note.type = this.type;
            this.note.info.txt = this.userText;
            noteService.saveNote(this.note)
            .then(note => {
                return this.note
            })}
        },
    },
    // saveNote() {
    //     noteService.saveNote(this.note)
    //         .then((savedNote) => {})
    // },
}