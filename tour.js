import Shepherd from 'shepherd.js';
export const tour_infoHotspots = new Shepherd.Tour();

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
});

tour_modal.addStep({
	arrow: false,
	showOn: document.body.classList.contains('tour-accepted'),
	modalOverlayOpeningPadding: 10,
	text: `This is where you'll see all of the product information.`,
	attachTo: {
		element: '.intro-starter .product-txt-wrapper',
		on: 'auto',
	},
	popperOptions: {
		modifiers: [
			{
				name: 'offset',
				options: {
					offset: [0, 80],
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


// tour_modal.addStep({
// 	arrow: false,
// 	showOn: document.body.classList.contains('tour-accepted'),
// 	text: `Below that, you'll find downloadable PDF files for recipes and additional content.`,
// 	attachTo: {
// 		element: '.intro-starter .product-txt-wrapper .recipes',
// 		on: 'top',
// 	},
// 	scrollTo: { behavior: 'smooth', block: 'start' },
// 	popperOptions: {
// 		modifiers: [
// 			{
// 				name: 'offset',
// 				options: {
// 					offset: [0, 25],
// 				},
// 			},
// 		],
// 	},
// 	buttons: [
// 		{
// 			text: 'Back',
// 			action: tour_modal.back,
// 			classes: 'shep-back',
// 		},
// 		{
// 			text: 'Next',
// 			action: tour_modal.next,
// 			classes: 'shep-next',
// 		},
// 	],
// });

tour_modal.addStep({
	arrow: false,
	showOn: document.body.classList.contains('tour-accepted'),
	text: `Here, you'll see the product gallery. In it, you'll find high-quality photos and videos of each product.`,
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

tour_modal.addStep({
	arrow: false,
	showOn: document.body.classList.contains('tour-accepted'),
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

export var tour_linkHotspots = new Shepherd.Tour();

tour_linkHotspots.addStep({
	showOn: document.body.classList.contains('tour-accepted'),
	text: `These arrow icons with a blue outline will take you to a different part of our virtual kitchen.<br/> <br/>Try clicking this one to view the pots & pans located on the stove top.`,
	attachTo: {
		element: '.second-tour-starter img',
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
	showOn: document.body.classList.contains('tour-accepted'),
	text: `Good moves! I think you got the hang of it!<br/><br/>Just one last note before we let you explore the kitchen (it's stunning isn't it?😍)<br/><br/>To move yourself around, just touch or click any part of the screen and drag it around. You have 360° of freedom here!<br/><br/><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" fill="#000" width="48px" height="48px"><g><rect fill="none" height="24" width="24" x="0"/></g><g><g><path d="M18.89,14.75l-4.09-2.04c-0.28-0.14-0.58-0.21-0.89-0.21H13v-6C13,5.67,12.33,5,11.5,5S10,5.67,10,6.5v10.74L6.75,16.5 c-0.33-0.07-0.68,0.03-0.92,0.28L5,17.62l4.54,4.79C9.92,22.79,10.68,23,11.21,23h6.16c1,0,1.84-0.73,1.98-1.72l0.63-4.46 C20.1,15.97,19.66,15.14,18.89,14.75z"/><path d="M20.13,3.87C18.69,2.17,15.6,1,12,1S5.31,2.17,3.87,3.87L2,2v5h5L4.93,4.93c1-1.29,3.7-2.43,7.07-2.43 s6.07,1.14,7.07,2.43L17,7h5V2L20.13,3.87z"/></g></g></svg>`,
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
	showOn: document.body.classList.contains('tour-accepted'),
	text: `If you ever need help, you can click this icon here for help with navigating the kitchen.<br/><br/>Have a good time at your Pampered Chef (virtual) party!<br/>🥳✨🥂`,
	attachTo: {
		element: '.help-menu-btn svg',
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
