
import notePreview from './note-preview.cmp.js'

export default {
    template: `
    <section class="notes-container">
        <h2>Notes List</h2>
        <ul>
            <li v-for="(currNote, idx) in notes" >
                <note-preview :note="currNote"></note-preview>
                <!-- <button @click="$emit('remove', currNote.id)">x</button> -->
            </li>
        </ul>
    </section>
    `,
    props: ['notes'],
    components: {
        notePreview
    }
}
