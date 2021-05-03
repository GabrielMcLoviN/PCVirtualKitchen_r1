import Shepherd from 'shepherd.js';
import screenfull from 'screenfull';
import { scenes, viewer } from './loadScenes.js';
import { reset_modal, switchScene } from './helpers';
import { createPopper } from '@popperjs/core';

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

window.addEventListener('load', function () {
	setTimeout(() => {
		panoElement.style.opacity = 1;
		help_menu.style.opacity = 1;
		help_menu_btn.style.opacity = 1;
		titleBar.style.opacity = 1;
		preloader.style.display = 'none';
		controls.classList.add('visible');
	}, 500);
});

introClose.addEventListener('click', function () {
	intro.classList.remove('visible');
});

controls_close.addEventListener('click', function () {
	controls.remove();
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
		'https://pc-dev2.netlify.app'
	);
	fullscreenToggleElement.setAttribute('target', '_blank');
	fullscreenToggleElement.setAttribute('rel', 'noreferrer');
}

// tour
const tour_infoHotspots = new Shepherd.Tour();
tour_infoHotspots.addStep({
	showOn        : document.body.classList.contains('tour-accepted'),
	text          : `<br/>Click this icon to learn more about the product<br/><br/>`,
	attachTo      : {
		element : '.intro-starter',
		on      : 'top'
	},

	popperOptions : {
		modifiers : [
			{
				name    : 'offset',
				options : {
					offset : [
						0,
						25
					]
				}
			}
		]
	}
});

const tour_modal = new Shepherd.Tour({
	useModalOverlay : true
});

tour_modal.on('complete', function () {
	reset_modal();
});

tour_modal.addStep({
	arrow                      : false,
	showOn                     : document.body.classList.contains(
		'tour-accepted'
	),
	modalOverlayOpeningPadding : 10,
	text                       : `<br/>Here, you'll find product information, downloadable recipes & related content`,
	attachTo                   : {
		element : '.intro-starter .product-txt-wrapper',
		on      : 'auto'
	},
	popperOptions              : {
		modifiers : [
			{
				name    : 'offset',
				options : {
					offset : [
						0,
						80
					]
				}
			}
		]
	},
	buttons                    : [
		{
			text    : 'Next',
			action  : tour_modal.next,
			classes : 'shep-next'
		}
	]
});

tour_modal.addStep({
	arrow         : false,
	showOn        : document.body.classList.contains('tour-accepted'),
	text          : `<br/>Here you'll find product images & videos, click on the arrows or swipe to see more<br/>`,
	attachTo      : {
		element : '.intro-starter .carousel_container',
		on      : 'auto'
	},
	popperOptions : {
		modifiers : [
			{
				name    : 'offset',
				options : {
					offset : [
						0,
						25
					]
				}
			},
			{
				name    : 'arrow',
				options : {
					padding : 25
				}
			}
		]
	},
	buttons       : [
		{
			text    : 'Back',
			action  : tour_modal.back,
			classes : 'shep-back'
		},
		{
			text    : 'Next',
			action  : tour_modal.next,
			classes : 'shep-next'
		}
	]
});

const tour_linkHotspots = new Shepherd.Tour();

tour_linkHotspots.addStep({
	showOn        : document.body.classList.contains('tour-accepted'),
	text          : `<br/>Click the arrow to see the products in this part of the kitchen<br/><br/>`,
	attachTo      : {
		element : '.second-tour-starter img',
		on      : 'top'
	},
	popperOptions : {
		modifiers : [
			{
				name    : 'offset',
				options : {
					offset : [
						0,
						25
					]
				}
			}
		]
	}
});

const tour_movement = new Shepherd.Tour({
	defaultStepOptions : {
		scrollTo : { behavior: 'smooth', block: 'center' }
	}
});

tour_movement.addStep({
	showOn        : document.body.classList.contains('tour-accepted'),
	text          : `<br/>Good moves! I think you got the hang of it!<br/>`,
	buttons       : [
		{
			text    : 'Start Exploring',
			action  : tour_movement.next,
			classes : 'shep-next'
		}
	],
	popperOptions : {
		modifiers : [
			{
				name    : 'offset',
				options : {
					offset : [
						0,
						25
					]
				}
			}
		]
	}
});

const tour_final = new Shepherd.Tour({
	defaultStepOptions : {
		scrollTo : { behavior: 'smooth', block: 'center' }
	}
});

