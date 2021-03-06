import { storageService } from '../../../general-services/storage.service.js';
import { utilService } from '../../../general-services/util.service.js';
const NOTES_KEY = 'notes';
var notesDB = [];

export const noteService = {
    queryPin,
    getEmptyNote,
    setTodoNote,
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
    query,
    updateNote
}

function updateNote(noteId, txt) {
    const note = notesDB.find(note => note.id === noteId)
    const idx = notesDB.findIndex(note => note.id === noteId)
    if (idx === -1) return Promise.reject('DID NOT REMOVE CAR')
    note.info.txt = txt;
    notesDB.splice(idx, 1, note);
    storageService.store(NOTES_KEY, notesDB)
    return Promise.resolve(note)
}

function changeColor(noteId, bcg) {
    const note = notesDB.find(note => note.id === noteId);
    note.style.backgroundColor = bcg;
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
    return Promise.resolve(pinned);
}

function getUnpinnedNotes() {
    const unpinned = notesDB.filter(note => note = (!note.isPinned))
    return Promise.resolve(unpinned);
}

function changePinned(noteId) {
    const note = notesDB.find(note => noteId === note.id)
    note.isPinned = !note.isPinned;
    storageService.store(NOTES_KEY, notesDB)
    return Promise.resolve(note);
}

function query() {
    var notes = storageService.load(NOTES_KEY);
    if (!notes) {
        return createEmails().then(newNotes => {
            notes = newNotes;
            storageService.store(NOTES_KEY, notes)
            return notes;
        })
    }
    notesDB = notes;
    return Promise.resolve(notesDB);
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
    return getPinnedNotes();

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
    return getUnpinnedNotes();

}

function getById(noteId) {
    const note = notesDB.find(note => note.id === noteId)
    return Promise.resolve(note);
}

function saveNote(note) {
    notesDB.unshift(note);
    storageService.store(NOTES_KEY, notesDB)
    return Promise.resolve(note);
}

function getEmptyNote() {
    return {
        id: utilService.makeId(),
        type: '',
        isPinned: false,
        info: { txt: '' },
        style: { backgroundColor: '#ffb6b9' },
    }
}

function setTodoNote(todosTxt) {
    let todos = todosTxt.split(',');
    let formattedTodos = [];
    for (let i = 0; i < todos.length; i++) {
        var newTodo = { id: utilService.makeId(), txt: todos[i], doneAt: null };
        formattedTodos.push(newTodo);
    }
    return {
        id: utilService.makeId(),
        type: 'noteTodo',
        isPinned: false,
        info: { label: 'Your todo list:', todos: formattedTodos },
        style: { backgroundColor: '' },
    }
}

function createNotes() {
    var notes = [{
            id: utilService.makeId(),
            type: 'noteText',
            isPinned: false,
            info: { txt: 'Fullstack Me Baby!' },
            style: { backgroundColor: '#fff591' },
        },
        {
            id: utilService.makeId(),
            type: 'noteText',
            isPinned: true,
            info: { txt: 'Queen Audrey!' },
            style: { backgroundColor: '#fff591' },
        },
        {
            id: utilService.makeId(),
            type: 'noteImg',
            isPinned: true,
            info: { txt: 'https://www.w3.org/TR/2016/WD-html51-20160310/images/elo.png', title: 'Me playing Mi' },
            style: { backgroundColor: '#beebe9' }
        },
        {
            id: utilService.makeId(),
            type: 'noteVid',
            isPinned: false,
            info: { txt: 'https://www.youtube.com/watch?v=zY-ugO6SCBQ&list=RDzY-ugO6SCBQ&start_radio=1&t=0' },
            style: { backgroundColor: '#75daad' },
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