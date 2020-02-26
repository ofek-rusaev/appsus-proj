import home from './pages/home.cmp.js'
import emailApp from './cmps/email-app.cmp.js'
import emailDetails from './cmps/email-details.cmp.js'


const routes = [
    { path: '/', component: home },
    { path: '/email', component: emailApp },
    { path: '/email/:id', component: emailDetails },
];

export default routes;