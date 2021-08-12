import VueRouter from  'vue-router';

import Search from './pages/Search.vue'
import LoginPage from './pages/LoginPage.vue'
import SignupPage from './pages/SignupPage.vue'
import Result from './pages/Result.vue'
import Detail from './pages/Detail.vue'

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
        },
        {
            path: '/signup',
            component: SignupPage
        },
        {
            path: '/result',
            component: Result
        },
        {
            path: '/detail',
            component: Detail
        }
    ]
})

export default router;