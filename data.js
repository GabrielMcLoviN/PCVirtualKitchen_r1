
var APP_DATA = {
	scenes: [
		{
			id: "0-range",
			name: "Range",
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
				yaw: 0.10244304947332772,
				pitch: 0.2975115459112434,
				fov: 1.387279393921156,
			},
			linkHotspots: [
				{
					yaw: 1.5449373637680806,
					pitch: 0.4109587577570739,
					rotation: 17.27875959474387,
					target: "1-kitchen-counter",
				},
				{
					yaw: 1.9160522942870992,
					pitch: 0.5363449989914191,
					rotation: 25.918139392115812,
					target: "2-kitchen-island",
				},
				{
					yaw: -3.1087207124080365,
					pitch: -0.08803578619563623,
					rotation: 3.9269908169872414,
					target: "3-dining-room-table",
				},
			],
			infoHotspots: [
				{
					yaw: -0.6277995048457434,
					pitch: 0.01454565276339892,
					title: '12" STAINLESS STEEL NONSTICK SKILLET',
					images: [
						"./1080x1080/nonstick/01.jpg",
						"./1080x1080/nonstick/02.jpg",
						"./1080x1080/nonstick/03.jpg",
						"./1080x1080/nonstick/04.jpg",
						"./1080x1080/nonstick/05.jpg",
						"./1080x1080/nonstick/06.jpg",
						"./1080x1080/nonstick/07.jpg",
						// "./1080x1080/nonstick/10.jpg",
						"./1080x1080/nonstick/08.jpg",
						"./1080x1080/nonstick/09.jpg",
						"./1080x1080/nonstick/11.jpg",
						"./1080x1080/nonstick/12.jpg",
					],
					subhead: '12" Stainless Steel Nonstick Skillet',
					text:
						"<p>This innovative pan combines the best features of stainless steel and nonstick cookware. The nonstick mesh coating provides the perfect sear (without the mess) and leaves fond for pan sauces and gravy. The size is perfect for one-pot meals.</p><br><p>Our stainless steel skillets are a true hybrid: They combine the amazing cooking and heating capabilities of traditional stainless steel with the easy cleanup of nonstick cookware. With these innovative pans, you can get the perfect sear, make professional-grade pan sauces, and look like a pro—without breaking a sweat.</p>",
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
					yaw: 0.26134111109976566,
					pitch: -0.08162458274027173,
					title: "6-QT. ENAMELED DUTCH OVEN",
					videos: ["./videos/dutchoven.mp4"],
					images: [
						"./1080x1080/dutch_oven/01.jpg",
						"./1080x1080/dutch_oven/02.jpg",
						"./1080x1080/dutch_oven/03.jpg",
						"./1080x1080/dutch_oven/04.jpg",
						"./1080x1080/dutch_oven/05.jpg",
						"./1080x1080/dutch_oven/06.jpg",
						"./1080x1080/dutch_oven/07.jpg",
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
							preview_image:
								"./modals/dutch_oven/Recipes/post-recipe-baked-ziti-with-sausage.jpg",
							link:
								"./modals/dutch_oven/Recipes/post-recipe-baked-ziti-with-sausage-steps.pdf",
						},
						{
							id: "Dutch Oven Bread",
							preview_image:
								"./modals/dutch_oven/Recipes/post-recipe-dutch-oven-bread.jpg",
							link:
								"./modals/dutch_oven/Recipes/post-recipe-dutch-oven-bread-steps.pdf",
						},
					],
				},
				{
					yaw: 0.7655768348049499,
					pitch: 0.1347866895586023,
					title: '12" CAST IRON SKILLET',
					videos: ["./videos/cast-iron2.mp4"],
					images: [
						"./1080x1080/cast_iron/01.jpg",
						"./1080x1080/cast_iron/02.jpg",
						"./1080x1080/cast_iron/03.jpg",
						"./1080x1080/cast_iron/04.jpg",
						// "./1080x1080/cast_iron/05.jpg",
					],
					subhead: '12" Cast Iron Skillet',
					text:
						'<p>Our 12" skillet comes preseasoned, so you can start using it right away on most heat sources. And its natural, nonstick surface gets better and better the more you use it.</p><br><p>Reach for this pan when you need a perfect sear on steaks or a golden, crispy crust on baked treats. Our skillet has a one-of-a-kind shape that gives you more cooking area—enough to fit four chicken breasts at one time. No need to cook in batches to feed your friends or family.</p><br><p>The two, low-profile pour spouts let you easily drain off pan juices whether you’re left-or right-handed. With the cooking traditions and durability of cast iron comes a certain weightiness, but not to worry, our skillet has two handles to help you lift and carry it.</p>',
					recipes: [
						{
							id: "Stovetop Mac & Cheese",
							preview_image:
								"./modals/cast_iron/Recipes/post-recipe-mac-n-cheese-usca.jpg",
							link:
								"./modals/cast_iron/Recipes/post-recipe-mac-n-cheese-steps-usca.pdf",
						},
						{
							id: "Chili Lime Pork",
							preview_image:
								"./modals/cast_iron/Recipes/post-recipe-chili-lime-pork-usca.jpg",
							link:
								"./modals/cast_iron/Recipes/post-recipe-chili-lime-pork-steps-usca.pdf",
						},
						{
							id: "Blackened Chicken",
							preview_image:
								"./modals/cast_iron/Recipes/post-recipe-blackened-chicken.jpg",
							link:
								"./modals/cast_iron/Recipes/post-recipe-blackened-chicken-steps.pdf",
						},
					],
				},
			],
		},
		{
			id: "1-kitchen-counter",
			name: "Kitchen Counter",
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
				yaw: 0.11969696688507092,
				pitch: 0.24441512874785687,
				fov: 1.3848081938437478,
			},
			linkHotspots: [
				{
					yaw: -1.571793510483868,
					pitch: 0.013155718008714956,
					rotation: 2.356194490192345,
					target: "0-range",
				},
				{
					yaw: -2.7825525419776724,
					pitch: 0.1615900374992858,
					rotation: 39.269908169872416,
					target: "2-kitchen-island",
				},
				{
					yaw: -2.8021616399606852,
					pitch: -0.04002319957860756,
					rotation: 9.42477796076938,
					target: "3-dining-room-table",
				},
			],
			infoHotspots: [
				{
					yaw: -0.8318352574086134,
					pitch: 0.04797371035327558,
					title: "MANUAL FOOD PROCESSOR",
					videos: ["./videos/manualfoodprocessor.mp4"],
					images: [
						"./1080x1080/food_processor/01.jpg",
						"./1080x1080/food_processor/02.jpg",
						"./1080x1080/food_processor/03.jpg",
						"./1080x1080/food_processor/04.jpg",
						"./1080x1080/food_processor/05.jpg",
					],
					subhead: "Manual Food Processor",
					text:
						"<p>Our Manual Food Processor can take care of nearly all your chopping and mincing needs, without needing an outlet. Just add your ingredients to the bowl and pump the handle for fast salsa, dip, cookie dough, baby food, tapenade. The more you pump, the finer it cuts! And when you’re done, the handle locks into the lid for easy storage in your cabinets.</p>",
					recipes: [
						{
							id: "Pico De Gallo",
							preview_image:
								"./modals/foodprocessor/RECIPES/post-recipe-pico-de-gallo-usca.jpg",
							link:
								"./modals/foodprocessor/RECIPES/post-recipe-pico-de-gallo-steps-usca.pdf",
						},
						{
							id: "Cucumber-Dill Guacamole",
							preview_image:
								"./modals/foodprocessor/RECIPES/post-recipe-cucumber-dill-guacamole-usca.jpg",
							link:
								"./modals/foodprocessor/RECIPES/post-recipe-cucumber-dill-guacamole-steps-usca.pdf",
						},
						{
							id: "Cranberry Salsa",
							preview_image:
								"./modals/foodprocessor/RECIPES/post-recipe-cranberry-salsa-usca.jpg",
							link:
								"./modals/foodprocessor/RECIPES/post-recipe-cranberry-salsa-steps-usca.pdf",
						},
					],
				},
				{
					yaw: -0.31982165391947603,
					pitch: 0.38679465667281754,
					title: "PIZZA PEEL",
					videos: ["./videos/pizza-peel.mp4"],
					images: [
						"./1080x1080/pizza/01.jpg",
						"./1080x1080/pizza/02.jpg",
						"./1080x1080/pizza/03.jpg",
						"./1080x1080/pizza/04.jpg",
						"./1080x1080/pizza/05.jpg",
						"./1080x1080/pizza/06.jpg",
						"./1080x1080/pizza/07.jpg",
					],
					subtitle: "PIZZA PEEL",
					subhead: "Pizza Peel",
					text:
						"<p>A pizza peel is a tool every pizza lover needs. It helps you get a pizza on and off a preheated pizza stone safely and with less mess. </p><br>This peel is made of durable acacia wood and has a tapered edge to help it slide easily under food. The hole at the end of the handle lets you hang it up for easy storage.</p>",
					recipes: [
						{
							id: "Homemade Pizza Dough",
							preview_image:
								"./modals/pizza/Recipes/post-recipe-homemade-pizza-dough.jpg",
							link:
								"./modals/pizza/Recipes/post-recipe-homemade-pizza-dough-steps.pdf",
						},
					],
				},
				{
					yaw: 0.9817374487736821,
					pitch: 0.09279542602147295,
					title: "DELUXE AIR FRYER",
					images: [
						"./1080x1080/air_fryer/01.jpg",
						"./1080x1080/air_fryer/02.jpg",
						"./1080x1080/air_fryer/03.jpg",
						"./1080x1080/air_fryer/04.jpg",
						"./1080x1080/air_fryer/05.jpg",
						"./1080x1080/air_fryer/06.jpg",
						"./1080x1080/air_fryer/07.jpg",
						"./1080x1080/air_fryer/08.jpg",
					],
					subhead: "Deluxe Air Fryer",
					text:
						"<h4>AIR FRYER, ROTISSERIE, & DEHYDRATOR ALL-IN-ONE</h4><br><p>Enjoy fried foods at home without all the mess, hassle, and oil of deep frying but with all the flavor and texture you love. Ours is family-sized to quickly cook up to six servings, a whole chicken or roast, or appetizers for a crowd. Like a convection oven, superheated air circulates giving food a crispy texture. No preheating is necessary, saving you precious time. Conveniently fits under kitchen cabinets.</p><br><p>You can make perfectly cooked rotisserie chicken, roast veggies, bake dessert, make beef jerky, and dehydrate fruits and veggies for healthy snacks. Let’s get cooking.</p>",
					recipes: [
						{
							id: "Homemade Beef Jerky",
							preview_image:
								"./modals/fryer/Recipes/post-recipe-homemade-beef-jerky-usca.jpg",
							link:
								"./modals/fryer/Recipes/post-recipe-homemade-beef-jerky-steps-usca.pdf",
						},
						{
							id: "Kebab Combinations",
							preview_image:
								"./modals/fryer/Recipes/post-recipe-kebab-combinations.jpg",
							link: "./modals/fryer/Recipes/post-recipe-kebab-combinations-steps.pdf",
						},
						{
							id: "Potato Tacos",
							preview_image: "./modals/fryer/Recipes/post-recipe-potato-tacos.jpg",
							link: "./modals/fryer/Recipes/post-recipe-potato-tacos-steps.pdf",
						},
					],
				},
			],
		},
		{
			id: "2-kitchen-island",
			name: "Kitchen Island",
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
				yaw: -0.09972415339382579,
				pitch: 0.5040258442240244,
				fov: 1.387279393921156,
			},
			linkHotspots: [
				{
					yaw: 0.0026866925612605286,
					pitch: -0.03566401174572498,
					rotation: 2.356194490192345,
					target: "3-dining-room-table",
				},
				{
					yaw: 2.390484499687437,
					pitch: -0.120268121432062,
					rotation: 3.141592653589793,
					target: "0-range",
				},
				{
					yaw: -2.8871011130308233,
					pitch: 0.08476201176402043,
					rotation: 1.5707963267948966,
					target: "1-kitchen-counter",
				},
			],
			infoHotspots: [
				{
					yaw: 0.9015299537163557,
					pitch: 0.32768977559304346,
					title: "EAT WELL - RECIPE COOKBOOK (PREVIEW)",
					images: [""],
					subhead: "",
					fullWidth: true,
					text:
						"<iframe allowfullscreen='true' style='border:none;width:100%;height:100%;' src='//e.issuu.com/embed.html?d=p30530-012021usca-eat-well-ebook&hideIssuuLogo=true&hideShareButton=true&u=pamperedchef'></iframe>",
				},
				{
					yaw: -0.43194371027012224,
					pitch: 0.28823727706400426,
					title: "BE A CONSULTANT",
					images: [
						"./1080x1080/be_a_consultant/01.jpg",
						"./1080x1080/be_a_consultant/02.jpg",
					],
					containImages: true,
					subhead: "Be a Consultant",
					text:
						"<span class='addtl_modal_body_1'><h3 style='padding-top:1rem'>What's in It for You?</h3><p style='padding-top:0'>You mean... besides earning commission on every sale?</p><br/><span class='consultant_perks'>Here are more amazing perks!</span><br/><br/><h4 class='modal_block-header'>&bull; Work/Life Balance</h4><p>Make your business work around another job or family commitments-and take it wherever you go with your website and online tools.</p><h4 class='modal_block-header'>&bull; Free Products & Discounts</h4><p>You'll get 20–50% off products right away, and you'll have the chance to earn products or Pampered Chef logo gear every month.</p><h4 class='modal_block-header'>&bull; Fantastic Rewards</h4><p>On top of free products, you can earn cash rewards and even vacations-and you'll earn even more if you promote!</p><h4 class='modal_block-header'>&bull; Purpose & Community</h4><p>You'll be part of a strong community of people who share the same passion for helping others by inspiring mealtime wins.</p><br/><span class='modal_block-footer'>Contact your consultant to learn more today!</span></span><br/><br/>",
					pdf_links: [
						{
							id: "New Consultant Kit",
							preview_image:
								"./modals/be_a_consultant/flyer-new-consultant-kit-us_Page_1.jpg",
							link: "./modals/be_a_consultant/flyer-new-consultant-kit-us.pdf",
						},
						{
							id: "Make Your Everyday Better Poster",
							preview_image:
								"./modals/be_a_consultant/poster-everyday-better-checklist-20x30-us.jpg",
							link:
								"./modals/be_a_consultant/poster-everyday-better-checklist-20x30-us.pdf",
						},
					],
				},

				{
					yaw: -0.7174876309002975,
					pitch: 0.24890468744372818,
					title: "PREMIUM CHARCUTERIE & CHEESE BOARD SET",
					videos: ["./videos/charcuterie.mp4"],
					images: [
						"./1080x1080/charc/01.jpg",
						"./1080x1080/charc/02.jpg",
						"./1080x1080/charc/03.jpg",
						"./1080x1080/charc/04.jpg",
					],
					subhead: "Premium Charcuterie & Cheese Board Set",
					text:
						"<p>The Premium Charcuterie & Cheese Board Set has everything you need to make entertaining a breeze. The set features an Acacia wood Lazy Susan and our Charcuterie & Cheese Board Accessories.</p>",
					related_content: [
						{
							id: "How to Build a Charcuterie Board (Video)",
							preview_image: "./videos/charc_video_preview_img.jpg",
							link: "./videos/charcuterie-2.mp4",
						},
					],
				},
				{
					yaw: 0.5109851975910793,
					pitch: 0.6273853907545508,
					title: "HOST A PARTY",
					containImages: true,
					images: [
						"./1080x1080/host_party/01.jpg",
						"./1080x1080/host_party/02.jpg",
						"./1080x1080/host_party/03.jpg",
						"./1080x1080/host_party/04.jpg",
					],
					subhead: "Host a Party",
					text:
						"<span class='addtl_modal_body_2'><h4 class='modal_block-header'>&bull; Free Product Rewards</h4><p>The higher your party sales, the more free product value you get to spend on the products you want.</p><h4 class='modal_block-header'>&bull; Half-Price Products</h4><p>Get up to five, including exclusive host exclusive combos.</p><h4 class='modal_block-header'>&bull; Monthly Host Special</h4><p>Get an exclusive offer just for hosting.</p><h4 class='modal_block-header'>&bull; Booking Bonuses</h4><p>Get 40% off one item or set at any party booked from yours - and get $50 in free product rewards when three guests book parties!</p><h4 class='modal_block-header'>&bull; Discounted Products</h4><p>Save up to 30% at your party, and 10% for one year.</p><br/><span class='modal_block-footer'>Contact your consultant to learn more today!</span></span>",
					pdf_links: [
						{
							id: "Host Rewards PDF",
							preview_image: "./modals/host_party/p28619-092020us-host-rewards.jpg",
							link: "./modals/host_party/p28619-092020us-host-rewards.pdf",
						},
					],
				},
			],
		},
		{
			id: "3-dining-room-table",
			name: "Dining Room Table",
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
				yaw: -0.12754400970612778,
				pitch: 0.509802213262418,
				fov: 1.3848081938437478,
			},
			linkHotspots: [
				{
					yaw: -2.572424974392515,
					pitch: -0.044303694376196745,
					rotation: 10.210176124166829,
					target: "1-kitchen-counter",
				},
				{
					yaw: 2.871067361891951,
					pitch: -0.047934228187788364,
					rotation: 14.922565104551524,
					target: "0-range",
				},
				{
					yaw: -2.9275537918448737,
					pitch: 0.0770009934747602,
					rotation: 3.141592653589793,
					target: "2-kitchen-island",
				},
			],
			infoHotspots: [
				{
					yaw: 0.5854073038617518,
					pitch: 0.36187944817504913,

					title: "INSULATED SERVING BOWL SET",
					images: [
						"./1080x1080/insulated_bowl/01.jpg",
						"./1080x1080/insulated_bowl/02.jpg",
						"./1080x1080/insulated_bowl/03.jpg",
						"./1080x1080/insulated_bowl/@lazynolaketo.jpg",
						"./1080x1080/insulated_bowl/@kristenskitchen.jpg",
					],
					subhead: "Insulated Serving Bowl Set",
					text:
						"<p>For holidays, potlucks, or any big meal, it can feel nearly impossible to keep everything warm. With this insulated serving bowl set, you can keep foods warm up to 2 hours.</p><br><p>The bowls’ double-walled vacuum insulation keeps food hot, prevents sweating, and has a stay-cool exterior. Works with cold foods, too!</p><br><p>Each bowl comes with a clear plastic lid that’s double-walled and lets you see what's inside. The lid also hooks onto the side of the bowl, making it easier to dish out and serve food.</p>",
				},
				{
					yaw: -0.8499462461096794,
					pitch: 0.2760168179510689,
					title: "SMALL SQUARE COOL & SERVE",
					videos: ["./videos/cool_and_serve.mp4"],
					images: [
						"./1080x1080/cool_serve/01.jpg",
						"./1080x1080/cool_serve/02.jpg",
						"./1080x1080/cool_serve/03.jpg",
						"./1080x1080/cool_serve/04.jpg",
						"./1080x1080/cool_serve/05.jpg",
					],
					subhead: "Small Square Cool & Serve",
					text:
						"<p>The fun-sized Small Square Cool & Serve is perfect for parties, picnics, snacks, lunch on the go, and road trips. The exclusive gel insert (which features a handy finger slot for easy removal) keeps veggies, fruit, cheese, deli meat, dip, and other snacks cool for 4–6 hours—even outdoors!</p><br><p>It comes with a clear insert divided into two compartments with a 1-cup dip well in the center and has solid walls that keep food from mixing. The lid snaps onto the base so it’s easy to transport, and it even fits neatly underneath while in use.</p>",
				},
				{
					yaw: -0.6265618269195876,
					pitch: 0.6596888420069771,
					title: "WOOD SALAD BOWL & SERVERS SET",
					images: [
						"./1080x1080/salad/01.jpg",
						"./1080x1080/salad/02.jpg",
						"./1080x1080/salad/03.jpg",
						"./1080x1080/salad/04.jpg",
					],
					subhead: "Wood Salad Bowl & Servers Set",
					text:
						"<p>Even the simplest salads look impressive when served with this set. Our Wood Salad Bowl and Servers Set is made out of acacia wood with a rich color and beautiful grain that is not only durable, but moisture resistant. Each piece is one of a kind because of the natural variations in the wood.</p><br>The salad bowl holds a standard bag of lettuce with room for extra salad fixings. The serving spoon and fork are about 12-inches long and fit naturally into any party or dinner setting.<p>",
					recipes: [
						{
							id: "Classic Cobb Salad",
							preview_image:
								"./modals/salad/Recipes/post-recipe-classic-cobb-salad.jpg",
							link:
								"./modals/salad/Recipes/flyer-recipe-classic-cobb-salad-02-usca.pdf",
						},
						{
							id: "Superfood Salad",
							preview_image:
								"./modals/salad/Recipes/post-recipe-superfood-salad-usca.jpg",
							link: "./modals/salad/Recipes/flyer-recipe-superfood-salad-usca.pdf",
						},
						{
							id: "Southwestern Salad",
							preview_image:
								"./modals/salad/Recipes/post-recipe-southwestern-salad-usca.jpg",
							link:
								"./modals/salad/Recipes/post-recipe-southwestern-salad-steps-usca.pdf",
						},
					],
				},
			],
		},
	],
	name: "scenes-x4",
	settings: {
		mouseViewMode: "drag",
		autorotateEnabled: false,
		fullscreenButton: true,
		viewControlButtons: false,
	},
};
