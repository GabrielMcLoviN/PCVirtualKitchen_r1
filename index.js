

import Bowser from 'bowser';
import Marzipano from '/vendor/marzipano.js';
import { data } from '/data.js';
import { createPopper } from '@popperjs/core';
import screenfull from 'screenfull';
import Shepherd from 'shepherd.js';

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

introClose.addEventListener('click', function () {
	intro.classList.remove('visible');
});

controls_close.addEventListener('click', function () {
	controls.classList.remove('visible');
	intro.style.opacity = 1;
	intro.classList.add('visible');
});

document.addEventListener('DOMContentLoaded', function () {
	help_menu.style.opacity = 1;
	help_menu_btn.style.opacity = 1;
	panoElement.style.opacity = 1;
	titleBar.style.opacity = 1;
	preloader.style.display = 'none';
	controls.classList.add('visible');
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

// Grab elements from DOM.
const panoElement = document.querySelector('#pano');
const sceneNameElement = document.querySelector('#titleBar .sceneName');
const sceneElements = document.querySelectorAll('#sceneList .scene');
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

window.addEventListener('touchstart', function (e) {
	document.body.classList.remove('no-touch');
	document.body.classList.add('touch');
});

const viewerOpts = {
	controls : {
		mouseViewMode : data.settings.mouseViewMode,
		scrollZoom    : false
	}
};

// Initialize viewer.
var viewer = new Marzipano.Viewer(panoElement, viewerOpts);

// Create scenes.
var scenes = data.scenes.map(function (data) {
	var urlPrefix = 'tiles';
	var source = Marzipano.ImageUrlSource.fromString(
		urlPrefix + '/' + data.id + '/{z}/{f}/{y}/{x}.jpg',
		{ cubeMapPreviewUrl: urlPrefix + '/' + data.id + '/preview.jpg' }
	);

	var geometry = new Marzipano.CubeGeometry(data.levels);

	var limiter = Marzipano.RectilinearView.limit.traditional(
		data.faceSize,
		100 * Math.PI / 180,
		100 * Math.PI / 180
	);

	var view = new Marzipano.RectilinearView(
		data.initialViewParameters,
		limiter
	);

	var scene = viewer.createScene({
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
		intro.classList.remove('visible');
		infohotspot.classList.remove('intro-starter');
		introModal.classList.remove('intro-starter');
		introLH.classList.remove('second-tour-starter');
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
		'https://pc-virtualparty.netlify.app'
	);
	fullscreenToggleElement.setAttribute('target', '_blank');
}

function sanitize (s) {
	return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;');
}

function switchScene (scene) {
	scene.view.setParameters(scene.data.initialViewParameters);
	scene.scene.switchTo();
	updateSceneName(scene);
	updateSceneList(scene);
}

function updateSceneName (scene) {
	sceneNameElement.innerHTML = sanitize(scene.data.name);
}

function updateSceneList (scene) {
	for (let i = 0; i < sceneElements.length; i++) {
		const el = sceneElements[i];
		if (el.getAttribute('data-id') === scene.data.id) {
			el.classList.add('current');
		}
		else {
			el.classList.remove('current');
		}
	}
}

function createLinkHotspotElement (hotspot) {
	const wrapper = document.createElement('div');
	wrapper.classList.add('hotspot');
	wrapper.classList.add('link-hotspot');
	hotspot.class ? wrapper.classList.add(hotspot.class) : '';

	const icon = document.createElement('img');
	icon.src = './SVG/arrow-up-circle-fill.svg';
	icon.classList.add('link-hotspot-icon');

	// Set rotation transform.
	const transformProperties = [
		'-ms-transform',
		'-webkit-transform',
		'transform'
	];
	for (let i = 0; i < transformProperties.length; i++) {
		const property = transformProperties[i];
		icon.style[property] = 'rotate(' + hotspot.rotation + 'rad)';
	}

	wrapper.addEventListener('click', function () {
		switchScene(findSceneById(hotspot.target));
	});

	const tooltip = document.createElement('div');
	tooltip.classList.add('hotspot-tooltip');
	tooltip.classList.add('link-hotspot-tooltip');
	tooltip.innerHTML = findSceneDataById(hotspot.target).name;
	tooltip.setAttribute('role', 'tooltip');
	tooltip.setAttribute('id', 'tooltip-LH');

	const LH_popper = createPopper(wrapper, tooltip, {
		placement : 'top',
		modifiers : [
			{
				name    : 'offset',
				options : {
					offset : [
						0,
						5
					]
				}
			}
		]
	});

	function show () {
		tooltip.setAttribute('data-show', '');
		LH_popper.update();
	}

	function hide () {
		tooltip.removeAttribute('data-show');
	}

	const showEvents = [
		'mouseenter',
		'focus'
	];
	const hideEvents = [
		'mouseleave',
		'blur'
	];

	showEvents.forEach((event) => {
		wrapper.addEventListener(event, show);
	});

	hideEvents.forEach((event) => {
		wrapper.addEventListener(event, hide);
	});

	wrapper.appendChild(icon);
	wrapper.appendChild(tooltip);

	return wrapper;
}

function createInfoHotspotElement (hotspot) {
	// Create wrapper element to hold icon and tooltip.
	const wrapper = document.createElement('div');
	wrapper.classList.add('hotspot');
	wrapper.classList.add('info-hotspot');

	// Create hotspot/tooltip header.
	const header = document.createElement('div');
	header.classList.add('info-hotspot-header');
	hotspot.class ? header.classList.add(hotspot.class) : '';

	// Create image element.
	const iconWrapper = document.createElement('div');
	iconWrapper.classList.add('info-hotspot-icon-wrapper');
	const icon = document.createElement('img');
	icon.src = './assets/PC-Seal_Solid-white-95black_Registered.png';
	icon.classList.add('info-hotspot-icon');
	iconWrapper.appendChild(icon);

	// Create title element.
	const titleWrapper = document.createElement('div');
	titleWrapper.classList.add('info-hotspot-title-wrapper');
	const title = document.createElement('div');
	title.classList.add('info-hotspot-title');
	title.innerHTML = hotspot.title;
	titleWrapper.appendChild(title);

	// Create close element.
	const closeWrapper = document.createElement('div');
	closeWrapper.classList.add('info-hotspot-close-wrapper');
	const closeIcon = document.createElement('img');
	closeIcon.src = './SVG/close-line.svg';
	closeIcon.classList.add('info-hotspot-close-icon');
	closeWrapper.appendChild(closeIcon);

	// Construct header element.
	header.appendChild(iconWrapper);
	header.appendChild(titleWrapper);
	header.appendChild(closeWrapper);

	// Create content element.
	const content = document.createElement('div');
	content.classList.add('info-hotspot-content');

	//text element
	const textContent = document.createElement('div');
	textContent.classList.add('product-txt-container');
	const textWrapper = document.createElement('div');
	textWrapper.classList.add('product-txt-wrapper');
	const subhead = document.createElement('h2');
	subhead.classList.add('product-txt-subhead');
	subhead.innerHTML = hotspot.subhead;
	const text = document.createElement('div');
	text.innerHTML = hotspot.text;
	text.classList.add('product-txt');
	const recipes = document.createElement('div');
	recipes.classList.add('recipes');
	const recipesHeader = document.createElement('h2');
	recipesHeader.classList.add('recipes-header');
	recipesHeader.textContent = 'Recipes to Try:';
	recipes.appendChild(recipesHeader);
	const recipesList = document.createElement('div');
	recipesList.classList.add('recipes-list');

	hotspot.recipes &&
		hotspot.recipes.map((recipe, i) => {
			const recipe_el = document.createElement('li');
			const recipe_link = document.createElement('a');
			recipe_link.classList.add('recipe-link');
			recipe_link.href = hotspot.recipes[i].link;
			recipe_link.setAttribute('target', '_blank');
			const recipe_preview_img_wrap = document.createElement('div');
			recipe_preview_img_wrap.classList.add('recipe-preview-img-wrap');
			recipe_preview_img_wrap.classList.add('.lazy');
			recipe_preview_img_wrap.style.backgroundImage = `url(${hotspot
				.recipes[i].preview_image})`;
			const recipe_title = document.createElement('p');
			recipe_title.classList.add('recipe-title');
			recipe_title.innerHTML = hotspot.recipes[i].id;
			recipe_title.href = hotspot.recipes[i].link;
			recipe_title.setAttribute('target', '_blank');
			recipe_link.appendChild(recipe_preview_img_wrap);
			recipe_link.appendChild(recipe_title);
			recipe_el.appendChild(recipe_link);
			recipesList.appendChild(recipe_el);
		});

	hotspot.related_content &&
		hotspot.related_content.map((content, i) => {
			const recipe_el = document.createElement('li');
			const recipe_link = document.createElement('a');
			recipe_link.classList.add('recipe-link');
			recipe_link.href = hotspot.related_content[i].link;
			recipe_link.setAttribute('target', '_blank');
			const recipe_preview_img_wrap = document.createElement('div');
			recipe_preview_img_wrap.classList.add('recipe-preview-img-wrap');
			recipe_preview_img_wrap.style.backgroundImage = `url(${hotspot
				.related_content[i].preview_image})`;
			const recipe_title = document.createElement('p');
			recipe_title.classList.add('recipe-title');
			recipe_title.innerHTML = hotspot.related_content[i].id;
			recipe_title.href = hotspot.related_content[i].link;
			recipe_title.setAttribute('target', '_blank');
			recipe_link.appendChild(recipe_preview_img_wrap);
			recipe_link.appendChild(recipe_title);
			recipe_el.appendChild(recipe_link);
			recipesList.appendChild(recipe_el);
			recipesHeader.textContent = 'Related Content:';
		});

	hotspot.pdf_links &&
		hotspot.pdf_links.map((pdf, i) => {
			const recipe_el = document.createElement('li');
			const recipe_link = document.createElement('a');
			recipe_link.classList.add('recipe-link');
			recipe_link.href = hotspot.pdf_links[i].link;
			recipe_link.setAttribute('target', '_blank');
			const recipe_preview_img_wrap = document.createElement('div');
			recipe_link.appendChild(recipe_preview_img_wrap);
			recipe_preview_img_wrap.classList.add('recipe-preview-img-wrap');
			recipe_preview_img_wrap.style.backgroundImage = `url(${hotspot
				.pdf_links[i].preview_image})`;
			const recipe_title = document.createElement('p');
			recipe_title.classList.add('recipe-title');
			recipe_title.innerHTML = hotspot.pdf_links[i].id;
			recipe_title.href = hotspot.pdf_links[i].link;
			recipe_title.setAttribute('target', '_blank');
			recipe_link.appendChild(recipe_title);
			recipe_el.appendChild(recipe_link);
			recipesList.appendChild(recipe_el);
			recipesHeader.textContent = 'Downloads';
		});

	recipesHeader.textContent = '';

	recipes.appendChild(recipesList);

	textWrapper.appendChild(subhead);
	textWrapper.appendChild(text);
	textWrapper.appendChild(recipes);

	textContent.appendChild(textWrapper);

	//carousel
	const carousel_container = document.createElement('div');
	carousel_container.classList.add('carousel_container');
	const carousel = document.createElement('div');
	carousel.classList.add('carousel');
	const carouselImages = document.createElement('div');
	carouselImages.classList.add('carousel-images');

	const carouselNav = document.createElement('div');
	carouselNav.classList.add('carousel-nav');
	const carouselNext = document.createElement('img');
	carouselNext.src = './SVG/chevron-right.svg';
	carouselNext.classList.add('carousel-button');
	carouselNext.classList.add('next');
	carouselNext.setAttribute('id', 'next');
	const carouselPrev = document.createElement('img');
	carouselPrev.src = './SVG/chevron-left.svg';
	carouselPrev.classList.add('carousel-button');
	carouselPrev.classList.add('previous');
	carouselPrev.setAttribute('id', 'previous');
	const carousel_pagination = document.createElement('ul');
	carousel_pagination.classList.add('carousel-pagination');

	for (let i = 0; i < hotspot.images.length; i++) {
		const carousel_bullet = document.createElement('li');
		carousel_bullet.classList.add('carousel-bullet');
		const productImage = document.createElement('div');

		if (hotspot.images[i].length === 2) {
			productImage.style.backgroundImage = `url(${hotspot.images[i][1]})`;
			const influencer_credit_container = document.createElement('div');
			influencer_credit_container.classList.add(
				'influencer_credit_container'
			);
			const credit_pointer = document.createElement('div');
			credit_pointer.classList.add('pointer');
			influencer_credit_container.appendChild(credit_pointer);
			const influencer_credit = document.createElement('span');
			influencer_credit.classList.add('influencer_credit');
			influencer_credit.innerHTML = '📷: ' + hotspot.images[i][0];
			influencer_credit_container.appendChild(influencer_credit);
			productImage.appendChild(influencer_credit_container);
		}
		else {
			productImage.style.backgroundImage = `url(${hotspot.images[i]})`;
		}

		productImage.classList.add('lazy');
		productImage.setAttribute('id', 'product-image');

		if (hotspot.containImages) {
			productImage.style.backgroundSize = 'contain';
			productImage.style.width = '80%';
			productImage.style.height = '80%';
			productImage.style.alignSelf = 'center';
		}

		carouselImages.appendChild(productImage);
		carousel_pagination.appendChild(carousel_bullet);
		carousel_container.appendChild(carousel_pagination);
	}

	hotspot.videos &&
		hotspot.videos.map((video, i) => {
			const sliderTop = document.createElement('div');
			sliderTop.classList.add('slider-top');
			const sliderBot = document.createElement('div');
			sliderBot.classList.add('slider-bot');
			const carousel_bullet = document.createElement('li');
			carousel_bullet.classList.add('carousel-bullet');
			const iframe_container = document.createElement('div');
			iframe_container.classList.add('iframe_container__video');
			iframe_container.innerHTML = hotspot.videos[i];
			iframe_container.append(sliderTop, sliderBot);

			carousel_pagination.appendChild(carousel_bullet);
			carouselImages.appendChild(iframe_container);
		});

	carouselNav.appendChild(carouselNext);
	carousel.appendChild(carouselImages);
	carouselNav.appendChild(carouselPrev);
	carousel_container.appendChild(carouselNav);

	carousel_container.appendChild(carousel);

	content.appendChild(textContent);
	content.appendChild(carousel_container);

	wrapper.appendChild(header);
	wrapper.appendChild(content);

	const modal = document.createElement('div');
	modal.innerHTML = wrapper.innerHTML;
	modal.classList.add('info-hotspot-modal');
	hotspot.class ? modal.classList.add(hotspot.class) : '';

	document.body.appendChild(modal);

	// reset modal content + pause video on close logic
	const pause_video = function () {
		let iframes = modal.getElementsByTagName('iframe');
		if (iframes != null) {
			for (let i = 0; i < iframes.length; i++) {
				iframes[i].src = iframes[i].src;
			}
		}
	};

	const reset_modal = function () {
		if (modal.classList.contains('visible')) {
			modal.querySelector('.product-txt-container').scrollTo(0, 0);
			slideTo(0);
		}
		pause_video();
	};

	tour_modal.on('complete', function () {
		reset_modal();
	});

	const toggle = function () {
		modal.classList.toggle('visible');
		reset_modal();
	};

	wrapper
		.querySelector('.info-hotspot-header')
		.addEventListener('click', toggle);

	modal
		.querySelector('.info-hotspot-close-wrapper')
		.addEventListener('click', toggle);

	modal.addEventListener('mouseover', function (e) {
		if (e.target === modal && modal.classList.contains('visible')) {
			modal.addEventListener('click', function (e) {
				if (e.target === modal && modal.classList.contains('visible')) {
					modal.classList.remove('visible');
					reset_modal();
				}
			});
		}
	});

	const nextBtn = modal.querySelector('#next');
	const prevBtn = modal.querySelector('#previous');

	const carouselImgs = modal.querySelector('.carousel-images');
	const numberOfImages = modal.querySelectorAll('.carousel-images > *')
		.length;
	const pagination = modal.querySelector('.carousel-pagination');
	const bullets = [].slice.call(modal.querySelectorAll('.carousel-bullet'));

	let currentIndex = 0;
	let percentage = 100;

	let touchstartX = 0;
	let touchendX = 0;

	function handleGesture () {
		if (touchendX < touchstartX && currentIndex !== numberOfImages - 1) {
			nextBtn.click();
		}
		if (touchendX > touchstartX && currentIndex !== 0) {
			prevBtn.click();
		}
	}

	document.body.addEventListener(
		'keydown',
		(evt) => {
			if (evt.key === 'Escape') {
				modal.classList.remove('visible');
			}
			reset_modal();
		},
		{ passive: true }
	);

	carouselImgs.addEventListener('touchstart', (e) => {
		touchstartX = e.changedTouches[0].pageX;
	});

	carouselImgs.addEventListener('touchend', (e) => {
		touchendX = e.changedTouches[0].pageX;
		handleGesture();
	});

	carouselImgs.addEventListener('mousedown', (e) => {
		touchstartX = e.pageX;
	});

	carouselImgs.addEventListener('mouseup', (e) => {
		touchendX = e.pageX;
		handleGesture();
	});

	carouselImgs.addEventListener(
		'wheel',
		(e) => {
			let wheel_direction = e.deltaY * 1;
			if (Math.sign(wheel_direction) === -1) {
				if (currentIndex !== 0) prevBtn.click();
			}
			else {
				if (currentIndex !== numberOfImages - 1) nextBtn.click();
			}
		},
		{ passive: true }
	);

	function next () {
		slideTo(currentIndex + 1);
	}

	function prev () {
		slideTo(currentIndex - 1);
	}

	function slideTo (index) {
		index =
			index < 0
				? numberOfImages - 1
				: index >= numberOfImages ? 0 : index;
		carouselImgs.style.WebkitTransform = carouselImgs.style.transform =
			'translate(-' + index * percentage + '%, 0)';
		bullets[currentIndex].classList.remove('active-bullet');
		bullets[index].classList.add('active-bullet');
		currentIndex = index;
		pause_video();
	}

	bullets[currentIndex].classList.add('active-bullet');
	prevBtn.addEventListener('click', prev, false);
	nextBtn.addEventListener('click', next, false);

	pagination.addEventListener(
		'click',
		function (e) {
			let index = bullets.indexOf(e.target);
			if (index !== -1 && index !== currentIndex) {
				slideTo(index);
			}
		},
		false
	);

	if (hotspot.fullWidth) {
		let modal_content = modal.querySelector('div.info-hotspot-content');
		modal_content.classList.add('fullwidth_modal');
		removeAllChildNodes(modal_content);
		const iframe_container = document.createElement('div');
		iframe_container.classList.add('iframe_container');
		iframe_container.innerHTML = hotspot.text;
		modal_content.appendChild(iframe_container);
	}

	function removeAllChildNodes (parent) {
		while (parent.firstChild) {
			parent.removeChild(parent.firstChild);
		}
	}

	return wrapper;
}

function findSceneById (id) {
	for (let i = 0; i < scenes.length; i++) {
		if (scenes[i].data.id === id) {
			return scenes[i];
		}
	}
	return null;
}

function findSceneDataById (id) {
	for (let i = 0; i < data.scenes.length; i++) {
		if (data.scenes[i].id === id) {
			return data.scenes[i];
		}
	}
	return null;
}

// Display the initial scene.
switchScene(scenes[0]);
