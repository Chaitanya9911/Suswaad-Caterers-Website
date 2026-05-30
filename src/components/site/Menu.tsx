const menu = [
  {
    course: "Breakfast",
    items: [
      { name: "Poha", desc: "Classic flattened rice with onions, peanuts & curry leaves" },
      { name: "Upma", desc: "Savoury semolina with vegetables and curry leaves" },
      { name: "Misal Pav", desc: "Spicy sprouted curry, farsan, soft pav" },
      { name: "Indori Poha", desc: "Indore-style poha with jeeravan masala & sev" },
      { name: "Onion Thalipeeth", desc: "Multigrain Maharashtrian flatbread" },
      { name: "Aloo Paratha", desc: "Stuffed potato paratha with butter & curd" },
      { name: "Pakoda Platter", desc: "Onion, spinach, moong & more — and many more…" },
    ],
  },
  {
    course: "South Indian Breakfast",
    items: [
      { name: "Idli Sambar", desc: "Steamed rice cakes, lentil sambar, chutneys" },
      { name: "Medu Wada Sambar", desc: "Crisp lentil donuts in tangy sambar" },
      { name: "Sada Dosa", desc: "Golden rice & lentil crepe with chutney" },
      { name: "Uttapam", desc: "Thick dosa topped with onion, tomato & chilli" },
      { name: "Veg Cutlets", desc: "Crisp pan-fried patties — and many more…" },
    ],
  },
  {
    course: "Upavas Special",
    items: [
      { name: "Sabudana Khichadi", desc: "Tapioca pearls, peanuts, green chilli & lemon" },
      { name: "Sabudana Wada", desc: "Crisp fasting fritters with peanut chutney" },
      { name: "And many more…", desc: "Full fasting-friendly menu on request" },
    ],
  },
  {
    course: "Continental Breakfast",
    items: [
      { name: "Veg Sandwiches", desc: "All varieties — grilled, club, chutney & more" },
      { name: "Bread Butter", desc: "Freshly baked bread, salted butter" },
      { name: "Bread Jam", desc: "Assorted preserves with soft bread" },
      { name: "Toasts", desc: "Crisp golden toasts — and many more…" },
    ],
  },
  {
    course: "Beverages",
    items: [
      { name: "Fresh Fruit Juices", desc: "Seasonal, cold-pressed, no added sugar" },
      { name: "Fruit Punch", desc: "House blend of mixed fruits & mint" },
      { name: "Mocktails", desc: "Curated non-alcoholic creations — and many more…" },
    ],
  },
  {
    course: "Appetizers",
    items: [
      { name: "Paneer Tikka", desc: "Smoky tandoor-grilled cottage cheese" },
      { name: "Bruschetta", desc: "Toasted crostini, tomato basil, olive oil" },
      { name: "Cheese Balls", desc: "Crispy outside, molten cheese centre" },
      { name: "Veg Monaco", desc: "Loaded biscuit canapés with toppings" },
      { name: "Tandoor Selection", desc: "Chef's live tandoor — and many more…" },
    ],
  },
  {
    course: "Starters",
    items: [
      { name: "Corn Samosa", desc: "Crisp samosa with creamy corn filling" },
      { name: "Paneer Lifafa", desc: "Stuffed paneer parcels, golden fried" },
      { name: "Aloo Finger", desc: "Spiced potato fingers, crisp coating" },
      { name: "Cheese Onion Rings", desc: "Onion rings with molten cheese" },
      { name: "Veg Manchurian", desc: "Indo-Chinese classic in spicy gravy" },
      { name: "Soyabean Chilli", desc: "Tossed with peppers & soy — and many more…" },
    ],
  },
  {
    course: "Soups",
    items: [
      { name: "Cream of Tomato", desc: "Velvety roasted tomato soup" },
      { name: "Cream of Vegetable", desc: "Garden veg in a creamy broth" },
      { name: "Lemon Coriander", desc: "Light, zesty & herby clear soup" },
      { name: "Almond Broccoli", desc: "Roasted almond & broccoli purée" },
      { name: "Veg Manchow", desc: "Spicy Indo-Chinese with crispy noodles" },
    ],
  },
  {
    course: "Chatpata Chaat",
    items: [
      { name: "Pani Puri", desc: "Crisp puris, spiced waters, chutneys" },
      { name: "Sev Puri", desc: "Loaded puris, tangy, sweet & crunchy" },
      { name: "Dahi Puri", desc: "Cool curd, chutneys, crunchy sev" },
      { name: "Bombay Bhel", desc: "Classic puffed rice street snack" },
      { name: "Tokari & Basket Chaat", desc: "Edible baskets, layered fillings" },
      { name: "Dahi Bhalla", desc: "Soft lentil dumplings in spiced curd" },
      { name: "Delhi Chaat", desc: "North-Indian street favourites — and many more…" },
    ],
  },
  {
    course: "Salads",
    items: [
      { name: "Green Salad", desc: "Garden-fresh, crisp & seasonal" },
      { name: "Aloo Chaat Salad", desc: "Spiced potato with tangy dressing" },
      { name: "Sprout Salad", desc: "Mixed sprouts, lemon, coriander" },
      { name: "Fruit Salad", desc: "Seasonal fruits with honey & mint" },
    ],
  },
  {
    course: "Raitas",
    items: [
      { name: "Boondi Raita", desc: "Crisp boondi in spiced curd" },
      { name: "Pineapple Raita", desc: "Sweet, tangy, refreshing" },
      { name: "Tomato Onion Raita", desc: "Classic cooling accompaniment" },
      { name: "Cucumber Raita", desc: "Cool cucumber, roasted cumin" },
      { name: "Pumpkin Raita", desc: "Subtly sweet — and many more…" },
    ],
  },
  {
    course: "Jaikedar Sabjiyan",
    items: [
      { name: "Paneer Butter Masala", desc: "Rich, silky tomato-cashew gravy" },
      { name: "Shahi Paneer", desc: "Royal mughlai paneer, mildly sweet" },
      { name: "Chole Paneer", desc: "Chickpeas & paneer in spiced masala" },
      { name: "Paneer Jalfrezi", desc: "Tossed with peppers & onions" },
      { name: "Kadhai Paneer", desc: "Aromatic kadhai masala" },
      { name: "Paneer Bhurji", desc: "Scrambled paneer, onion & tomato" },
      { name: "Kaju Masala", desc: "Cashews in creamy onion gravy" },
      { name: "Methi Matar Malai", desc: "Fenugreek, peas, fresh cream" },
      { name: "Malai Kofta", desc: "Soft koftas in rich, creamy curry" },
      { name: "Spicy Kofta Curry", desc: "Robust, fiery house special" },
    ],
  },
  {
    course: "Special Maharashtrian",
    items: [
      { name: "Aloo Patal Bhaji", desc: "Light potato curry, Marathi style" },
      { name: "Dal Palak", desc: "Lentils with fresh spinach" },
      { name: "Dal Vange", desc: "Brinjal & lentil rustic curry" },
      { name: "Dal Gilke", desc: "Ridge gourd & toor dal" },
      { name: "Methi Patal Bhaji", desc: "Fenugreek in a light gravy" },
      { name: "Val Vange", desc: "Field beans & brinjal classic" },
      { name: "Batata Bhaji", desc: "Maharashtrian potato sabji" },
    ],
  },
  {
    course: "Indian Breads",
    items: [
      { name: "Roti", desc: "Plain, butter or whole wheat" },
      { name: "Naan", desc: "Tandoor-fresh, soft & pillowy" },
      { name: "Kulcha", desc: "Stuffed or plain, oven-baked" },
      { name: "Paratha", desc: "Flaky layered flatbread" },
      { name: "Puri", desc: "Sadhi, masala or palak — and many more…" },
    ],
  },
  {
    course: "Rice",
    items: [
      { name: "Steamed Basmati", desc: "Fragrant long-grain rice" },
      { name: "Jeera Rice", desc: "Cumin-tempered basmati" },
      { name: "Tawa Pulao", desc: "Mumbai street-style spiced rice" },
      { name: "Lemon Rice", desc: "South-Indian tangy tempered rice" },
      { name: "Dal Khichadi", desc: "Comforting one-pot rice & lentils" },
      { name: "Paneer Biryani", desc: "Layered with paneer & whole spices" },
      { name: "Veg Biryani", desc: "Dum-cooked with garden vegetables" },
    ],
  },
  {
    course: "Dal & Kadhi",
    items: [
      { name: "Dal Tadka", desc: "Yellow dal, smoky ghee tempering" },
      { name: "Dal Makhani", desc: "Slow-cooked black lentils, butter, cream" },
      { name: "Dal Fry", desc: "Classic dhaba-style fried dal" },
      { name: "Rasam Dal", desc: "Spiced, tangy South-Indian broth" },
      { name: "Maharashtrian Kadhi", desc: "Curd & gram flour, mildly sweet" },
      { name: "Gujarati Kadhi", desc: "Sweet-tangy signature kadhi" },
      { name: "Kadhi Pakoda", desc: "Punjabi-style with fried pakoras" },
      { name: "Rajasthani Kadhi", desc: "Spicy, robust regional classic" },
    ],
  },
  {
    course: "International Cuisines",
    items: [
      { name: "Italian", desc: "Pasta, pizzeria, antipasti" },
      { name: "Chinese", desc: "Wok-tossed Indo-Chinese & authentic" },
      { name: "Mexican", desc: "Tacos, nachos, salsas, quesadillas" },
      { name: "Thai", desc: "Fragrant curries, stir-fries" },
      { name: "Swiss & more", desc: "Curated counters — and many more…" },
    ],
  },
  {
    course: "Sweets",
    items: [
      { name: "Rabadi", desc: "Slow-reduced sweet milk" },
      { name: "Bengali Mithai", desc: "Rasgulla, sandesh, chamcham & more" },
      { name: "Shrikhand", desc: "Hung curd, cardamom, saffron" },
      { name: "Barfi", desc: "Assorted khoya & nut barfis" },
      { name: "Halwa", desc: "Gajar, moong dal, sooji — seasonal" },
      { name: "Marwadi & Maharashtrian", desc: "Regional traditional sweets" },
    ],
  },
  {
    course: "Desserts",
    items: [
      { name: "Puddings & Soufflés", desc: "Light, creamy, chilled" },
      { name: "Kulfi", desc: "Slow-set Indian ice cream" },
      { name: "Ice Cream Bar", desc: "Choice of flavours" },
      { name: "Roll Ice Cream", desc: "Live Thai-style ice cream rolls" },
      { name: "Kids' Farmaish", desc: "Waffles, shakes & more for little ones" },
    ],
  },
  {
    course: "Akkhir Mein…",
    items: [
      { name: "Pan Darbar", desc: "Live paan counter with all varieties" },
      { name: "Mukhwas Selection", desc: "Traditional mouth fresheners" },
      { name: "Coffee Bar", desc: "Filter, cappuccino, latte & more" },
      { name: "Kadhai Doodh", desc: "Saffron-spiced hot milk classic" },
      { name: "Sodas", desc: "Masala, mint, jeera — and many more…" },
    ],
  },
];

export const Menu = () => {
  return (
    <section id="menu" className="py-24 md:py-32 bg-foreground text-background relative overflow-hidden">
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />

      <div className="container relative">
        <div className="max-w-2xl mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-secondary font-semibold">Seasonal selection</span>
          <h2 className="mt-3 font-display text-4xl md:text-6xl font-medium tracking-tight">
            A taste of our <em className="italic text-secondary">signature</em> menu.
          </h2>
          <p className="mt-4 text-background/70">Menus rotate quarterly. Every dish is fully customisable for dietary needs and event style.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
          {menu.map((section) => (
            <div key={section.course}>
              <h3 className="font-display text-2xl text-secondary mb-6 pb-4 border-b border-background/15">
                {section.course}
              </h3>
              <ul className="space-y-5">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <div className="font-display text-lg font-medium">{item.name}</div>
                    <p className="text-sm text-background/65 mt-1 leading-relaxed">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
