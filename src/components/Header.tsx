import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, Variants } from "framer-motion";

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

  // Effect to handle header style on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect to prevent scrolling when the mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);


  // --- NEW: Variants for the full-screen menu container ---
  // This will orchestrate the animation of its children
  const menuVariants: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Stagger effect for each child
        ease: "easeOut",
      },
    },
    exit: {
        opacity: 0,
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1, // Reverse stagger on exit
            ease: "easeIn",
        }
    }
  };

  // --- NEW: Variants for each navigation link ---
  const navLinkVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.3, ease: "easeIn" } },
  };

  const handleScrollToMenu = () => {
    const menuSection = document.getElementById("menu");
    if (menuSection) menuSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Header Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-sm my-1 rounded-full px-0 md:px-5 mx-2 md:mx-24"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="container mx-auto py-1 md:py-3 px-4">
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

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              <Button variant="default" className="hidden md:flex" onClick={handleScrollToMenu}>
                View Menu
              </Button>

              {/* Mobile Menu Button - The z-index ensures it's above the overlay */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden z-50" // Ensure button is clickable above the menu
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* --- IMPROVED: Mobile Navigation Overlay --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            // --- UPDATED: Full-screen overlay styling ---
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-background/95 backdrop-blur-md md:hidden"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* --- UPDATED: Centered navigation with larger text --- */}
            <nav className="flex flex-col items-center text-center space-y-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  // --- NEW: Apply variants to each link ---
                  variants={navLinkVariants}
                  className="text-3xl font-light text-foreground hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}

              {/* --- UPDATED: Button is now part of the animated list --- */}
              <motion.div variants={navLinkVariants} className="pt-4">
                <Button
                  variant="default"
                  size="lg"
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleScrollToMenu();
                  }}
                >
                  View Menu
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;