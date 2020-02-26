// import home from './pages/home.cmp.js'
import emailApp from './apps/email/cmps/email-app.cmp.js'
import noteApp from './apps/note/cmps/note-app.cmp.js'
<<<<<<< HEAD
import notePreview from './apps/note/cmps/note-preview.cmp.js'
=======
import emailDetails from './apps/email/cmps/email-details.cmp.js'
>>>>>>> 2ebadc69185e84f818d6206cb73fbf45d306b506


const routes = [
    { path: '/email', component: emailApp },
    { path: '/email/:id', component: emailDetails },
    { path: '/note', component: noteApp },
<<<<<<< HEAD
    { path: '/note/:id', component: notePreview },
=======
>>>>>>> 2ebadc69185e84f818d6206cb73fbf45d306b506
];

export default routes;