tour_final.addStep({
	showOn        : document.body.classList.contains('tour-accepted'),
	text          : `<br/>Enjoy the party!<br/>🥳✨🥂<br/><br/>If you need help along the way, click here`,
	attachTo      : {
		element : '.help-menu-btn svg',
		on      : 'auto'
	},
	when          : {
		complete : function () {
			document.body.classList.remove('tour-accepted');
		},
		cancel   : function () {
			document.body.classList.remove('tour-accepted');
		},
		close    : function () {
			document.body.classList.remove('tour-accepted');
		}
	},
	buttons       : [
		{
			text    : 'Dismiss',
			action  : tour_final.next,
			classes : 'shep-next'
		}
	],
	popperOptions : {
		modifiers : [
			{
				name    : 'offset',
				options : {
					offset : [
						0,
						25
					]
				}
			}
		]
	}
});

const panoElement = document.querySelector('#pano');

const exit_tour = document.querySelector('.cancel');
const start_tour = document.querySelector('.confirm');
const exit_tour_x = document.querySelector('.intro-header .intro-close');
const intro_scene = scenes[0].scene;
const infohotspot = document.querySelector(
	'.info-hotspot-header.intro-starter'
);
const introModal = document.querySelector('.info-hotspot-modal.intro-starter');
const introLH = document.querySelector('.link-hotspot.second-tour-starter');

let h = window.innerHeight;

let destinationViewParameters = {
	yaw   : -1.1815019536187705,
	pitch : 0.21382602521738114,
	fov   : 60 * Math.PI / 180
};

let options = {
	transitionDuration : 2000
};

let iframeViewParameters = {
	yaw   : -1.1815019536187705,
	pitch : 0.21382602521738114,
	fov   : 60 * Math.PI / 180
};

start_tour.addEventListener('click', function () {
	viewer.controls().disable();
	intro.classList.remove('visible');
	if (h > 389) {
		intro_scene.lookTo(destinationViewParameters, options, done);
	}
	else if (h === 389) {
		intro_scene.lookTo(iframeViewParameters, options, done);
	}
	document.body.classList.add('tour-accepted');
});

function done () {
	tour_infoHotspots.start();
}

infohotspot.addEventListener('click', function () {
	document.body.classList.contains('tour-accepted')
		? tour_infoHotspots.next()
		: '';
});

tour_infoHotspots.on('complete', function () {
	document.body.classList.contains('tour-accepted') ? tour_modal.start() : '';
});

var destinationViewParameters_linkHotspot = {
	yaw   : -1.600429731329104,
	pitch : 0.5002192152175962,
	fov   : 40 * Math.PI / 180
};

var iframeViewParameters_linkHotspot = {
	yaw   : -1.600429731329104,
	pitch : 0.5002192152175962,
	fov   : 40 * Math.PI / 180
};

var options_linkHotspot = {
	transitionDuration : 2000
};

tour_modal.on('complete', function () {
	introModal.classList.remove('visible');
	if (h > 389) {
		intro_scene.lookTo(
			destinationViewParameters_linkHotspot,
			options_linkHotspot,
			infoHotspotsTour_done
		);
	}
	else if (h === 389) {
		intro_scene.lookTo(
			iframeViewParameters_linkHotspot,
			options_linkHotspot,
			infoHotspotsTour_done
		);
	}
	introModal.classList.remove('intro-starter');
	infohotspot.classList.remove('intro-starter');
	document
		.querySelector('.info-hotspot-modal .info-hotspot-header.intro-starter')
		.classList.remove('intro-starter');
});

function infoHotspotsTour_done () {
	tour_linkHotspots.start();
}

introLH.addEventListener('click', function () {
	if (document.body.classList.contains('tour-accepted')) {
		tour_linkHotspots.next();
		tour_movement.start();
	}
});

tour_movement.on('complete', function () {
	switchScene(scenes[0]);
	tour_final.start();
});

tour_final.on('complete', function () {
	document.body.classList.remove('tour-accepted');
	introLH.classList.remove('second-tour-starter');
	viewer.controls().enable();
});

[
	exit_tour,
	exit_tour_x
].forEach((el) => {
	el.addEventListener('click', function () {
		introModal.classList.remove('intro-starter');
		infohotspot.classList.remove('intro-starter');
		introLH.classList.remove('second-tour-starter');
		intro.remove();
		introModal.remove();
		show();
		viewer.controls().enable();
		setTimeout(function () {
			hide();
		}, 5000);
	});
});

const help = document.querySelector('#footer svg');
const tooltip = document.querySelector('#tooltip');

const helpPopper = createPopper(help, tooltip, {
	placement : 'top-start',
	modifiers : [
		{
			name    : 'offset',
			options : {
				offset : [
					0,
					15
				]
			}
		}
	]
});

function show () {
	tooltip.setAttribute('data-show', '');
	helpPopper.update();
}

function hide () {
	tooltip.removeAttribute('data-show');
}

switchScene(scenes[0]);
