var inputText = {
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

const noteCmps = [
    {
        name:'noteInputText',
        type:'text',
        info: {
            placeholder : "Add text"
        }
    },
    {
        name:'noteInputImg',
        type:'text',
        info: {
            placeholder : "Add image url"
        }
    },
    {
        name:'noteInputTotos',
        type:'text',
        info: {
            placeholder : "Separate by comma"
        }
    },
]

export default {
    template: `
        <section class="note-add">
            <input type="text" />            
                <input type="radio" id="text" name="text" v-model="type" value="other">
                <label for="text">Text</label><br>
                <input type="radio" id="img" name="text" v-model="type" value="other">
                <label for="img">Image</label><br>
                <input type="radio" id="todo" name="text" v-model="type" value="other">
                <label for="todo">Todo</label>
                <input type="radio" id="video" name="text" v-model="type" value="other">
                <label for="video">Video</label>
        </section>
    `,
    data() {
        return {
            type: ''
        }
    },
    created() {
        // this.results = new Array(this.cmps.length)
    },
    components: {
        inputText
    }
}