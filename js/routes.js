// import home from './pages/home.cmp.js'
import emailApp from './apps/email/cmps/email-app.cmp.js'
import noteApp from './apps/note/cmps/note-app.cmp.js'
// import emailDetails from './apps/email/cmps/email-details.cmp.js' // TODO: delete this cmp if not used anywhere else.
import emailCompose from './apps/email/cmps/email-compose.cmp.js'
import emailList from './apps/email/cmps/email-list.cmp.js'
// import emailPreview from './apps/email/cmps/email-preview.cmp.js'


const routes = [{
        path: '/email', component: emailApp,
        children: [
            { path: '/email/inbox', component: emailList },
            { path: '/email/compose/:id?', component: emailCompose },
            // { path: '/email//preview:id', component: emailPreview }
        ]
    },
    { path: '/note', component: noteApp },
];
export default routes;