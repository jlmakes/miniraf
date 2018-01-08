const rollupPlugins = [
	require('rollup-plugin-json')(),
	require('rollup-plugin-buble')(),
	require('rollup-plugin-istanbul')({
		exclude: ['index.test.js', '**/node_modules/**'],
		instrumenterConfig: {
			embedSource: true // helps with inaccurate line numbers
		}
	})
]

module.exports = karma => {
	karma.set({
		frameworks: ['mocha', 'sinon-chai'],

		preprocessors: {
			'index.test.js': ['rollup']
		},

		files: [{ pattern: 'index.test.js', watched: false }],

		rollupPreprocessor: {
			plugins: rollupPlugins,
			format: 'iife',
			name: 'miniraf',
			sourcemap: 'inline'
		},

		colors: true,
		concurrency: 10,
		logLevel: karma.LOG_ERROR,
		singleRun: true,

		browsers: ['ChromeHeadless'],
		browserDisconnectTolerance: 1,
		browserDisconnectTimeout: 60 * 1000,
		browserNoActivityTimeout: 60 * 1000,
		captureTimeout: 4 * 60 * 1000
	})

	if (process.env.TRAVIS) {
		karma.set({
			autoWatch: false,
			coverageReporter: {
				type: 'lcovonly',
				dir: 'coverage/'
			},
			reporters: ['mocha', 'coverage', 'coveralls']
		})
	} else {
		karma.set({
			coverageReporter: {
				type: 'lcov',
				dir: '../.ignore/coverage/'
			},
			reporters: ['dots', 'coverage']
		})
	}
}
