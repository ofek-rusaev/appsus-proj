import {noteService} from '../services/note.service.js';

export default {
    template: `
        <section class="note-add">
            <input type="text" :placeholder="updatePlaceholder" @keyup.enter="addNote"/>            
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
                noteService.saveNote(this.note)
                    .then(note => {
                        this.note = noteService.getEmptyNote()
                        return this.note;
                    })
                // this.$router.push('/email/inbox')
            console.log('adding note');
            console.log(this.note);
            
        }
    }
}