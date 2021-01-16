/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"use strict";
const Marzipano = window.Marzipano;
const bowser = window.bowser;
const screenfull = window.screenfull;
const data = window.APP_DATA;

// Grab elements from DOM.
const panoElement = document.querySelector("#pano");
const sceneNameElement = document.querySelector("#titleBar .sceneName");
const sceneListElement = document.querySelector("#sceneList");
const sceneElements = document.querySelectorAll("#sceneList .scene");
const sceneListToggleElement = document.querySelector("#sceneListToggle");
const fullscreenToggleElement = document.querySelector("#fullscreenToggle");

// Detect desktop or mobile mode.
if (window.matchMedia) {
	const setMode = function () {
		if (mql.matches) {
			document.body.classList.remove("desktop");
			document.body.classList.add("mobile");
		} else {
			document.body.classList.remove("mobile");
			document.body.classList.add("desktop");
		}
	};
	const mql = matchMedia("(max-width: 500px), (max-height: 500px)");
	setMode();
	mql.addListener(setMode);
} else {
	document.body.classList.add("desktop");
}

// Detect whether we are on a touch device.
document.body.classList.add("no-touch");
window.addEventListener("touchstart", function () {
	document.body.classList.remove("no-touch");
	document.body.classList.add("touch");
});

// Use tooltip fallback mode on IE < 11.
if (bowser.msie && parseFloat(bowser.version) < 11) {
	document.body.classList.add("tooltip-fallback");
}

// Viewer options.
const viewerOpts = {
	controls: {
		mouseViewMode: data.settings.mouseViewMode,
	},
};

// Initialize viewer.
const viewer = new Marzipano.Viewer(panoElement, viewerOpts);

