import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import( /* webpackChunkName: "home" */ '../views/home.vue')
    },

    {
        path: '/about',
        name: 'about.index',
        component: () => import( /* webpackChunkName: "home" */ '../views/about.vue')
    },

    {
        path: '/stack',
        name: 'stack.index',
        component: () => import( /* webpackChunkName: "home" */ '../views/stack.vue')
    },

    {
        path: '/project',
        name: 'project.index',
        component: () => import( /* webpackChunkName: "home" */ '../views/project.vue')
    },

    {
        path: '/posts',
        name: 'posts.index',
        component: () => import( /* webpackChunkName: "index" */ '../views/posts/index.vue')
    },

    {
        path: '/posts/create',
        name: 'posts.create',
        component: () => import( /* webpackChunkName: "create" */ '../views/posts/create.vue')
    },

    {
        path: '/posts/edit/:id',
        name: 'posts.edit',
        component: () => import( /* webpackChunkName: "edit" */ '../views/posts/edit.vue')
    }
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes // <-- routes,
})

export default router