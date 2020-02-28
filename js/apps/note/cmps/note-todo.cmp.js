export default {
    name:'noteTodo',
    template: `
        <section class="note-todo">
        <div class="note-text-container">
        <p>{{info.text}}</p>
        </div>
        <!-- <div>
            <span class="fas fa-font visible"></span>
        </div> -->
    </section>
    `,
    props: ['info'],
    data() {
        return {
            txt: ''
        }
    }
}