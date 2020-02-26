export default {
    template: `
        <div class="app-header">
        <router-link to="/" exact>
        Home
        </router-link>
<<<<<<< HEAD:js/app-header.cmp.js
        <router-link to="/email" exact>
        Emails
=======
        <router-link to="/emails">
        Email
        </router-link>
        <router-link to="/note">
        Note
>>>>>>> e592ff36e41fa61feb1ae7d76136c9a290db5bc0:js/apps/email/cmps/app-header.cmp.js
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