import { storageService } from './storage.service.js'
import { utilService } from './util.service.js'
const NOTES_KEY = 'notes';
var notesDB = [];

export const noteService = {
    query,
    getEmptyNote,
    saveNote,
    getById,
    createNotes,
    removeNote,
    changePinned,
    createNote,
    getPinnedNotes,
    getOtherNotes
}

function removeNote(noteId) {
    const idx = notesDB.findIndex(note => note.id === noteId)
    if(idx === -1) return Promise.reject('DID NOT REMOVE CAR')
    notesDB.splice(idx, 1);
    storageService.store(NOTES_KEY, notesDB)
    return Promise.resolve('CAR REMOVED')
}

function getPinnedNotes() {
    return notesDB.map(note=> {
        if (note.isPinned) {
            console.log('in pinned fun:', note);
            
            return note;
        }
    })
}

function getOtherNotes() {
    console.log(notesDB,'ppppp');
    
    return notesDB.map(note=> {
        if (!note.isPinned) {

            console.log('in UNpinned fun:', note);
            return note;
        }
    })
}

function changePinned(noteId) {
    const note = getById(noteId);
    const idx = notesDB.findIndex(note => note.id === noteId)
    notesDB[idx].isPinned = !notesDB[idx].isPinned;
    console.log('un/pin', notesDB[idx])
    storageService.store(NOTES_KEY, notesDB)
}

function query() {
    var notes = storageService.load(NOTES_KEY);
    if (!notes) {
        return createNotes().then(newNotes => {
            notes = newNotes;
            storageService.store(NOTES_KEY, notes)
            return notes;
        })

    }
    notesDB = notes;
    return Promise.resolve(notesDB);
}

function getById(noteId) {
    const note = notesDB.find(note => note.id === noteId)
    return Promise.resolve(note);
}

function saveNote(note) {
    notesDB.unshift(note);
    storageService.store(NOTES_KEY, notesDB)
    return Promise.resolve(notesDB);
}


function getEmptyNote() {
    return {
        id: utilService.makeId(),
        type: '',
        isPinned: false,
        info: {txt: ''},
        style: ''
    }
}

function createNotes(){
    var notes = [
        {
            id: utilService.makeId(),
            type: 'noteText',
            isPinned: true,
            info: { txt: 'Fullstack Me Baby!' }, 
            style: { backgroundColor: '#00d' },
        },
        {
            id: utilService.makeId(),
            type: 'noteImg',     
            isPinned: false,
            info: { url: 'https://www.w3.org/TR/2016/WD-html51-20160310/images/elo.png', title: 'Me playing Mi'},
            style: { backgroundColor: '#00d' }
        },
        {
            id: utilService.makeId(),
            type: 'noteTodo',
            isPinned: false,
            info: { label: 'How was it:',
                todos: [
                    { txt: 'Do that', doneAt: null }, 
                       { txt: 'Do this', doneAt: 187111111 }
                ]},
            style: { backgroundColor: '#00d' },
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