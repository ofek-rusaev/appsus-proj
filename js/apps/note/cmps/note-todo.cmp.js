export default {
    name:'noteTodo',
    template: `
        <section class="note-todo">
        <div class="note-todo-container">
            <h2>{{info.label}}</h2>
            <div class="todo" v-for="todo in info.todos">
                <p>{{todo.text}}</p>
                <p>{{todo.doneAt}}</p>
            </div>
        </div>
        <!-- <div>
            <span class="fas fa-font visible"></span>
        </div> -->
    </section>
    `,
    props: ['info'],
}