import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SearchByBin from '../views/SearchByBin.vue'
import History from '../views/History.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/search', component: SearchByBin },
        { path: '/history', component: History }
    ]
})
