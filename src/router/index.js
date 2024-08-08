// create a vue-router
import { createRouter, createWebHistory } from 'vue-router'
import login from '../components/pages/login.vue'
import dashboard from '../components/pages/dashboard.vue'
import store from '../store/index.js'

const routes = [
    {
        path: '/',
        name: 'login',
        meta: { isAuthenticated: false },
        component: login
    },
    {
        path: '/dashboard', 
        name: 'dashboard',
        meta: {isAuthenticated: true},
        component: dashboard
    }

]




const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.isAuthenticated && !store.getters.isAuthanticated) {
        next('/')
    } else {
        next()
    }
})
export default router