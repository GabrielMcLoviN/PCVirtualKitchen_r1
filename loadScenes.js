const Marzipano = require('marzipano');
import { data } from './data.js';
import { createInfoHotspotElement } from './infoHotspots.js';
import { createLinkHotspotElement } from './linkHotspots.js';
import Shepherd from 'shepherd.js';
import { reset_modal, switchScene } from './helpers';
import { createPopper } from '@popperjs/core';

const preloader = document.querySelector('.preloader');
const intro = document.getElementById('intro');
const help_menu_btn = document.querySelector('.help-menu-btn');
const help_menu = document.getElementById('help-menu');
const help_menu_opener = document.querySelector('.help-menu-btn svg');
const help_menu_close = document.querySelector('#help-list-close');
const controls = document.getElementById('controls');
const controls_close = document.getElementById('controls-close');
const introClose = document.getElementById('intro-close');

const panoElement = document.querySelector('#pano');

const viewerOpts = {
  controls: {
    mouseViewMode: data.settings.mouseViewMode,
    // scrollZoom: false,
  },
};

// Initialize viewer.
export const viewer = new Marzipano.Viewer(panoElement, viewerOpts);

// Create scenes.
export const scenes = data.scenes.map(function (data) {
  const urlPrefix = 'tiles';
  const source = Marzipano.ImageUrlSource.fromString(
    urlPrefix + '/' + data.id + '/{z}/{f}/{y}/{x}.jpg',
    { cubeMapPreviewUrl: urlPrefix + '/' + data.id + '/preview.jpg' }
  );

  const geometry = new Marzipano.CubeGeometry(data.levels);

  const limiter = Marzipano.RectilinearView.limit.traditional(
    1024,
    (100 * Math.PI) / 180,
    (120 * Math.PI) / 180
  );

  const view = new Marzipano.RectilinearView(
    data.initialViewParameters,
    limiter
  );

  const scene = viewer.createScene({
    source: source,
    geometry: geometry,
    view: view,
    pinFirstLevel: true,
  });

  // Create link hotspots.
  import('./linkHotspots').then(
    data.linkHotspots.forEach(function (hotspot) {
      const element = createLinkHotspotElement(hotspot);
      scene.hotspotContainer().createHotspot(element, {
        yaw: hotspot.yaw,
        pitch: hotspot.pitch,
      });
    })
  );

  // Create info hotspots.
  import('./infoHotspots').then(
    data.infoHotspots.forEach(async function (hotspot) {
      const element = await createInfoHotspotElement(hotspot);
      scene
        .hotspotContainer()
        .createHotspot(
          element,
          { yaw: hotspot.yaw, pitch: hotspot.pitch },
          { perspective: { radius: 400 } }
        );
    })
  );

  return {
    data: data,
    scene: scene,
    view: view,
  };
});

const start_tour = document.querySelector('.confirm');
// tour
const tour_infoHotspots = new Shepherd.Tour({ useModalOverlay: true });
tour_infoHotspots.addStep({
  id: 'first',
  showOn: document.body.classList.contains('tour-accepted'),
  text: `<br/>Click this icon to learn<br/>more about the product<br/><br/>`,
  attachTo: {
    element: '.info-hotspot-header.intro-starter',
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

let h = window.innerHeight;

let destinationViewParameters = {
  yaw: -1.1815019536187705,
  pitch: 0.21382602521738114,
  fov: (60 * Math.PI) / 180,
};

let options = {
  transitionDuration: 2000,
};

let iframeViewParameters = {
  yaw: -1.1815019536187705,
  pitch: 0.21382602521738114,
  fov: (60 * Math.PI) / 180,
};

start_tour.addEventListener('click', function () {
  const ih = document.querySelector('.intro-starter');
  ih.addEventListener('click', () => {
    setTimeout(() => {
      tour_infoHotspots.next();
      document.body.classList.remove('tour-init');
    }, 600);
  });

  viewer.controls().disable();
  intro.classList.remove('visible');
  if (h > 384) {
    intro_scene.lookTo(destinationViewParameters, options, done);
  } else if (h <= 384) {
    intro_scene.lookTo(iframeViewParameters, options, done);
  }
  document.body.classList.add('tour-accepted');
});

function done() {
  tour_infoHotspots.start();
}

tour_infoHotspots.addStep({
  id: 'second',
  arrow: false,
  modalOverlayOpeningPadding: 0,
  text: `<br/>Here, you'll find <br/> product information,
	<br/>downloadable recipes & <br/> related content`,
  attachTo: {
    element: '.info-hotspot-modal.visible .product-txt-container',
    on: 'auto',
  },
  popperOptions: {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 20],
        },
      },
    ],
  },
  buttons: [
    {
      text: 'Next',
      action: tour_infoHotspots.next,
      classes: 'shep-next',
    },
  ],
});

tour_infoHotspots.addStep({
  id: 'third',
  arrow: false,
  showOn: document.body.classList.contains('tour-accepted'),
  text: `<br/>Here you'll find product images & videos, click on the arrows or swipe to see more<br/>`,
  attachTo: {
    element: '.info-hotspot-modal.visible .carousel_container',
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
          padding: 25,
        },
      },
    ],
  },
  buttons: [
    {
      text: 'Back',
      action: tour_infoHotspots.back,
      classes: 'shep-back',
    },
    {
      text: 'Next',
      action: tour_infoHotspots.next,
      classes: 'shep-next',
    },
  ],
});

