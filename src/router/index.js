import { createRouter, createWebHistory } from 'vue-router'
import ViewHome from '../views/View-Home.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: ViewHome,
		},
		{
			path: '/stack',
			name: 'stack',
			component: () => import('../views/View-Stack.vue'),
		},
		{
			path: '/projects',
			name: 'projects',
			component: () => import('../views/View-Projects.vue'),
		},
		{
			path: '/hangman',
			name: 'Hangman',
			component: () => import('../components/GameHangman.vue'),
		},
	],
})

export default router
