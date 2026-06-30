import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/home.vue')
const About = () => import('../views/about.vue')
const Stack = () => import('../views/stack.vue')
const Project = () => import('../views/project.vue')
const PersonalProject = () => import('../views/personal-project.vue')

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },

    {
        path: '/about',
        name: 'about.index',
        component: About,
    },

    {
        path: '/stack',
        name: 'stack.index',
        component: Stack,
    },

    {
        path: '/project',
        name: 'project.index',
        component: Project,
    },

    {
        path: '/personal-project',
        name: 'personal-project.index',
        component: PersonalProject,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 }
    },
})

export default router
