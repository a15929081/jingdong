import Vue from 'vue'
import Router from 'vue-router'
import home from './components/home.vue'

// import user from './components/user.vue'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            component: home
        },
        {
            path: "/home",

            component: () =>
                import(/* webpackChunkName: "about" */ "./components/home.vue")
        },
        {
            path: "/st",

            component: () =>
                import(/* webpackChunkName: "about" */ "./components/home.vue")
        },
        {
            path: "/user",

            component: () =>
                import(/* webpackChunkName: "about" */ "./components/home.vue")
        },
        {
            path: "/car",

            component: () =>
                import(/* webpackChunkName: "about" */ "./components/home.vue")
        },
    ]
});