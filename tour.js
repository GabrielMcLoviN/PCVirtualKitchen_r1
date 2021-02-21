import Shepherd from 'shepherd.js';
const infohotspot = document.querySelector('.info-hotspot-header .intro-starter');
const introModal = document.querySelector('.info-hotspot-modal.intro-starter');
const introLH = document.querySelector('.link-hotspot.second-tour-starter');

export const tour_infoHotspots = new Shepherd.Tour({
	confirmCancel: true,
	confirmCancelMessage: 'Are you sure you want to cancel the tour?',
	defaultStepOptions: {
		cancelIcon: {
			enabled: true,
			scrollTo: true,
			classes: '.intro-content',
		},
		scrollTo: { behavior: 'smooth', block: 'center' },
	},
});

tour_infoHotspots.addStep({
	showOn: document.body.classList.contains('tour-accepted'),
	text: `Throughout our virtual kitchen, you'll see icons just like this one. These are our product hotspots. Each hotspot is associated with the product closest to it.<br/><br/> Go ahead and click on this one here!👇`,
	attachTo: {
		element: '.intro-starter',
		on: 'top',
	},

	popperOptions: {
		modifiers: [
			{
				name: 'offset',
				options: {
					offset: [0, 25],
				},
			},
		],
	},
});

export const tour_modal = new Shepherd.Tour({
	useModalOverlay: true,
	confirmCancel: true,
	confirmCancelMessage: 'Are you sure you want to cancel the tour?',
	defaultStepOptions: {
		cancelIcon: {
			enabled: true,
			scrollTo: true,
			classes: '.intro-content',
		},
		scrollTo: { behavior: 'smooth', block: 'center' },
	},
});

tour_modal.addStep({
	modalOverlayOpeningPadding: 10,
	text: `On the left, you'll see all of the product information.`,
	attachTo: {
		element: '.intro-starter .product-txt-wrapper .product-txt',
		on: 'auto',
	},
	popperOptions: {
		modifiers: [
			{
				name: 'offset',
				options: {
					offset: [0, 25],
				},
			},
		],
	},
	buttons: [
		{
			text: 'Back',
			action: tour_modal.back,
			classes: 'shep-back',
		},
		{
			text: 'Next',
			action: tour_modal.next,
			classes: 'shep-next',
		},
	],
});

tour_modal.addStep({
	text: `On the bottom, you'll find downloadable PDF files for recipes and additional content.`,
	attachTo: {
		element: '.intro-starter .product-txt-wrapper .recipes',
		on: 'auto',
	},
	popperOptions: {
		modifiers: [
			{
				name: 'offset',
				options: {
					offset: [0, 25],
				},
			},
		],
	},
	buttons: [
		{
			text: 'Back',
			action: tour_modal.back,
			classes: 'shep-back',
		},
		{
			text: 'Next',
			action: tour_modal.next,
			classes: 'shep-next',
		},
	],
});

tour_modal.addStep({
	text: `On the right, you'll see the product gallery. In it, you'll find high-quality photos and videos of each product.`,
	attachTo: {
		element: '.intro-starter .carousel_container',
		on: 'auto-start',
	},
	popperOptions: {
		modifiers: [
			{
				name: 'offset',
				options: {
					offset: [0, 25],
				},
			},
			{
				name: 'arrow',
				options: {
					padding: 25, // 5px from the edges of the popper
				},
			},
		],
	},
	buttons: [
		{
			text: 'Back',
			action: tour_modal.back,
			classes: 'shep-back',
		},
		{
			text: 'Next',
			action: tour_modal.next,
			classes: 'shep-next',
		},
	],
});

tour_modal.addStep({
	text: `Navigate through the product gallery by clicking the buttons, swiping left or right, or scrolling up or down on your mouse-wheel.`,
	attachTo: {
		element: '.intro-starter .carousel_container',
		on: 'auto',
	},
	popperOptions: {
		modifiers: [
			{
				name: 'offset',
				options: {
					offset: [0, 25],
				},
			},
			{
				name: 'arrow',
				options: {
					padding: 25, // 5px from the edges of the popper
				},
			},
		],
	},
	buttons: [
		{
			text: 'Back',
			action: tour_modal.back,
			classes: 'shep-back',
		},
		{
			text: 'Next',
			action: tour_modal.next,
			classes: 'shep-next',
		},
	],
});

export var tour_linkHotspots = new Shepherd.Tour({
	confirmCancel: true,
	confirmCancelMessage: 'Are you sure you want to cancel the tour?',
	defaultStepOptions: {
		cancelIcon: {
			enabled: true,
			scrollTo: true,
		},
		scrollTo: { behavior: 'smooth', block: 'center' },
	},
});

const introHandIconOverlay = document.querySelector('.tour_movement-cta');

tour_linkHotspots.addStep({
	when: {
		complete: function () {
			introHandIconOverlay.style.opacity = 1;
			tour_movement.start();
			introLH.classList.remove('second-tour-starter');
		},
	},
	advanceOn: { element: '.link-hotspot.second-tour-starter', event: 'click' },
	text: `These arrow icons with a blue outline will take you to a different part of our virtual kitchen.<br/> <br/>Try clicking this one to view the pots & pans located on the stove top 👇`,
	attachTo: {
		element: '.second-tour-starter',
		on: 'top',
	},
	popperOptions: {
		modifiers: [
			{
				name: 'offset',
				options: {
					offset: [0, 25],
				},
			},
		],
	},
});

export const tour_movement = new Shepherd.Tour({
	confirmCancel: true,
	confirmCancelMessage: 'Are you sure you want to cancel the tour?',
	defaultStepOptions: {
		cancelIcon: {
			enabled: true,
			scrollTo: true,
		},
		scrollTo: { behavior: 'smooth', block: 'center' },
	},
});

tour_movement.addStep({
	when: {
		complete: function () {
			introHandIconOverlay.style.opacity = 0;
			introHandIconOverlay.style.display = 'none';
			tour_final.start();
		},
	},
	text: `Good moves! I think you got the hang of it!<br/><br/>Just one last note before we let you explore the kitchen (it's stunning isn't it?😍)<br/><br/>To move yourself around, just touch or click any part of the screen and drag it around. You have 360° of freedom here!`,
	attachTo: {
		element: '.tour_movement-cta img',
		on: 'auto',
	},
	buttons: [
		{
			text: 'Dismiss',
			action: tour_movement.next,
			classes: 'shep-next',
		},
	],
	popperOptions: {
		modifiers: [
			{
				name: 'offset',
				options: {
					offset: [0, 25],
				},
			},
		],
	},
});

export const tour_final = new Shepherd.Tour({
	defaultStepOptions: {
		cancelIcon: {
			enabled: true,
			scrollTo: true,
		},
		scrollTo: { behavior: 'smooth', block: 'center' },
	},
});

tour_final.addStep({
	text: `If you ever need help, you can click this icon here for help with navigating the kitchen.<br/><br/>Have a good time at your Pampered Chef (virtual) party! 🥳✨🥂`,
	attachTo: {
		element: '.help-menu svg',
		on: 'auto',
	},
	when: {
		complete: function () {
			document.body.classList.remove('tour-accepted');
		},
		cancel: function () {
			document.body.classList.remove('tour-accepted');
		},
		close: function () {
			document.body.classList.remove('tour-accepted');
		},
	},
	buttons: [
		{
			text: 'Dismiss',
			action: tour_final.next,
			classes: 'shep-next',
		},
	],
	popperOptions: {
		modifiers: [
			{
				name: 'offset',
				options: {
					offset: [0, 25],
				},
			},
		],
	},
});
