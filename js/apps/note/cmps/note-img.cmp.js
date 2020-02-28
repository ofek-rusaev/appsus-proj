export default {
    name: 'noteImg',
    template: `
    <section class="note-img">
        <div class="note-img-container" :style="myStyle">
            <img :src="info.txt" title="info.title"/>
        </div>
        <img class="note-img-image" src="img/image.png"/>

    </section>
    `,
    props: ['info'],
}