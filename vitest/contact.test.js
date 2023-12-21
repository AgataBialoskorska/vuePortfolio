/**
 * @vitest-enviroment happy-dom
 */

import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Contact from '@/views/ContactElement.vue'

describe('Is Contact mounted', () => {
	it('should contacts elements exist', () => {
		const wrapper = mount(Contact)

		expect(wrapper.exists()).toBeTruthy()
		expect(wrapper.find('h2').exists()).toBeTruthy()
		expect(wrapper.findAll('a')).toHaveLength(3)
	})
})

describe('Are contact elements correct', () => {
	let wrapper

	beforeEach(() => {
		wrapper = mount(Contact)
	})
	afterEach(() => {
		wrapper.unmount()
	})

	it('should have header', async () => {
		const h2Element = wrapper.find('h2')

		expect(h2Element.text()).toContain('contact')
	})

	it('should exist mail link', () => {
		const mailLink = wrapper.find('a[href="mailto:abialoskorska@icloud.com"]')

		expect(mailLink.exists()).toBeTruthy()
		expect(mailLink.attributes('disabled')).toBeFalsy()
	})

	it('should exist GitHub link', () => {
		const ghLink = wrapper.find('a[href="https://github.com/agatabialoskorska"]')

		expect(ghLink.exists()).toBeTruthy()
		expect(ghLink.attributes('disabled')).toBeFalsy()
	})

	it('should exist LinkedIn link', () => {
		const liLink = wrapper.find('a[href="https://www.linkedin.com/in/agatabialoskorska"]')

		expect(liLink.exists()).toBeTruthy()
		expect(liLink.attributes('disabled')).toBeFalsy()
	})
})
describe('Are methods working when mouse is on hover or leave', () => {
	it('adds fa-beat class on hover', async () => {
		const wrapper = mount(Contact)
		const link = wrapper.find('a')
		await link.trigger('mouseenter')

		expect(link.classes()).toContain('fa-beat')
	})

	it('removes fa-beat class on mouse leave', async () => {
		const wrapper = mount(Contact)
		const link = wrapper.find('a')
		await link.trigger('mouseenter')
		await link.trigger('mouseleave')

		expect(link.classes()).not.toContain('fa-beat')
	})
})
