import { noteService } from '../services/note.service.js';

export default {
    template: `
        <section class="note-add">
            <input type="text" :placeholder="updatePlaceholder" v-model="userText" @keyup.enter="addNote"/>            
                <input type="radio" id="text" name="text" v-model="type" value="noteText" class="radio">
                <label for="text"><img src="img/text.png"/></label>
                <input type="radio" id="img" name="text" v-model="type" value="noteImg" class="radio">
                <label for="img"><img src="img/image.png"/></label>
                <input type="radio" id="todo" name="text" v-model="type" value="noteTodo" class="radio">
                <label for="todo"><img src="img/todo.png"/></label>
                <input type="radio" id="video" name="text" v-model="type" value="noteVid" class="radio">
                <label for="video"><img src="img/video.png"/></label>
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
            this.note.info.txt = this.userText;
            noteService.saveNote(this.note)
                .then(note => {
                    if (this.note.type === 'noteTodo') {
                        const todos = this.note.info.txt.split(',')
                        this.note = noteService.getEmptyTodoNote();
                        this.note.isPinned = false;
                        console.log(todos)
                        this.note.info.label = 'To Do';
                        for (var i = 0; i < todos.length; i++) {
                            this.note.info.todos[i].txt = todos[i];
                            console.log(this.note.info.todos[i].txt)
                        }
                        return this.note;
                    }
                    return this.note;
                })
        },
        saveNote() {
            console.log('Saving', this.note);
            noteService.saveNote(this.note)
                .then((savedNote) => {})
        },

    }
}