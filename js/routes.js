// import home from './pages/home.cmp.js'
import emailApp from './apps/email/cmps/email-app.cmp.js'
import noteApp from './apps/note/cmps/note-app.cmp.js'
// import emailDetails from './apps/email/cmps/email-details.cmp.js' // TODO: delete this cmp if not used anywhere else.
import noteDetails from './apps/note/cmps/note-details.cmp.js'
import emailCompose from './apps/email/cmps/email-compose.cmp.js'
import emailList from './apps/email/cmps/email-list.cmp.js'


const routes = [{
        path: '/email', component: emailApp,
        children: [
            { path: '/email/inbox', component: emailList },
            { path: '/email/compose', component: emailCompose },
            // { path: '/email/:id', component: emailDetails }
        ]
    },
    { path: '/note', component: noteApp },
    { path: '/note/:id', component: noteDetails },
];
export default routes;