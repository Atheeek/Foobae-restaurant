import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Pause } from "lucide-react";
import { PlayCircle, PauseCircle } from "lucide-react";

import spicesImage from "@/assets/restaurant-dishes.jpg";
import videoFile from "@/assets/foodbae-video.mp4"; // Replace with your video path

const AboutSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };
  return (
    <section id="about" className="bg-[#0d0d0d] px-3 md:px-28">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <p className="gold-text text-lg italic mb-2">Our story</p>
              <h2 className="text-5xl font-bold mb-4">Few words about us</h2>
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

      {/* Full-width Video Section */}
      {/* Full-width Video Section */}
      <div className="relative w-full overflow-hidden group"> {/* add 'group' here */}
        <video
          ref={videoRef}
          src={videoFile}
          className="w-full h-[500px] object-cover"
          loop
        />

        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 md:group-hover:opacity-100 transition-opacity cursor-pointer"
        >
          {isPlaying ? (
            <PauseCircle className="text-white h-8 w-8" />
          ) : (
            <PlayCircle className="text-white h-8 w-8" />
          )}
        </button>

      </div>

    </section>
  );
};

export default AboutSection;
