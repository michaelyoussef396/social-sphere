import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";

const Hero = () => {
  const images = [
    "/hero1.jpg",
    "/hero2.jpg",
    "/hero3.jpg", 
  ];

  return (
    <div className="hero-container relative h-screen w-full">
      <ImagesSlider
        images={images}
        overlay={true}
        overlayClassName="bg-gradient-to-b from-black/60 to-transparent"
        className="h-full w-full"
        autoplay={true}
        direction="up"
      >
        <div className="absolute z-50 text-center text-white px-4 md:px-0">
          <h1 className="text-4xl md:text-6xl font-bold">
            Crafting Unforgettable Moments
          </h1>
          <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto">
            At Social Sphere, we turn your special moments into unforgettable
            experiences. Let us bring your vision to life with elegance, style, and
            seamless execution.
          </p>
          <a
            href="#services"
            className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white text-lg font-medium py-3 px-8 rounded-lg transition duration-300"
          >
            Explore Our Services
          </a>
        </div>
      </ImagesSlider>
    </div>
  );
};

export default Hero;