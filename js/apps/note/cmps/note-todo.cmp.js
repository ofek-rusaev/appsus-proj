import { noteService } from '../services/note.service.js';

export default {
    name: 'noteTodo',
    template: `
        <section class="note-todo">
        <div class="note-todo-container">
            <h2>{{info.label}}</h2>
            <div class="todo" v-for="(todo, idx) in info.todos" >
                <p :class="{done:todo.doneAt, undone:!todo.doneAt}" @click="todoToggle(idx)">🔹 {{todo.txt}}</p>
            </div>
        </div>
        <img src="img/todo.svg"/>

    </section>
    `,
    props: ['info', 'note'],
    methods: {
        todoToggle(idx) {
            noteService.query();
            noteService.toggleDoneAt(this.info.todos[idx].id, this.note.id);
            this.$emit('rendernow')
        }
    }
}