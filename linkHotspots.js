import { createPopper } from '@popperjs/core';
import { switchScene, findSceneById, findSceneDataById } from './helpers.js';

export function createLinkHotspotElement (hotspot) {
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
						-3,
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
