/**
 * @vitest-enviroment happy-dom
 */
import { test, expect } from 'vitest'
// import { createRouter, createWebHistory } from 'vue-router'
import { mount } from '@vue/test-utils'
// import Routing from '@/router/index.js'

// test('Mount Routing', async () => {
// 	const routes = [
// 		{
// 			path: '/',
// 			name: 'ViewHome',
// 			component: () => import('@/views/View-Home.vue'),
// 		},
// 		{
// 			path: '/stack',
// 			name: 'ViewStack',
// 			component: () => import('@/views/View-Stack.vue'),
// 		},
// 		{
// 			path: '/projects',
// 			name: 'ViewProjects',
// 			component: () => import('@/views/View-Projects.vue'),
// 		},
// 		{
// 			path: '/hangman',
// 			name: 'Hangman',
// 			component: () => import('../src/components/GameHangman.vue'),
// 		},
// 	]
// 	const router = createRouter({
// 		history: createWebHistory(),
// 		routes,
// 	})

// 	const wrapper = mount(Routing, {
// 		global: {
// 			plugins: [router],
// 		},
// 	})

// 	expect(wrapper.exists()).toBeTruthy()

// 	await router.push('/')
// 	expect(wrapper.find({ name: 'ViewHome' }).exists()).toBeTruthy()
//   console.log(wrapper);

// 	await router.push('/stack')
// 	expect(wrapper.find({ name: 'ViewStack' })).toBeTruthy()

// 	await router.push('/projects')
// 	expect(wrapper.find({ name: 'ViewProjects' })).toBeTruthy()

// 	await router.push('/hangman')
// 	expect(wrapper.find({ name: 'GameHangman' })).toBeTruthy()
// })

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import router from '@/router/index' // Załóżmy, że Twój router znajduje się w katalogu src

// Test sprawdzający, czy komponent ViewHome jest renderowany na ścieżce '/'
test('renders ViewHome on "/" route', async () => {
	const app = createApp({ template: '<router-view />' })
	app.use(
		createRouter({
			history: createWebHistory(),
			routes: router.options.routes,
		})
	)

	const wrapper = mount(app)
  console.log(wrapper.html);
	await router.push('/')

	expect(wrapper.findComponent({ name: 'ViewHome' }).exists()).toBeTruthy()
})
