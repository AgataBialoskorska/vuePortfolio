/**
 * @vitest-enviroment happy-dom
 */

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ViewHome from '@/views/View-Home.vue'

describe('Is View Home mounted', () => {
	it('should render', () => {
		const wrapper = mount(ViewHome)
		expect(wrapper.find('h2').exists()).toBeTruthy()
		expect(wrapper.find('h2').text()).toContain('about me')
		expect(wrapper.find('h3').exists()).toBeTruthy()
		expect(wrapper.find('h3').text()).toContain('frontend', 'javascript', 'vue', 'skills')
	})
})
