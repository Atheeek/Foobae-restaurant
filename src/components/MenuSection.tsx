import React, { useState, useEffect } from 'react';
import { UtensilsCrossed } from 'lucide-react';

// --- Mock Data with Working Image Links ---
const menuData = {
  starter: [
    {
      id: 1,
      name: "Bruschetta",
      price: "$12.50",
      description: "Toasted bread with tomatoes, garlic, basil, and olive oil.",
      image: "https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
      largeImage: "https://images.pexels.com/photos/1647163/pexels-photo-1647163.jpeg?auto=compress&cs=tinysrgb&w=1000&h=667&dpr=1",
      tag: "Popular"
    },
    {
      id: 2,
      name: "Caprese Salad",
      price: "$14.00",
      description: "Fresh mozzarella, tomatoes, and sweet basil.",
      image: "https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
      largeImage: "https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=1000&h=667&dpr=1",
    },
    {
      id: 3,
      name: "Stuffed Mushrooms",
      price: "$13.00",
      description: "Mushroom caps filled with herbs and breadcrumbs.",
      image: "https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
      largeImage: "https://images.pexels.com/photos/3338497/pexels-photo-3338497.jpeg?auto=compress&cs=tinysrgb&w=1000&h=667&dpr=1",
    },
    {
      id: 4,
      name: "Garlic Shrimp",
      price: "$16.50",
      description: "Sautéed shrimp in a garlic and white wine sauce.",
      image: "https://images.pexels.com/photos/725992/pexels-photo-725992.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
      largeImage: "https://images.pexels.com/photos/725992/pexels-photo-725992.jpeg?auto=compress&cs=tinysrgb&w=1000&h=667&dpr=1",
    }
  ],
  mainDishes: [
    {
      id: 5,
      name: "Grilled Salmon",
      price: "$28.00",
      description: "Salmon fillet with a lemon-dill sauce, served with asparagus.",
      image: "https://images.pexels.com/photos/3296391/pexels-photo-3296391.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
      largeImage: "https://images.pexels.com/photos/3296391/pexels-photo-3296391.jpeg?auto=compress&cs=tinysrgb&w=1000&h=667&dpr=1",
    },
    {
      id: 6,
      name: "Filet Mignon",
      price: "$45.50",
      description: "8oz tenderloin steak with mashed potatoes and red wine reduction.",
      image: "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
      largeImage: "https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=1000&h=667&dpr=1",
      tag: "Chef's Special"
    },
    {
      id: 7,
      name: "Chicken Alfredo",
      price: "$24.00",
      description: "Creamy parmesan sauce over fettuccine with grilled chicken.",
      image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
      largeImage: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1000&h=667&dpr=1",
    },
    {
      id: 8,
      name: "Vegetable Lasagna",
      price: "$22.00",
      description: "Layers of pasta, ricotta, and seasonal vegetables.",
      image: "https://images.pexels.com/photos/5949888/pexels-photo-5949888.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
      largeImage: "https://images.pexels.com/photos/5949888/pexels-photo-5949888.jpeg?auto=compress&cs=tinysrgb&w=1000&h=667&dpr=1",
    },
  ],
  desserts: [
    {
      id: 9,
      name: "Tiramisu",
      price: "$11.00",
      description: "Classic Italian coffee-flavored dessert.",
      image: "https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
      largeImage: "https://images.pexels.com/photos/6880219/pexels-photo-6880219.jpeg?auto=compress&cs=tinysrgb&w=1000&h=667&dpr=1",
    },
    {
      id: 10,
      name: "Chocolate Lava Cake",
      price: "$13.50",
      description: "Warm chocolate cake with a gooey center, served with vanilla ice cream.",
      image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
      largeImage: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1000&h=667&dpr=1",
      tag: "Decadent"
    },
    {
      id: 11,
      name: "Cheesecake",
      price: "$12.00",
      description: "New York style cheesecake with a berry compote.",
      image: "https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
      largeImage: "https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=1000&h=667&dpr=1",
    },
    {
      id: 12,
      name: "Panna Cotta",
      price: "$10.50",
      description: "Italian cooked cream dessert with strawberry coulis.",
      image: "https://images.pexels.com/photos/6397585/pexels-photo-6397585.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
      largeImage: "https://images.pexels.com/photos/6397585/pexels-photo-6397585.jpeg?auto=compress&cs=tinysrgb&w=1000&h=667&dpr=1",
    }
  ],
  wines: [
    {
      id: 13,
      name: "Black Wine",
      price: "$25.50",
      description: "Rich red wine with dark fruit notes and smooth finish.",
      image: "https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
      largeImage: "https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=1000&h=667&dpr=1",
    },
    {
      id: 14,
      name: "La Marca",
      price: "$40.00",
      description: "Fresh, crisp sparkling wine with a fruity aroma.",
      image: "https://images.pexels.com/photos/1839818/pexels-photo-1839818.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
      largeImage: "https://images.pexels.com/photos/1839818/pexels-photo-1839818.jpeg?auto=compress&cs=tinysrgb&w=1000&h=667&dpr=1",
      tag: "Seasonal"
    },
    {
      id: 15,
      name: "Crawford Sauvignon",
      price: "$10.00",
      description: "Light-bodied white wine with citrus and tropical fruit flavors.",
      image: "https://images.pexels.com/photos/2796177/pexels-photo-2796177.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
      largeImage: "https://images.pexels.com/photos/2796177/pexels-photo-2796177.jpeg?auto=compress&cs=tinysrgb&w=1000&h=667&dpr=1",
    },
    {
      id: 16,
      name: "Vineyard Cabernet",
      price: "$10.00",
      description: "Full-bodied red with oak and berry undertones.",
      image: "https://images.pexels.com/photos/774455/pexels-photo-774455.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1",
      largeImage: "https://images.pexels.com/photos/774455/pexels-photo-774455.jpeg?auto=compress&cs=tinysrgb&w=1000&h=667&dpr=1",
    }
  ]
};
// --- MenuItem Component ---
const MenuItem = ({ item, onHover, isActive }) => (
  <div
    className={`flex items-start space-x-4 cursor-pointer p-3 transition-all duration-300 rounded-lg ${isActive ? 'bg-white/5' : ''}`}
    onMouseEnter={() => onHover(item)}
  >
    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-full object-cover flex-shrink-0 mt-1" />
    <div className="flex-grow">
      <div className="flex justify-between items-baseline">
        <h4 className="text-white font-semibold text-lg">{item.name}</h4>
        <div className="flex-grow border-b border-dotted border-gray-600 mx-3 mb-1"></div>
        <p className="text-amber-400 font-bold text-lg">{item.price}</p>
      </div>
      <p className="text-gray-400 text-sm pr-4">{item.description}</p>
      {item.tag && <span className="text-xs bg-amber-400 text-black font-semibold px-2 py-0.5 rounded-full mt-2 inline-block uppercase tracking-wider">{item.tag}</span>}
    </div>
  </div>
);

