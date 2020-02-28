
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

// const noteCmps = [
//     {
//         name:'noteInputText',
//         type:'text',
//         info: {
//             placeholder : "Add text"
//         }
//     },
//     {
//         name:'noteInputImg',
//         type:'text',
//         info: {
//             placeholder : "Add image url"
//         }
//     },
//     {
//         name:'noteInputTotos',
//         type:'text',
//         info: {
//             placeholder : "Separate by comma"
//         }
//     },
// ]

export default {
    template: `
        <section class="survey">
            <h1>Add note</h1>
            <ul>
                <li v-for="(cmp, idx) in cmps">
                    <component 
                        :is="cmp.type" 
                        :info="cmp.info"
                        @changed="setAns(idx, $event)"></component>
                        <button>text</button>
                        <button>img</button>
                        <button>vid</button>
                        <button>aud</button>
                        <button>todo</button>
                </li>
            </ul>
            <hr />
            <pre>{{results}}</pre>
        </section>
    `,
    data() {
        return {
            results: [],
            cmps: noteCmps
        }
    },
    created() {
        this.results = new Array(this.cmps.length)
    },
    methods: {
        setAns(idx, ans) {
            this.results.splice(idx, 1, ans)
            // this.results[idx] = ans;
        }
    },
    components: {
        inputText
    }
}