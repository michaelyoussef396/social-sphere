'use client';

import styles from '@/styles/index';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <div
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <p
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        At <span className="font-extrabold text-white">Social Sphere</span>, we
        are more than just event planners — we are memory makers. Whether you’re
        celebrating the start of a new chapter with a wedding, hosting a milestone
        anniversary, or throwing a spectacular corporate event, we’re here to ensure
        your vision becomes a reality. Let us take the stress out of planning so you
        can enjoy the moments that matter most.
      </p>

      <p
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Contact us today to begin crafting your
        <span className="font-extrabold text-white"> unforgettable event</span>!
      </p>

      <img
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </div>
  </section>
);

export default About;
