export default {
    name: 'noteText',
    template: `
    <section class="note-text">
        <div class="note-text-container">
        <p>{{info.txt}}</p>
        </div>
        <img src="img/text.svg"/>
    </section>
      `,
    props: ['info'],
}