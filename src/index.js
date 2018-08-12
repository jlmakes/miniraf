import polyfill from './polyfill'

const miniraf = window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	polyfill

export default miniraf
