// import { Marzipano } from 'marzipano';
// import bowser from 'bowser';
// import { screenfull } from 'screenfull';

const Marzipano = window.Marzipano;
const bowser = window.bowser;
const screenfull = window.screenfull;
const data = window.APP_DATA;

// Grab elements from DOM.
const panoElement = document.querySelector('#pano');
const sceneNameElement = document.querySelector('#titleBar .sceneName');
const sceneListElement = document.querySelector('#sceneList');
const sceneElements = document.querySelectorAll('#sceneList .scene');
const sceneListToggleElement = document.querySelector('#sceneListToggle');
const fullscreenToggleElement = document.querySelector('#fullscreenToggle');

// Detect desktop or mobile mode.
if (window.matchMedia) {
	const setMode = function () {
		if (mql.matches) {
			document.body.classList.remove('desktop');
			document.body.classList.add('mobile');
		} else {
			document.body.classList.remove('mobile');
			document.body.classList.add('desktop');
		}
	};
	const mql = matchMedia('(max-width: 700px), (max-height: 500px)');
	setMode();
	mql.addListener(setMode);
} else {
	document.body.classList.add('desktop');
}
// Detect whether we are on a touch device.
document.body.classList.add('no-touch');

window.addEventListener('touchstart', function (e) {
	document.body.classList.remove('no-touch');
	document.body.classList.add('touch');
});

// Use tooltip fallback mode on IE < 11.
if (bowser.msie && parseFloat(bowser.version) < 11) {
	document.body.classList.add('tooltip-fallback');
}

// Viewer options.
const viewerOpts = {
	controls: {
		mouseViewMode: data.settings.mouseViewMode,
		scrollZoom: true,
	},
};

// Initialize viewer.
const viewer = new Marzipano.Viewer(panoElement, viewerOpts);

