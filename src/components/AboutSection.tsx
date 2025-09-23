import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import spicesImage from "@/assets/restaurant-dishes.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <p className="gold-text text-lg italic mb-2">Our story</p>
              <h2 className="text-4xl font-bold mb-4">Few words about us</h2>
              <div className="decorative-dots"></div>
            </div>
            
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                Foodbae is one of the experts in the art of cooking global cuisine dishes. 
                It is the best experience for the food lovers, as the taste, texture, color, and 
                presentation brings you authentic flavors from around the world.
              </p>
              <p>
                We provide exceptional dishes including biryani, kebabs, and international favorites 
                all prepared with fresh ingredients and traditional recipes. Our commitment to quality 
                and hygiene ensures every meal is a delightful experience.
              </p>
              <p>
                Foodbae delivers not just food, but an experience that celebrates global cuisines 
                in the most hygienic way. The variety of tastes here is as diverse as our menu, 
                bringing together flavors from multiple cultures at one place.
              </p>
            </div>

            <Button className="btn-gold group mt-8">
              Explore Our Menu
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={spicesImage} 
                alt="Traditional spices and ingredients" 
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-l-2 border-t-2 border-primary"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r-2 border-b-2 border-primary"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;