// --- MenuSection Component ---
const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('wines');
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    if (menuData[activeCategory] && menuData[activeCategory].length > 0) {
      setActiveItem(menuData[activeCategory][0]);
    }
  }, [activeCategory]);

  const menuCategories = [
    { key: 'starter', label: 'Starter' },
    { key: 'mainDishes', label: 'Main Dishes' },
    { key: 'desserts', label: 'Desserts' },
    // { key: 'wines', label: 'Wines' },
  ];

  return (
    <section id="menu" className="py-20 bg-[#0d0d0d] font-serif">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block text-amber-400 text-sm tracking-widest font-semibold mb-4">
            <UtensilsCrossed className="inline-block w-4 h-4 mx-2" />
            SPECIAL FINE DINE
            <UtensilsCrossed className="inline-block w-4 h-4 mx-2" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">Delicious Menu</h1>
        </div>

        {/* Categories */}
        <div className="flex justify-center items-center mb-12 border-y border-gray-800 py-4">
          {menuCategories.map((cat, index) => (
            <React.Fragment key={cat.key}>
              <button
                onClick={() => setActiveCategory(cat.key)}
                className={`text-sm md:text-base font-semibold uppercase tracking-wider transition-colors duration-300 ${activeCategory === cat.key ? 'text-amber-400' : 'text-gray-400 hover:text-white'}`}
              >
                <span>{cat.label}</span>
              </button>
              {index < menuCategories.length - 1 && (
                <span className="text-amber-400 opacity-50 mx-3 md:mx-5 text-xl">+</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Menu Content */}
        <div className="bg-[#0d0d0d] p-6 sm:p-8 md:p-12 rounded-xl shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column */}
            <div className="flex flex-col space-y-4">
              {menuData[activeCategory].map(item => (
                <MenuItem
                  key={item.id}
                  item={item}
                  onHover={setActiveItem}
                  isActive={activeItem && activeItem.id === item.id}
                />
              ))}
            </div>

            {/* Right Column */}
    <div className="flex items-center justify-center h-[350px] md:h-[450px] mt-8 md:mt-0">
              {activeItem && (
                <div className="relative w-full mb-12 max-w-sm h-full rounded-t-[18rem] overflow-hidden shadow-lg">

                  {/* The actual image */}
                  <img
                    src={activeItem.largeImage}
                    alt={activeItem.name}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />

                  {/* Decorative inner arch line */}
                  <div className="absolute inset-[15px] rounded-t-[17rem] border border-yellow-400 pointer-events-none"></div>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">During winter daily from <span className="text-amber-400">7:00 pm</span> to <span className="text-amber-400">9:00 pm</span></p>
          <button className="font-semibold text-white border-2 border-amber-400 px-8 py-3 rounded-md hover:bg-amber-400 hover:text-black transition-colors duration-300 tracking-wider">
            VIEW ALL MENU
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
