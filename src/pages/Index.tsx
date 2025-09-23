import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BranchesSection from "@/components/BranchesSection";
import MenuSection from "@/components/MenuSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import DeliverySection from "@/components/DeliverySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <MenuSection />
        <BranchesSection />
        <TestimonialsSection />
        <ContactSection />
        <DeliverySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
