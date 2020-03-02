export default {
    template: `
        <div class="navbar">
            <button @click="goBack">GO BACK</button>
            <router-link to="/" exact>
                Home
            </router-link>
            <router-link to="/book" exact>
                Our Books
            </router-link>
            <router-link to="/about">
                About
            </router-link>
        </div>
    `,
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    }
}