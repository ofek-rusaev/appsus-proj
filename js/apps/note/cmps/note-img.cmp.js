export default {
    name:'noteImg',
    template: `
    <section class="note-img">
        <div class="note-img-container">
            <img :src="info.txt" title="info.title"/>
        </div>
    </section>
    `,
    props: ['info'],
}