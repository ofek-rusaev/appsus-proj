export default {
    template: `
        <div class="app-header">
            <button @click="goBack">GO BACK</button>
            <router-link to="/" exact>
                Home
            </router-link>
            <router-link to="/emails" exact>
                Emails
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