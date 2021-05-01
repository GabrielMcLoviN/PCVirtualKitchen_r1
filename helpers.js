import { data } from './data.js';
import { scenes } from './loadScenes.js';

export function findSceneById(id) {
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

export function switchScene (scene) {
	scene.view.setParameters(scene.data.initialViewParameters);
	scene.scene.switchTo();
}

// export function pause_video () {
// 	let iframes = document.getElementsByClassName('.yt-embed');
// 	if (iframes !== null) {
// 		for (let i = 0; i < iframes.length; i++) {
// 			iframes[i].videoid = iframes[i].videoid;
// 		}
// 	}
// };

export function reset_modal() {
	setTimeout(() => {
		document.querySelector('.product-txt-container').scrollTo(0, 0);
	}, 500);
}
