import appHeader from './general-cmps/app-header.cmp.js';

export default {
    template: `
    <section >
    <app-header></app-header>

    <img class="main-pic" src="img/bcg.jfif"/>
            <h1>Welcome To The Future. Appsus.</h1>
         </section>
`,
    components: {
        appHeader
    }
}