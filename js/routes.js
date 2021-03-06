// import home from './pages/home.cmp.js'
import emailApp from './apps/email/cmps/email-app.cmp.js'
import emailDetails from './apps/email/cmps/email-details.cmp.js'
import emailCompose from './apps/email/cmps/email-compose.cmp.js'
import emailList from './apps/email/cmps/email-list.cmp.js'
// import emailPreview from './apps/email/cmps/email-preview.cmp.js'
import noteApp from './apps/note/cmps/note-app.cmp.js'
import bookApp from './apps/books/pages/book-app.cmp.js'
import home from './home.js'


const routes = [{
        path: '/email',
        component: emailApp,
        children: [
            { path: '/email/inbox', component: emailList },
            { path: '/email/starred', component: emailList },
            { path: '/email/inbox/:id', component: emailDetails },
            { path: '/email/compose/:id?', component: emailCompose },
            { path: '/email/drafts', component: emailList }

        ]
    },
    { path: '/note/main', component: noteApp },
    { path: '/book', component: bookApp },
    { path: '/', component: home }
];
export default routes;