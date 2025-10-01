import { Star } from "lucide-react";
import { motion, Variants } from "framer-motion";

// --- Asset Imports ---
import foodBowl1 from "@/assets/circle.png";
import foodBowl2 from "@/assets/food-bowl2.avif";
import foodBowl3 from "@/assets/food-bowl3.avif";
import leaf1 from "@/assets/leaf.avif";
import leaf2 from "@/assets/leaf.avif";

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// --- Leaf Variants Factory (custom per leaf) ---
const fallLeaf = (angle: number): Variants => ({
  hidden: { y: -100, opacity: 0, rotate: angle - 20 },
  visible: {
    y: 0,
    opacity: 1,
    rotate: angle,
    transition: { type: "spring", stiffness: 50, damping: 10, duration: 1 },
  },
});

// --- Food Bowl Variants ---
const fallFromTopVariants: Variants = {
  hidden: { y: -100, opacity: 0, rotate: -15 },
  visible: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 50, damping: 10, duration: 1 },
  },
};

const fallFromBottomVariants: Variants = {
  hidden: { y: 100, opacity: 0, rotate: 15 },
  visible: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 50, damping: 10, duration: 1 },
  },
};

const fallFromLeftVariants: Variants = {
  hidden: { x: 100, opacity: 0, rotate: 15 },
  visible: {
    x: 0,
    opacity: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 50, damping: 10, duration: 1 },
  },
};

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center bg-[#0d0d0d] overflow-hidden px-4 pt-20 md:pt-0 md:pb-0 pb-10"
    >
      <div className="container z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* --- Left Column: Text --- */}
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
            className="text-sm sm:text-lg md:text-lg text-gray-400 max-w-lg mx-auto lg:mx-0 mb-8"
            variants={itemVariants}
          >
            Discover bold flavors and unforgettable dishes in a place where
            every craving is satisfied with the perfect bite, crafted just for
            you.
          </motion.p>

          <motion.div
            className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 text-gray-300 text-sm sm:text-base md:text-base"
            variants={itemVariants}
          >
            <span className="font-semibold text-sm sm:text-lg md:text-lg">
              4.8/5
            </span>
            <div className="flex space-x-1 sm:space-x-1.5">
              <Star className="w-3 h-3 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
              <Star className="w-3 h-3 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
              <Star className="w-3 h-3 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
              <Star className="w-3 h-3 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
              <Star className="w-3 h-3 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
            </div>
            <span className="text-gray-500 text-xs sm:text-sm md:text-sm">
              Average Rating
            </span>
          </motion.div>
        </motion.div>

        {/* --- Right Column: Food Bowls + Leaves --- */}
        <motion.div
          className="relative h-96 w-full block"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* --- Leaves with different final angles --- */}
          <motion.img
            src={leaf1}
            alt="Leaf"
            className="absolute top-0 left-14 md:left-60 w-12 blur-[1px] z-10"
            variants={fallLeaf(-25)}
          />
          <motion.img
            src={leaf2}
            alt="Leaf"
            className="absolute top-40 md:top-1/2 right-0 md:right-20 w-14 opacity-25 z-10"
            variants={fallLeaf(15)}
          />
          <motion.img
            src={leaf1}
            alt="Leaf"
            className="absolute top-80 md:top-96 left-20 md:left-60 w-10 opacity-30 blur-[1px] z-10"
            variants={fallLeaf(35)}
          />
          <motion.img
            src={leaf2}
            alt="Leaf"
            className="absolute top-20 left-10 md:left-0 w-10 opacity-30 z-10"
            variants={fallLeaf(-60)}
          />
          <motion.img
            src={leaf1}
            alt="Leaf"
            className="absolute top-60 right-10 md:right-10 w-12 opacity-25 z-10"
            variants={fallLeaf(50)}
          />
          <motion.img
            src={leaf2}
            alt="Leaf"
            className="absolute top-32 left-32 md:left-64 w-14 opacity-20 z-10"
            variants={fallLeaf(-40)}
          />
          <motion.img
            src={leaf1}
            alt="Leaf"
            className="absolute top-72 right-20 md:right-56 w-12 opacity-25 z-10"
            variants={fallLeaf(20)}
          />

          {/* --- Food Bowls --- */}
          <motion.div
            className="absolute md:bottom-40 right-4 md:right-24 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl shadow-black/50 z-20"
            variants={fallFromTopVariants}
          >
            <motion.div
              className="w-full h-full"
              animate={{ rotate: 360 }}
              transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            >
              <img
                src={foodBowl2}
                alt="Miso soup"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute top-56 right-0 md:right-32 -translate-y-1/2 w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden shadow-2xl shadow-black/50 z-20"
            variants={fallFromLeftVariants}
          >
            <motion.div
              className="w-full h-full"
              animate={{ rotate: -360 }}
              transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            >
              <img
                src={foodBowl3}
                alt="Spicy ramen"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-14 md:bottom-0 right-24 md:right-20 md:left-0 w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl shadow-black/50 z-20"
            variants={fallFromBottomVariants}
          >
            <motion.div
              className="w-full h-full"
              animate={{ rotate: 360 }}
              transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            >
              <img
                src={foodBowl1}
                alt="Stir fry noodles"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
