import { data } from './data';
import { scenes } from './loadScenes.js';
import { findSceneDataById } from './helpers';

const sceneData = scenes.map((scene) => {
	return scene.data;
});
console.log(sceneData);

const ih = sceneData.map((scene) => {
  return scene.infoHotspots.map(ih => {
    return ih.title;
  });
});

console.log(ih);

console.log(data.scenes[0].id);

export async function matchHotspots (id) {}
