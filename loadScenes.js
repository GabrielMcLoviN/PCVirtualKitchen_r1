const Marzipano = require('marzipano');
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
	data.linkHotspots.forEach(function (hotspot) {
		const element = createLinkHotspotElement(hotspot);
		scene
			.hotspotContainer()
			.createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
	});

	// Create info hotspots.
	data.infoHotspots.forEach(function (hotspot) {
		const element = createInfoHotspotElement(hotspot);
		scene
			.hotspotContainer()
			.createHotspot(
				element,
				{ yaw: hotspot.yaw, pitch: hotspot.pitch },
				{ perspective: { radius: 500 } }
			);
	});

	return {
		data  : data,
		scene : scene,
		view  : view
	};
});

document.addEventListener('DOMContentLoaded', function () {
	panoElement.style.opacity = 1;
})