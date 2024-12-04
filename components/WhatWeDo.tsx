"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export const WhatWeDo = () => {
  const cards = [
    {
      src: "/consultation-planning.jpg", // Replace with actual image path
      title: "Consultation & Planning",
      category: "What We Do",
      content: (
        <p>
          Every great event begins with a conversation. We start by understanding
          your vision, preferences, and the essence of what you want to achieve.
          Our goal is to learn everything about your needs, whether it's a
          wedding, a corporate gala, or a casual get-together.
        </p>
      ),
    },
    {
      src: "/tailored-design.jpg", // Replace with actual image path
      title: "Tailored Design",
      category: "What We Do",
      content: (
        <p>
          Once we know your goals, we offer a range of design options that match
          your style and budget. We create mood boards, color palettes, and event
          layouts to ensure that the aesthetic is exactly what you envisioned.
        </p>
      ),
    },
    {
      src: "/vendor-coordination.jpg", // Replace with actual image path
      title: "Vendor Coordination",
      category: "What We Do",
      content: (
        <p>
          We partner with the best vendors in the industry — from caterers to
          photographers — to provide you with high-quality services. We handle
          all the logistics and communication, so you don’t have to worry about a
          thing.
        </p>
      ),
    },
    {
      src: "/seamless-execution.jpg", // Replace with actual image path
      title: "Seamless Execution",
      category: "What We Do",
      content: (
        <p>
          On the day of your event, our team takes the lead. We manage the
          timeline, coordinate with vendors, oversee the setup and decorations,
          and ensure everything runs smoothly. You can focus on enjoying the
          moment, knowing everything is in capable hands.
        </p>
      ),
    },
    {
      src: "/post-event-followup.jpg", // Replace with actual image path
      title: "Post-Event Follow-up",
      category: "What We Do",
      content: (
        <p>
          After your event, we check in with you to ensure that everything met
          your expectations. We value feedback and use it to continuously improve
          our services.
        </p>
      ),
    },
  ];

  return (
    <section id="what-we-do" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          What <span className="text-blue-500">We Do</span>
        </h2>
        <Carousel
          items={cards.map((card, index) => (
            <Card key={index} card={card} index={index} layout />
          ))}
        />
      </div>
    </section>
  );
};

export default WhatWeDo;
