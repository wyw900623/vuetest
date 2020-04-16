import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'


Vue.use(VueRouter)

const router = new VueRouter({
    routes
})

const has_login = true

//to--去向页面
//from--来自页面
//next-- 执行操作
router.beforeEach((to, from, next) => {
    if (to.name != 'login') {
        if (has_login) next()
        else next({
            name: 'login'
        })
    } else {
        if (has_login) next({
            name: 'home'
        })
        else next()
    }
})
export default router