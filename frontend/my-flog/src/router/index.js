import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '',
            component: resolve => require(['pages/Home.vue'], resolve)
        }
    ]
})
export default router