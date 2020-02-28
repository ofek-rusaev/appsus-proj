import { storageService } from './storage.service.js'
import { utilService } from './util.service.js'
const EMAILS_KEY = 'emails';
var emailsDB = [];


export const emailService = {
    getNextPrevEmailIds,
    query,
    getEmptyEmail,
    getById,
    createEmails,
    deleteEmail,
    addToStarred,
    addEmail,
    updateEmail,
    filterStarred,
    draftEmail,
    filterDrafts
}

function getNextPrevEmailIds(emailId) {
    const idx = emailsDB.findIndex(email => email.id === emailId)

    var nextIdx = idx + 1;
    if (nextIdx === emailsDB.length) nextIdx = 0;
    var prevIdx = idx - 1;
    if (prevIdx < 0) prevIdx = emailsDB.length - 1;

    return {
        prevId: emailsDB[prevIdx].id,
        nextId: emailsDB[nextIdx].id,
    }
}

function deleteEmail(emailId) {
    const email = getById(emailId);
    const idx = emailsDB.findIndex(email => email.id === emailId)
    emailsDB.splice(idx, 1);

    storageService.store(EMAILS_KEY, emailsDB)
}

function addEmail(email) {
    email.id = utilService.makeId()
    emailsDB.unshift(email);
    storageService.store(EMAILS_KEY, emailsDB)
    return Promise.resolve(emailsDB)
}

function draftEmail(email) {
    email.id = utilService.makeId()
    email.isDraft = true;
    emailsDB.unshift(email);
    storageService.store(EMAILS_KEY, emailsDB)
    return Promise.resolve(emailsDB)
}

function updateEmail(email) {
    const idx = emailsDB.findIndex(currEmail => currEmail.id === email.id);
    emailsDB.splice(idx, 1, email)
    storageService.store(EMAILS_KEY, emailsDB)
    return Promise.resolve(emailsDB)
}

function addToStarred(emailId) {
    const email = getById(emailId);
    const idx = emailsDB.findIndex(email => email.id === emailId)
    emailsDB[idx].isStar = true;
    storageService.store(EMAILS_KEY, emailsDB)
}

function filterStarred() {
    const starred = emailsDB.filter(email => email.isStar)
    console.log(starred)
    return Promise.resolve(starred);
}

function filterDrafts() {
    const draftted = emailsDB.filter(email => email.isDraft)
    return Promise.resolve(draftted);
}

function query() {
    var emails = storageService.load(EMAILS_KEY);
    if (!emails) {
        return createEmails().then(newEmails => {
            emails = newEmails;
            storageService.store(EMAILS_KEY, emails)
            return emails;
        })

    }
    emailsDB = emails;
    const notDrafts = emailsDB.filter(email => !email.isDraft)
    return Promise.resolve(notDrafts);
}

function getById(emailId) {
    const email = emailsDB.find(email => email.id === emailId)
    return Promise.resolve(email);
}


function getEmptyEmail() {
    return {
        id: utilService.makeId(),
        from: '',
        cc: '',
        bcc: '',
        isStar: false,
        subject: '',
        body: '',
        isRead: false,
        isDraft: false,
        body: '',
        isSent: true,
        sentAt: new Date()
    }
}

function createEmails() {
    var emails = [{
            id: utilService.makeId(),
            from: 'Dudu Bunker',
            cc: '',
            bcc: '',
            isStar: false,
            subject: 'Hello Mate',
            isRead: false,
            isDraft: false,
            isSent: true,
            body: utilService.makeLorem(300),
            sentAt: new Date()
        },
        {
            id: utilService.makeId(),
            from: 'Audrey Hephborn',
            cc: '',
            bcc: '',
            isStar: false,
            subject: 'Paris is always a good idea',
            isRead: false,
            isDraft: false,
            isSent: true,
            body: utilService.makeLorem(300),
            sentAt: new Date()
        },
        {
            id: utilService.makeId(),
            from: 'God from heaven',
            cc: '',
            bcc: '',
            isStar: false,
            subject: 'Dont you worry child',
            isRead: false,
            isDraft: false,
            isSent: true,
            body: utilService.makeLorem(200),
            sentAt: new Date()
        }
    ]

    return Promise.resolve(emails);
}