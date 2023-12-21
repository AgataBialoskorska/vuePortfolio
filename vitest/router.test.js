/**
 * @vitest-enviroment happy-dom
 */
import { beforeEach, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import { routes } from '@/router'
import AppVue from '@/App.vue'

const router = createRouter({
	history: createMemoryHistory(),
	routes: routes,
})

let wrapper // Declare the wrapper variable outside the beforeEach

beforeEach(async () => {
	await router.push('/')
	await router.isReady()

	wrapper = mount(AppVue, {
		global: {
			plugins: [router],
		},
	})
})

test('Home view', () => {
	expect(wrapper.html()).toContain('Agata')
	expect(wrapper.html()).toContain('contact')
	expect(wrapper.html()).toContain('about me')
	expect(wrapper.findComponent({ name: 'ViewHome' }).exists()).toBeTruthy()
})

test('Stack view', async () => {
	await router.push('/stack')
	await router.isReady()

	expect(wrapper.html()).toContain('Agata')
	expect(wrapper.html()).toContain('contact')
	expect(wrapper.html()).toContain('brands')
	expect(wrapper.findComponent({ name: 'ViewStack' }).exists()).toBeTruthy()
})

test('Projects view', async () => {
	await router.push('/projects')
	await router.isReady()

	expect(wrapper.html()).toContain('Agata')
	expect(wrapper.html()).toContain('contact')
	expect(wrapper.html()).toContain('Refactor')
	expect(wrapper.findComponent({ name: 'ViewProjects' }).exists()).toBeTruthy()
})

test('Hangman view', async () => {
	await router.push('/hangman')
	await router.isReady()

	expect(wrapper.html()).toContain('Agata')
	expect(wrapper.html()).toContain('contact')
	expect(wrapper.html()).toContain('Hangman Game')
	expect(wrapper.findComponent({ name: 'GameHangman' }).exists()).toBeTruthy()
})
