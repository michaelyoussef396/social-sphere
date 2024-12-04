"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";

export function OurServices() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our <span className="text-blue-500">Services</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
          {/* Wedding Planning & Coordination */}
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
            className=""
          >
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Wedding Planning & Coordination
              </h2>
              <p className="mt-4 text-left text-base/6 text-neutral-200">
                From your first consultation to the final farewell, we are here
                to guide you every step of the way. Our wedding planning
                services include:
              </p>
              <ul className="list-disc list-inside text-neutral-200">
                <li>Full-Service Wedding Planning</li>
                <li>Partial Wedding Planning</li>
                <li>Day-of Coordination</li>
              </ul>
            </div>
            <Image
              src="/wedding-planning.jpg" // Replace with your actual image path
              width={500}
              height={500}
              alt="Wedding Planning & Coordination"
              className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
            />
          </WobbleCard>

          {/* Event Management */}
          <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-gray-800">
            <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Event Management
            </h2>
            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
              We manage a wide variety of events with expertise and precision,
              including:
            </p>
            <ul className="list-disc list-inside text-neutral-200">
              <li>Corporate Events & Conferences</li>
              <li>Anniversaries & Birthdays</li>
              <li>Private Parties & Celebrations</li>
              <li>Charity & Community Events</li>
              <li>Special Occasions</li>
            </ul>
          </WobbleCard>

          {/* Decorations & Design */}
          <WobbleCard
            containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]"
          >
            <div className="max-w-sm">
              <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Decorations & Design
              </h2>
              <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                Transforming spaces is our specialty. We offer full-scale
                decoration services, including:
              </p>
              <ul className="list-disc list-inside text-neutral-200">
                <li>Venue Design & Styling</li>
                <li>Floral Arrangements</li>
                <li>Table Settings & Centerpieces</li>
                <li>Lighting & Ambience</li>
                <li>Theme Design</li>
              </ul>
            </div>
            <Image
              src="/decorations-design.jpg" // Replace with your actual image path
              width={500}
              height={500}
              alt="Decorations & Design"
              className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
            />
          </WobbleCard>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
