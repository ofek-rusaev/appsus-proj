export default {
    name: 'note-preview',
    template: `
     <section class="note-preview">
        <td class="note-item">ID: {{note}}</td>
        <td class="note-item">{{note}}</td>
    </section>
  `,
    props: ['note']
}