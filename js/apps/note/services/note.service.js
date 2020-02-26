import { storageService } from './storage.service.js'
import { utilService } from './util.service.js'
const NOTES_KEY = 'notes';
var notesDB = [];


export const noteService = {
    getNextPrevNoteIds,
    query,
    composeNote,
    getEmptyNote,
    sendNote,
    getById
}

function getNextPrevNoteIds(noteId) {
    const idx = notesDB.findIndex(note => note.id === noteId)

    var nextIdx = idx + 1;
    if (nextIdx === notesDB.length) nextIdx = 0;
    var prevIdx = idx - 1;
    if (prevIdx < 0) prevIdx = notesDB.length - 1;

    return {
        prevId: notesDB[prevIdx].id,
        nextId: notesDB[nextIdx].id,
    }
}

function query() {
    var notes = storageService.load(NOTES_KEY);
    if (!notes) {
        return composeNote().then(newNotes => {
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

function sendNote(note) {
    notesDB.unshift(note);
    storageService.store(NOTES_KEY, notesDB)
    return Promise.resolve(notesDB);
}

function getEmptyNote() {
    return {
        type: '',
        isPinned: false,
        info: {txt: 'Fullstack Me Baby!'},
        createdAt: null
    }
}

function composeNote() {
    var note = {
        id: utilService.makeId(),
        title: utilService.makeLorem(10),

    }
    return Promise.resolve(note);
}