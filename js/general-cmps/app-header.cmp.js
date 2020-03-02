export default {
    template: `
    <section>
    <div class="app-header">
    <router-link to="/" exact> <div class="logo">Appsus.</div> </router-link>
    <div class="a-link">
        <router-link to="/" exact>
        Home
        </router-link>
        <router-link to="/book" exact>
        MissBook
        </router-link>
        <router-link to="/email/inbox" exact>
        MisterEmail
        </router-link>
        <router-link to="/note/main">
        MissKeep
        </router-link>
    </div>
        <button @click="toggleMenu"><img class="menu-img"src="img/hamburger.png"/></button>
     </div>  
        <section v-if="menuBtn" class="main-nav">
        <router-link to="/home/main" exact>
        Home
        </router-link>
        <router-link to="/book" exact>
        MissBook
        </router-link>
        <router-link to="/email/inbox" exact>
        MisterEmail
        </router-link>
        <router-link to="/note/main">
        MissKeep
        </router-link>
        </section>
</section>
    
    `,
    data() {
        return {
            menuBtn: false,
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1)
        },
        toggleMenu() {
            this.menuBtn = !this.menuBtn
        }
    }
}