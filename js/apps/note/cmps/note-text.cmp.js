export default {
    name:'noteText',
    template: `
    <section class="note-text">
        <div class="note-text-container">
        <p>{{info.text}}</p>
        </div>
        <!-- <div>
            <span class="fas fa-font visible"></span>
        </div> -->
    </section>
        <!-- <input type="text" 
            :placeholder="info.placeholder" 
            v-model="txt" 
            @change="$emit('changed', txt)" /> -->
    `,
    props: ['info'],
}