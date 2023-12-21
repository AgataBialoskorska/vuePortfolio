import { vi, test, expect } from 'vitest'
import axios from 'axios'

vi.mock('axios')

test('mocked axios', async () => {
	await axios.get('string')
	console.log('Axios version:', axios.VERSION)
	expect(axios.get).toHaveBeenCalledWith('string')
})

test('can get actual axios', async () => {
	const newAxios = (await vi.importActual) < typeof axios > 'axios'
	expect(vi.isMockFunction(newAxios.get)).toBe(false)
})
