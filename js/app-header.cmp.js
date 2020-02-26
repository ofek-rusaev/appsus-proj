export default {
    template: `
        <div class="app-header">
        <router-link to="/" exact>
        Home
        </router-link>
        <router-link to="/email" exact>
        Emails
        </router-link>
        <router-link to="/note">
        Notes
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