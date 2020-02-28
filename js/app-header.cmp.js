export default {
    template: `
    <div class="app-header">
    <div class="logo">Appsus</div>
        <router-link to="/" exact>
        Home
        </router-link>
        <router-link to="/email/inbox" exact>
        misterEmail
        </router-link>
        <router-link to="/note">
        missKeep
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