import { noteService } from '../services/note.service.js';

export default {
    name: 'noteTodo',
    template: `
        <section class="note-todo">
        <div class="note-todo-container" :style="myStyle">
            <h2>{{info.txt}}</h2>
            <div class="todo" v-for="todo in info.todos" >
                <p :class="{done:todo.doneAt, undone:!todo.doneAt}" @click="todoToggle">TODO: {{todo.txt}}</p>
            </div>
        </div>
        <img src="img/todo.svg"/>

    </section>
    `,
    props: ['info', 'note'],
    methods: {
        todoToggle() {
            noteService.query();
            const KEY = Object.keys(this.info.todos)
            noteService.toggleDoneAt(this.info.todos[0].id, this.note.id);
        }
    }
}