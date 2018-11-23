import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/home',
            name: 'home',
            component: resolve => require(['../pages/home/index.vue'], resolve)
        },
        {
            path: '/about',
            name: 'about',
            component: resolve => require(['../pages/about/About.vue'], resolve)
        },
        {
            path: '/note',
            name: 'note',
            component: resolve => require(['../pages/notes/Notes.vue'], resolve)
        },
        {
            path: '/programme',
            name: 'programme',
            component: resolve => require(['../pages/programme/programme.vue'], resolve)
        }
    ]
})
export default router