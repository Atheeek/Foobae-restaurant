import { MapPin, Phone, Mail, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const BranchesSection = () => {
  const branches = [
    {
      name: "FOODBAE Restaurant - Ajmera Avenue",
      address: "S block, Doddathoguru village, & Panchayath, Neeladri Rd, City, India",
      mapsLink: "https://maps.app.goo.gl/w6tuYu4yzN5fGFVv9",
      rating: 4.7,
      reviews: 345,
      price: "₹200–400",
      phone: "+91 12345 67890",
      email: "ajmera@foodbae.com"
    },
    {
      name: "FOODBAE Restaurant - Krishnagiri",
      address: "Meenangadi, Kerala, India",
      mapsLink: "https://maps.app.goo.gl/kYJnb8yAZCbTX8Mi7",
      rating: 4.6,
      reviews: 3700,
      price: "₹200–400",
      phone: "+91 12345 67891",
      email: "krishnagiri@foodbae.com"
    },
    {
      name: "Foodbae Restaurant - Ottapalam",
      address: "Ottapalam, Kerala, India",
      mapsLink: "https://maps.app.goo.gl/11ywiLjCuoj7J1X47",
      rating: 4.3,
      reviews: 958,
      price: "₹200–400",
      phone: "+91 12345 67892",
      email: "ottapalam@foodbae.com"
    }
  ];

  return (
    <section className="py-20 bg-[#0d0d0d]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Branches</h2>
          <div className="decorative-dots"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {branches.map((branch, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold gold-text mb-2 text-center">
                  {branch.name}
                </h3>

                {/* Rating & Price */}
                <div className="flex items-center justify-center mb-4 space-x-3">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="text-muted-foreground">{branch.rating}</span>
                    <span className="text-muted-foreground">({branch.reviews})</span>
                  </div>
                  <span className="text-muted-foreground">· {branch.price}</span>
                </div>

                <div className="space-y-4 mb-6">
                  {/* Address (clickable) */}
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-primary mt-1 h-5 w-5 flex-shrink-0" />
                    <a
                      href={branch.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {branch.address}
                    </a>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center space-x-3">
                    <Phone className="text-primary h-5 w-5 flex-shrink-0" />
                    <a
                      href={`tel:${branch.phone}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {branch.phone}
                    </a>
                  </div>

                  {/* Email */}
                  <div className="flex items-center space-x-3">
                    <Mail className="text-primary h-5 w-5 flex-shrink-0" />
                    <a
                      href={`mailto:${branch.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {branch.email}
                    </a>
                  </div>
                </div>

                {/* Get Directions Button */}
                <Button
                  className="btn-gold w-full group-hover:shadow-lg transition-all"
                  onClick={() => window.open(branch.mapsLink, "_blank")}
                >
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchesSection;
