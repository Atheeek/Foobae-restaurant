import { ArrowUp, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
             
             <div>
  <img
    src="logo.png" // replace with your logo path
    alt="Foodbae Logo"
    className="w-16 h-16 object-contain" // adjust size as needed
  />
</div>

            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Experience authentic global flavors with the finest ingredients and traditional recipes. 
              Your culinary journey starts here.
            </p>
           <div className="flex space-x-3">
  <a href="https://www.facebook.com/foodbaerestaurant" target="_blank" rel="noopener noreferrer">
    <Button variant="ghost" size="icon" className="hover:text-black">
      <Facebook className="h-4 w-4" />
    </Button>
  </a>

  <a href="https://www.instagram.com/foodbae_restaurants" target="_blank" rel="noopener noreferrer">
    <Button variant="ghost" size="icon" className="hover:text-black">
      <Instagram className="h-4 w-4" />
    </Button>
  </a>

  <a href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
    <Button variant="ghost" size="icon" className="hover:text-black">
      <Twitter className="h-4 w-4" />
    </Button>
  </a>
</div>

          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold gold-text">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {["Home", "About", "Menu", "Gallery", "Testimonials", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold gold-text">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="text-primary mt-1 h-4 w-4 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                 Electronic City<br />
                  Bangalore 560100, India
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-primary h-4 w-4 flex-shrink-0" />
                <a 
                  href="tel:+12345678901"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  +1 234 567 8901
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-primary h-4 w-4 flex-shrink-0" />
                <a 
                  href="mailto:foodbae@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  foodbae@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold gold-text">Opening Hours</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Monday - Friday</span>
                <span className="text-foreground">11:30 AM - 11:30 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Saturday - Sunday</span>
                <span className="text-foreground">11:00 AM - 12:00 AM</span>
              </div>
              <div className="mt-3 pt-3 border-t border-border">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Delivery Range</span>
                  <span className="text-primary font-semibold">8km radius</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © Foodbae 2025. All rights reserved. Developed by <span className="text-primary">Atheek Rahman</span>
          </p>
          
          <Button 
            variant="ghost" 
            onClick={scrollToTop}
            className="text-primary hover:text-black group"
          >
            Back To Top
            <ArrowUp className="ml-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;