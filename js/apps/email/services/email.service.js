import { storageService } from './storage.service.js'
import { utilService } from './util.service.js'
const EMAILS_KEY = 'emails';
var emailsDB = [];


export const emailService = {
    getNextPrevEmailIds,
    query,
    getEmptyEmail,
    sendEmail,
    getById,
    createEmails,
    deleteEmail,
    addToStarred,
    saveEmail
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

function saveEmail(email) {
    if (email.id) return _updateEmail(email)
    else return _addEmail(email);
}

function _addEmail(email) {
    email.id = utilService.makeId()
    emailsDB.push(Email);
    storageService.store(KEY, emailsDB)
    return Promise.resolve(email)
}

function _updateEmail(email) {
    const idx = emailsDB.findIndex(currEmail => currEmail.id === email.id);
    emailsDB.splice(idx, 1, email)
    storageService.store(KEY, emailsDB)
    return Promise.resolve(emailsDB)
}

function addToStarred(emailId) {
    const email = getById(emailId);
    const idx = emailsDB.findIndex(email => email.id === emailId)
    emailsDB[idx].isStar = true;
    console.log('keren', emailsDB[idx])
    storageService.store(EMAILS_KEY, emailsDB)
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
    return Promise.resolve(emailsDB);
}

function getById(emailId) {
    const email = emailsDB.find(email => email.id === emailId)
    return Promise.resolve(email);
}

function sendEmail(email) {
    emailsDB.unshift(email);
    storageService.store(EMAILS_KEY, emailsDB)
    return Promise.resolve(emailsDB);
}

function getEmptyEmail() {
    return {
        id: utilService.makeId(),
        from: '',
        isStar: false,
        subject: '',
        body: '',
        isRead: false,
        sentAt: new Date()
    }
}


function createEmails() {
    var emails = [{
            id: utilService.makeId(),
            from: 'Dudu',
            isStar: false,
            subject: 'Hello Mate',
            body: utilService.makeLorem(300),
            isRead: false,
            sentAt: new Date()
        },
        {
            id: utilService.makeId(),
            from: 'God',
            isStar: false,
            subject: 'Dont you worry child',
            body: utilService.makeLorem(200),
            isRead: true,
            sentAt: new Date()
        }
    ]

    return Promise.resolve(emails);
}

function composeEmail() {

}