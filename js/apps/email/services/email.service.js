import { storageService } from './storage.service.js'
import { utilService } from './util.service.js'
const EMAILS_KEY = 'emails';
var emailsDB = [];


export const emailService = {
    getNextPrevEmailIds,
    query,
    composeEmail,
    getEmptyEmail,
    sendEmail,
    getById,
    createEmails
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
        from: '',
        subject: '',
        body: '',
        isRead: false,
        sentAt: null
    }
}

function createEmails() {
    var emails = [{
            from: 'Dudu',
            id: utilService.makeId(),
            subject: 'Hello Mate',
            body: 'Where are u now?',
            isRead: false,
            sentAt: new Date()
        },
        {
            from: 'God',
            id: utilService.makeId(),
            subject: 'Dont you worry child',
            body: 'see heaven got a plan for you',
            isRead: true,
            sentAt: new Date()
        }
    ]

    return Promise.resolve(emails);
}

function composeEmail() {

    var $email = $('.email').val();
    var $subject = $('.subject').val();
    var $message = $('.message').val();

    if (!$email || !$subject || !$message) return;

    window.location.href = (`https://mail.google.com/mail/?view=cm&fs=1&to=${$email}.com&su=${$subject}&body=${$message}`);
    var $email = '';
    var $subject = '';
    var $message = '';
}