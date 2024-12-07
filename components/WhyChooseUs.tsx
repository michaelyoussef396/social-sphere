import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import Link from "next/link";

export function WhyChooseUs() {
    const features = [
        {
          title: "Personalized Approach",
          description:
            "Every event is unique, and we customize our services to match your specific needs, style, and budget.",
          skeleton: <SkeletonOne />,
          className:
            "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
        },
        {
          title: "Attention to Detail",
          description:
            "We believe the magic lies in the details, and we take extra care in perfecting every aspect of your event, from décor to timing.",
          skeleton: <SkeletonTwo />,
          className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
        },
        {
          title: "Professional Team",
          description:
            "Our experienced team is dedicated to making your event a success. From expert planners to talented designers, we work together to bring your vision to life.",
          skeleton: <SkeletonThree />,
          className:
            "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
        },
        {
          title: "Stress-Free Experience",
          description:
            "We manage all the details, leaving you to enjoy your day without the stress of planning and coordination.",
          skeleton: <SkeletonFour />,
          className: "col-span-1 lg:col-span-3 border-b lg:border-none",
        },
      ];
      
  return (
    <div id="why-choose-us" className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto bg-background1">
      <div className="px-8">
        <h4 className="text-gold text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium">
            Why Choose Us?
        </h4>

        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-text text-center font-normal font-cormorant">
            At Social Sphere, we specialize in crafting unforgettable events tailored to your unique vision. From weddings to corporate gatherings, we handle every detail to perfection.
        </p>

      </div>

      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md border-grayLight bg-background1">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle className="font-cormorant text-text">{feature.title}</FeatureTitle>
              <FeatureDescription className="font-cormorant text-neutral-500">{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "max-w-5xl mx-auto text-left tracking-tight text-text text-xl md:text-2xl md:leading-snug font-cormorant",
        className
      )}
    >
      {children}
    </p>
  );
};


const FeatureDescription = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base max-w-4xl text-left mx-auto font-cormorant",
        "text-neutral-500 text-center font-normal",
        "text-left max-w-sm mx-0 md:text-sm my-2",
        className // Include custom classes if passed
      )}
    >
      {children}
    </p>
  );
};


export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5 mx-auto bg-cream shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2">
          {/* Image Section */}
          <Image
            src="/why1.jpg"
            alt="header"
            width={800}
            height={800}
            className="h-full w-full aspect-square object-cover object-left-top rounded-sm"
          />
        </div>
      </div>

      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-cream via-cream to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-cream via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <div className="w-full mx-auto bg-cream group h-full">
      <div className="flex flex-1 w-full h-full flex-col space-y-2 relative">
        <Image
          src="/why6.jpg"
          alt="header"
          width={800}
          height={800}
          className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
        />
      </div>
    </div>
  );
};


export const SkeletonTwo = () => {
  const images = [
    "/why2.jpg",
    "/why3.jpg",
    "/why4.jpg",
    "/why5.jpg",
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };

  return (
    <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
      {/* Row 1 */}
      <div className="flex flex-row -ml-20">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-cream border border-grayLight flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="Dynamic image"
              width={500}
              height={500}
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>

      {/* Row 2 */}
      <div className="flex flex-row">
        {images.map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-4 mt-4 p-1 bg-cream border border-grayLight flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="Dynamic image"
              width={500}
              height={500}
              className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-cream to-transparent h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-cream to-transparent h-full pointer-events-none" />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60 flex flex-col items-center relative bg-cream mt-10 gap-16">
      <Image
        src="/why7.jpg"
        alt="Header Image 1"
        width={800}
        height={800}
        className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
      />
      <Image
        src="/why8.jpg"
        alt="Header Image 2"
        width={800}
        height={800}
        className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
      />
    </div>
  );
};
