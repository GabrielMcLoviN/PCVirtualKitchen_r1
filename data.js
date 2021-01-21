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
						"./modals/nonstick/01.jpg",
						"./modals/nonstick/02.jpg",
						"./modals/nonstick/03.jpg",
						"./modals/nonstick/04.jpg",
						"./modals/nonstick/05.jpg",
						"./modals/nonstick/06.jpg",
						"./modals/nonstick/07.jpg",
						"./modals/nonstick/10.jpg",
						"./modals/nonstick/08.jpg",
						"./modals/nonstick/09.jpg",
						"./modals/nonstick/11.jpg",
						"./modals/nonstick/12.jpg",
					],
					subhead: '12" Stainless Steel Nonstick Skillet',
					text:
						"<p>This innovative pan combines the best features of stainless steel and nonstick cookware. The nonstick mesh coating provides the perfect sear (without the mess) and leaves fond for pan sauces and gravy. The size is perfect for one-pot meals.</p><br><p>Our stainless steel skilletsare a true hybrid: They combine the amazing cooking and heating capabilities of traditional stainless steel with the easy cleanup of nonstick cookware. With these innovative pans, you can get the perfect sear, make professional-grade pan sauces, and look like a pro—without breaking a sweat.</p>",
					recipes: [
						{
							id: "Chicken Sausage & Spinach Ravioli",
							preview_image:
								"./modals/nonstick/Recipes/post-recipe-chicken-sausage-spinach-ravioli-usca.jpg",
							link:
								"./modals/nonstick/Recipes/post-recipe-chicken-sausage-spinach-ravioli-steps.pdf",
						},
						{
							id: "Egg Roll in a Bowl",
							preview_image:
								"./modals/nonstick/Recipes/post-recipe-egg-roll-in-a-bowl.jpg",
							link:
								"./modals/nonstick/Recipes/post-recipe-egg-roll-in-a-bowl-steps-usca.pdf",
						},
						{
							id: "Roasted Chicken & Asparagus",
							preview_image:
								"./modals/nonstick/Recipes/post-recipe-roasted-chicken-asparagus-usca.jpg",
							link:
								"./modals/nonstick/Recipes/post-recipe-roasted-chicken-asparagus-steps-usca.pdf",
						},
					],
				},
				{
					yaw: 0.18578207954119463,
					pitch: 0.44039175033335454,
					title: "6-QT. ENAMELED DUTCH OVEN",
					images: [
						"./modals/dutch_oven/dutchoven-01.jpg",
						"./modals/dutch_oven/dutchoven-02.jpg",
						"./modals/dutch_oven/dutchoven-03.jpg",
						"./modals/dutch_oven/dutchoven-04.jpg",
						"./modals/dutch_oven/05.jpg",
						"./modals/dutch_oven/06.jpg",
						"./modals/dutch_oven/07.jpg",
					],
					subhead: "6-qt. Enameled Dutch Oven",
					text:
						"<p>Enameled cast iron is the kind of cookware that will become a fixture at every special meal you make—and that includes weeknight meals. This Dutch oven is beautiful so it’s ready to go directly from your stove (including induction) or oven to your table. You’ll reach for it again and again because it’s low maintenance and versatile.</p><br><p>The 6-qt. (5.7-L) Dutch oven has a light-colored enameled interior, which means you can start using it right away—no seasoning required—and it lets you easily see food browning so you can avoid scorching it. Cast iron’s excellent heat retention means that food stays hot and delicious even if not everyone makes it to the table as soon as dinner’s ready.</p><br><p>The inside of the lid is covered with bumps that redirect the condensation in the pot to drip back onto the food, making it a self-basting pot. This makes your food juicy, tender, and more flavorful.</p>",
					recipes: [
						{
							id: "Baked Orzo",
							preview_image: "./modals/dutch_oven/Recipes/post-recipe-baked-orzo.jpg",
							link: "./modals/dutch_oven/Recipes/post-recipe-baked-orzo-steps.pdf",
						},
						{
							id: "Baked Ziti with Sausage",
							preview_image: "./modals/dutch_oven/Recipes/post-recipe-baked-ziti-with-sausage.jpg",
							link: "./modals/dutch_oven/Recipes/post-recipe-baked-ziti-with-sausage-steps.pdf",
						},
						{
							id: "Dutch Oven Bread",
							preview_image: "./modals/dutch_oven/Recipes/post-recipe-dutch-oven-bread.jpg",
							link: "./modals/dutch_oven/Recipes/post-recipe-dutch-oven-bread-steps.pdf",
						},
					],
				},
				{
					yaw: 0.5233019513478805,
					pitch: 0.5346585714994525,
					title: '12" CAST IRON SKILLET',
					images: [
						"./modals/cast_iron/01.jpg",
						"./modals/cast_iron/02.jpg",
						"./modals/cast_iron/03.jpg",
						"./modals/cast_iron/04.jpg",
						"./modals/cast_iron/05.jpg",
					],
					subhead: '12" Cast Iron Skillet',
					text:
						'<p>Our 12" skillet comes preseasoned, so you can start using it right away on most heat sources. And its natural, nonstick surface gets better and better the more you use it.</p><br><p>Reach for this pan when you need a perfect sear on steaks or a golden, crispy crust on baked treats. Our skillet has a one-of-a-kind shape that gives you more cooking area—enough to fit four chicken breasts at one time. No need to cook in batches to feed your friends or family.</p><br><p>The two, low-profile pour spouts let you easily drain off pan juices whether you’re left-or right-handed. With the cooking traditions and durability of cast iron comes a certain weightiness, but not to worry, our skillet has two handles to help you lift and carry it.</p>',
					recipes: [
						{
							id: "Stovetop Mac & Cheese",
							preview_image: "./modals/cast_iron/Recipes/post-recipe-mac-n-cheese-usca.jpg",
							link: "./modals/cast_iron/Recipes/post-recipe-mac-n-cheese-steps-usca.pdf",
						},
						{
							id: "Chili Lime Pork",
							preview_image: "./modals/cast_iron/Recipes/post-recipe-chili-lime-pork-usca.jpg",
							link: "./modals/cast_iron/Recipes/post-recipe-chili-lime-pork-steps-usca.pdf",
						},
						{
							id: "Blackened Chicken",
							preview_image: "./modals/cast_iron/Recipes/post-recipe-blackened-chicken.jpg",
							link: "./modals/cast_iron/Recipes/post-recipe-blackened-chicken-steps.pdf",
						},
					],
				},
				{
					yaw: 0.7828439501751578,
					pitch: 0.3000919208252064,
					title: "DELUXE AIR FRYER",
					images: [
						"./modals/fryer/01.jpg",
						"./modals/fryer/02.jpg",
						"./modals/fryer/03.jpg",
						"./modals/fryer/04.jpg",
						"./modals/fryer/05.jpg",
						"./modals/fryer/06.jpg",
						"./modals/fryer/07.jpg",
						"./modals/fryer/08.jpg",
					],
					subhead: "Deluxe Air Fryer",
					text:
						"<h4>AIR FRYER, ROTISSERIE, & DEHYDRATOR ALL-IN-ONE</h4><br><p>Enjoy fried foods at home without all the mess, hassle, and oil of deep frying but with all the flavor and texture you love. Ours is family-sized to quickly cook up to six servings, a whole chicken or roast, or appetizers for a crowd. Like a convection oven, superheated air circulates giving food a crispy texture. No preheating is necessary, saving you precious time. Conveniently fits under kitchen cabinets.</p><br><p>You can make perfectly cooked rotisserie chicken, roast veggies, bake dessert, make beef jerky, and dehydrate fruits and veggies for healthy snacks. Let’s get cooking.</p>",
					recipes: [
						{
							id: "Homemade Beef Jerky",
							preview_image: "./modals/fryer/Recipes/post-recipe-homemade-beef-jerky-usca.jpg",
							link: "./modals/fryer/Recipes/post-recipe-homemade-beef-jerky-steps-usca.pdf",
						},
						{
							id: "Kebab Combinations",
							preview_image: "./modals/fryer/Recipes/post-recipe-kebab-combinations.jpg",
							link: "./modals/fryer/Recipes/post-recipe-kebab-combinations-steps.pdf",
						},
						{
							id: "Potato Tacos",
							preview_image: "./modals/fryer/Recipes/post-recipe-potato-tacos.jpg",
							link: "./modals/fryer/Recipes/post-recipe-potato-tacos-steps.pdf",
						},
					],
				},
				{
					yaw: -2.724540658980688,
					pitch: 0.5924236607609039,
					title: "PIZZA PEEL",
					images: [
						"./modals/pizza/01.jpg",
						"./modals/pizza/02.jpg",
						"./modals/pizza/03.jpg",
						"./modals/pizza/04.jpg",
						"./modals/pizza/05.jpg",
						"./modals/pizza/06.jpg",
						"./modals/pizza/07.jpg",
					],
					subtitle: "PIZZA PEEL",
					subhead: "Pizza Peel",
					text:
						"<p>A pizza peel is a tool every pizza lover needs. It helps you get a pizza on and off a preheated pizza stone safely and with less mess. </p><br>This peel is made of durable acacia wood and has a tapered edge to help it slide easily under food. The hole at the end of the handle lets you hang it up for easy storage.</p>",
					recipes: [
						{
							id: "Homemade Pizza Dough",
							preview_image: "./modals/pizza/Recipes/post-recipe-homemade-pizza-dough.jpg",
							link: "./modals/pizza/Recipes/post-recipe-homemade-pizza-dough-steps.pdf",
						},
					],
				},
				{
					yaw: 2.20558290427587,
					pitch: 0.41308350229582835,
					title: "WOOD SALAD BOWL & SERVERS SET",
					images: [
						"./modals/salad/01.jpg",
						"./modals/salad/02.jpg",
						"./modals/salad/03.jpg",
						"./modals/salad/04.jpg",
					],
					subhead: "Wood Salad Bowl & Servers Set",
					text:
						"<p>Even the simplest salads look impressive when served with this set. Our Wood Salad Bowl and Servers Set is made out of acacia wood with a rich color and beautiful grain that is not only durable, but moisture resistant. Each piece is one of a kind because of the natural variations in the wood.</p><br>The salad bowl holds a standard bag of lettuce with room for extra salad fixings. The serving spoon and fork are about 12-inches long and fit naturally into any party or dinner setting.<p>",
					recipes: [
						{
							id: "Classic Cobb Salad",
							preview_image: "./modals/salad/Recipes/post-recipe-classic-cobb-salad.jpg",
							link: "./modals/salad/Recipes/flyer-recipe-classic-cobb-salad-02-usca.pdf",
						},
						{
							id: "Superfood Salad",
							preview_image: "./modals/salad/Recipes/post-recipe-superfood-salad-usca.jpg",
							link: "./modals/salad/Recipes/flyer-recipe-superfood-salad-usca.pdf",
						},
						{
							id: "Southwestern Salad",
							preview_image: "./modals/salad/Recipes/post-recipe-southwestern-salad-usca.jpg",
							link: "./modals/salad/Recipes/post-recipe-southwestern-salad-steps-usca.pdf",
						},
					],
				},
				{
					yaw: 2.824589139508083,
					pitch: 0.5197358315170817,
					title: "PREMIUM CHARCUTERIE & CHEESE BOARD SET",
					images: [
						"./modals/charc/01.jpg",
						"./modals/charc/02.jpg",
						"./modals/charc/03.jpg",
						"./modals/charc/04.jpg",
					],
					subhead: "Premium Charcuterie & Cheese Board Set",
					text:
						"<p>The Premium Charcuterie & Cheese Board Set has everything you need to make entertaining a breeze. The set features an Acacia wood Lazy Susan and our Charcuterie & Cheese Board Accessories.</p>",
					related_content: [
						{
							id: "How to Build a Charcuterie Board",
							preview_image: "",
							link: "",
						},
					],
				},
				{
					yaw: 3.0210249388923707,
					pitch: 0.6610016937252077,
					title: "MANUAL FOOD PROCESSOR",
					images: [
						"./modals/foodprocessor/01.jpg",
						"./modals/foodprocessor/02.jpg",
						"./modals/foodprocessor/03.jpg",
						"./modals/foodprocessor/04.jpg",
						"./modals/foodprocessor/05.jpg",
					],
					subhead: "Manual Food Processor",
					text:
						"<p>Our Manual Food Processor can take care of nearly all your chopping and mincing needs, without needing an outlet. Just add your ingredients to the bowl and pump the handle for fast salsa, dip, cookie dough, baby food, tapenade. The more you pump, the finer it cuts! And when you’re done, the handle locks into the lid for easy storage in your cabinets.</p>",
					recipes: [
						{
							id: "Pico De Gallo",
							preview_image: "./modals/foodprocessor/RECIPES/post-recipe-pico-de-gallo-usca.jpg",
							link: "./modals/foodprocessor/RECIPES/post-recipe-pico-de-gallo-steps-usca.pdf",
						},
						{
							id: "Cucumber-Dill Guacamole",
							preview_image: "./modals/foodprocessor/RECIPES/post-recipe-cucumber-dill-guacamole-usca.jpg",
							link: "./modals/foodprocessor/RECIPES/post-recipe-cucumber-dill-guacamole-steps-usca.pdf",
						},
						{
							id: "Cranberry Salsa",
							preview_image: "./modals/foodprocessor/RECIPES/post-recipe-cranberry-salsa-usca.jpg",
							link: "./modals/foodprocessor/RECIPES/post-recipe-cranberry-salsa-steps-usca.pdf",
						},
					],
				},
				{
					yaw: 2.4655333888327764,
					pitch: 0.5663247914573244,
					title: "SMALL SQUARE COOL & SERVE",
					images: [
						"./modals/square/01.jpg",
						"./modals/square/02.jpg",
						"./modals/square/03.jpg",
						"./modals/square/04.jpg",
						"./modals/square/05.jpg",
					],
					subhead: "Small Square Cool & Serve",
					text:
						"<p>The fun-sized Small Square Cool & Serve is perfect for parties, picnics, snacks, lunch on the go, and road trips. The exclusive gel insert (which features a handy finger slot for easy removal) keeps veggies, fruit, cheese, deli meat, dip, and other snacks cool for 4–6 hours—even outdoors!</p><br><p>It comes with a clear insert divided into two compartments with a 1-cup dip well in the center and has solid walls that keep food from mixing. The lid snaps onto the base so it’s easy to transport, and it even fits neatly underneath while in use.</p>",
				},
				// {
				// 	yaw: 2.4655333888327764,
				// 	pitch: 0.5663247914573244,
				// 	title: "INSULATED SERVING BOWL SET",
				// 	images: [
				// 		"./products/insulated_01.jpg",
				// 		"./products/insulated_02.jpg",
				// 		"./products/insulated_03.jpg",
				// 		"./products/insulated_04-@lazynolaketo.jpg",
				// 	],
				// 	subhead: "Insulated Serving Bowl Set",
				// 	text:
				// 		"<p>For holidays, potlucks, or any big meal, it can feel nearly impossible to keep everything warm. With this insulated serving bowl set, you can keep foods warm up to 2 hours.</p><br><p>The bowls’ double-walled vacuum insulation keeps food hot, prevents sweating, and has a stay-cool exterior. Works with cold foods, too!</p><br><p>Each bowl comes with a clear plastic lid that’s double-walled and lets you see what's inside. The lid also hooks onto the side of the bowl, making it easier to dish out and serve food.</p>",
				// },
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
					title: "PIZZA PEEL",
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
