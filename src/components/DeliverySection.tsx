import { Clock, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import spicesImage from "@/assets/spices-ingredients.jpg";

const DeliverySection = () => {
  const deliveryInfo = {
    quote: "Foodbae is prepared with fresh ingredients and authentic recipes, making it a delightful experience for every palate.",
    workingHours: {
      local: "11:30 AM TO 11:30 PM",
      international: "11:00 AM TO 11:30 PM"
    },
    deliveryRadius: "8km",
 branches:[
  { name: "FOODBAE Restaurant  Ajmera Avenue", phone: "+91 12345 67890" },
  { name: "FOODBAE Restaurant  Krishnagiri", phone: "+91 12345 67891" },
  { name: "Foodbae Restaurant  Ottapalam", phone: "+91 12345 67892" }
],

    deliveryPartners: [
      { name: "Zomato", color: "bg-red-600" },
      { name: "Swiggy", color: "bg-orange-500" },
      { name: "Uber Eats", color: "bg-black" },
      { name: "DoorDash", color: "bg-red-500" }
    ]
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Quote and Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={spicesImage} 
                alt="Fresh ingredients and spices" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-black/60"></div>
              
              {/* Quote Overlay */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="text-6xl text-primary mb-4">"</div>
                  <blockquote className="text-white text-xl leading-relaxed font-medium">
                    {deliveryInfo.quote}
                  </blockquote>
                  <div className="text-6xl text-primary mt-4 rotate-180">"</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Delivery Information */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <p className="gold-text text-lg italic mb-2">Opening Hours</p>
              <h2 className="text-4xl font-bold mb-4">Home Delivery {deliveryInfo.deliveryRadius}</h2>
              <div className="decorative-dots lg:justify-start"></div>
            </div>

            {/* Working Hours */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-3">
                      <Clock className="text-primary mr-2 h-5 w-5" />
                      <span className="text-sm text-muted-foreground">Working Time in Local Area</span>
                    </div>
                    <div className="text-2xl font-bold">
                      {deliveryInfo.workingHours.local}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-3">
                      <Clock className="text-primary mr-2 h-5 w-5" />
                      <span className="text-sm text-muted-foreground">Working Time International</span>
                    </div>
                    <div className="text-2xl font-bold">
                      {deliveryInfo.workingHours.international}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Delivery Partners */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-center lg:text-left">Available on</h3>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {deliveryInfo.deliveryPartners.map((partner, index) => (
                  <div 
                    key={index}
                    className={`${partner.color} text-white px-4 py-2 rounded-lg font-semibold text-sm hover:opacity-80 transition-opacity cursor-pointer`}
                  >
                    {partner.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Branch Contact Numbers */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-center lg:text-left">Call for Orders</h3>
              <div className="grid grid-cols-2 gap-4">
                {deliveryInfo.branches.map((branch, index) => (
                  <Card key={index} className="bg-card/50 border-border hover:border-primary/50 transition-colors">
                    <CardContent className="p-4 text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Phone className="text-primary mr-2 h-4 w-4" />
                        <span className="font-semibold text-sm">{branch.name}</span>
                      </div>
                      <a 
                        href={`tel:${branch.phone}`}
                        className="text-primary hover:text-primary-glow transition-colors font-medium"
                      >
                        {branch.phone}
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;