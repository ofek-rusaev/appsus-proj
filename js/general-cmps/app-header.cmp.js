export default {
    template: `
    <div class="app-header">
    <div class="logo">Appsus</div>
    <div class="a-link">
        <router-link to="/" exact>
        Home
        </router-link>
        <router-link to="/email/inbox" exact>
        misterEmail
        </router-link>
        <router-link to="/note/main">
        missKeep
        </router-link>
        </div>
        </div>
    `,
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    }
}