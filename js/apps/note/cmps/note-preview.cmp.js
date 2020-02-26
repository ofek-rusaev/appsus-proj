export default {
    name: 'note-preview',
    template: `
     <section class="note-preview">
        <td class="note-item">ID: {{note.id}}</td>
        <td class="note-item">Title:{{note.title}}</td>
    </section>
  `,
    props: ['note']
}