// Create scenes.
const scenes = data.scenes.map(function (data) {
	const urlPrefix = 'tiles';
	const source = Marzipano.ImageUrlSource.fromString(
		urlPrefix + '/' + data.id + '/{z}/{f}/{y}/{x}.jpg',
		{ cubeMapPreviewUrl: urlPrefix + '/' + data.id + '/preview.jpg' }
	);
	const geometry = new Marzipano.CubeGeometry(data.levels);

	const limiter = Marzipano.RectilinearView.limit.traditional(
		data.faceSize,
		(100 * Math.PI) / 180,
		(120 * Math.PI) / 180
	);
	const view = new Marzipano.RectilinearView(data.initialViewParameters, limiter);

	const scene = viewer.createScene({
		source: source,
		geometry: geometry,
		view: view,
		pinFirstLevel: true,
	});

	// Create link hotspots.
	data.linkHotspots.forEach(function (hotspot) {
		const element = createLinkHotspotElement(hotspot);
		scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
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
		data: data,
		scene: scene,
		view: view,
	};
});

// Set up fullscreen mode, if supported.
if (screenfull.enabled && data.settings.fullscreenButton) {
	document.body.classList.add('fullscreen-enabled');
	fullscreenToggleElement.addEventListener('click', function () {
		screenfull.toggle();
	});
	screenfull.on('change', function () {
		if (screenfull.isFullscreen) {
			fullscreenToggleElement.classList.add('enabled');
		} else {
			fullscreenToggleElement.classList.remove('enabled');
		}
	});
} else {
	document.body.classList.add('fullscreen-disabled');
}

function sanitize(s) {
	return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;');
}

function switchScene(scene) {
	scene.view.setParameters(scene.data.initialViewParameters);
	scene.scene.switchTo();
	updateSceneName(scene);
	updateSceneList(scene);
}

function updateSceneName(scene) {
	sceneNameElement.innerHTML = sanitize(scene.data.name);
}

function updateSceneList(scene) {
	for (let i = 0; i < sceneElements.length; i++) {
		const el = sceneElements[i];
		if (el.getAttribute('data-id') === scene.data.id) {
			el.classList.add('current');
		} else {
			el.classList.remove('current');
		}
	}
}

function hideSceneList() {
	sceneListElement.classList.remove('enabled');
	sceneListToggleElement.classList.remove('enabled');
}

function toggleSceneList() {
	sceneListElement.classList.toggle('enabled');
	sceneListToggleElement.classList.toggle('enabled');
}

function createLinkHotspotElement(hotspot) {
	// Create wrapper element to hold icon and tooltip.
	const wrapper = document.createElement('div');
	wrapper.classList.add('hotspot');
	wrapper.classList.add('link-hotspot');

	// Create image element.
	const icon = document.createElement('img');
	icon.src = './SVG/arrow-up-circle-fill.svg';
	icon.classList.add('link-hotspot-icon');

	// Set rotation transform.
	const transformProperties = ['-ms-transform', '-webkit-transform', 'transform'];
	for (let i = 0; i < transformProperties.length; i++) {
		const property = transformProperties[i];
		icon.style[property] = 'rotate(' + hotspot.rotation + 'rad)';
	}

	// Add click event handler.
	wrapper.addEventListener('click', function () {
		switchScene(findSceneById(hotspot.target));
	});

	// Create tooltip element.
	const tooltip = document.createElement('div');
	tooltip.classList.add('hotspot-tooltip');
	tooltip.classList.add('link-hotspot-tooltip');
	tooltip.innerHTML = findSceneDataById(hotspot.target).name;

	wrapper.appendChild(icon);
	wrapper.appendChild(tooltip);

	return wrapper;
}

function createInfoHotspotElement(hotspot) {
	// Create wrapper element to hold icon and tooltip.
	const wrapper = document.createElement('div');
	wrapper.classList.add('hotspot');
	wrapper.classList.add('info-hotspot');

	// Create hotspot/tooltip header.
	const header = document.createElement('div');
	header.classList.add('info-hotspot-header');

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

	if (hotspot.recipes != undefined) {
		for (let i = 0; i < hotspot.recipes.length; i++) {
			const recipe_el = document.createElement('li');
			const recipe_link = document.createElement('a');
			recipe_link.classList.add('recipe-link');
			recipe_link.href = hotspot.recipes[i].link;
			recipe_link.setAttribute('target', '_blank');
			const recipe_preview_img_wrap = document.createElement('div');
			recipe_preview_img_wrap.classList.add('recipe-preview-img-wrap');
			recipe_preview_img_wrap.style.backgroundImage = `url(${hotspot.recipes[i].preview_image})`;
			const recipe_title = document.createElement('p');
			recipe_title.classList.add('recipe-title');
			recipe_title.innerHTML = hotspot.recipes[i].id;
			recipe_title.href = hotspot.recipes[i].link;
			recipe_title.setAttribute('target', '_blank');
			recipe_link.appendChild(recipe_preview_img_wrap);
			recipe_link.appendChild(recipe_title);
			recipe_el.appendChild(recipe_link);
			recipesList.appendChild(recipe_el);
		}
	} else if (hotspot.related_content != undefined) {
		for (let i = 0; i < hotspot.related_content.length; i++) {
			const recipe_el = document.createElement('li');
			const recipe_link = document.createElement('a');
			recipe_link.classList.add('recipe-link');
			recipe_link.href = hotspot.related_content[i].link;
			recipe_link.setAttribute('target', '_blank');
			const recipe_preview_img_wrap = document.createElement('div');
			recipe_preview_img_wrap.classList.add('recipe-preview-img-wrap');
			recipe_preview_img_wrap.classList.add('__related-content');
			recipe_preview_img_wrap.style.backgroundImage = `url(${hotspot.related_content[i].preview_image})`;
			const recipe_title = document.createElement('p');
			recipe_title.classList.add('recipe-title');
			recipe_title.classList.add('__related_');
			recipe_title.innerHTML = hotspot.related_content[i].id;
			recipe_title.href = hotspot.related_content[i].link;
			recipe_title.setAttribute('target', '_blank');
			recipe_link.appendChild(recipe_preview_img_wrap);
			recipe_link.appendChild(recipe_title);
			recipe_el.appendChild(recipe_link);
			recipesList.appendChild(recipe_el);
		}
		recipesHeader.textContent = 'Related Content:';
	} else if (hotspot.pdf_links != undefined) {
		for (let i = 0; i < hotspot.pdf_links.length; i++) {
			const recipe_el = document.createElement('li');
			const recipe_link = document.createElement('a');
			recipe_link.classList.add('recipe-link');
			recipe_link.href = hotspot.pdf_links[i].link;
			recipe_link.setAttribute('target', '_blank');
			const recipe_preview_img_wrap = document.createElement('div');
			recipe_link.appendChild(recipe_preview_img_wrap);
			recipe_preview_img_wrap.classList.add('recipe-preview-img-wrap');
			recipe_preview_img_wrap.style.backgroundImage = `url(${hotspot.pdf_links[i].preview_image})`;
			const recipe_title = document.createElement('p');
			recipe_title.classList.add('recipe-title');
			recipe_title.innerHTML = hotspot.pdf_links[i].id;
			recipe_title.href = hotspot.pdf_links[i].link;
			recipe_title.setAttribute('target', '_blank');
			recipe_link.appendChild(recipe_title);
			recipe_el.appendChild(recipe_link);
			recipesList.appendChild(recipe_el);
		}
		recipesHeader.textContent = 'Downloads';
	} else {
		recipesHeader.textContent = '';
	}

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
			influencer_credit_container.classList.add('influencer_credit_container');
			const credit_pointer = document.createElement('div');
			credit_pointer.classList.add('pointer');
			influencer_credit_container.appendChild(credit_pointer);
			const influencer_credit = document.createElement('span');
			influencer_credit.classList.add('influencer_credit');
			influencer_credit.innerHTML = '📷: ' + hotspot.images[i][0];
			influencer_credit_container.appendChild(influencer_credit);
			productImage.appendChild(influencer_credit_container);
		} else {
			productImage.style.backgroundImage = `url(${hotspot.images[i]})`;
		}
		productImage.classList.add('product-image');
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
	if (hotspot.videos != undefined) {
		for (let i = 0; i < hotspot.videos.length; i++) {
			const carousel_bullet = document.createElement('li');
			carousel_bullet.classList.add('carousel-bullet');
			const iframe_container = document.createElement('div');
			iframe_container.classList.add('iframe_container__video');
			iframe_container.innerHTML = hotspot.videos[i];

			carousel_pagination.appendChild(carousel_bullet);
			carouselImages.appendChild(iframe_container);
		}
	}

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

	document.body.appendChild(modal);

	// reset modal content logic
	const pause_video = function () {
		//if there is an iframe inside maybe embedded multimedia video/audio, we should reload so it stops playing
		let iframes = modal.getElementsByTagName('iframe');
		if (iframes != null) {
			for (let i = 0; i < iframes.length; i++) {
				iframes[i].src = iframes[i].src;
			}
		}
	};

	const reset_modal = function () {
		setTimeout(function () {
			if (modal.querySelector('.product-txt-container')) {
				modal.querySelector('.product-txt-container').scrollTo(0, 0);
				slideTo(0);
			}
		}, 1000);
		pause_video();
	};

	//
	const toggle = function () {
		modal.classList.toggle('visible');
	};

	wrapper.querySelector('.info-hotspot-header').addEventListener('click', toggle);
	modal.querySelector('.info-hotspot-close-wrapper').addEventListener('click', toggle);

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

	// const video_parent = modal.querySelectorAll(".video-wrapper");
	const nextBtn = modal.querySelector('#next');
	const prevBtn = modal.querySelector('#previous');

	// video_parent.forEach((video) => {
	// 	let pairs = [];
	// 	const playbtn = video.querySelector(".playbtn_wrap");
	// 	const video_tag = video.querySelector(".product-video");
	// 	pairs.push([playbtn, video_tag]);
	// 	pairs.forEach((pair) => {
	// 		pair[0].addEventListener("click", function () {
	// 			if (pair[1].paused) {
	// 				pair[1].play();
	// 				pair[0].style.backgroundImage = "url(./SVG/pause.svg)";
	// 			} else {
	// 				pair[1].pause();
	// 				pair[0].style.backgroundImage = "url(./SVG/playbtn.svg)";
	// 			}
	// 			pair[1].addEventListener("mouseover", function () {
	// 				pair[0].style.opacity = 1;
	// 			});
	// 			pair[0].addEventListener("mouseover", function () {
	// 				pair[0].style.opacity = 1;
	// 			});
	// 			pair[1].addEventListener("mouseleave", function () {
	// 				if (!pair[1].paused) {
	// 					pair[0].style.opacity = 0;
	// 				} else {
	// 					pair[0].style.opacity = 1;
	// 				}
	// 			});
	// 		});
	// 	});
	// });

	const carouselImgs = modal.querySelector('.carousel-images');
	const numberOfImages = modal.querySelectorAll('.carousel-images > *').length;
	const pagination = modal.querySelector('.carousel-pagination');
	const bullets = [].slice.call(modal.querySelectorAll('.carousel-bullet'));

	let currentIndex = 0;
	let percentage = 100;

	let touchstartX = 0;
	let touchendX = 0;

	function handleGesture() {
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

	carouselImgs.addEventListener(
		'wheel',
		(e) => {
			let wheel_direction = e.deltaY * 1;
			if (Math.sign(wheel_direction) === -1) {
				if (currentIndex !== 0) prevBtn.click();
			} else {
				if (currentIndex !== numberOfImages - 1) nextBtn.click();
			}
		},
		{ passive: true }
	);

	function next() {
		slideTo(currentIndex + 1);
	}

	function prev() {
		slideTo(currentIndex - 1);
	}

	function slideTo(index) {
		index = index < 0 ? numberOfImages - 1 : index >= numberOfImages ? 0 : index;
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

	function removeAllChildNodes(parent) {
		while (parent.firstChild) {
			parent.removeChild(parent.firstChild);
		}
	}

	return wrapper;
}

function findSceneById(id) {
	for (let i = 0; i < scenes.length; i++) {
		if (scenes[i].data.id === id) {
			return scenes[i];
		}
	}
	return null;
}

function findSceneDataById(id) {
	for (let i = 0; i < data.scenes.length; i++) {
		if (data.scenes[i].id === id) {
			return data.scenes[i];
		}
	}
	return null;
}

// Display the initial scene.
switchScene(scenes[0]);

const preloader = document.querySelector('.preloader');
const titleBar = document.querySelector('#titleBar');

window.addEventListener('load', function () {
	panoElement.style.opacity = 1;
	titleBar.style.opacity = 1;
	preloader.style.display = 'none';
});
