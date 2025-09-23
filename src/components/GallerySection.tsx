import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import heroFood from "@/assets/hero-food.jpg";
import spicesImage from "@/assets/spices-ingredients.jpg";
import restaurantDishes from "@/assets/restaurant-dishes.jpg";

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const galleryItems = [
    { id: 1, src: heroFood, category: "dishes", title: "Traditional Mandi" },
    { id: 2, src: gallery2, category: "restaurant", title: "Restaurant Interior" },
    { id: 3, src: spicesImage, category: "dishes", title: "Fresh Spices" },
    { id: 4, src: restaurantDishes, category: "dishes", title: "Signature Dishes" },
    { id: 5, src: gallery1, category: "dishes", title: "Menu Varieties" },
    // { id: 6, src: gallery2, category: "restaurant", title: "Dining Area" },
  ];

  const categories = [
    { id: "all", label: "All Media" },
    { id: "dishes", label: "Dishes" },
    { id: "restaurant", label: "Restaurant" },
    { id: "video", label: "Video" },
  ];

  const filteredItems = activeCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Gallery</h2>
          <div className="decorative-dots"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-12 bg-muted">
              {categories.map((category, index) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-black relative"
                >
                  <span className="gold-text font-semibold mr-2">
                    {String(index + 1).padStart(2, '0')}.
                  </span>
                  {category.label}
                  {category.id === activeCategory && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary"></div>
                  )}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={activeCategory} className="mt-0">
              {filteredItems.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                  {filteredItems.map((item) => (
                    <div 
                      key={item.id} 
                      className="group relative overflow-hidden rounded-lg cursor-pointer bg-card"
                    >
                      <img 
                        src={item.src} 
                        alt={item.title}
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-center">
                          <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                          <div className="w-12 h-0.5 bg-primary mx-auto"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-muted-foreground text-lg">
                    {activeCategory === "video" ? "Video content coming soon!" : "No items found in this category."}
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;