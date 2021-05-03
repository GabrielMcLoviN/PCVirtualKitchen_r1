import { pause_video } from './helpers.js';

export function createInfoHotspotElement (hotspot) {
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
	icon.setAttribute('width', '40px')
	icon.setAttribute('height', '40px')
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
		hotspot.recipes.map((_recipe, i) => {
			const recipe_el = document.createElement('li');
			const recipe_link = document.createElement('a');
			recipe_link.classList.add('recipe-link');
			recipe_link.href = hotspot.recipes[i].link;
			recipe_link.setAttribute('target', '_blank');
			recipe_link.setAttribute('rel', 'noreferrer');
			const recipe_preview_img_wrap = document.createElement('img');
			recipe_preview_img_wrap.src = hotspot.recipes[i].preview_image;
			recipe_preview_img_wrap.classList.add('recipe-preview-img-wrap');
			recipe_preview_img_wrap.setAttribute('loading', 'lazy');
			recipe_preview_img_wrap.style.display = 'block';
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
		hotspot.related_content.map((_content, i) => {
			const recipe_el = document.createElement('li');
			const recipe_link = document.createElement('a');
			recipe_link.classList.add('recipe-link');
			recipe_link.href = hotspot.related_content[i].link;
			recipe_link.setAttribute('target', '_blank');
			recipe_link.setAttribute('rel', 'noreferrer');
			const recipe_preview_img_wrap = document.createElement('img');
			recipe_preview_img_wrap.classList.add('recipe-preview-img-wrap');
			recipe_preview_img_wrap.src =
				hotspot.related_content[i].preview_image;
			recipe_preview_img_wrap.classList.add('recipe-preview-img-wrap');
			recipe_preview_img_wrap.setAttribute('loading', 'lazy');

			recipe_preview_img_wrap.style.display = 'block';
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
		hotspot.pdf_links.map((_pdf, i) => {
			const recipe_el = document.createElement('li');
			const recipe_link = document.createElement('a');
			recipe_link.classList.add('recipe-link');
			recipe_link.href = hotspot.pdf_links[i].link;
			recipe_link.setAttribute('rel', 'noreferrer');
			recipe_link.setAttribute('target', '_blank');
			const recipe_preview_img_wrap = document.createElement('img');
			recipe_link.appendChild(recipe_preview_img_wrap);
			// recipe_preview_img_wrap.classList.add('recipe-preview-img-wrap');
			// recipe_preview_img_wrap.style.backgroundImage = `url(${hotspot
			// 	.pdf_links[i].preview_image})`;
			recipe_preview_img_wrap.classList.add('recipe-preview-img-wrap');
			recipe_preview_img_wrap.src = hotspot.pdf_links[i].preview_image;
			recipe_preview_img_wrap.classList.add('recipe-preview-img-wrap');
			recipe_preview_img_wrap.setAttribute('loading', 'lazy');
			recipe_preview_img_wrap.style.display = 'block';
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
		const productImageSrc = document.createElement('img');
		productImageSrc.setAttribute('width', '800px');
		productImageSrc.setAttribute('height', '800px');
		productImage.setAttribute('id', 'product-image');

		if (hotspot.images[i].length === 2) {
			productImageSrc.src = hotspot.images[i][1];
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
			productImageSrc.src = hotspot.images[i];
		}

		productImageSrc.setAttribute('loading', 'lazy');

		productImage.appendChild(productImageSrc);

		if (hotspot.containImages) {
			productImageSrc.classList.add('contain')
		}

		carouselImages.appendChild(productImage);
		carousel_pagination.appendChild(carousel_bullet);
		carousel_container.appendChild(carousel_pagination);
	}

	hotspot.videos &&
		hotspot.videos.map((_video, i) => {
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

	if (modal.classList.contains('intro-starter')) {
		document.body.appendChild(modal);
	}

	function reset_modal () {
		setTimeout(() => {
			document.querySelector('.product-txt-container').scrollTo(0, 0);
			slideTo(0);
		}, 500);
		pause_video();
	}

	const openModal = function () {
		reset_modal();
		document.body.appendChild(modal);
		setTimeout(() => {
			modal.classList.add('visible');
		}, 100);
	};

	const closeModal = function () {
		modal.classList.remove('visible');
		reset_modal();
		setTimeout(() => {
			modal.remove();
		}, 500);
	};

	wrapper
		.querySelector('.info-hotspot-header')
		.addEventListener('click', openModal);

	modal
		.querySelector('.info-hotspot-close-wrapper')
		.addEventListener('click', closeModal);

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

	document.body.addEventListener('keydown', (evt) => {
		if (evt.key === 'Escape') {
			closeModal();
		}
	});

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
