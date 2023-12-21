/**
 * @vitest-enviroment happy-dom
 */
import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router'
import AppVue from '@/App.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: routes,
  })
  
  test('routing', async () => {
	router.push('/')
  
	await router.isReady()
  
  const wrapper = mount(AppVue, {
	global: {
		plugins: [router]
	}
})

expect(wrapper.html()).toContain('Feel free')
})