/**
 * @vitest-enviroment happy-dom
 */

import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import AppVue from '@/App.vue'

describe('App.vue Component Tests', () => {
	it('renders Navigation, Hi, Contact, and Cookies components', () => {
		const wrapper = shallowMount(AppVue)

		const navExists = wrapper.findComponent({ name: 'Navigation' }).exists()
		console.log('Navigation component exists?', navExists)
		expect(navExists).toBeTruthy()
		const hiExists = wrapper.findComponent({ name: 'Hi' }).exists()
		console.log('Hi component exists?', hiExists)
		expect(hiExists).toBeTruthy()
		const contactExists = wrapper.findComponent({ name: 'Contact' }).exists()
		console.log('Contact component exists?', contactExists)
		expect(contactExists).toBeTruthy()
		const contentClassExists = wrapper.find('.content').exists()
		console.log('Content class exists?', contentClassExists)
		expect(contentClassExists).toBeTruthy()
		const cookiesExists = wrapper.findComponent({ name: 'Cookies' }).exists()
		console.log('Cookies component exists?', cookiesExists)
		expect(cookiesExists).toBeTruthy()
	})

	it('renders RouterView for content', () => {
		const wrapper = shallowMount(AppVue)
		const routerView = wrapper.find('.content RouterView')
		expect(routerView).toBeTruthy()
	})
})
