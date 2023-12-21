import { createRouter, createWebHistory } from 'vue-router'

const ViewHome = () => import('@/views/View-Home.vue')
const ViewStack = () => import('@/views/View-Stack.vue')
const ViewProjects = () => import('@/views/View-Projects.vue')
const GameHangman = () => import('@/components/GameHangman.vue')

const routes = [
	{
		path: '/',
		name: 'Home',
		component: ViewHome,
	},
	{
		path: '/stack',
		name: 'Stack',
		component: ViewStack,
	},
	{
		path: '/projects',
		name: 'Projects',
		component: ViewProjects,
	},
	{
		path: '/hangman',
		name: 'Hangman',
		component: GameHangman,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes: routes,
})
export { routes }
export default router
