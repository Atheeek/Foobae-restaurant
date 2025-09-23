import { useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import restaurantDishes from "@/assets/restaurant-dishes.jpg";

const MenuSection = () => {
  const menuData = {
    downtown: [
      { id: 1, name: "Chicken Biryani", price: "550|450|300|150", category: "Chicken" },
      { id: 2, name: "Beef Kebab Special", price: "650|510|330|170", category: "Beef" },
      { id: 3, name: "Mutton Mandi", price: "750|570|380|190", category: "Mutton" },
      { id: 4, name: "Mixed Grilled Platter", price: "850|650|450|250", category: "Mixed" },
      { id: 5, name: "Chicken Shawarma", price: "390|300|200|100", category: "Chicken" },
      { id: 6, name: "Lamb Kofta", price: "680|520|340|180", category: "Mutton" },
      { id: 7, name: "Vegetable Biryani", price: "450|350|250|120", category: "Vegetarian" },
      { id: 8, name: "Fish Curry Special", price: "590|450|300|150", category: "Seafood" },
    ],
    westside: [
      { id: 1, name: "Chicken Tikka Masala", price: "600|450|300|150", category: "Chicken" },
      { id: 2, name: "Beef Stroganoff", price: "700|550|350|180", category: "Beef" },
      { id: 3, name: "Mutton Curry", price: "800|600|400|200", category: "Mutton" },
      { id: 4, name: "Seafood Paella", price: "900|700|500|250", category: "Seafood" },
      { id: 5, name: "Grilled Chicken", price: "520|390|260|130", category: "Chicken" },
      { id: 6, name: "Lamb Chops", price: "750|580|380|190", category: "Mutton" },
      { id: 7, name: "Pasta Primavera", price: "480|380|280|140", category: "Vegetarian" },
      { id: 8, name: "Salmon Teriyaki", price: "650|500|350|175", category: "Seafood" },
    ],
    marina: [
      { id: 1, name: "BBQ Chicken Wings", price: "420|320|210|110", category: "Chicken" },
      { id: 2, name: "Beef Burger Deluxe", price: "660|500|330|170", category: "Beef" },
      { id: 3, name: "Lamb Gyros", price: "580|430|290|150", category: "Mutton" },
      { id: 4, name: "Grilled Prawns", price: "720|550|370|185", category: "Seafood" },
      { id: 5, name: "Chicken Caesar Salad", price: "380|280|190|95", category: "Chicken" },
      { id: 6, name: "Mediterranean Bowl", price: "450|350|250|125", category: "Vegetarian" },
      { id: 7, name: "Fish & Chips", price: "540|410|270|135", category: "Seafood" },
      { id: 8, name: "Steak Frites", price: "850|650|450|225", category: "Beef" },
    ]
  };

  const [activeTab, setActiveTab] = useState("downtown");

  return (
    <section 
      id="menu" 
      className="py-20 bg-overlay relative"
      style={{
        backgroundImage: `url(${restaurantDishes})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Discover Our Menu</h2>
          <div className="decorative-dots"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-card/90 backdrop-blur-sm">
              <TabsTrigger value="downtown" className="data-[state=active]:bg-primary data-[state=active]:text-black">
                DOWNTOWN MENU
              </TabsTrigger>
              <TabsTrigger value="westside" className="data-[state=active]:bg-primary data-[state=active]:text-black">
                WESTSIDE MENU
              </TabsTrigger>
              <TabsTrigger value="marina" className="data-[state=active]:bg-primary data-[state=active]:text-black">
                MARINA MENU
              </TabsTrigger>
            </TabsList>

            {Object.entries(menuData).map(([location, items]) => (
              <TabsContent key={location} value={location} className="mt-0">
                <div className="bg-card/95 backdrop-blur-sm rounded-lg p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-bold gold-text">
                          {location.charAt(0).toUpperCase() + location.slice(1)} Location
                        </h3>
                        <div className="text-sm text-muted-foreground">
                          F | 3/4 | 1/2 | Q
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        {items.slice(0, Math.ceil(items.length / 2)).map((item, index) => (
                          <div key={item.id} className="flex justify-between items-start border-b border-border/50 pb-3">
                            <div>
                              <span className="gold-text font-semibold text-sm mr-2">
                                {String(index + 1).padStart(2, '0')}.
                              </span>
                              <span className="text-foreground font-medium">{item.name}</span>
                            </div>
                            <div className="text-right">
                              <span className="gold-text font-bold">{item.price}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-6">
                        <div className="text-sm text-muted-foreground">
                          F | 3/4 | 1/2 | Q
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        {items.slice(Math.ceil(items.length / 2)).map((item, index) => (
                          <div key={item.id} className="flex justify-between items-start border-b border-border/50 pb-3">
                            <div>
                              <span className="gold-text font-semibold text-sm mr-2">
                                {String(Math.ceil(items.length / 2) + index + 1).padStart(2, '0')}.
                              </span>
                              <span className="text-foreground font-medium">{item.name}</span>
                            </div>
                            <div className="text-right">
                              <span className="gold-text font-bold">{item.price}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center mt-8">
                    <Button className="btn-gold">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;