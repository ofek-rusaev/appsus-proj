export default {
    template: `
        <article>
        <h4>ID: {{note.id}}</h4>
        <h5>TITLE: {{note.title}}</h5>
            <!-- <img :src="'img/cars-imgs/' + car.vendor + '.png'" /> -->
            <router-link :to="'/note/'+note.id"> 
                Details
            </router-link>
            |
            <router-link :to="'/note/edit/'+note.id"> 
                Edit
            </router-link>
        </article>               
    `,
    props: ['notes']
}