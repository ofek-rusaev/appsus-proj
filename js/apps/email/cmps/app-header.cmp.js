export default {
    template: `
        <div class="app-header">
        <router-link to="/" exact>
        Home
        </router-link>
        <router-link to="/emails" exact>
        Emails
        </router-link>
        <router-link to="/about">
        About
        </router-link>
        <button @click="goBack">GO BACK</button>
        </div>
    `,
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    }
}