import { data } from './data.js';
import { scenes } from './loadScenes.js';

export function findSceneById (id) {
	for (let i = 0; i < scenes.length; i++) {
		if (scenes[i].data.id === id) {
			return scenes[i];
		}
	}
	return null;
}

export function findSceneDataById (id) {
	for (let i = 0; i < data.scenes.length; i++) {
		if (data.scenes[i].id === id) {
			return data.scenes[i];
		}
	}
	return null;
}

export function pause_video () {
	const yt = document.querySelector('iframe.lite-yt-player');
	yt.src = yt.src;
}

export function switchScene (scene) {
	scene.view.setParameters(scene.data.initialViewParameters);
	scene.scene.switchTo();
}

export function reset_modal (modal) {
	setTimeout(() => {
		modal.querySelector('.product-txt-container').scrollTo(0, 0);
	}, 500);
}
