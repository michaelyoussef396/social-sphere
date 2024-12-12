"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Social Sphere's attention to detail and innovative features have completely transformed our workflow. This is exactly the solution we've been looking for.",
      name: "Sarah Chen",
      designation: "Sarah Chen",
      src: "/test1.jpg",
    },
    {
      quote:
        "The implementation was seamless, and the results exceeded our expectations. The platform's flexibility is truly remarkable.",
      name: "Michael Rodriguez",
      designation: "Michael Rodriguez",
      src: "/test2.jpg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes even the most complex tasks simple to manage.",
      name: "Emily Watson",
      designation: "Emily Watson",
      src: "/test3.jpg",
    },
    {
      quote:
        "The support has been outstanding, and the features are incredibly robust. It's rare to find a product that delivers on all its promises like this one.",
      name: "James Kim",
      designation: "James Kim",
      src: "/test4.jpg",
    },
    {
      quote:
        "The scalability and performance of this platform have been game-changing for our organization. I highly recommend it to any growing business.",
      name: "Lisa Thompson",
      designation: "Lisa Thompson",
      src: "/test5.jpg",
    },
  ];

  return (
    <div className="relative w-full flex justify-center items-center px-4 py-16 bg-background1" id="Testimonials">
      <div className="w-full max-w-6xl z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-cormorant text-text mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg font-sans text-text/80 max-w-2xl mx-auto">
            Hear from industry leaders who have experienced our transformative solutions
          </p>
        </div>
        <AnimatedTestimonials 
          testimonials={testimonials} 
          autoplay={true} 
        />
      </div>
      <div className="absolute inset-0 bg-background1 z-0"></div>
    </div>
  );
}

export default Testimonials;