const tour_linkHotspots = new Shepherd.Tour({ useModalOverlay: false });
tour_linkHotspots.addStep({
  showOn: document.body.classList.contains('tour-accepted'),
  text: `<br/>Click the arrow to see the products in this part of the kitchen<br/><br/>`,
  attachTo: {
    element: '.second-tour-starter > img',
    on: 'bottom',
  },
  popperOptions: {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [-10, 10],
        },
      },
    ],
  },
});

const tour_movement = new Shepherd.Tour({
  defaultStepOptions: {
    scrollTo: { behavior: 'smooth', block: 'center' },
  },
});

tour_movement.addStep({
  showOn: document.body.classList.contains('tour-accepted'),
  text: `<br/>Good moves! I think you got the hang of it!<br/>`,
  buttons: [
    {
      text: 'Start Exploring',
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

const tour_final = new Shepherd.Tour({
  defaultStepOptions: {
    scrollTo: { behavior: 'smooth', block: 'center' },
  },
});

tour_final.addStep({
  showOn: document.body.classList.contains('tour-accepted'),
  text: `<br/>Enjoy the party! <br/>🥳✨🥂 <br/>If you need help<br/>along the way, click here`,
  attachTo: {
    element: '.help-menu-btn svg',
    on: 'auto',
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

const exit_tour = document.querySelector('.cancel');
const exit_tour_x = document.querySelector('.intro-header .intro-close');
const intro_scene = scenes[0].scene;
const introLH = document.querySelector('.link-hotspot.second-tour-starter');

var destinationViewParameters_linkHotspot = {
  yaw: -1.600429731329104,
  pitch: 0.5002192152175962,
  fov: (60 * Math.PI) / 180,
};

var iframeViewParameters_linkHotspot = {
  yaw: -1.600429731329104,
  pitch: 0.5002192152175962,
  fov: (60 * Math.PI) / 180,
};

var options_linkHotspot = {
  transitionDuration: 2000,
};

tour_infoHotspots.on('complete', function () {
  Shepherd.activeTour.steps.forEach((step) => {
    step.destroy();
  });
  const header = document.querySelector('.intro-starter');
  const currModal = document.querySelector('.info-hotspot-modal.visible');

  header.classList.remove('.intro-starter');
  currModal.classList.remove('visible');
  setTimeout(() => {
    currModal.remove();
  }, 3000);
  if (h > 384) {
    intro_scene.lookTo(
      destinationViewParameters_linkHotspot,
      options_linkHotspot,
      infoHotspotsTour_done
    );
  } else if (h <= 384) {
    intro_scene.lookTo(
      iframeViewParameters_linkHotspot,
      options_linkHotspot,
      infoHotspotsTour_done
    );
  }
});

function infoHotspotsTour_done() {
  tour_linkHotspots.start();
}

introLH.addEventListener('click', function () {
  if (document.body.classList.contains('tour-accepted')) {
    tour_linkHotspots.next();
    tour_movement.start();
  }
});

tour_linkHotspots.on('complete', () => {
  Shepherd.activeTour.steps.forEach((step) => {
    step.destroy();
  });
});

tour_movement.on('complete', function () {
  switchScene(scenes[0]);
  Shepherd.activeTour.steps.forEach((step) => {
    step.destroy();
  });

  tour_final.start();
});

tour_final.on('complete', function () {
  viewer.controls().enable();
  introLH.classList.remove('second-tour-starter');

  Shepherd.activeTour.steps.forEach((step) => {
    step.destroy();
  });
});

[exit_tour, exit_tour_x].forEach((el) => {
  el.addEventListener('click', function () {
    introLH.classList.remove('second-tour-starter');
    intro.remove();
    show();
    viewer.controls().enable();
    setTimeout(function () {
      hide();
    }, 3000);
  });
});

const help = document.querySelector('#footer svg');
const tooltip = document.querySelector('#tooltip');

const helpPopper = createPopper(help, tooltip, {
  placement: 'top-start',
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 15],
      },
    },
  ],
});

function show() {
  tooltip.setAttribute('data-show', '');
  helpPopper.update();
}

function hide() {
  tooltip.removeAttribute('data-show');
}

introClose.addEventListener('click', function () {
  intro.classList.remove('visible');
  introLH.classList.remove('second-tour-starter');
});

controls_close.addEventListener('click', function () {
  controls.remove();
  intro.style.opacity = 1;
  intro.classList.add('visible');
});

help_menu_opener.addEventListener('click', function () {
  help_menu.classList.add('visible');
});

help_menu_close.addEventListener('click', function () {
  help_menu.classList.remove('visible');
});

document.body.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    help_menu.classList.remove('visible');
  }
});

window.addEventListener('load', function () {
  setTimeout(() => {
    panoElement.style.opacity = 1;
    help_menu.style.opacity = 1;
    help_menu_btn.style.opacity = 1;
    titleBar.style.opacity = 1;
    preloader.style.display = 'none';
    controls.classList.add('visible');
    document.body.classList.add('tour-init');
  }, 500);
});
