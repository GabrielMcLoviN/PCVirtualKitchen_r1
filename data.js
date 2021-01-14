const getImages = require => require.keys().reduce((acc, key) => {
	acc.push({
		src: require(key),
	});
	return acc;
}, []);


var APP_DATA = {
	scenes: [
		{
			id: "0-kitchen_01",
			name: "Kitchen_01",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
			],
			faceSize: 2048,
			initialViewParameters: {
				yaw: 0.28366228185752895,
				pitch: 0.2409571701441493,
				fov: 1.2739094032009168,
			},
			linkHotspots: [],
			infoHotspots: [
				{
					yaw: -0.4252217215869756,
					pitch: 0.534560200015882,
					title: '12" STAINLESS STEEL NONSTICK SKILLET',
					images: [
						"./products/skillet/skillet.jpg",
						"./products/skillet/skillet2.jpg",
						"./products/skillet/skillet3.jpg",
						"./products/skillet/skillet4.jpg",
					],
					text:
						"This innovative pan combines the best features of stainless steel and nonstick cookware. The nonstick mesh coating provides the perfect sear (without the mess) and leaves fond for pan sauces and gravy. The size is perfect for one-pot meals.",
					subhead: "GO-TO SKILLET FOR ONE-POT MEALS",
				},
				{
					yaw: 0.18578207954119463,
					pitch: 0.44039175033335454,
					title: "6-QT. ENAMELED DUTCH OVEN",
					images: ["https://placehold.it/500x500?text=placeholder"],
					text:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
					subhead: "Subheading",
				},
				{
					yaw: 0.5233019513478805,
					pitch: 0.5346585714994525,
					title: '12" CAST IRON SKILLET',
					images: ["https://placehold.it/500x500?text=placeholder"],
					text:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
					subhead: "Subheading",
				},
				{
					yaw: 0.7828439501751578,
					pitch: 0.3000919208252064,
					title: "DELUXE AIR FRYER",
					images: ["https://placehold.it/500x500?text=placeholder"],

					text:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
					subhead: "Subheading",
				},
				{
					yaw: -2.724540658980688,
					pitch: 0.5924236607609039,
					title: "PIZZA PEEL",
					images: ["https://placehold.it/500x500?text=placeholder"],

					subtitle: "PIZZA PADDLE",
					text:
						"A pizza peel is a tool every pizza lover needs. It helps you get a pizza on and off a preheated pizza stone safely and with less mess.This peel is made of durable acacia wood and has a tapered edge to help it slide easily under food. The hole at the end of the handle lets you hang it up for easy storage.",
					subhead: "Subheading",
				},
				{
					yaw: 2.20558290427587,
					pitch: 0.41308350229582835,
					title: "WOOD SALAD BOWL & SERVERS SET",
					images: ["https://placehold.it/500x500?text=placeholder"],

					text:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
					subhead: "Subheading",
				},
				{
					yaw: 2.824589139508083,
					pitch: 0.5197358315170817,
					title: "PREMIUM CHARCUTERIE & CHEESE BOARD SET",
					images: ["https://placehold.it/500x500?text=placeholder"],

					text:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
					subhead: "Subheading",
				},
				{
					yaw: 3.0210249388923707,
					pitch: 0.6610016937252077,
					title: "MANUAL FOOD PROCESSOR",
					images: ["https://placehold.it/500x500?text=placeholder"],

					text:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
					subhead: "Subheading",
				},
				{
					yaw: 2.4655333888327764,
					pitch: 0.5663247914573244,
					title: "SMALL SQUARE COOL & SERVE",
					images: ["https://placehold.it/500x500?text=placeholder"],

					text:
						"The fun-sized Small Square Cool & Serve is perfect for parties, picnics, snacks, lunch on the go, and road trips. The exclusive gel insert (which features a handy finger slot for easy removal) keeps veggies, fruit, cheese, deli meat, dip, and other snacks cool for 4–6 hours—even outdoors! It comes with a clear insert divided into two compartments with a 1-cup dip well in the center, and has solid walls that keep food from mixing. The lid snaps onto the base so it’s easy to transport, and it even fits neatly underneath while in use.",
					subhead: "Subheading",
				},
			],
		},
		{
			id: "1-kitchen_02",
			name: "Kitchen_02",
			levels: [
				{
					tileSize: 256,
					size: 256,
					fallbackOnly: true,
				},
				{
					tileSize: 512,
					size: 512,
				},
				{
					tileSize: 512,
					size: 1024,
				},
				{
					tileSize: 512,
					size: 2048,
				},
			],
			faceSize: 2048,
			initialViewParameters: {
				yaw: -0.15055228892836148,
				pitch: 0.5206078285644296,
				fov: 1.3848081938437478,
			},
			linkHotspots: [],
			infoHotspots: [
				{
					yaw: -2.2741263168624304,
					pitch: 0.5519410325766607,
					images: ["https://placehold.it/500x500?text=placeholder"],
					title: "WOOD PIZZA PEEL",
					text:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
					subhead: "Subheading",
				},
				{
					yaw: -1.4724006416181243,
					pitch: 0.650736876317616,
					title: "PREMIUM CHARCUTERIE & CHEESE BOARD SET",
					images: ["https://placehold.it/500x500?text=placeholder"],

					text:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
					subhead: "Subheading",
				},
				{
					yaw: -0.8870758070501026,
					pitch: 0.5350841529736705,
					title: "MANUAL FOOD PROCESSOR",
					images: ["https://placehold.it/500x500?text=placeholder"],

					text:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
					subhead: "Subheading",
				},
				{
					yaw: -0.2521911697484196,
					pitch: 0.5683008435471066,
					title: '12" STAINLESS STEEL NONSTICK SKILLET',
					images: ["https://placehold.it/500x500?text=placeholder"],

					text:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
					subhead: "Subheading",
				},
				{
					yaw: 0.5386061207202886,
					pitch: 0.4536125956700072,
					title: "6-QT. ENAMELED DUTCH OVEN",
					images: ["https://placehold.it/500x500?text=placeholder"],

					text:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
					subhead: "Subheading",
				},
				{
					yaw: 1.068091802238964,
					pitch: 0.4347360382781833,
					title: "SMALL SQUARE COOL & SERVE",
					images: ["https://placehold.it/500x500?text=placeholder"],

					text:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
					subhead: "Subheading",
				},
				{
					yaw: 1.6045386506152992,
					pitch: 0.2434178822133557,
					title: "DELUXE AIR FRYER",
					images: ["https://placehold.it/500x500?text=placeholder"],

					text:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
					subhead: "Subheading",
				},
				{
					yaw: 2.3545964848335714,
					pitch: 0.4513371953140872,
					title: "WOOD SALAD BOWL & SERVERS SET",
					images: ["https://placehold.it/500x500?text=placeholder"],

					text:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
					subhead: "Subheading",
				},
				{
					yaw: -3.093563192650258,
					pitch: 0.5994963555682666,
					title: '12" CAST IRON SKILLET',
					images: ["https://placehold.it/500x500?text=placeholder"],

					text:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
					subhead: "Subheading",
				},
			],
		},
	],
	name: "pcpano1",
	settings: {
		mouseViewMode: "drag",
		autorotateEnabled: false,
		fullscreenButton: true,
		viewControlButtons: true,
	},
};
