// import home from './pages/home.cmp.js'
import emailApp from './apps/email/cmps/email-app.cmp.js'
import noteApp from './apps/note/cmps/note-app.cmp.js'
import notePreview from './apps/note/cmps/note-preview.cmp.js'


const routes = [
    { path: '/email', component: emailApp },
    { path: '/note', component: noteApp },
    { path: '/note/:id', component: notePreview },
];

export default routes;