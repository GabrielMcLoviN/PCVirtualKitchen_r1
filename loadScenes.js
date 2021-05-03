// const Marzipano = require('marzipano');
import Marzipano from 'marzipano';
import { data } from './data.js';
import { createInfoHotspotElement } from './infoHotspots.js';
import { createLinkHotspotElement } from './linkHotspots.js';

const panoElement = document.querySelector('#pano');

const viewerOpts = {
	controls : {
		mouseViewMode : data.settings.mouseViewMode,
		scrollZoom    : false
	}
};

// Initialize viewer.
export const viewer = new Marzipano.Viewer(panoElement, viewerOpts);

// Create scenes.
export const scenes = data.scenes.map(function (data) {
	const urlPrefix = 'tiles';
	const source = Marzipano.ImageUrlSource.fromString(
		urlPrefix + '/' + data.id + '/{z}/{f}/{y}/{x}.jpg',
		{ cubeMapPreviewUrl: urlPrefix + '/' + data.id + '/preview.jpg' }
	);

	const geometry = new Marzipano.CubeGeometry(data.levels);

	const limiter = Marzipano.RectilinearView.limit.traditional(
		data.faceSize,
		100 * Math.PI / 180,
		100 * Math.PI / 180
	);

	const view = new Marzipano.RectilinearView(
		data.initialViewParameters,
		limiter
	);

	const scene = viewer.createScene({
		source        : source,
		geometry      : geometry,
		view          : view,
		pinFirstLevel : true
	});

	// Create link hotspots.
	import('./linkHotspots').then(
		data.linkHotspots.forEach(function (hotspot) {
			const element = createLinkHotspotElement(hotspot);
			scene.hotspotContainer().createHotspot(element, {
				yaw   : hotspot.yaw,
				pitch : hotspot.pitch
			});
		})
	);

	// Create info hotspots.
	import('./infoHotspots').then(
		data.infoHotspots.forEach(async function (hotspot) {
			const element = await createInfoHotspotElement(hotspot);
			scene
				.hotspotContainer()
				.createHotspot(
					element,
					{ yaw: hotspot.yaw, pitch: hotspot.pitch },
					{ perspective: { radius: 500 } }
				);
		})
	);

	return {
		data  : data,
		scene : scene,
		view  : view
	};
});

const preloader = document.querySelector('.preloader');
const titleBar = document.getElementById('titleBar');
const intro = document.getElementById('intro');
const help_menu = document.getElementById('help-menu');
const help_menu_btn = document.querySelector('.help-menu-btn');
const help_menu_opener = document.querySelector('.help-menu-btn svg');
const help_menu_close = document.querySelector('#help-list-close');
const controls = document.getElementById('controls');
const controls_close = document.getElementById('controls-close');
const introClose = document.getElementById('intro-close');

document.addEventListener('DOMContentLoaded', function () {
	preloader.style.display = 'none';
	panoElement.style.opacity = 1;
	help_menu.style.opacity = 1;
	help_menu_btn.style.opacity = 1;
	titleBar.style.opacity = 1;
	controls.classList.add('visible');
});

introClose.addEventListener('click', function () {
	intro.classList.remove('visible');
});

controls_close.addEventListener('click', function () {
	controls.classList.remove('visible');
	intro.style.opacity = 1;
	intro.classList.add('visible');
});

help_menu_opener.addEventListener('click', function () {
	help_menu.classList.add('visible');
});

help_menu_close.addEventListener('click', function () {
	help_menu.classList.remove('visible');
});

document.body.addEventListener('keydown', (evt) => {
	if (evt.key === 'Escape') {
		help_menu.classList.remove('visible');
	}
});

