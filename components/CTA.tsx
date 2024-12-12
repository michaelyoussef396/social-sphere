'use client';

import styles from '@/styles/index';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>


    {/* Content Container */}
    <div
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col text-center`}
    >
      {/* First Paragraph */}
      <p className="mt-8 font-cormorant sm:text-2xl text-lg text-foreground leading-relaxed">
        At <span className="font-extrabold text-gold">Social Sphere</span>, we
        are more than just event planners — we are memory makers. Whether you’re
        celebrating the start of a new chapter with a wedding, hosting a milestone
        anniversary, or throwing a spectacular corporate event, we’re here to ensure
        your vision becomes a reality. Let us take the stress out of planning so you
        can enjoy the moments that matter most.
      </p>

      {/* Second Paragraph */}
      <p className="mt-8 font-cormorant sm:text-2xl text-lg text-foreground leading-relaxed">
        Contact us today to begin crafting your
        <span className="font-extrabold text-gold"> unforgettable event</span>!
      </p>

      {/* Arrow Down Icon */}
      <img
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-6 h-8 object-contain mt-8 animate-bounce"
      />
    </div>
  </section>
);

export default About;