// Create scenes.
const scenes = data.scenes.map(function (data) {
	const urlPrefix = "tiles";
	const source = Marzipano.ImageUrlSource.fromString(
		urlPrefix + "/" + data.id + "/{z}/{f}/{y}/{x}.jpg",
		{ cubeMapPreviewUrl: urlPrefix + "/" + data.id + "/preview.jpg" }
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
	// data.linkHotspots.forEach(function(hotspot) {
	//   const element = createLinkHotspotElement(hotspot);
	//   scene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
	// });

	// Create info hotspots.
	data.infoHotspots.forEach(function (hotspot) {
		const element = createInfoHotspotElement(hotspot);
		scene
		.hotspotContainer()
		.createHotspot(
			element,
			{ yaw: hotspot.yaw, pitch: hotspot.pitch },
			{ perspective: { radius: 600, extraTransforms: "translateY(-10px)" } }
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
	document.body.classList.add("fullscreen-enabled");
	fullscreenToggleElement.addEventListener("click", function () {
		screenfull.toggle();
	});
	screenfull.on("change", function () {
		if (screenfull.isFullscreen) {
			fullscreenToggleElement.classList.add("enabled");
		} else {
			fullscreenToggleElement.classList.remove("enabled");
		}
	});
} else {
	document.body.classList.add("fullscreen-disabled");
}

// Set handler for scene list toggle.
sceneListToggleElement.addEventListener("click", toggleSceneList);
// Start with the scene list open on desktop.
// if (!document.body.classList.contains('mobile')) {
//   showSceneList();
// }

// Set handler for scene switch.
scenes.forEach(function (scene) {
	const el = document.querySelector('#sceneList .scene[data-id="' + scene.data.id + '"]');
	el.addEventListener("click", function () {
		switchScene(scene);
		// On mobile, hide scene list after selecting a scene.
		if (document.body.classList.contains("mobile")) {
			hideSceneList();
		}
	});
});


// DOM elements for view controls.
// const viewUpElement = document.querySelector('#viewUp');
// const viewDownElement = document.querySelector('#viewDown');
// const viewLeftElement = document.querySelector('#viewLeft');
// const viewRightElement = document.querySelector('#viewRight');
// const viewInElement = document.querySelector('#viewIn');
// const viewOutElement = document.querySelector('#viewOut');

// Dynamic parameters for controls.
// const velocity = 0.7;
// const friction = 3;

// // Associate view controls with elements.
// const controls = viewer.controls();
// controls.registerMethod('upElement',    new Marzipano.ElementPressControlMethod(viewUpElement,     'y', -velocity, friction), true);
// controls.registerMethod('downElement',  new Marzipano.ElementPressControlMethod(viewDownElement,   'y',  velocity, friction), true);
// controls.registerMethod('leftElement',  new Marzipano.ElementPressControlMethod(viewLeftElement,   'x', -velocity, friction), true);
// controls.registerMethod('rightElement', new Marzipano.ElementPressControlMethod(viewRightElement,  'x',  velocity, friction), true);
// controls.registerMethod('inElement',    new Marzipano.ElementPressControlMethod(viewInElement,  'zoom', -velocity, friction), true);
// controls.registerMethod('outElement',   new Marzipano.ElementPressControlMethod(viewOutElement, 'zoom',  velocity, friction), true);

function sanitize(s) {
	return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;");
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
		if (el.getAttribute("data-id") === scene.data.id) {
			el.classList.add("current");
		} else {
			el.classList.remove("current");
		}
	}
}

function hideSceneList() {
	sceneListElement.classList.remove("enabled");
	sceneListToggleElement.classList.remove("enabled");
}

function toggleSceneList() {
	sceneListElement.classList.toggle("enabled");
	sceneListToggleElement.classList.toggle("enabled");
}

// function createLinkHotspotElement(hotspot) {

//   // Create wrapper element to hold icon and tooltip.
//   const wrapper = document.createElement('div');
//   wrapper.classList.add('hotspot');
//   wrapper.classList.add('link-hotspot');

//   // Create image element.
//   const icon = document.createElement('img');
//   icon.src = 'img/link.png';
//   icon.classList.add('link-hotspot-icon');

//   // Set rotation transform.
//   const transformProperties = [ '-ms-transform', '-webkit-transform', 'transform' ];
//   for (const i = 0; i < transformProperties.length; i++) {
//     const property = transformProperties[i];
//     icon.style[property] = 'rotate(' + hotspot.rotation + 'rad)';
//   }

//   // Add click event handler.
//   wrapper.addEventListener('click', function() {
//     switchScene(findSceneById(hotspot.target));
//   });

//   // Prevent touch and scroll events from reaching the parent element.
//   // This prevents the view control logic from interfering with the hotspot.
//   stopTouchAndScrollEventPropagation(wrapper);

//   // Create tooltip element.
//   const tooltip = document.createElement('div');
//   tooltip.classList.add('hotspot-tooltip');
//   tooltip.classList.add('link-hotspot-tooltip');
//   tooltip.innerHTML = findSceneDataById(hotspot.target).name;

//   wrapper.appendChild(icon);
//   wrapper.appendChild(tooltip);

//   return wrapper;
// }

// data.scenes.forEach(sceneVal => {
// 	console.log(Object.values(sceneVal.infoHotspots.forEach(section => {
// 		console.log(section.title)
// 		console.log(section.images)
// 	})))
// })

function createInfoHotspotElement(hotspot) {
	// Create wrapper element to hold icon and tooltip.
	const wrapper = document.createElement("div");
	wrapper.classList.add("hotspot");
	wrapper.classList.add("info-hotspot");

	// Create hotspot/tooltip header.
	const header = document.createElement("div");
	header.classList.add("info-hotspot-header");

	// Create image element.
	const iconWrapper = document.createElement("div");
	iconWrapper.classList.add("info-hotspot-icon-wrapper");
	const icon = document.createElement("img");
	icon.src = "img/info.png";
	icon.classList.add("info-hotspot-icon");
	iconWrapper.appendChild(icon);

	// Create title element.
	const titleWrapper = document.createElement("div");
	titleWrapper.classList.add("info-hotspot-title-wrapper");
	const title = document.createElement("div");
	title.classList.add("info-hotspot-title");
	title.innerHTML = hotspot.title;
	titleWrapper.appendChild(title);

	// Create close element.
	const closeWrapper = document.createElement("div");
	closeWrapper.classList.add("info-hotspot-close-wrapper");
	const closeIcon = document.createElement("img");
	closeIcon.src = "img/close.png";
	closeIcon.classList.add("info-hotspot-close-icon");
	closeWrapper.appendChild(closeIcon);

	// Construct header element.
	header.appendChild(iconWrapper);
	header.appendChild(titleWrapper);
	header.appendChild(closeWrapper);

	// Create content element.
	const content = document.createElement("div");
	content.classList.add("info-hotspot-content");

	const modalLeft = document.createElement("div");
	modalLeft.classList.add("modal-col");
	modalLeft.classList.add("leftcol");

	const modalRight = document.createElement("div");
	modalLeft.classList.add("modal-col");
	modalRight.classList.add("rightcol");

	const textWrapper = document.createElement("div");
	textWrapper.classList.add("product-txt-wrapper");
	const subhead = document.createElement("h2");
	subhead.classList.add("product-txt-subhead");
	subhead.innerHTML = hotspot.subhead;
	const text = document.createElement("p");
	text.innerHTML = hotspot.text;
	text.classList.add("product-txt");

	textWrapper.appendChild(subhead);
	textWrapper.appendChild(text);

	modalLeft.appendChild(textWrapper);

	//Create product images element
	const carousel = document.createElement("div");
	carousel.classList.add("carousel");
	const carouselImages = document.createElement("div");
	carouselImages.classList.add("carousel-images");

	//Create Carousel Nav element
	const carouselNav = document.createElement("div");
	carouselNav.classList.add("carousel-nav");

	//CarouselNav Buttons
	const carouselNext = document.createElement("button");
	carouselNext.classList.add("carousel-button");
	carouselNext.classList.add("next");
	carouselNext.setAttribute("id", "next");
	const carouselPrev = document.createElement("button");
	carouselPrev.classList.add("carousel-button");
	carouselPrev.classList.add("previous");
	carouselPrev.setAttribute("id", "previous");

	for (let i = 0; i < hotspot.images.length; i++) {
		const productImage = document.createElement("img");
		productImage.src = hotspot.images[i];
		productImage.classList.add("product-image");
		carouselImages.appendChild(productImage);
	}

	carouselNav.appendChild(carouselNext);
	carousel.appendChild(carouselImages);
	carouselNav.appendChild(carouselPrev);
	carousel.appendChild(carouselNav);

	modalRight.appendChild(carousel);

	content.appendChild(modalLeft);
	content.appendChild(modalRight);

	// Place header and text into wrapper element.
	wrapper.appendChild(header);
	wrapper.appendChild(content);
	// Create a modal for the hotspot content to appear on mobile mode.
	const modal = document.createElement("div");
	modal.innerHTML = wrapper.innerHTML;
	modal.classList.add("info-hotspot-modal");
	document.body.appendChild(modal);
	const toggle = function () {
		modal.classList.toggle("visible");
	};
	// Show content when hotspot is clicked.
	wrapper.querySelector(".info-hotspot-header").addEventListener("click", toggle);
	// Hide content when close icon is clicked.
	modal.querySelector(".info-hotspot-close-wrapper").addEventListener("click", toggle);

	const carouselImgs = modal.querySelector(".carousel-images");
	const carouselButtons = modal.querySelectorAll(".carousel-nav .carousel-button");
	const numberOfImages = modal.querySelectorAll(".carousel-images img").length;
	console.log(numberOfImages)
	let imageIndex = 1;
	let translateX = 0;

	carouselButtons.forEach((button) => {
		button.addEventListener("click", (event) => {
			if (event.target.id === "next") {
				if (imageIndex !== 1) {
					imageIndex--;
					translateX += 500;
				}
			} else {
				if (imageIndex !== numberOfImages) {
					imageIndex++;
					translateX -= 500;
				}
			}

			carouselImgs.style.transform = `translateX(${translateX}px)`;
		});
	});

	// Prevent touch and scroll events from reaching the parent element.
	// This prevents the view control logic from interfering with the hotspot.
	// stopTouchAndScrollEventPropagation(wrapper);

	return wrapper;
}



function findSceneById(id) {
	for (const i = 0; i < scenes.length; i++) {
		if (scenes[i].data.id === id) {
			return scenes[i];
		}
	}
	return null;
}

function findSceneDataById(id) {
	for (const i = 0; i < data.scenes.length; i++) {
		if (data.scenes[i].id === id) {
			return data.scenes[i];
		}
	}
	return null;
}

// Display the initial scene.
switchScene(scenes[0]);
