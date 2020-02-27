export default {
    name:'input-text',
    template: `
        <input type="text" 
            :placeholder="info.placeholder" 
            v-model="txt" 
            @change="$emit('changed', txt)" />
    `,
    props: ['info'],
    data() {
        return {
            txt: ''
        }
    }
}