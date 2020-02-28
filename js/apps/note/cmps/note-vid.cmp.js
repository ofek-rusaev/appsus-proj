export default {
    name: 'noteVid',
    template: `
    <section class="note-vid">
        <div class="note-vid-container">
            <iframe class="video" :src="'https://www.youtube.com/embed/'+info.txt">
            </iframe>    
        </div>
        <img src="img/video.svg"/>

    </section>
    `,
    props: ['info'],
}