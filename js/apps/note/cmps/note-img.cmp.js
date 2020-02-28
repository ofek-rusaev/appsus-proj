export default {
    name: 'noteImg',
    template: `
    <section class="note-img" >
        <div class="note-img-container">
            <img :src="info.txt" title="info.title"/>
        </div>
        <img class="note-img-image" src="img/image.svg"/>

    </section>
    `,
    props: ['info'],
}