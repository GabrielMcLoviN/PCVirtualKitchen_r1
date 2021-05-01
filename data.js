export var data = {
	scenes   : [
		{
			id                    : '0-counter',
			name                  : 'Counter',
			levels                : [
				{
					tileSize     : 256,
					size         : 256,
					fallbackOnly : true
				},
				{
					tileSize : 512,
					size     : 512
				},
				{
					tileSize : 512,
					size     : 1024
				},
				{
					tileSize : 512,
					size     : 2048
				}
			],
			faceSize              : 2048,
			initialViewParameters : {
				yaw   : -1.7305354528919654,
				pitch : 0.18810183577540407,
				fov   : 1.3848081938437478
			},
			linkHotspots          : [
				{
					yaw      : -1.600429731329104,
					pitch    : 0.5002192152175962,
					rotation : 13.351768777756625,
					target   : '1-range',
					class    : 'second-tour-starter'
				},
				{
					yaw      : -2.0067365901605037,
					pitch    : 0.6455930272769592,
					rotation : 5.497787143782138,
					target   : '2-island'
				},
				{
					yaw      : 3.1144623360250305,
					pitch    : 0.25626992303908835,
					rotation : 25.918139392115812,
					target   : '3-dining'
				}
			],
			infoHotspots          : [
				{
					yaw     : -1.1815019536187705,
					pitch   : 0.21382602521738114,
					title   : 'MANUAL FOOD PROCESSOR',
					class   : 'intro-starter',
					videos  : [
						'<lite-youtube class="yt-embed" videoid="XdYZOHuvdhU" videotitle="Pampered Chef Manual Food Processor"></lite-youtube>'
					],
					images  : [
						'./images_min/foodprocessor/01-min.jpg',
						'./images_min/foodprocessor/02-min.jpg',
						'./images_min/foodprocessor/03-min.jpg',
						[
							'@erica-ekman',
							'./images_min/foodprocessor/04-min.jpg'
						],
						[
							'@erica-ekman',
							'./images_min/foodprocessor/05-min.jpg'
						]
					],
					subhead : 'Manual Food Processor',
					text    :
						'<p>Our Manual Food Processor can take care of nearly all your chopping and mincing needs, without needing an outlet. Just add your ingredients to the bowl and pump the handle for fast salsa, dip, cookie dough, baby food, tapenade. The more you pump, the finer it cuts! And when you’re done, the handle locks into the lid for easy storage in your cabinets.</p>',
					recipes : [
						{
							id            : 'Pico De Gallo',
							preview_image :
								'./modals/foodprocessor/post-recipe-pico-de-gallo-usca-min.jpg',
							link          :
								'./modals/foodprocessor/post-recipe-pico-de-gallo-steps-usca.pdf'
						},
						{
							id            : 'Cucumber-Dill Guacamole',
							preview_image :
								'./modals/foodprocessor/post-recipe-cucumber-dill-guacamole-usca-min.jpg',
							link          :
								'./modals/foodprocessor/post-recipe-cucumber-dill-guacamole-steps-usca.pdf'
						},
						{
							id            : 'Cranberry Salsa',
							preview_image :
								'./modals/foodprocessor/post-recipe-cranberry-salsa-usca-min.jpg',
							link          :
								'./modals/foodprocessor/post-recipe-cranberry-salsa-steps-usca.pdf'
						}
					]
				},
				{
					yaw      : -0.9109833783616796,
					pitch    : 0.27485461667772526,
					title    : 'PIZZA PEEL',
					videos   : [
						'<lite-youtube class="yt-embed" videoid="I_u050UNyf4" videotitle="Pampered Chef Pizza Peel"></lite-youtube>'
					],
					images   : [
						'./images_min/pizza/01-min.jpg',
						[
							'@midwestLifeandStyle',
							'./images_min/pizza/02-min.jpg'
						],
						'./images_min/pizza/03-min.jpg',
						'./images_min/pizza/04-min.jpg',
						[
							'@tictacseaux',
							'./images_min/pizza/05-min.jpg'
						],
						[
							'@mamazoeskitchen',
							'./images_min/pizza/06-min.jpg'
						],
						[
							'@tictacseaux',
							'./images_min/pizza/07-min.jpg'
						]
					],
					subtitle : 'PIZZA PEEL',
					subhead  : 'Pizza Peel',
					text     :
						'<p>A pizza peel is a tool every pizza lover needs. It helps you get a pizza on and off a preheated pizza stone safely and with less mess. </p><br>This peel is made of durable acacia wood and has a tapered edge to help it slide easily under food. The hole at the end of the handle lets you hang it up for easy storage.</p>',
					recipes  : [
						{
							id            : 'Homemade Pizza Dough',
							preview_image :
								'./modals/pizza/post-recipe-homemade-pizza-dough-min.jpg',
							link          :
								'./modals/pizza/post-recipe-homemade-pizza-dough-steps.pdf'
						}
					]
				},
				{
					yaw     : -0.7506175698032482,
					pitch   : 0.49199024725491114,
					title   : 'DELUXE ELECTRIC GRILL & GRIDDLE',
					videos  : [
						'<lite-youtube class="yt-embed" videoid="ztHdcO9j_ts" videotitle="Pampered Chef Deluxe Electric Grill & Griddle"></lite-youtube>'
					],
					images  : [
						'./images_min/grill/grill-1.jpg',
						'./images_min/grill/grill-2.jpg',
						'./images_min/grill/grill-3.jpg',
						'./images_min/grill/grill-4.jpg'
					],
					subhead : 'Deluxe Electric Grill & Griddle',
					text    :
						"<p>Whether you're making breakfast, lunch, dinner, snacks, or apps, this multitasker is ready when you are. And when your day does a 180, so will this grill, turning out family favorites and inspiring something fresh and new.</p><br/><p>You’ll get four nonstick plates: two ridged grill plates and two smooth griddle plates that can be used in any combination and can be set to different temperatures for endless possibilities. For no-guess cooking, just set the included temperature probe to how you want your food cooked, and it’ll let you know when it’s ready. And it comes with a cooking guide with handy charts and delicious recipes.</p><br/><p>There are three cooking positions for maximum versatility. You can cook with the lid closed to use as a contact press to grill meat and to turn out restaurant-style sandwiches, or you can open the grill flat on the counter to cook on both plates at the same time. There is also a Top Melt position so the top hovers over without touching the food to melt cheese. Plus, you can adjust the height of the top so it won’t smash thicker foods.</p>",
					recipes : [
						{
							id            : 'Banana Foster Sandwich',
							preview_image :
								'./modals/grill/banana_foster-img.jpg',
							link          :
								'./modals/grill/post-bananas-foster-sandwich-steps.pdf'
						},
						{
							id            : 'Greek Zucchini Fritters',
							preview_image :
								'./modals/grill/greek_fritters-img.jpg',
							link          :
								'./modals/grill/post-greek-zucchini-fritters-steps.pdf'
						},
						{
							id            : 'French Onion Sliders',
							preview_image :
								'./modals/grill/fr_onion_sliders-img.jpg',
							link          :
								'./modals/grill/post-french-onion-sliders-steps.pdf'
						}
					]
				}
			]
		},
		{
			id                    : '1-range',
			name                  : 'Range',
			levels                : [
				{
					tileSize     : 256,
					size         : 256,
					fallbackOnly : true
				},
				{
					tileSize : 512,
					size     : 512
				},
				{
					tileSize : 512,
					size     : 1024
				},
				{
					tileSize : 512,
					size     : 2048
				}
			],
			faceSize              : 2048,
			initialViewParameters : {
				yaw   : 0.15935469126256763,
				pitch : 0.47446732721544294,
				fov   : 1.3848081938437478
			},
			linkHotspots          : [
				{
					yaw      : 1.54461620215851,
					pitch    : 0.4545689203398311,
					rotation : 10.995574287564278,
					target   : '0-counter'
				},
				{
					yaw      : 1.9983218513556338,
					pitch    : 0.6812157926345623,
					rotation : 7.0685834705770345,
					target   : '2-island'
				},
				{
					yaw      : -3.0429579353509766,
					pitch    : 0.17921049226157493,
					rotation : 5.497787143782138,
					target   : '3-dining'
				}
			],
			infoHotspots          : [
				{
					yaw     : -0.6429950241920146,
					pitch   : 0.6079593591219776,
					title   : '12" STAINLESS STEEL NONSTICK SKILLET',
					videos  : [
						'<lite-youtube class="yt-embed" videoid="hZ739Jtg_yg" videotitle="Pampered Chef Deluxe Stainless Steel Nonstick Skillet"></lite-youtube>'
					],
					images  : [
						'./images_min/nonstick/01-min.jpg',
						'./images_min/nonstick/02-min.jpg',
						'./images_min/nonstick/03-min.jpg',
						'./images_min/nonstick/04-min.jpg',
						'./images_min/nonstick/05-min.jpg',
						'./images_min/nonstick/06-min.jpg',
						[
							'@prettyfocusedcourse',
							'./images_min/nonstick/07-min.jpg'
						],
						'./images_min/nonstick/10-min.jpg',
						[
							'@whatslindacooking',
							'./images_min/nonstick/08-min.jpg'
						],
						'./images_min/nonstick/09-min.jpg',
						// "./1080x1080/nonstick/11.jpg",
						[
							'@jessywhitenton',
							'./images_min/nonstick/12-min.jpg'
						]
					],
					subhead : '12" Stainless Steel Nonstick Skillet',
					text    :
						'<p>This innovative pan combines the best features of stainless steel and nonstick cookware. The nonstick mesh coating provides the perfect sear (without the mess) and leaves fond for pan sauces and gravy. The size is perfect for one-pot meals.</p><br><p>Our stainless steel skillets are a true hybrid: They combine the amazing cooking and heating capabilities of traditional stainless steel with the easy cleanup of nonstick cookware. With these innovative pans, you can get the perfect sear, make professional-grade pan sauces, and look like a pro—without breaking a sweat.</p>',
					recipes : [
						{
							id            : 'Chicken Sausage & Spinach Ravioli',
							preview_image :
								'./modals/nonstick/post-recipe-chicken-sausage-spinach-ravioli-usca-min.jpg',
							link          :
								'./modals/nonstick/post-recipe-chicken-sausage-spinach-ravioli-steps.pdf'
						},
						{
							id            : 'Egg Roll in a Bowl',
							preview_image :
								'./modals/nonstick/post-recipe-egg-roll-in-a-bowl-min.jpg',
							link          :
								'./modals/nonstick/post-recipe-egg-roll-in-a-bowl-steps-usca.pdf'
						},
						{
							id            : 'Roasted Chicken & Asparagus',
							preview_image :
								'./modals/nonstick/post-recipe-roasted-chicken-asparagus-usca-min.jpg',
							link          :
								'./modals/nonstick/post-recipe-roasted-chicken-asparagus-steps-usca.pdf'
						}
					]
				},
				{
					yaw     : 0.2592774000177265,
					pitch   : 0.47995705785557874,
					title   : '6-QT. ENAMELED DUTCH OVEN',
					videos  : [
						'<lite-youtube class="yt-embed" videoid="qsHmDecSbGY" videotitle="Pampered Chef Enamled Dutch Oven"></lite-youtube>'
					],
					images  : [
						'./images_min/dutchoven/01-min.jpg',
						'./images_min/dutchoven/02-min.jpg',
						'./images_min/dutchoven/03-min.jpg',
						'./images_min/dutchoven/04-min.jpg',
						'./images_min/dutchoven/05-min.jpg',
						'./images_min/dutchoven/07-min.jpg'
					],
					subhead : '6-qt. Enameled Dutch Oven',
					text    :
						'<p>Enameled cast iron is the kind of cookware that will become a fixture at every special meal you make—and that includes weeknight meals. This Dutch oven is beautiful so it’s ready to go directly from your stove (including induction) or oven to your table. You’ll reach for it again and again because it’s low maintenance and versatile.</p><br><p>The 6-qt. (5.7-L) Dutch oven has a light-colored enameled interior, which means you can start using it right away—no seasoning required—and it lets you easily see food browning so you can avoid scorching it. Cast iron’s excellent heat retention means that food stays hot and delicious even if not everyone makes it to the table as soon as dinner’s ready.</p><br><p>The inside of the lid is covered with bumps that redirect the condensation in the pot to drip back onto the food, making it a self-basting pot. This makes your food juicy, tender, and more flavorful.</p>',
					recipes : [
						{
							id            : 'Baked Orzo',
							preview_image :
								'./modals/dutch_oven/post-recipe-baked-orzo-min.jpg',
							link          :
								'./modals/dutch_oven/post-recipe-baked-orzo-steps.pdf'
						},
						{
							id            : 'Baked Ziti with Sausage',
							preview_image :
								'./modals/dutch_oven/post-recipe-baked-ziti-with-sausage-min.jpg',
							link          :
								'./modals/dutch_oven/post-recipe-baked-ziti-with-sausage-steps.pdf'
						},
						{
							id            : 'Dutch Oven Bread',
							preview_image :
								'./modals/dutch_oven/post-recipe-dutch-oven-bread-min.jpg',
							link          :
								'./modals/dutch_oven/post-recipe-dutch-oven-bread-steps.pdf'
						}
					]
				},
				{
					yaw     : 0.7912179938169785,
					pitch   : 0.6150013929935234,
					title   : '12" CAST IRON SKILLET',
					videos  : [
						'<lite-youtube class="yt-embed" videoid="PlKzT_mXPUI" videotitle="Pampered Chef Cast Iron Skillet"></lite-youtube>'
					],
					images  : [
						'./images_min/castiron/01-min.jpg',
						'./images_min/castiron/02-min.jpg',
						[
							'@makandheart',
							'./images_min/castiron/03-min.jpg'
						],
						'./images_min/castiron/04-min.jpg'
					],
					subhead : '12" Cast Iron Skillet',
					text    :
						'<p>Our 12" skillet comes preseasoned, so you can start using it right away on most heat sources. And its natural, nonstick surface gets better and better the more you use it.</p><br><p>Reach for this pan when you need a perfect sear on steaks or a golden, crispy crust on baked treats. Our skillet has a one-of-a-kind shape that gives you more cooking area—enough to fit four chicken breasts at one time. No need to cook in batches to feed your friends or family.</p><br><p>The two, low-profile pour spouts let you easily drain off pan juices whether you’re left-or right-handed. With the cooking traditions and durability of cast iron comes a certain weightiness, but not to worry, our skillet has two handles to help you lift and carry it.</p>',
					recipes : [
						{
							id            : 'Stovetop Mac & Cheese',
							preview_image :
								'./modals/cast_iron/post-recipe-mac-n-cheese-usca-min.jpg',
							link          :
								'./modals/cast_iron/post-recipe-mac-n-cheese-steps-usca.pdf'
						},
						{
							id            : 'Chili Lime Pork',
							preview_image :
								'./modals/cast_iron/post-recipe-chili-lime-pork-usca-min.jpg',
							link          :
								'./modals/cast_iron/post-recipe-chili-lime-pork-steps-usca.pdf'
						},
						{
							id            : 'Blackened Chicken',
							preview_image :
								'./modals/cast_iron/post-recipe-blackened-chicken-min.jpg',
							link          :
								'./modals/cast_iron/post-recipe-blackened-chicken-steps.pdf'
						}
					]
				}
			]
		},

		{
			id                    : '2-island',
			name                  : 'Island',
			levels                : [
				{
					tileSize     : 256,
					size         : 256,
					fallbackOnly : true
				},
				{
					tileSize : 512,
					size     : 512
				},
				{
					tileSize : 512,
					size     : 1024
				},
				{
					tileSize : 512,
					size     : 2048
				}
			],
			faceSize              : 2048,
			initialViewParameters : {
				yaw   : 0.16781932880340733,
				pitch : 0.6173271244982672,
				fov   : 1.3848081938437478
			},
			linkHotspots          : [
				{
					yaw      : 2.073695580130355,
					pitch    : 0.6867101573530814,
					rotation : 7.0685834705770345,
					target   : '1-range'
				},
				{
					yaw      : -2.240233598672516,
					pitch    : 0.7910227684497411,
					rotation : 5.497787143782138,
					target   : '0-counter'
				},
				{
					yaw      : -0.005228740281733479,
					pitch    : 0.23492673103993944,
					rotation : 44.767695313654535,
					target   : '3-dining'
				}
			],
			infoHotspots          : [
				{
					yaw       : 0.9117469385656278,
					pitch     : 0.420756560898079,
					title     : 'EAT WELL RECIPE BOOK',
					images    : [
						''
					],
					subhead   : '',
					fullWidth : true,
					text      :
						"<iframe loading=`lazy` allowfullscreen='true' style='border:none;width:100%;height:100%;' src='//e.issuu.com/embed.html?d=p30530-012021usca-eat-well-ebook&hideIssuuLogo=true&hideShareButton=true&u=pamperedchef'></iframe>"
				},
				{
					yaw           : -0.3672164953440813,
					pitch         : 0.47383427360583674,
					title         : 'BE A CONSULTANT',
					videos        : [
						'<lite-youtube class="yt-embed" videoid="aat1m2sbIvg" videotitle="Pampered Chef: Consultant Benefits"></lite-youtube>'
					],
					images        : [
						'./images_min/consultant/img-1.jpg',
						'./images_min/consultant/img-2.jpg',
						'./images_min/consultant/img-3.jpg'
					],
					containImages : true,
					subhead       : 'Be a Consultant',
					text          :
						"<span class='addtl_modal_body_2'><h4 class='modal_block-header'>What's in It for You?</h4><p style='padding-top:0; margin-bottom: 0;'>You mean... besides earning commission on every sale?</p><br/><p class='consultant_perks'>Here are more amazing perks!</p><br/><br/><h4 class='modal_block-header'> Work/Life Balance</h4><p>Make your business work around another job or family commitments-and take it wherever you go with your website and online tools.</p><h4 class='modal_block-header'> Free Products & Discounts</h4><p>You'll get 20–50% off products right away, and you'll have the chance to earn products or Pampered Chef logo gear every month.</p><h4 class='modal_block-header'> Fantastic Rewards</h4><p>On top of free products, you can earn cash rewards and even vacations-and you'll earn even more if you promote!</p><h4 class='modal_block-header'> Purpose & Community</h4><p>You'll be part of a strong community of people who share the same passion for helping others by inspiring mealtime wins.</p><br/><span class='modal_block-footer'>Contact your consultant to learn more today!</span></span><br/><br/>",
					pdf_links     : [
						{
							id            : 'New Consultant Kit (US)',
							preview_image :
								'./modals/be_a_consultant/new_consultant_kit-us.jpg',
							link          :
								'./modals/be_a_consultant/New-Consultant-Kit(US).pdf'
						},
						{
							id            : 'New Consultant Kit (CA)',
							preview_image :
								'./modals/be_a_consultant/new_consultant_kit-ca.jpg',
							link          :
								'./modals/be_a_consultant/New-Consultant-Kit(CA).pdf'
						}
					]
				},

				{
					yaw             : 0.24380359723473255,
					pitch           : 0.7252554361478651,
					title           : 'PREMIUM CHARCUTERIE & CHEESE BOARD SET',
					videos          : [
						'<lite-youtube class="yt-embed" videoid="kaztmnKWbZg" videotitle="Pampered Chef Charcuterie & Cheese Board Set"></lite-youtube>'
					],
					images          : [
						'./images_min/charcuterie/01-min.jpg',
						'./images_min/charcuterie/02-min.jpg',
						'./images_min/charcuterie/03-min.jpg',
						'./images_min/charcuterie/04-min.jpg'
					],
					subhead         : 'Premium Charcuterie & Cheese Board Set',
					text            :
						'<p>The Premium Charcuterie & Cheese Board Set has everything you need to make entertaining a breeze. The set features an Acacia wood Lazy Susan and our Charcuterie & Cheese Board Accessories.</p>',
					related_content : [
						{
							id            :
								'How to Build a Charcuterie Board (Video)',
							preview_image :
								'./videos/charc_video_preview_img.jpg',
							link          : 'https://youtu.be/FGNCzBBoxY0'
						}
					]
				},
				{
					yaw           : -0.7068853189452113,
					pitch         : 0.44914982598033504,
					title         : 'HOST A PARTY',
					containImages : true,
					videos        : [
						'<lite-youtube class="yt-embed" videoid="4Z8xfjQcrq0" videotitle="Pampered Chef Parties"></lite-youtube>'
					],
					images        : [
						'./images_min/hostaparty/img-01.jpg',
						'./images_min/hostaparty/img-02.jpg',
						'./images_min/hostaparty/img-03.jpg',
						'./images_min/hostaparty/img-04.jpg'
					],
					subhead       : 'Host a Party',
					text          :
						"<span class='addtl_modal_body_2'><h4 class='modal_block-header'> Free Product Rewards</h4><p>The higher your party sales, the more free product value you get to spend on the products you want.</p><h4 class='modal_block-header'> Half-Price Products</h4><p>Get up to five, including exclusive host exclusive combos.</p><h4 class='modal_block-header'> Monthly Host Special</h4><p>Get an exclusive offer just for hosting.</p><h4 class='modal_block-header'> Booking Bonuses</h4><p>Get 40% off one item or set at any party booked from yours - and get $50 in free product rewards when three guests book parties!</p><h4 class='modal_block-header'> Discounted Products</h4><p>Save up to 30% at your party, and 10% for one year.</p><br/><span class='modal_block-footer'>Contact your consultant to learn more today!</span></span>",
					pdf_links     : [
						{
							id            : 'Host a Party (US)',
							preview_image :
								'./modals/host_party/host_a_party-us.jpg',
							link          :
								'./modals/host_party/Host-a-Party(US).pdf'
						},
						{
							id            : 'Host a Party (CA)',
							preview_image :
								'./modals/host_party/host_a_party-ca.jpg',
							link          :
								'./modals/host_party/Host-a-Party(CA).pdf'
						}
					]
				}
			]
		},

		{
			id                    : '3-dining',
			name                  : 'Dining',
			levels                : [
				{
					tileSize     : 256,
					size         : 256,
					fallbackOnly : true
				},
				{
					tileSize : 512,
					size     : 512
				},
				{
					tileSize : 512,
					size     : 1024
				},
				{
					tileSize : 512,
					size     : 2048
				}
			],
			faceSize              : 2048,
			initialViewParameters : {
				yaw   : -0.26892060769045756,
				pitch : 0.5234438282081175,
				fov   : 1.3848081938437478
			},
			linkHotspots          : [
				{
					yaw      : -0.8101987811746767,
					pitch    : 0.25245930885540346,
					rotation : 10.210176124166829,
					target   : '0-counter'
				},
				{
					yaw      : -2.354654286612135,
					pitch    : 0.1774186200543646,
					rotation : 5.497787143782138,
					target   : '0-counter'
				},
				{
					yaw      : 2.607801081118793,
					pitch    : 0.1750555843206847,
					rotation : 0.7853981633974483,
					target   : '1-range'
				},
				{
					yaw      : -2.721992958257644,
					pitch    : 0.6033749028382758,
					rotation : 18.06415775814132,
					target   : '2-island'
				}
			],
			infoHotspots          : [
				{
					yaw     : 0.49130821657672286,
					pitch   : 0.58489454445475,
					title   : 'INSULATED SERVING BOWL SET',
					images  : [
						'./images_min/insulated_bowl/01-min.jpg',
						'./images_min/insulated_bowl/02-min.jpg',
						'./images_min/insulated_bowl/03-min.jpg',
						[
							'@lazynolaketo',
							'./images_min/insulated_bowl/04-min.jpg'
						],
						[
							'@kristenskitchenkreations',
							'./images_min/insulated_bowl/05-min.jpg'
						]
					],
					subhead : 'Insulated Serving Bowl Set',
					text    :
						"<p>For holidays, potlucks, or any big meal, it can feel nearly impossible to keep everything warm. With this insulated serving bowl set, you can keep foods warm up to 2 hours.</p><br><p>The bowls’ double-walled vacuum insulation keeps food hot, prevents sweating, and has a stay-cool exterior. Works with cold foods, too!</p><br><p>Each bowl comes with a clear plastic lid that’s double-walled and lets you see what's inside. The lid also hooks onto the side of the bowl, making it easier to dish out and serve food.</p>"
				},
				{
					yaw     : -0.8810722073104316,
					pitch   : 0.452917691463405,
					title   : 'SMALL SQUARE COOL & SERVE',
					videos  : [
						'<lite-youtube class="yt-embed" videoid="b0gKhBjoqzM" videotitle="Pampered Chef Small Square Cool & Serve"></lite-youtube>'
					],
					images  : [
						'./images_min/coolserve/01-min.jpg',
						'./images_min/coolserve/02-min.jpg',
						[
							'@kristy7graces',
							'./images_min/coolserve/03-min.jpg'
						],
						'./images_min/coolserve/04-min.jpg',
						[
							'@laura_prietto',
							'./images_min/coolserve/05-min.jpg'
						]
					],
					subhead : 'Small Square Cool & Serve',
					text    :
						'<p>The fun-sized Small Square Cool & Serve is perfect for parties, picnics, snacks, lunch on the go, and road trips. The exclusive gel insert (which features a handy finger slot for easy removal) keeps veggies, fruit, cheese, deli meat, dip, and other snacks cool for 4–6 hours—even outdoors!</p><br><p>It comes with a clear insert divided into two compartments with a 1-cup dip well in the center and has solid walls that keep food from mixing. The lid snaps onto the base so it’s easy to transport, and it even fits neatly underneath while in use.</p>'
				},
				{
					yaw     : -0.26892060769045756,
					pitch   : 0.5234438282081175,
					title   : 'WOOD SALAD BOWL & SERVERS SET',
					images  : [
						'./images_min/salad_bowl-min/01-min.jpg',
						'./images_min/salad_bowl-min/02-min.jpg',
						[
							'@thecraftofcooking',
							'./images_min/salad_bowl-min/03-min.jpg'
						],
						[
							'@theparsleypotato',
							'./images_min/salad_bowl-min/04-min.jpg'
						]
					],
					subhead : 'Wood Salad Bowl & Servers Set',
					text    :
						'<p>Even the simplest salads look impressive when served with this set. Our Wood Salad Bowl and Servers Set is made out of acacia wood with a rich color and beautiful grain that is not only durable, but moisture resistant. Each piece is one of a kind because of the natural variations in the wood.</p><br>The salad bowl holds a standard bag of lettuce with room for extra salad fixings. The serving spoon and fork are about 12-inches long and fit naturally into any party or dinner setting.<p>',
					recipes : [
						{
							id            : 'Classic Cobb Salad',
							preview_image :
								'./modals/salad/post-recipe-classic-cobb-salad-min.jpg',
							link          :
								'./modals/salad/flyer-recipe-classic-cobb-salad-02-usca.pdf'
						},
						{
							id            : 'Superfood Salad',
							preview_image :
								'./modals/salad/post-recipe-superfood-salad-usca-min.jpg',
							link          :
								'./modals/salad/flyer-recipe-superfood-salad-usca.pdf'
						},
						{
							id            : 'Southwestern Salad',
							preview_image :
								'./modals/salad/post-recipe-southwestern-salad-usca-min.jpg',
							link          :
								'./modals/salad/post-recipe-southwestern-salad-steps-usca.pdf'
						}
					]
				}
			]
		}
	],
	name     : 'scenes-x4',
	settings : {
		mouseViewMode      : 'drag',
		autorotateEnabled  : false,
		fullscreenButton   : true,
		viewControlButtons : false
	}
};
