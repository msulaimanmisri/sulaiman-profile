import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/home.vue')
const About = () => import('../views/about.vue')
const Stack = () => import('../views/stack.vue')
const Project = () => import('../views/project.vue')
const PersonalProject = () => import('../views/personal-project.vue')
const PostsIndex = () => import('../views/posts/index.vue')
const PostsCreate = () => import('../views/posts/create.vue')
const PostsEdit = () => import('../views/posts/edit.vue')

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

    {
        path: '/posts',
        name: 'posts.index',
        component: PostsIndex,
    },

    {
        path: '/posts/create',
        name: 'posts.create',
        component: PostsCreate,
    },

    {
        path: '/posts/edit/:id',
        name: 'posts.edit',
        component: PostsEdit,
    },
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes // <-- routes,
})

export default router