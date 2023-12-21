/// <reference types="vitest" />
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
	test: {
		globals: 'true',
		environment: 'happy-dom',
		css: {
			modules: {
				classNameStrategy: 'non-scoped',
			},
		},
	},
	plugins: [Vue(), Eslint()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
})
