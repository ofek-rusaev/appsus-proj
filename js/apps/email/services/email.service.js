import { storageService } from './storage.service.js'
import { utilService } from './util.service.js'
const EMAILS_KEY = 'emails';
var emailsDB = [];


export const emailService = {
    getNextPrevEmailIds,
    query,
    composeEmail,
    getEmptyEmail,
    sendEmail
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

function query() {
    var emails = storageService.load(EMAILS_KEY);
    if (!emails) {
        return composeEmails().then(newEmails => {
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
        subject: '',
        body: '',
        isRead: false,
        sentAt: null
    }
}

function composeEmail() {
    var email = {
        id: utilService.makeId(),
        title: utilService.makeLorem(10),

    }
    return Promise.resolve(email);
}