import { scenes } from './loadScenes.js';
import screenfull from 'screenfull';
import { switchScene } from './helpers.js';

// Grab elements from DOM.
const fullscreenToggleElement = document.querySelector('#fullscreenToggle');

// Detect desktop or mobile mode.
if (window.matchMedia) {
	const setMode = function () {
		if (mql.matches) {
			document.body.classList.remove('desktop');
			document.body.classList.add('mobile');
		}
		else {
			document.body.classList.remove('mobile');
			document.body.classList.add('desktop');
		}
	};
	const mql = matchMedia('(max-width: 500px)');
	setMode();
	// mql.addEventListener(setMode);
}
else {
	document.body.classList.add('desktop');
}

// Detect whether we are on a touch device.
document.body.classList.add('no-touch');

window.addEventListener('touchstart', function (_e) {
	document.body.classList.remove('no-touch');
	document.body.classList.add('touch');
});

if (screenfull.isEnabled) {
	document.body.classList.add('fullscreen-enabled');
	fullscreenToggleElement.addEventListener('click', function () {
		screenfull.toggle();
	});
	screenfull.on('change', function () {
		if (screenfull.isFullscreen) {
			fullscreenToggleElement.classList.add('enabled');
		}
		else {
			fullscreenToggleElement.classList.remove('enabled');
		}
	});
}
else {
	document.body.classList.add('fullscreen-disabled');
	fullscreenToggleElement.setAttribute(
		'href',
		'https://pc-devenv2.netlify.app'
	);
	fullscreenToggleElement.setAttribute('target', '_blank');
}

// Display the initial scene.
async function render () {
	const lhs = await import('./linkHotspots');
	const ihs = await import('./infoHotspots');
	const s = await import('./loadScenes');
	const tour = await import('./tour');
	const data = await import('./data');
	const initScene = await switchScene(scenes[0]);
	return initScene, s, data, lhs, ihs;
}
render();
