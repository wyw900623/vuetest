import Home from '@/views/Home.vue'
export default [{
        path: '/',
        name: 'home',
        component: Home,
        props: route => ({
            food: route.query.food
        }),
        beforeEnter: (to, from, next) => {
            if (from.name == 'about') alert('from about')
            else alert('not from about')
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
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '@/views/About.vue')
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
    }
]