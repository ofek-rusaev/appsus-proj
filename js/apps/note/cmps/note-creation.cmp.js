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
        // addNote() {
        //     noteService.query()
        //     this.note = noteService.getEmptyNote();
        //     this.note.type = this.type;
        //     this.note.info.txt = this.userText;
        //     noteService.saveNote(this.note)
        //         .then(note => {
        //             if (this.note.type === 'noteTodo') {
        //                 const newTodos = this.note.info.txt.split(',')
        //                 console.log('todos: ', todos);
                        
        //                 this.note = noteService.getEmptyTodoNote();
        //                 console.log('GOT ENMTPY TODO TMPLATE: ',this.note)
        //                 this.note.isPinned = false;
        //                 this.note.info = {label: 'To Do', todos: [{txt: ''}]};
        //                 for (let i = 0; i < newTodos.length; i++) {
        //                     for (let j = i; j < todos.length;) {
        //                         this.note.info.txt[j] = todos[i]
        //                         j++;
        //                     }
        //                 }
        //                 for (let i = 0; i < todos.length; i++) {
        //                     for (let j = i; j < todos.length;) {
        //                         this.note.info.txt[j] = todos[i]
        //                         j++;
        //                     }
        //                 }
        //             }
        //             console.log(this.note);
        //             return this.note;
        //         })
        //     return this.note;
        // },
        addNote() {
            noteService.query();
            if (this.note.type === 'noteTodo') {
                noteService.saveTodoNote(userText);
            }
            this.note = noteService.getEmptyNote();
            this.note.type = this.type;
            this.note.info.txt = this.userText;
            noteService.saveNote(this.note)
                .then(note => {
                    if (this.note.type === 'noteTodo') {
                        const newTodos = this.note.info.txt.split(',')
                        console.log('todos: ', todos);
                        
                        this.note = noteService.getEmptyTodoNote();
                        console.log('GOT ENMTPY TODO TMPLATE: ',this.note)
                        this.note.isPinned = false;
                        this.note.info = {label: 'To Do', todos: [{txt: ''}]};
                        for (let i = 0; i < newTodos.length; i++) {
                            this.note.info.todos[i].txt =  newTodos[i];
                            console.log(this.note.info.todos[i].txt);
                            console.log(this.note);
                            
                            // for (let j = i; j < todos.length;) {
                            //     this.note.info.txt[j] = todos[i]
                            //     j++;
                            // }
                        }
                        // for (let i = 0; i < todos.length; i++) {
                        //     for (let j = i; j < todos.length;) {
                        //         this.note.info.txt[j] = todos[i]
                        //         j++;
                        //     }
                        // }
                    }
                    console.log(this.note);
                    return this.note;
                })
            return this.note;

        },
        // saveNote() { // TODO: DELETE - NOT IN USE
        //     noteService.saveNote(this.note)
        //         .then((savedNote) => {})
        // },

    }
}