import { Star } from "lucide-react";
// 1. Import the 'Variants' type
import { motion, Variants } from "framer-motion";

// --- Asset Imports ---
// Replace these with your actual image paths
import foodBowl1 from "@/assets/circle.png"; // Example: Noodles
import foodBowl2 from "@/assets/food-bowl2.avif"; // Example: Soup
import foodBowl3 from "@/assets/food-bowl3.avif"; // Example: Ramen
import leaf1 from "@/assets/leaf.avif";
import leaf2 from "@/assets/leaf.avif";


// --- Animation Variants ---
// 2. Add the 'Variants' type to each object
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Each child will animate 0.2s after the previous one
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const imageVariants: Variants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, 0.01, 0.9], // Cubic bezier array for a smooth ease
    },
  },
};


const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center bg-[#0d0d0d] overflow-hidden px-4 pt-20 md:pt-0 md:pb-0 pb-10"
    >
      <div className="container z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* --- Left Column: Text Content --- */}
        <motion.div
          className="text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl pt-16 sm:text-5xl md:text-7xl font-[400] font-serif mb-6 leading-tight text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] tracking-tight sm:tracking-normal"
            variants={itemVariants}
          >
            Where{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text">
              Cravings
            </span>{" "}
            Meet Their{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-transparent bg-clip-text">
              Perfect
            </span>{" "}
            Match
          </motion.h1>


          <motion.p
            className="text-sm  sm:text-lg md:text-lg text-gray-400 max-w-lg mx-auto lg:mx-0 mb-8"
            variants={itemVariants}
          >
            Discover bold flavors and unforgettable dishes in a place where every
            craving is satisfied with the perfect bite, crafted just for you.
          </motion.p>



          <motion.div
            className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 text-gray-300 text-sm sm:text-base md:text-base"
            variants={itemVariants}
          >
            <span className="font-semibold text-sm sm:text-lg md:text-lg">4.8/5</span>
            <div className="flex space-x-1 sm:space-x-1.5">
              <Star className="w-3 h-3 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
              <Star className="w-3 h-3 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
              <Star className="w-3 h-3 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
              <Star className="w-3 h-3 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
              <Star className="w-3 h-3 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
            </div>
            <span className="text-gray-500 text-xs sm:text-sm md:text-sm">Average Rating</span>
          </motion.div>

        </motion.div>

        {/* --- Right Column: Food Images --- */}
        <motion.div
          className="relative h-96 w-full block"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* --- Floating Leaves for decoration --- */}
          <motion.img
            src={leaf1} alt="Floating leaf"
            className="absolute -top-4 left-10 w-12 opacity-30 blur-sm z-10"
            animate={{ y: [0, -15, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          />
          <motion.img
            src={leaf2} alt="Floating leaf"
            className="absolute top-1/3 -right-4 w-14 opacity-25 z-10"
            animate={{ y: [0, 12, 0], x: [0, -8, 0] }}
            transition={{ duration: 8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          />
          <motion.img
            src={leaf1} alt="Floating leaf"
            className="absolute bottom-8 left-1/4 w-10 opacity-30 blur-sm z-10"
            animate={{ y: [0, 20, 0], rotate: [0, -12, 0] }}
            transition={{ duration: 12, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          />

          <motion.div
            className="absolute bottom-40 md:bottom-30 right-4 md:right-24 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl shadow-black/50 z-20"
            variants={imageVariants}
          >
            {/* This inner div handles the rotation */}
            <motion.div
              className="w-full h-full"
              animate={{ rotate: 360 }}
              transition={{ ease: 'linear', duration: 40, repeat: Infinity }}
            >
              <img src={foodBowl2} alt="Miso soup" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute top-64 right-0 md:right-32 -translate-y-1/2 w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden shadow-2xl shadow-black/50 z-20"
            variants={imageVariants}
          >
            {/* This inner div handles the rotation */}
            <motion.div
              className="w-full h-full"
              animate={{ rotate: -360 }}
              transition={{ ease: 'linear', duration: 30, repeat: Infinity }}
            >
              <img src={foodBowl3} alt="Spicy ramen" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-10 md:bottom-0 right-20 md:left-0 w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl shadow-black/50 z-20"
            variants={imageVariants}
          >
            {/* This inner div handles the rotation */}
            <motion.div
              className="w-full h-full"
              animate={{ rotate: 360 }}
              transition={{ ease: 'linear', duration: 50, repeat: Infinity }}
            >
              <img src={foodBowl1} alt="Stir fry noodles" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;