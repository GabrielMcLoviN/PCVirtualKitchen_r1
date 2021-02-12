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
				yaw: 0.0858491457690107,
				pitch: 0.3671651980357833,
				fov: 1.3848081938437478,
			},
			linkHotspots: [
				{
					yaw: 1.3819951101069634,
					pitch: 0.072463355897888,
					rotation: 10.210176124166829,
					target: "1-countertop",
				},
				{
					yaw: 2.443566804558939,
					pitch: 0.08389249082386385,
					rotation: 9.42477796076938,
					target: "2-island",
				},
				{
					yaw: -3.097839732740365,
					pitch: 0.10757698310080954,
					rotation: 5.497787143782138,
					target: "3-dining-room-table",
				},
			],
			infoHotspots: [
				{
					yaw: -0.6509018897961045,
					pitch: 0.050632497711122326,
					title: '12" STAINLESS STEEL NONSTICK SKILLET',
					videos: [
						'<iframe width="560" height="315" src="https://www.youtube.com/embed/hZ739Jtg_yg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
					],
					images: [
						"./images_min/nonstick/01-min.jpg",
						"./images_min/nonstick/02-min.jpg",
						"./images_min/nonstick/03-min.jpg",
						"./images_min/nonstick/04-min.jpg",
						"./images_min/nonstick/05-min.jpg",
						"./images_min/nonstick/06-min.jpg",
						["@prettyfocusedcourse", "./images_min/nonstick/07-min.jpg"],
						"./images_min/nonstick/10-min.jpg",
						["@whatslindacooking", "./images_min/nonstick/08-min.jpg"],
						"./images_min/nonstick/09-min.jpg",
						// "./1080x1080/nonstick/11.jpg",
						["@jessywhitenton", "./images_min/nonstick/12-min.jpg"],
					],
					subhead: '12" Stainless Steel Nonstick Skillet',
					text:
						"<p>This innovative pan combines the best features of stainless steel and nonstick cookware. The nonstick mesh coating provides the perfect sear (without the mess) and leaves fond for pan sauces and gravy. The size is perfect for one-pot meals.</p><br><p>Our stainless steel skillets are a true hybrid: They combine the amazing cooking and heating capabilities of traditional stainless steel with the easy cleanup of nonstick cookware. With these innovative pans, you can get the perfect sear, make professional-grade pan sauces, and look like a pro—without breaking a sweat.</p>",
					recipes: [
						{
							id: "Chicken Sausage & Spinach Ravioli",
							preview_image:
								"./modals/nonstick/post-recipe-chicken-sausage-spinach-ravioli-usca-min.jpg",
							link:
								"./modals/nonstick/Recipes/post-recipe-chicken-sausage-spinach-ravioli-steps.pdf",
						},
						{
							id: "Egg Roll in a Bowl",
							preview_image:
								"./modals/nonstick/post-recipe-egg-roll-in-a-bowl-min.jpg",
							link:
								"./modals/nonstick/Recipes/post-recipe-egg-roll-in-a-bowl-steps-usca.pdf",
						},
						{
							id: "Roasted Chicken & Asparagus",
							preview_image:
								"./modals/nonstick/post-recipe-roasted-chicken-asparagus-usca-min.jpg",
							link:
								"./modals/nonstick/Recipes/post-recipe-roasted-chicken-asparagus-steps-usca.pdf",
						},
					],
				},
				{
					yaw: 0.10354516204319353,
					pitch: -0.059097614950658794,
					title: "6-QT. ENAMELED DUTCH OVEN",
					videos: [
						'<iframe width="560" height="315" src="https://www.youtube.com/embed/qsHmDecSbGY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
					],
					images: [
						"./images_min/dutchoven/01-min.jpg",
						"./images_min/dutchoven/02-min.jpg",
						"./images_min/dutchoven/03-min.jpg",
						"./images_min/dutchoven/04-min.jpg",
						"./images_min/dutchoven/05-min.jpg",
						"./images_min/dutchoven/07-min.jpg",
					],
					subhead: "6-qt. Enameled Dutch Oven",
					text:
						"<p>Enameled cast iron is the kind of cookware that will become a fixture at every special meal you make—and that includes weeknight meals. This Dutch oven is beautiful so it’s ready to go directly from your stove (including induction) or oven to your table. You’ll reach for it again and again because it’s low maintenance and versatile.</p><br><p>The 6-qt. (5.7-L) Dutch oven has a light-colored enameled interior, which means you can start using it right away—no seasoning required—and it lets you easily see food browning so you can avoid scorching it. Cast iron’s excellent heat retention means that food stays hot and delicious even if not everyone makes it to the table as soon as dinner’s ready.</p><br><p>The inside of the lid is covered with bumps that redirect the condensation in the pot to drip back onto the food, making it a self-basting pot. This makes your food juicy, tender, and more flavorful.</p>",
					recipes: [
						{
							id: "Baked Orzo",
							preview_image: "./modals/dutch_oven/post-recipe-baked-orzo-min.jpg",
							link: "./modals/dutch_oven/Recipes/post-recipe-baked-orzo-steps.pdf",
						},
						{
							id: "Baked Ziti with Sausage",
							preview_image:
								"./modals/dutch_oven/post-recipe-baked-ziti-with-sausage-min.jpg",
							link:
								"./modals/dutch_oven/Recipes/post-recipe-baked-ziti-with-sausage-steps.pdf",
						},
						{
							id: "Dutch Oven Bread",
							preview_image:
								"./modals/dutch_oven/post-recipe-dutch-oven-bread-min.jpg",
							link:
								"./modals/dutch_oven/Recipes/post-recipe-dutch-oven-bread-steps.pdf",
						},
					],
				},
				{
					yaw: 0.9132800657738347,
					pitch: 0.12546033681835667,
					title: '12" CAST IRON SKILLET',
					videos: [
						'<iframe width="560" height="315" src="https://www.youtube.com/embed/PlKzT_mXPUI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
					],
					images: [
						"./images_min/castiron/01-min.jpg",
						"./images_min/castiron/02-min.jpg",
						["@makandheart", "./images_min/castiron/03-min.jpg"],
						"./images_min/castiron/04-min.jpg",
					],
					subhead: '12" Cast Iron Skillet',
					text:
						'<p>Our 12" skillet comes preseasoned, so you can start using it right away on most heat sources. And its natural, nonstick surface gets better and better the more you use it.</p><br><p>Reach for this pan when you need a perfect sear on steaks or a golden, crispy crust on baked treats. Our skillet has a one-of-a-kind shape that gives you more cooking area—enough to fit four chicken breasts at one time. No need to cook in batches to feed your friends or family.</p><br><p>The two, low-profile pour spouts let you easily drain off pan juices whether you’re left-or right-handed. With the cooking traditions and durability of cast iron comes a certain weightiness, but not to worry, our skillet has two handles to help you lift and carry it.</p>',
					recipes: [
						{
							id: "Stovetop Mac & Cheese",
							preview_image:
								"./modals/cast_iron/post-recipe-mac-n-cheese-usca-min.jpg",
							link:
								"./modals/cast_iron/Recipes/post-recipe-mac-n-cheese-steps-usca.pdf",
						},
						{
							id: "Chili Lime Pork",
							preview_image:
								"./modals/cast_iron/post-recipe-chili-lime-pork-usca-min.jpg",
							link:
								"./modals/cast_iron/Recipes/post-recipe-chili-lime-pork-steps-usca.pdf",
						},
						{
							id: "Blackened Chicken",
							preview_image:
								"./modals/cast_iron/post-recipe-blackened-chicken-min.jpg",
							link:
								"./modals/cast_iron/Recipes/post-recipe-blackened-chicken-steps.pdf",
						},
					],
				},
			],
		},
		{
			id: "1-countertop",
			name: "Countertop",
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
				yaw: 0.14231146208569712,
				pitch: 0.3021819597436295,
				fov: 1.3848081938437478,
			},
			linkHotspots: [
				{
					yaw: -2.7962389997262633,
					pitch: -0.042021983890480286,
					rotation: 15.707963267948973,
					target: "3-dining-room-table",
				},
				{
					yaw: -3.028585130760984,
					pitch: 0.17269940860983013,
					rotation: 14.137166941154074,
					target: "2-island",
				},
				{
					yaw: -1.5377149359597162,
					pitch: 0.006142929574638245,
					rotation: 2.356194490192345,
					target: "0-range",
				},
			],
			infoHotspots: [
				{
					yaw: -0.834871800104505,
					pitch: 0.049530882327811554,
					title: "MANUAL FOOD PROCESSOR",
					videos: [
						'<iframe width="560" height="315" src="https://www.youtube.com/embed/XdYZOHuvdhU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
					],
					images: [
						"./images_min/foodprocessor/01-min.jpg",
						"./images_min/foodprocessor/02-min.jpg",
						"./images_min/foodprocessor/03-min.jpg",
						["@erica-ekman", "./images_min/foodprocessor/04-min.jpg"],
						["@erica-ekman", "./images_min/foodprocessor/05-min.jpg"],
					],
					subhead: "Manual Food Processor",
					text:
						"<p>Our Manual Food Processor can take care of nearly all your chopping and mincing needs, without needing an outlet. Just add your ingredients to the bowl and pump the handle for fast salsa, dip, cookie dough, baby food, tapenade. The more you pump, the finer it cuts! And when you’re done, the handle locks into the lid for easy storage in your cabinets.</p>",
					recipes: [
						{
							id: "Pico De Gallo",
							preview_image:
								"./modals/foodprocessor/post-recipe-pico-de-gallo-usca-min.jpg",
							link:
								"./modals/foodprocessor/RECIPES/post-recipe-pico-de-gallo-steps-usca.pdf",
						},
						{
							id: "Cucumber-Dill Guacamole",
							preview_image:
								"./modals/foodprocessor/post-recipe-cucumber-dill-guacamole-usca-min.jpg",
							link:
								"./modals/foodprocessor/RECIPES/post-recipe-cucumber-dill-guacamole-steps-usca.pdf",
						},
						{
							id: "Cranberry Salsa",
							preview_image:
								"./modals/foodprocessor/post-recipe-cranberry-salsa-usca-min.jpg",
							link:
								"./modals/foodprocessor/RECIPES/post-recipe-cranberry-salsa-steps-usca.pdf",
						},
					],
				},
				{
					yaw: -0.11903815248984984,
					pitch: 0.5148730551134122,
					title: "PIZZA PEEL",
					videos: [
						'<iframe width="560" height="315" src="https://www.youtube.com/embed/I_u050UNyf4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
					],
					images: [
						"./images_min/pizza/01-min.jpg",
						["@midwestLifeandStyle", "./images_min/pizza/02-min.jpg"],
						"./images_min/pizza/03-min.jpg",
						"./images_min/pizza/04-min.jpg",
						["@tictacseaux", "./images_min/pizza/05-min.jpg"],
						["@mamazoeskitchen", "./images_min/pizza/06-min.jpg"],
						["@tictacseaux", "./images_min/pizza/07-min.jpg"],
					],
					subtitle: "PIZZA PEEL",
					subhead: "Pizza Peel",
					text:
						"<p>A pizza peel is a tool every pizza lover needs. It helps you get a pizza on and off a preheated pizza stone safely and with less mess. </p><br>This peel is made of durable acacia wood and has a tapered edge to help it slide easily under food. The hole at the end of the handle lets you hang it up for easy storage.</p>",
					recipes: [
						{
							id: "Homemade Pizza Dough",
							preview_image:
								"./modals/pizza/post-recipe-homemade-pizza-dough-min.jpg",
							link:
								"./modals/pizza/Recipes/post-recipe-homemade-pizza-dough-steps.pdf",
						},
					],
				},
				{
					yaw: 1.1271171703883915,
					pitch: 0.2273838905217449,
					title: "DELUXE AIR FRYER",
					images: [
						"./images_min/airfryer/01-min.jpg",
						"./images_min/airfryer/02-min.jpg",
						"./images_min/airfryer/03-min.jpg",
						["@jennlott", "./images_min/airfryer/04-min.jpg"],
						"./images_min/airfryer/05-min.jpg",
						"./images_min/airfryer/06-min.jpg",
						"./images_min/airfryer/07-min.jpg",
						["@lazynolaketo", "./images_min/airfryer/08-min.jpg"],
					],
					subhead: "Deluxe Air Fryer",
					text:
						"<h4>AIR FRYER, ROTISSERIE, & DEHYDRATOR ALL-IN-ONE</h4><br><p>Enjoy fried foods at home without all the mess, hassle, and oil of deep frying but with all the flavor and texture you love. Ours is family-sized to quickly cook up to six servings, a whole chicken or roast, or appetizers for a crowd. Like a convection oven, superheated air circulates giving food a crispy texture. No preheating is necessary, saving you precious time. Conveniently fits under kitchen cabinets.</p><br><p>You can make perfectly cooked rotisserie chicken, roast veggies, bake dessert, make beef jerky, and dehydrate fruits and veggies for healthy snacks. Let’s get cooking.</p>",
					recipes: [
						{
							id: "Homemade Beef Jerky",
							preview_image:
								"./modals/fryer/post-recipe-homemade-beef-jerky-usca-min.jpg",
							link:
								"./modals/fryer/Recipes/post-recipe-homemade-beef-jerky-steps-usca.pdf",
						},
						{
							id: "Kebab Combinations",
							preview_image: "./modals/fryer/post-recipe-kebab-combinations-min.jpg",
							link: "./modals/fryer/Recipes/post-recipe-kebab-combinations-steps.pdf",
						},
						{
							id: "Potato Tacos",
							preview_image: "./modals/fryer/post-recipe-potato-tacos-min.jpg",
							link: "./modals/fryer/Recipes/post-recipe-potato-tacos-steps.pdf",
						},
					],
				},
			],
		},

		{
			id: "2-island",
			name: "Island",
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
				yaw: 0.029532999599428678,
				pitch: 0.37261907223908075,
				fov: 1.3848081938437478,
			},
			linkHotspots: [
				{
					yaw: 0.16384151092357158,
					pitch: -0.06840678255884569,
					rotation: 3.141592653589793,
					target: "3-dining-room-table",
				},
				{
					yaw: 2.3691498471331336,
					pitch: -0.04055102538239197,
					rotation: 3.141592653589793,
					target: "0-range",
				},
				{
					yaw: -2.541777045943146,
					pitch: 0.1551054676711221,
					rotation: 3.141592653589793,
					target: "1-countertop",
				},
			],
			infoHotspots: [
				{
					yaw: 0.9252211561111885,
					pitch: 0.37401104062703183,
					title: "EAT WELL RECIPE BOOK",
					images: [""],
					subhead: "",
					fullWidth: true,
					text:
						"<iframe allowfullscreen='true' style='border:none;width:100%;height:100%;' src='//e.issuu.com/embed.html?d=p30530-012021usca-eat-well-ebook&hideIssuuLogo=true&hideShareButton=true&u=pamperedchef'></iframe>",
				},
				{
					yaw: -0.4090293373787688,
					pitch: 0.2717199998552431,
					title: "BE A CONSULTANT",
					videos: [
						'<iframe width="560" height="315" src="https://www.youtube.com/embed/aat1m2sbIvg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
					],
					images: [
						"./images_min/consultant/01-min.jpg",
						"./images_min/consultant/02-min.jpg",
					],
					containImages: true,
					subhead: "Be a Consultant",
					text:
						"<span class='addtl_modal_body_1'><h3 style='padding-top:1rem'>What's in It for You?</h3><p style='padding-top:0'>You mean... besides earning commission on every sale?</p><br/><span class='consultant_perks'>Here are more amazing perks!</span><br/><br/><h4 class='modal_block-header'> Work/Life Balance</h4><p>Make your business work around another job or family commitments-and take it wherever you go with your website and online tools.</p><h4 class='modal_block-header'> Free Products & Discounts</h4><p>You'll get 20–50% off products right away, and you'll have the chance to earn products or Pampered Chef logo gear every month.</p><h4 class='modal_block-header'> Fantastic Rewards</h4><p>On top of free products, you can earn cash rewards and even vacations-and you'll earn even more if you promote!</p><h4 class='modal_block-header'> Purpose & Community</h4><p>You'll be part of a strong community of people who share the same passion for helping others by inspiring mealtime wins.</p><br/><span class='modal_block-footer'>Contact your consultant to learn more today!</span></span><br/><br/>",
					pdf_links: [
						{
							id: "New Consultant Kit",
							preview_image:
								"./modals/be_a_consultant/flyer-new-consultant-kit-us_Page_1-min.jpg",
							link: "./modals/be_a_consultant/flyer-new-consultant-kit-us.pdf",
						},
						{
							id: "Make Your Everyday Better Poster",
							preview_image:
								"./modals/be_a_consultant/poster-everyday-better-checklist-20x30-us-min.jpg",
							link:
								"./modals/be_a_consultant/poster-everyday-better-checklist-20x30-us.pdf",
						},
					],
				},

				{
					yaw: -0.9441282059169254,
					pitch: 0.3569723830509055,
					title: "PREMIUM CHARCUTERIE & CHEESE BOARD SET",
					videos: [
						'<iframe width="560" height="315" src="https://www.youtube.com/embed/kaztmnKWbZg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
					],
					images: [
						"./images_min/charcuterie/01-min.jpg",
						"./images_min/charcuterie/02-min.jpg",
						"./images_min/charcuterie/03-min.jpg",
						"./images_min/charcuterie/04-min.jpg",
					],
					subhead: "Premium Charcuterie & Cheese Board Set",
					text:
						"<p>The Premium Charcuterie & Cheese Board Set has everything you need to make entertaining a breeze. The set features an Acacia wood Lazy Susan and our Charcuterie & Cheese Board Accessories.</p>",
					related_content: [
						{
							id: "How to Build a Charcuterie Board (Video)",
							preview_image: "./videos/charc_video_preview_img.jpg",
							link: "https://youtu.be/FGNCzBBoxY0",
						},
					],
				},
				{
					yaw: 0.4204906488606248,
					pitch: 0.6329996689133868,
					title: "HOST A PARTY",
					containImages: true,
					videos: [
						'<iframe width="560" height="315" src="https://www.youtube.com/embed/4Z8xfjQcrq0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
					],
					images: [
						"./images_min/hostaparty/01-min.jpg",
						"./images_min/hostaparty/02-min.jpg",
						"./images_min/hostaparty/03-min.jpg",
						"./images_min/hostaparty/04-min.jpg",
					],
					subhead: "Host a Party",
					text:
						"<span class='addtl_modal_body_2'><h4 class='modal_block-header'> Free Product Rewards</h4><p>The higher your party sales, the more free product value you get to spend on the products you want.</p><h4 class='modal_block-header'> Half-Price Products</h4><p>Get up to five, including exclusive host exclusive combos.</p><h4 class='modal_block-header'> Monthly Host Special</h4><p>Get an exclusive offer just for hosting.</p><h4 class='modal_block-header'> Booking Bonuses</h4><p>Get 40% off one item or set at any party booked from yours - and get $50 in free product rewards when three guests book parties!</p><h4 class='modal_block-header'> Discounted Products</h4><p>Save up to 30% at your party, and 10% for one year.</p><br/><span class='modal_block-footer'>Contact your consultant to learn more today!</span></span>",
					pdf_links: [
						{
							id: "Host Rewards PDF",
							preview_image:
								"./modals/host_party/p28619-092020us-host-rewards-min.jpg",
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
				yaw: 0.048362855901928015,
				pitch: 0.6209952289244729,
				fov: 1.3848081938437478,
			},
			linkHotspots: [
				{
					yaw: 3.0198094117322256,
					pitch: -0.060728879398961766,
					rotation: 3.141592653589793,
					target: "0-range",
				},
				{
					yaw: -2.605377437549734,
					pitch: -0.026950019865081387,
					rotation: 10.210176124166829,
					target: "1-countertop",
				},
				{
					yaw: -3.1020060371026723,
					pitch: 0.07910167543966651,
					rotation: 3.141592653589793,
					target: "2-island",
				},
			],
			infoHotspots: [
				{
					yaw: 0.975946969875185,
					pitch: 0.6133469702739518,

					title: "INSULATED SERVING BOWL SET",
					images: [
						"./images_min/insulated_bowl/01-min.jpg",
						"./images_min/insulated_bowl/02-min.jpg",
						"./images_min/insulated_bowl/03-min.jpg",
						["@lazynolaketo", "./images_min/insulated_bowl/04-min.jpg"],
						["@kristenskitchenkreations", "./images_min/insulated_bowl/05-min.jpg"],
					],
					subhead: "Insulated Serving Bowl Set",
					text:
						"<p>For holidays, potlucks, or any big meal, it can feel nearly impossible to keep everything warm. With this insulated serving bowl set, you can keep foods warm up to 2 hours.</p><br><p>The bowls’ double-walled vacuum insulation keeps food hot, prevents sweating, and has a stay-cool exterior. Works with cold foods, too!</p><br><p>Each bowl comes with a clear plastic lid that’s double-walled and lets you see what's inside. The lid also hooks onto the side of the bowl, making it easier to dish out and serve food.</p>",
				},
				{
					yaw: -0.8887952514793653,
					pitch: 0.6658357151531433,
					title: "SMALL SQUARE COOL & SERVE",
					videos: [
						'<iframe width="560" height="315" src="https://www.youtube.com/embed/b0gKhBjoqzM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
					],
					images: [
						"./images_min/coolserve/01-min.jpg",
						"./images_min/coolserve/02-min.jpg",
						["@kristy7graces", "./images_min/coolserve/03-min.jpg"],
						"./images_min/coolserve/04-min.jpg",
						["@laura_prietto", "./images_min/coolserve/05-min.jpg"],
					],
					subhead: "Small Square Cool & Serve",
					text:
						"<p>The fun-sized Small Square Cool & Serve is perfect for parties, picnics, snacks, lunch on the go, and road trips. The exclusive gel insert (which features a handy finger slot for easy removal) keeps veggies, fruit, cheese, deli meat, dip, and other snacks cool for 4–6 hours—even outdoors!</p><br><p>It comes with a clear insert divided into two compartments with a 1-cup dip well in the center and has solid walls that keep food from mixing. The lid snaps onto the base so it’s easy to transport, and it even fits neatly underneath while in use.</p>",
				},
				{
					yaw: 0.11338928925140301,
					pitch: 0.42166509285925535,
					title: "WOOD SALAD BOWL & SERVERS SET",
					images: [
						"./images_min/salad_bowl-min/01-min.jpg",
						"./images_min/salad_bowl-min/02-min.jpg",
						["@thecraftofcooking", "./images_min/salad_bowl-min/03-min.jpg"],
						["@theparsleypotato", "./images_min/salad_bowl-min/04-min.jpg"],
					],
					subhead: "Wood Salad Bowl & Servers Set",
					text:
						"<p>Even the simplest salads look impressive when served with this set. Our Wood Salad Bowl and Servers Set is made out of acacia wood with a rich color and beautiful grain that is not only durable, but moisture resistant. Each piece is one of a kind because of the natural variations in the wood.</p><br>The salad bowl holds a standard bag of lettuce with room for extra salad fixings. The serving spoon and fork are about 12-inches long and fit naturally into any party or dinner setting.<p>",
					recipes: [
						{
							id: "Classic Cobb Salad",
							preview_image: "./modals/salad/post-recipe-classic-cobb-salad-min.jpg",
							link:
								"./modals/salad/Recipes/flyer-recipe-classic-cobb-salad-02-usca.pdf",
						},
						{
							id: "Superfood Salad",
							preview_image:
								"./modals/salad/post-recipe-superfood-salad-usca-min.jpg",
							link: "./modals/salad/Recipes/flyer-recipe-superfood-salad-usca.pdf",
						},
						{
							id: "Southwestern Salad",
							preview_image:
								"./modals/salad/post-recipe-southwestern-salad-usca-min.jpg",
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
