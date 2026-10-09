const UPI_ID = "mourimaofficial@okicici";
const MERCHANT_NAME = "Foodie Express";

const restaurants = [

{
  name:"Spice Garden",
  rating:"4.8",
  image:"https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
  foods:[
    { id:1, name:"Chicken Biryani", price:249, tags:["biryani","chicken","rice","indian","spicy"],
      image:"https://www.thespruceeats.com/thmb/XDBL9gA6A6nYWUdsRZ3QwH084rk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-chicken-biryani-recipe-7367850-hero-A-ed211926bb0e4ca1be510695c15ce111.jpg" },
    { id:2, name:"Paneer Butter Masala", price:199, tags:["paneer","indian","curry","veg","north indian"],
      image:"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1200&auto=format&fit=crop" },
    { id:3, name:"Mutton Rogan Josh", price:329, tags:["mutton","indian","curry","spicy","kashmiri"],
      image:"https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1200&auto=format&fit=crop" },
    { id:16, name:"Butter Naan", price:49, tags:["naan","bread","indian","veg"],
      image:"https://images.unsplash.com/photo-1601050690597-df0568fa7098?q=80&w=1200&auto=format&fit=crop" },
    { id:17, name:"Dal Makhani", price:179, tags:["dal","indian","curry","veg","punjabi"],
      image:"https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1200&auto=format&fit=crop" },
    { id:34, name:"Hyderabadi Dum Biryani", price:289, tags:["biryani","rice","chicken","indian","hyderabadi","spicy"],
      image:"https://images.unsplash.com/photo-1563379091339-be352c7ad98e?q=80&w=1200&auto=format&fit=crop" },
    { id:35, name:"Palak Paneer", price:189, tags:["paneer","spinach","indian","veg","curry","healthy"],
      image:"https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=1200&auto=format&fit=crop" },
    { id:36, name:"Tandoori Roti", price:39, tags:["bread","indian","roti","veg","tandoor"],
      image:"https://images.unsplash.com/photo-1606491956689-2ea866858f66?q=80&w=1200&auto=format&fit=crop" }
  ]
},

{
  name:"Burger Hub",
  rating:"4.5",
  image:"https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop",
  foods:[
    { id:4, name:"Cheese Burger", price:149, tags:["burger","cheese","fast food","snack"],
      image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop" },
    { id:5, name:"French Fries", price:99, tags:["fries","snack","fast food","side"],
      image:"https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=1200&auto=format&fit=crop" },
    { id:6, name:"Chicken Burger", price:179, tags:["burger","chicken","fast food"],
      image:"https://images.unsplash.com/photo-1520072959219-c595dc870360?q=80&w=1200&auto=format&fit=crop" },
    { id:18, name:"Veggie Burger", price:139, tags:["burger","veg","fast food","healthy"],
      image:"https://images.unsplash.com/photo-1520072959219-c595dc870360?q=80&w=1200&auto=format&fit=crop" },
    { id:19, name:"Onion Rings", price:89, tags:["snack","fast food","side","fried"],
      image:"https://images.unsplash.com/photo-1630384060421-cb2665003c0e?q=80&w=1200&auto=format&fit=crop" },
    { id:37, name:"BBQ Bacon Burger", price:199, tags:["burger","bacon","bbq","chicken","fast food"],
      image:"https://images.unsplash.com/photo-1553979459-d222affba015?q=80&w=1200&auto=format&fit=crop" },
    { id:38, name:"Vanilla Milkshake", price:119, tags:["milkshake","dessert","cold","sweet","beverage"],
      image:"https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1200&auto=format&fit=crop" },
    { id:39, name:"Potato Wedges", price:109, tags:["fries","potato","snack","side","fast food"],
      image:"https://images.unsplash.com/photo-1639024471283-035188835f42?q=80&w=1200&auto=format&fit=crop" }
  ]
},

{
  name:"Pizza Palace",
  rating:"4.9",
  image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
  foods:[
    { id:7, name:"Pepperoni Pizza", price:399, tags:["pizza","pepperoni","italian","fast food"],
      image:"https://images.unsplash.com/photo-1604382355076-af4b0eb60143?q=80&w=1200&auto=format&fit=crop" },
    { id:8, name:"Veggie Pizza", price:349, tags:["pizza","veg","italian","cheese"],
      image:"https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=1200&auto=format&fit=crop" },
    { id:9, name:"Garlic Bread", price:129, tags:["bread","garlic","italian","snack","side"],
      image:"https://images.unsplash.com/photo-1579631542720-3a87824fff86?q=80&w=1200&auto=format&fit=crop" },
    { id:20, name:"Margherita Pizza", price:299, tags:["pizza","veg","italian","cheese"],
      image:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1200&auto=format&fit=crop" },
    { id:21, name:"BBQ Chicken Pizza", price:429, tags:["pizza","chicken","bbq","italian"],
      image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1200&auto=format&fit=crop" },
    { id:40, name:"Four Cheese Pizza", price:379, tags:["pizza","cheese","italian","veg"],
      image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop" },
    { id:41, name:"Buffalo Chicken Wings", price:249, tags:["chicken","wings","spicy","snack","fast food"],
      image:"https://images.unsplash.com/photo-1527477396000-e27137b331dd?q=80&w=1200&auto=format&fit=crop" },
    { id:42, name:"Penne Arrabbiata", price:229, tags:["pasta","italian","veg","spicy","tomato"],
      image:"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1200&auto=format&fit=crop" }
  ]
},

{
  name:"Sweet Heaven",
  rating:"4.7",
  image:"https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop",
  foods:[
    { id:10, name:"Chocolate Cake", price:299, tags:["dessert","cake","chocolate","sweet"],
      image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop" },
    { id:11, name:"Ice Cream Sundae", price:179, tags:["dessert","ice cream","sweet","cold"],
      image:"https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1200&auto=format&fit=crop" },
    { id:12, name:"Brownie", price:149, tags:["dessert","chocolate","brownie","sweet"],
      image:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1200&auto=format&fit=crop" },
    { id:22, name:"Red Velvet Cupcake", price:99, tags:["dessert","cupcake","sweet","cake"],
      image:"https://images.unsplash.com/photo-1616530940355-351fabd95258?q=80&w=1200&auto=format&fit=crop" },
    { id:23, name:"Gulab Jamun", price:89, tags:["dessert","indian","sweet","traditional"],
      image:"https://images.unsplash.com/photo-1582878826629-29ae759162e6?q=80&w=1200&auto=format&fit=crop" },
    { id:43, name:"Tiramisu", price:219, tags:["dessert","italian","coffee","cake","sweet"],
      image:"https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1200&auto=format&fit=crop" },
    { id:44, name:"Fresh Fruit Tart", price:189, tags:["dessert","fruit","tart","sweet","pastry"],
      image:"https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1200&auto=format&fit=crop" },
    { id:45, name:"Malai Kulfi", price:99, tags:["dessert","indian","ice cream","sweet","cold"],
      image:"https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1200&auto=format&fit=crop" }
  ]
},

{
  name:"Healthy Bowl",
  rating:"4.6",
  image:"https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1200&auto=format&fit=crop",
  foods:[
    { id:13, name:"Caesar Salad", price:189, tags:["salad","healthy","veg","bowl"],
      image:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop" },
    { id:14, name:"Fruit Bowl", price:159, tags:["fruit","healthy","bowl","veg","fresh"],
      image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop" },
    { id:15, name:"Veg Sandwich", price:129, tags:["sandwich","veg","healthy","snack"],
      image:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1200&auto=format&fit=crop" },
    { id:24, name:"Grilled Chicken Salad", price:219, tags:["salad","chicken","healthy","protein"],
      image:"https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?q=80&w=1200&auto=format&fit=crop" },
    { id:25, name:"Quinoa Bowl", price:199, tags:["quinoa","healthy","bowl","veg","protein"],
      image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop" },
    { id:46, name:"Acai Bowl", price:229, tags:["acai","healthy","bowl","fruit","breakfast","vegan"],
      image:"https://images.unsplash.com/photo-1590301157890-4810ed352017?q=80&w=1200&auto=format&fit=crop" },
    { id:47, name:"Greek Yogurt Parfait", price:149, tags:["yogurt","healthy","breakfast","fruit","protein"],
      image:"https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1200&auto=format&fit=crop" }
  ]
},

{
  name:"Sushi Express",
  rating:"4.8",
  image:"https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=1200&auto=format&fit=crop",
  foods:[
    { id:26, name:"Salmon Sushi Roll", price:349, tags:["sushi","seafood","japanese","roll"],
      image:"https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=1200&auto=format&fit=crop" },
    { id:27, name:"Veg California Roll", price:279, tags:["sushi","veg","japanese","roll"],
      image:"https://images.unsplash.com/photo-1617195737494-167ea5fb1acc?q=80&w=1200&auto=format&fit=crop" },
    { id:28, name:"Miso Soup", price:99, tags:["soup","japanese","starter","healthy"],
      image:"https://images.unsplash.com/photo-1606491956689-2ea866858f66?q=80&w=1200&auto=format&fit=crop" },
    { id:29, name:"Chicken Teriyaki Bowl", price:299, tags:["japanese","chicken","bowl","rice"],
      image:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200&auto=format&fit=crop" },
    { id:48, name:"Dragon Roll", price:389, tags:["sushi","seafood","japanese","roll","eel"],
      image:"https://images.unsplash.com/photo-1617195737494-167ea5fb1acc?q=80&w=1200&auto=format&fit=crop" },
    { id:49, name:"Edamame", price:79, tags:["japanese","starter","healthy","veg","snack"],
      image:"https://images.unsplash.com/photo-1606491956689-2ea866858f66?q=80&w=1200&auto=format&fit=crop" }
  ]
},

{
  name:"Brew & Bite Cafe",
  rating:"4.4",
  image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
  foods:[
    { id:30, name:"Cappuccino", price:129, tags:["coffee","cafe","hot","beverage"],
      image:"https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=1200&auto=format&fit=crop" },
    { id:31, name:"Cold Coffee", price:149, tags:["coffee","cafe","cold","beverage"],
      image:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1200&auto=format&fit=crop" },
    { id:32, name:"Croissant", price:99, tags:["bakery","snack","cafe","breakfast"],
      image:"https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1200&auto=format&fit=crop" },
    { id:33, name:"Club Sandwich", price:169, tags:["sandwich","cafe","snack","chicken"],
      image:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1200&auto=format&fit=crop" },
    { id:50, name:"Masala Chai", price:59, tags:["tea","chai","indian","hot","beverage","cafe"],
      image:"https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=1200&auto=format&fit=crop" },
    { id:51, name:"Blueberry Muffin", price:89, tags:["bakery","muffin","breakfast","sweet","snack"],
      image:"https://images.unsplash.com/photo-1607958995663-50e02ef564bd?q=80&w=1200&auto=format&fit=crop" }
  ]
},

{
  name:"The Kebab House",
  rating:"4.7",
  image:"https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=1200&auto=format&fit=crop",
  foods:[
    { id:52, name:"Chicken Seekh Kebab", price:219, tags:["kebab","chicken","indian","grilled","starter"],
      image:"https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=1200&auto=format&fit=crop" },
    { id:53, name:"Mutton Galouti Kebab", price:279, tags:["kebab","mutton","indian","spicy","starter"],
      image:"https://images.unsplash.com/photo-1529042410759-befb120418b0?q=80&w=1200&auto=format&fit=crop" },
    { id:54, name:"Paneer Tikka", price:199, tags:["paneer","tikka","indian","veg","grilled","starter"],
      image:"https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=1200&auto=format&fit=crop" },
    { id:55, name:"Fish Tikka", price:259, tags:["fish","seafood","tikka","indian","grilled"],
      image:"https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1200&auto=format&fit=crop" }
  ]
},

{
  name:"Taco Republic",
  rating:"4.5",
  image:"https://images.unsplash.com/photo-1565299585323-38174c0b5e3b?q=80&w=1200&auto=format&fit=crop",
  foods:[
    { id:56, name:"Chicken Tacos (3)", price:179, tags:["taco","mexican","chicken","fast food","spicy"],
      image:"https://images.unsplash.com/photo-1565299585323-38174c0b5e3b?q=80&w=1200&auto=format&fit=crop" },
    { id:57, name:"Veg Quesadilla", price:159, tags:["mexican","cheese","veg","snack","tortilla"],
      image:"https://images.unsplash.com/photo-1618040996337-56904b7850b9?q=80&w=1200&auto=format&fit=crop" },
    { id:58, name:"Nachos Supreme", price:189, tags:["nachos","mexican","snack","cheese","veg"],
      image:"https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=1200&auto=format&fit=crop" },
    { id:59, name:"Burrito Bowl", price:219, tags:["burrito","mexican","bowl","chicken","rice"],
      image:"https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1200&auto=format&fit=crop" }
  ]
},

{
  name:"Thai Orchid",
  rating:"4.8",
  image:"https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=1200&auto=format&fit=crop",
  foods:[
    { id:60, name:"Pad Thai", price:269, tags:["thai","noodles","chicken","seafood","spicy"],
      image:"https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=1200&auto=format&fit=crop" },
    { id:61, name:"Green Curry", price:289, tags:["thai","curry","chicken","rice","spicy","coconut"],
      image:"https://images.unsplash.com/photo-1455619452474-d7be8dd1d20a?q=80&w=1200&auto=format&fit=crop" },
    { id:62, name:"Tom Yum Soup", price:199, tags:["thai","soup","seafood","spicy","starter"],
      image:"https://images.unsplash.com/photo-1548943487-a2e4e43b4853?q=80&w=1200&auto=format&fit=crop" },
    { id:63, name:"Mango Sticky Rice", price:149, tags:["thai","dessert","mango","sweet","rice"],
      image:"https://images.unsplash.com/photo-1628771060502-4facdaf94229?q=80&w=1200&auto=format&fit=crop" }
  ]
},

{
  name:"Grill & Steak Co.",
  rating:"4.6",
  image:"https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
  foods:[
    { id:64, name:"Grilled Ribeye Steak", price:599, tags:["steak","beef","grill","dinner","protein"],
      image:"https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop" },
    { id:65, name:"BBQ Pork Ribs", price:449, tags:["pork","bbq","grill","ribs","dinner"],
      image:"https://images.unsplash.com/photo-1529198752573-aa67aff6ee9?q=80&w=1200&auto=format&fit=crop" },
    { id:66, name:"Grilled Salmon", price:379, tags:["salmon","seafood","grill","healthy","protein"],
      image:"https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1200&auto=format&fit=crop" },
    { id:67, name:"Lamb Chops", price:529, tags:["lamb","grill","dinner","protein"],
      image:"https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=1200&auto=format&fit=crop" }
  ]
},

{
  name:"South Spice Dosa",
  rating:"4.9",
  image:"https://images.unsplash.com/photo-1630383249896-424e482df921?q=80&w=1200&auto=format&fit=crop",
  foods:[
    { id:68, name:"Masala Dosa", price:129, tags:["dosa","south indian","veg","breakfast","crispy"],
      image:"https://images.unsplash.com/photo-1630383249896-424e482df921?q=80&w=1200&auto=format&fit=crop" },
    { id:69, name:"Idli Sambar (4)", price:99, tags:["idli","south indian","veg","breakfast","sambar"],
      image:"https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1200&auto=format&fit=crop" },
    { id:70, name:"Medu Vada", price:79, tags:["vada","south indian","veg","snack","fried"],
      image:"https://images.unsplash.com/photo-1601050690597-df0568fa7098?q=80&w=1200&auto=format&fit=crop" },
    { id:71, name:"Filter Coffee", price:49, tags:["coffee","south indian","hot","beverage"],
      image:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop" }
  ]
},

{
  name:"Noodle Yard",
  rating:"4.5",
  image:"https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=1200&auto=format&fit=crop",
  foods:[
    { id:72, name:"Chicken Hakka Noodles", price:199, tags:["noodles","chinese","chicken","indo chinese","spicy"],
      image:"https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=1200&auto=format&fit=crop" },
    { id:73, name:"Veg Manchurian", price:169, tags:["chinese","veg","indo chinese","starter","fried"],
      image:"https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=1200&auto=format&fit=crop" },
    { id:74, name:"Schezwan Fried Rice", price:189, tags:["rice","chinese","veg","spicy","indo chinese"],
      image:"https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=1200&auto=format&fit=crop" },
    { id:75, name:"Hot & Sour Soup", price:129, tags:["soup","chinese","veg","starter","spicy"],
      image:"https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=1200&auto=format&fit=crop" }
  ]
}

];

const restaurantContainer = document.getElementById("restaurants");
const searchResultsContainer = document.getElementById("searchResults");
const searchInput = document.getElementById("searchInput");
const cartItemsContainer = document.getElementById("cartItems");
const totalPrice = document.getElementById("totalPrice");
const cartCount = document.getElementById("cart-count");

let cart = [];
let currentUpiLink = "";

function getAllFoods() {
  const all = [];
  restaurants.forEach((r) => {
    r.foods.forEach((food) => {
      all.push({ ...food, restaurant: r.name, restaurantRating: r.rating });
    });
  });
  return all;
}

function scoreFood(food, query) {
  const q = query.toLowerCase().trim();
  if (!q) return 0;

  let score = 0;
  const name = food.name.toLowerCase();
  const rest = food.restaurant.toLowerCase();
  const tags = (food.tags || []).join(" ").toLowerCase();

  if (name === q) score += 100;
  if (name.startsWith(q)) score += 60;
  if (name.includes(q)) score += 40;
  if (rest.includes(q)) score += 30;
  if (tags.includes(q)) score += 35;

  q.split(/\s+/).forEach((word) => {
    if (word.length < 2) return;
    if (name.includes(word)) score += 20;
    if (tags.includes(word)) score += 15;
    if (rest.includes(word)) score += 10;
  });

  return score;
}

function searchFoods(query) {
  const q = query.trim();
  if (!q) return { matches: [], related: [] };

  const all = getAllFoods();
  const scored = all
    .map((food) => ({ food, score: scoreFood(food, q) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  const matches = scored.map((s) => s.food);
  const matchIds = new Set(matches.map((f) => f.id));

  const related = getRelatedFoods(matches, q).filter((f) => !matchIds.has(f.id));

  return { matches, related };
}

function getRelatedFoods(matches, query) {
  if (matches.length === 0) return [];

  const all = getAllFoods();
  const matchTags = new Set();
  const matchRestaurants = new Set();

  matches.forEach((m) => {
    matchRestaurants.add(m.restaurant);
    (m.tags || []).forEach((t) => matchTags.add(t));
  });

  const q = query.toLowerCase();

  return all
    .map((food) => {
      let score = 0;
      (food.tags || []).forEach((t) => {
        if (matchTags.has(t)) score += 25;
      });
      if (matchRestaurants.has(food.restaurant)) score += 15;
      if (food.name.toLowerCase().includes(q.split(" ")[0])) score += 10;
      return { food, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 16)
    .map((item) => item.food);
}

function buildFoodCardHTML(food, restaurantName, delay = 0, badge = "", instantVisible = false) {
  const foodJson = JSON.stringify({ id: food.id, name: food.name, price: food.price, image: food.image, tags: food.tags });
  const badgeHTML = badge ? `<span class="food-badge">${badge}</span>` : "";
  const visibleClass = instantVisible ? " visible" : "";

  return `
<div class="food-card${visibleClass}" style="transition-delay:${delay * 0.08}s">
<div class="img-wrap">
<img src="${food.image}" alt="${food.name}">
${badgeHTML}
</div>
<div class="food-info">
<h3>${food.name}</h3>
<p>From ${restaurantName}</p>
<div class="food-footer">
<span class="price">₹${food.price}</span>
<button class="add-btn" onclick='addToCart(${foodJson},"${restaurantName}",this)'>
<span>Add to Cart</span>
</button>
</div>
</div>
</div>`;
}

function renderRestaurants() {
  restaurantContainer.innerHTML = "";

  restaurants.forEach((restaurant) => {
    const foodsHTML = restaurant.foods
      .map((food, i) => buildFoodCardHTML(food, restaurant.name, i))
      .join("");

    restaurantContainer.innerHTML += `
<div class="restaurant">
<div class="restaurant-header">
<img src="${restaurant.image}" alt="${restaurant.name}">
<div>
<h2>${restaurant.name}</h2>
<div class="rating">⭐ ${restaurant.rating} Rating</div>
</div>
</div>
<div class="foods">${foodsHTML}</div>
</div>`;
  });

  observeAnimations();
}

function renderSearchResults(query) {
  const { matches, related } = searchFoods(query);

  if (!query.trim()) {
    searchResultsContainer.classList.add("hidden");
    searchResultsContainer.innerHTML = "";
    restaurantContainer.style.display = "";
    return;
  }

  restaurantContainer.style.display = "none";
  searchResultsContainer.classList.remove("hidden");

  if (matches.length === 0 && related.length === 0) {
    searchResultsContainer.innerHTML = `
<div class="search-empty">
<span>🔎</span>
<h3>No results for "${query}"</h3>
<p>Try searching pizza, biryani, burger, dessert, or coffee</p>
</div>`;
    return;
  }

  let html = `<div class="search-header">
<h2>Search Results</h2>
<p>${matches.length} item${matches.length !== 1 ? "s" : ""} found for "<strong>${query}</strong>"</p>
</div>`;

  if (matches.length > 0) {
    html += `<div class="foods search-grid">${matches
      .map((food, i) => buildFoodCardHTML(food, food.restaurant, i, "Match", true))
      .join("")}</div>`;
  }

  if (related.length > 0) {
    html += `
<div class="related-section">
<h3>You might also like</h3>
<p>Related items based on your search</p>
<div class="foods search-grid">${related
      .map((food, i) => buildFoodCardHTML(food, food.restaurant, i, "Related", true))
      .join("")}</div>
</div>`;
  }

  searchResultsContainer.innerHTML = html;
}

function handleSearch() {
  renderSearchResults(searchInput.value);
  document.getElementById("searchClear").classList.toggle("visible", searchInput.value.length > 0);
}

function clearSearch() {
  searchInput.value = "";
  handleSearch();
  searchInput.focus();
}

function quickSearch(term) {
  searchInput.value = term;
  handleSearch();
  searchResultsContainer.scrollIntoView({ behavior: "smooth", block: "start" });
}

function observeAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".restaurant, .food-card:not(.visible)").forEach((el) => {
    observer.observe(el);
  });
}

function addToCart(food, restaurant, btn) {
  const existing = cart.find((item) => item.id === food.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...food, restaurant, quantity: 1 });
  }

  updateCart();

  if (btn) {
    btn.classList.add("added");
    btn.querySelector("span").textContent = "Added ✓";
    setTimeout(() => {
      btn.classList.remove("added");
      btn.querySelector("span").textContent = "Add to Cart";
    }, 1500);
  }
}

function clearCart() {
  cart = [];
  updateCart();
}

function updateCart() {
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
<div class="empty-cart">
<span>🍽</span>
Your cart is empty
</div>`;
    totalPrice.innerText = 0;
    cartCount.innerText = 0;
    return;
  }

  let total = 0;

  cart.forEach((item, i) => {
    total += item.price * item.quantity;
    cartItemsContainer.innerHTML += `
<div class="cart-item" style="animation-delay:${i * 0.08}s">
<div>
<strong>${item.name}</strong><br>
<small>${item.restaurant}</small><br>
Qty: ${item.quantity}
</div>
<strong>₹${item.price * item.quantity}</strong>
</div>`;
  });

  totalPrice.innerText = total;
  cartCount.innerText = cart.length;
}

function toggleCart() {
  const panel = document.getElementById("cartPanel");
  const backdrop = document.getElementById("cartBackdrop");
  const isOpen = panel.classList.contains("open");

  panel.classList.toggle("open", !isOpen);
  backdrop.classList.toggle("open", !isOpen);
  document.body.style.overflow = isOpen ? "" : "hidden";
}

function buildUpiLink(amount) {
  const params = new URLSearchParams({
    pa: UPI_ID,
    pn: MERCHANT_NAME,
    am: amount.toFixed(2),
    cu: "INR",
    tn: "Food Order"
  });
  return `upi://pay?${params.toString()}`;
}

function payNow() {
  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  currentUpiLink = buildUpiLink(total);

  document.getElementById("payAmount").innerText = total;
  document.getElementById("payUpiId").innerText = UPI_ID;

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=280x280&margin=10&data=${encodeURIComponent(currentUpiLink)}`;
  document.getElementById("qrCode").src = qrUrl;

  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  document.getElementById("openUpiBtn").style.display = isMobile ? "block" : "none";

  document.getElementById("paymentModal").classList.add("open");
  document.getElementById("paymentBackdrop").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closePayment() {
  document.getElementById("paymentModal").classList.remove("open");
  document.getElementById("paymentBackdrop").classList.remove("open");
  document.body.style.overflow = "";
}

function openUpiApp() {
  if (currentUpiLink) {
    window.location.href = currentUpiLink;
  }
}

renderRestaurants();
updateCart();

searchInput.addEventListener("input", handleSearch);
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Escape") clearSearch();
});

let currentSlide = 0;
const slides = document.querySelectorAll(".offer-slide");
const dots = document.querySelectorAll(".dot");

function goToSlide(index) {
  if (index === currentSlide) return;

  slides[currentSlide].classList.remove("active");
  slides[currentSlide].classList.add("exit-left");
  dots[currentSlide].classList.remove("active");

  currentSlide = index;

  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");

  setTimeout(() => slides.forEach((s) => s.classList.remove("exit-left")), 900);
}

function changeSlide() {
  goToSlide((currentSlide + 1) % slides.length);
}

dots.forEach((dot) => {
  dot.addEventListener("click", () => goToSlide(parseInt(dot.dataset.index)));
});

setInterval(changeSlide, 4500);

window.addEventListener("scroll", () => {
  document.getElementById("mainHeader").classList.toggle("scrolled", window.scrollY > 20);
});
