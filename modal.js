import { data } from './data';
import { scenes } from './loadScenes.js';
import { findSceneDataById } from './helpers';

export function getHotspotData() {
  const sceneData = scenes.map((scene) => {
    return scene.data;
  });
  const ih = sceneData.map((scene) => {
    return scene.infoHotspots.map(ih => {
      return ih;
    });
  });
  console.log(ih);
  console.log(sceneData);
}
getHotspotData();





console.log(data.scenes[0].id);

export async function matchHotspots (id) {}
