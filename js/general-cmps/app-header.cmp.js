export default {
    template: `
    <div class="app-header">
    <router-link to="/home/main" exact> <div class="logo">Appsus</div> </router-link>
    <div class="a-link">
        <router-link to="/home/main" exact>
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