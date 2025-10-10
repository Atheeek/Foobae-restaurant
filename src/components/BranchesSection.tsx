import { MapPin, Phone, Mail, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

// --- NEW: Define a type for our branch data objects ---
interface Branch {
  name: string;
  address: string;
  mapsLink: string;
  rating: number;
  reviews: number;
  price: string;
  phone: string;
  email: string;
  image: string;
}

const BranchesSection = () => {
  // --- UPDATED: Apply the Branch type to our array ---
  const branches: Branch[] = [
    {
      name: "FOODBAE - Ajmera Avenue",
      address: "Neeladri Rd, Doddathoguru, Electronic City, Bengaluru, Karnataka",
      mapsLink: "https://maps.app.goo.gl/pfeQ8jYwk3V7P9PXA", 
      rating: 4.7,
      reviews: 345,
      price: "₹200–400",
      phone: "+91 12345 67890",
      email: "ajmera@foodbae.com",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "FOODBAE - Krishnagiri",
      address: "Service Rd, opp. to GRT Jewellers, Krishnagiri, Tamil Nadu",
      mapsLink: "https://maps.app.goo.gl/m5WYdeMv1R18poMb8",
      rating: 4.6,
      reviews: 3700,
      price: "₹200–400",
      phone: "+91 12345 67891",
      email: "krishnagiri@foodbae.com",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "FOODBAE - Ottapalam",
      address: "SH 26, near Lakshmi Hospital, Ottapalam, Kerala",
      mapsLink: "https://share.google/AKmPHlaye0RaDNSHR",
      rating: 4.3,
      reviews: 958,
      price: "₹200–400",
      phone: "+91 12345 67892",
      email: "ottapalam@foodbae.com",
      image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  // --- UPDATED: Explicitly type 'i' as a number to fix the main TS error ---
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({ // <-- THE FIX IS HERE
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, 
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="contacts" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* ... rest of the JSX is the same ... */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gold-text">Find Us At</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the taste of Foodbae at any of our premium locations. Each branch offers our signature dishes with the same commitment to quality and flavor.
          </p>
        </div>
        <div className="flex flex-col items-center gap-12">
          {branches.map((branch, index) => (
            <motion.div
              key={index}
              className="w-full max-w-4xl"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <Card className="bg-card border-border overflow-hidden transition-all duration-300 md:flex">
                <div className="md:w-1/3">
                  <img src={branch.image} alt={branch.name} className="w-full h-64 md:h-full object-cover"/>
                </div>
                <div className="md:w-2/3">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold mb-2">
                        {branch.name}
                      </h3>
                      <div className="flex items-center flex-wrap mb-4 text-sm">
                        <div className="flex items-center space-x-1 mr-3">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="font-semibold text-foreground">{branch.rating}</span>
                          <span className="text-muted-foreground">({branch.reviews} reviews)</span>
                        </div>
                        <span className="text-muted-foreground">· {branch.price}</span>
                      </div>
                      <div className="space-y-4 mb-6">
                         <a href={branch.mapsLink} target="_blank" rel="noopener noreferrer" className="flex items-start space-x-3 group">
                           <MapPin className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                           <span className="text-muted-foreground group-hover:text-primary transition-colors">{branch.address}</span>
                         </a>
                         <a href={`tel:${branch.phone}`} className="flex items-center space-x-3 group">
                           <Phone className="text-primary h-5 w-5 flex-shrink-0" />
                           <span className="text-muted-foreground group-hover:text-primary transition-colors">{branch.phone}</span>
                         </a>
                         <a href={`mailto:${branch.email}`} className="flex items-center space-x-3 group">
                           <Mail className="text-primary h-5 w-5 flex-shrink-0" />
                           <span className="text-muted-foreground group-hover:text-primary transition-colors">{branch.email}</span>
                         </a>
                      </div>
                    </div>
                    <div>
                      <Button
                        className="w-full"
                        onClick={() => window.open(branch.mapsLink, "_blank")}
                      >
                        Get Directions
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchesSection;