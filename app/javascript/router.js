import VueRouter from  'vue-router';

import Search from './pages/Search.vue'
import LoginPage from './pages/LoginPage.vue'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Search
        },
        {
            path: '/login',
            component: LoginPage
        }
    ]
})

export default router;