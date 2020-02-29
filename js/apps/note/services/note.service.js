import { storageService } from './storage.service.js'
import { utilService } from './util.service.js'
const NOTES_KEY = 'notes';
var notesDB = [];

export const noteService = {
    queryPin,
    getEmptyNote,
    getEmptyTodoNote,
    saveNote,
    getById,
    createNotes,
    removeNote,
    changePinned,
    createNote,
    getPinnedNotes,
    getUnpinnedNotes,
    toggleDoneAt,
    changeColor,
    queryUnpin,
    query
}

function changeColor(noteId, bcg) {
    console.log(noteId)
    console.log(bcg)
    const note = notesDB.find(note => note.id === noteId);
    console.log(note.style.backgroundColor)
    note.style.backgroundColor = bcg;
    console.log('after', note.style.backgroundColor)
    storageService.store(NOTES_KEY, notesDB)

    return Promise.resolve(note);
}

function removeNote(noteId) {
    const idx = notesDB.findIndex(note => note.id === noteId)
    if (idx === -1) return Promise.reject('DID NOT REMOVE CAR')
    notesDB.splice(idx, 1);
    storageService.store(NOTES_KEY, notesDB)
    return Promise.resolve('CAR REMOVED')
}

function getPinnedNotes() {
    const pinned = notesDB.filter(note => note.isPinned);
    console.log('unpinned', pinned)
    return Promise.resolve(pinned);
}

function getUnpinnedNotes() {
    const unpinned = notesDB.filter(note => !note.inPinned)
    console.log('unpinned', unpinned)
    return Promise.resolve(unpinned);
}

function changePinned(noteId) {
    const note = notesDB.find(note => noteId === note.id)
    note.isPinned = !note.isPinned;
    storageService.store(NOTES_KEY, notesDB)
    return Promise.resolve(note);
}

function query() {
    queryPin();
    queryUnpin();
}

function queryPin() {
    var notes = storageService.load(NOTES_KEY);
    if (!notes) {
        return createNotes().then(newNotes => {
            notes = newNotes;
            storageService.store(NOTES_KEY, notes)
            return notes;
        })

    }
    notesDB = notes;
    const pinned = getPinnedNotes();
    return Promise.resolve(pinned);
}


function queryUnpin() {
    var notes = storageService.load(NOTES_KEY);
    if (!notes) {
        return createNotes().then(newNotes => {
            notes = newNotes;
            storageService.store(NOTES_KEY, notes)
            return notes;
        })

    }
    notesDB = notes;
    const unpinned = getUnpinnedNotes();
    return Promise.resolve(unpinned);
}


function getById(noteId) {
    const note = notesDB.find(note => note.id === noteId)
    return Promise.resolve(note);
}

function saveNote(note) {
    note.id = utilService.makeId();
    notesDB.unshift(note);
    storageService.store(NOTES_KEY, notesDB)
    return Promise.resolve(notesDB);
}

function getEmptyNote() {
    return {
        id: utilService.makeId(),
        type: '',
        isPinned: false,
        info: { txt: '' },
        style: ''
    }
}

function getEmptyTodoNote() {
    return {
        id: utilService.makeId(),
        type: '',
        isPinned: false,
        info: { label: '', todos: [{ id: utilService.makeId(), txt: '', doneAt: null }] },
        style: ''
    }
}

function createNotes() {
    var notes = [{
            id: utilService.makeId(),
            type: 'noteText',
            isPinned: true,
            info: { txt: 'Fullstack Me Baby!' },
            style: { backgroundColor: '#FFFF00' },
        },
        {
            id: utilService.makeId(),
            type: 'noteImg',
            isPinned: false,
            info: { txt: 'https://www.w3.org/TR/2016/WD-html51-20160310/images/elo.png', title: 'Me playing Mi' },
            style: { backgroundColor: '#FFFF00' }
        },
        {
            id: utilService.makeId(),
            type: 'noteTodo',
            isPinned: false,
            info: {
                label: 'How was it:',
                todos: [
                    { id: utilService.makeId(), txt: 'Do that', doneAt: null },
                    { id: utilService.makeId(), txt: 'Do this', doneAt: 187111111 }
                ]
            },
            style: { backgroundColor: '#FFC0CB' },
        },
        {
            id: utilService.makeId(),
            type: 'noteVid',
            isPinned: false,
            info: { txt: '' },
            style: { backgroundColor: '#add8e6' },
        }
    ]
    return Promise.resolve(notes)
}

function createNote(noteInfo) {
    var note = {
        id: utilService.makeId(),
        type: noteInfo.type,
        info: noteInfo.info,
        style: noteInfo.style
    }
    return Promise.resolve(note);
}

function toggleDoneAt(todoId, noteId) {
    const note = notesDB.find(note => note.id === noteId)
    const todo = note.info.todos.find(todo => todo.id === todoId)
    todo.doneAt = (todo.doneAt) ? null : Date.now()
    storageService.store(NOTES_KEY, notesDB);
    return Promise.resolve(todo);
}