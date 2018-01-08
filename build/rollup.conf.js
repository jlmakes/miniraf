import buble from 'rollup-plugin-buble'
import json from 'rollup-plugin-json'
import { standard as banner } from './rollup.conf.banner'

export default {
	banner,
	input: 'src/index.js',
	plugins: [json(), buble()],
	output: [
		{ format: 'umd', file: 'dist/miniraf.js', name: 'miniraf' },
		{ format: 'es', file: 'dist/miniraf.es.js' }
	]
}
