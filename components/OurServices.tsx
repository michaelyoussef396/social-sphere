"use client";
import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";

const services = [
  {
    title: "Wedding Planning & Coordination",
    description:
      "From your first consultation to the final farewell, we are here to guide you every step of the way. Our wedding planning services include:",
    list: [
      "Full-Service Wedding Planning",
      "Partial Wedding Planning",
      "Day-of Coordination",
    ],
    backgroundImage: "/wedding.jpg",
  },
  {
    title: "Event Management",
    description:
      "We manage a wide variety of events with expertise and precision, including:",
    list: [
      "Corporate Events & Conferences",
      "Anniversaries & Birthdays",
      "Private Parties & Celebrations",
      "Charity & Community Events",
      "Special Occasions",
    ],
    backgroundImage: "/event-management.jpg",
  },
  {
    title: "Decorations & Design",
    description:
      "Transforming spaces is our specialty. We offer full-scale decoration services, including:",
    list: [
      "Venue Design & Styling",
      "Floral Arrangements",
      "Table Settings & Centerpieces",
      "Lighting & Ambience",
      "Theme Design",
    ],
    backgroundImage: "/decoration.jpg",
  },
];

export function OurServices() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our <span className="text-blue-500">Services</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <WobbleCard
              key={index}
              containerClassName="col-span-1 bg-cover bg-center"
              className="text-white"
            >
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="mb-4">{service.description}</p>
              <ul className="list-disc list-inside space-y-2">
                {service.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </WobbleCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurServices;
