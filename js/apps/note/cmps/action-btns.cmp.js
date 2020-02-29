
export default {
    name: 'action-btns',
    template:  `
    <section class="action-btns">
    <button @click="pinTheNote(note.id)"><img class="notes-container-image pin" src="img/pin.png"/></button>
    <button @click="removeNote(note.id)"><img class="notes-container-image" src="img/trash.png"/></button>
    <button @click="emailNote(note.id)"><img class="notes-container-image" src="img/email.png"/></button>
    <button @click="editNote(note.id)"><img class="notes-container-image" src="img/edit.png"/></button>
    <input type="color" id="color" v-model="backgroundColor"  @change="getColor(note.id)"/>
    <label for="color"><img class="notes-container-image" src="img/color.png"/></label>
    </section>
    `,
    props: ['note'],
    methods: {
        removeNote(noteId) {
            noteService.removeNote(noteId)
                .then(() => {
                    console.log(`Note ${noteId} deleted successfully`);
                })
        },

        pinTheNote(noteId) {
            noteService.changePinned(noteId)
                .then(pin => {
                    return this.note;
                })
        },
        editNote() {
            this.noteEdit = !this.noteEdit
        },
        updateNote(noteId, txt) {
            noteService.updateNote(noteId, txt)
                .then(note => { return this.note })
            noteService.query()
                .then(() => { return txt })
        }
    },
}