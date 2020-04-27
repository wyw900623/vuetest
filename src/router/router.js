import Home from '@/views/Home.vue'
export default [{
        path: '/',
        name: 'home',
        component: Home,
        props: route => ({
            food: route.query.food
        }),
        beforeEnter: (to, from, next) => {
            if (from.name == 'about') console.log('from about')
            else console.log('not from about')
            next() //切记加next()，否则不会执行跳转
        }
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('@/views/login.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import ( /* webpackChunkName: "about" */ '@/views/About.vue'),
        meta: {
            title: '关于'
        }
    },
    {
        path: '/store',
        name: 'store',
        component: () =>
            import ('@/views/store.vue')
    },
    {
        path: '/count-to',
        name: 'count-to',
        component: () =>
            import ('@/views/count-to.vue')
    },
    {
        path: '/argu/:name',
        name: 'argu',
        component: () =>
            import ('@/views/argu.vue'),
        props: true
    },
    {
        path: '/parent',
        name: 'parent',
        component: () =>
            import ('@/views/parent.vue'),
        children: [{
            path: 'child',
            component: () =>
                import ('@/views/child.vue')
        }]
    }, {
        path: '/name_view',
        components: {
            default: () =>
                import ('@/views/child.vue'),
            email: () =>
                import ('@/views/email.vue'),
            tel: () =>
                import ('@/views/tel.vue')
        }
    },
    {
        path: '/render',
        name: 'render',
        component: () =>
            import ('@/views/render.vue')
    },
    {
        path: '/menu-page',
        name: 'menu-page',
        component: () =>
            import ('@/views/menu-page.vue')
    }
]