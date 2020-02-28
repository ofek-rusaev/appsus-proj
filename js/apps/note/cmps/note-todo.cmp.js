export default {
    name: 'noteTodo',
    template: `
        <section class="note-todo">
        <div class="note-text-container">
        <p>{{info.text}}</p>
    </section>
    `,
    props: ['info'],
    data() {
        return {
            txt: ''
        }
    }
}