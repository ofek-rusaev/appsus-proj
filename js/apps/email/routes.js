import home from './pages/home.cmp.js'
import bookApp from './pages/book-app.cmp.js'
import bookDetails from './pages/book-details.cmp.js'
import aboutPage from './pages/about-page.cmp.js'



const routes = [
    { path: '/', component: home },
    { path: '/book', component: bookApp },
    { path: '/book/:id', component: bookDetails },
    { path: '/about', component: aboutPage },
];

export default routes;