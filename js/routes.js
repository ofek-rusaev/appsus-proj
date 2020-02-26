// import home from './pages/home.cmp.js'
import emailApp from './apps/email/cmps/email-app.cmp.js'
import noteApp from './apps/note/cmps/note-app.cmp.js'
// import emailDetails from './apps/email/cmps/email-details.cmp.js'
import noteDetails from './apps/note/cmps/note-details.cmp.js'
import emailCompose from './apps/email/cmps/email-compose.cmp.js'
import emailList from './apps/email/cmps/email-list.cmp.js'


<<<<<<< HEAD
const routes = [
    { path: '/email', component: emailApp },
=======
const routes = [{
        path: '/email',
        component: emailApp,
        children: [
            { path: '', component: emailList },
            { path: 'compose', component: emailCompose }
        ]
    },
>>>>>>> f60ac8b655588acc9b194ae0d7d1389b9af4cc0b
    // { path: '/email/:id', component: emailDetails },
    { path: '/note', component: noteApp },
    { path: '/note/:id', component: noteDetails },
];
export default routes;