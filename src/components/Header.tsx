import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, Variants, easeIn, easeOut } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "MENU", href: "#menu" },
    { label: "GALLERY", href: "#gallery" },
    { label: "TESTIMONIALS", href: "#testimonials" },
    { label: "CONTACTS", href: "#contacts" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // TypeScript-safe variants
  const mobileMenuVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: easeOut } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: easeIn } },
  };

  const handleScrollToMenu = () => {
    const menuSection = document.getElementById("menu");
    if (menuSection) menuSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50  transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm my-1 rounded-full px-5 mx-24"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto py-3 px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <img
              src="/logo.png"
              alt="Foodbae Logo"
              className="h-24 md:h-32 lg:h-40 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-[300] text-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Button */}
          <div className="flex items-center space-x-4">
            <Button variant="default" className="hidden md:flex" onClick={handleScrollToMenu}>
              View Menu
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation with Animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden py-6 border-t border-border bg-[#0d0d0d]/95 backdrop-blur-md rounded-b-lg shadow-lg"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <nav className="flex flex-col space-y-4 px-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-sm font-mediu text-foreground hover:text-primary transition-colors duration-300 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}

                {/* Mobile View Menu Button */}
                <Button
                  variant="default"
                  className="mt-2 w-full"
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleScrollToMenu();
                  }}
                >
                  View Menu
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
