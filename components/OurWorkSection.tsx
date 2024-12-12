"use client";
import React from 'react';
import { ParallaxScroll } from '@/components/ui/parallax-scroll';

// Expanded image collection for comprehensive work showcase
const workImages = [
  "/aboutus.jpg",
  "/decoration.jpg",
  "/consultation-planning.jpg",
  "/why4.jpg",
  "/hero1.jpg", 
  "/hero2.jpg",
  "/hero3.jpg",
  "/post-event-followup.jpg",
  "/seamless-execution.jpg",
  "/tailored-design.jpg",
  "/why2.jpg",
  "/why3.jpg"
];

const OurWorkSection = () => {
  return (
    <section className="bg-background1 py-16 px-4 md:px-16 !overflow-visible" id='Our-Work-Section'>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-cormorant text-text mb-4">
            Our Work
          </h2>
          <p className="text-lg font-sans text-text/80 max-w-2xl mx-auto">
            A visual journey through our most memorable events, showcasing creativity, precision, and transformative experiences across diverse landscapes.
          </p>
        </div>

        <ParallaxScroll 
          images={workImages}
          className="mb-8"
        />
      </div>
    </section>
  );
};

export default OurWorkSection;