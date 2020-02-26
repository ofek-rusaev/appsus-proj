// import home from './pages/home.cmp.js'
import emailApp from './apps/email/cmps/email-app.cmp.js'
import noteApp from './apps/note/cmps/note-app.cmp.js'
import emailDetails from './apps/email/cmps/email-details.cmp.js'


const routes = [
    { path: '/email', component: emailApp },
    { path: '/email/:id', component: emailDetails },
    { path: '/note', component: noteApp },
];

export default routes;