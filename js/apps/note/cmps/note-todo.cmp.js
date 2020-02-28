import {noteService} from '../services/note.service.js';

export default {
    name:'noteTodo',
    template: `
        <section class="note-todo">
        <div class="note-todo-container">
            <h2>{{info.label}}</h2>
            <div class="todo" v-for="todo in info.todos">

                <p :class="{done:todo.doneAt, undone:!todo.doneAt}" @click="todoToggle(todo.id)">TODO: {{todo.txt}}</p>
                <!-- <p>{{todo.doneAt}}</p> -->
            </div>
        </div>
        <!-- <div>
            <span class="fas fa-font visible"></span>
        </div> -->
    </section>
    `,
    props: ['info'],
    data() {
        return {
            noteID: this.info
        }
    },
    methods: {
        todoToggle(todoId) {
            console.log(this.info)
            noteService.query();
            noteService.toggleDoneAt(todoId, this.noteId);
        }
    }
}