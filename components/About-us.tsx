import React from 'react';

const AboutUs = () => {
  return (
    <section className="about-us py-16 bg-gray-50" id="about">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="image w-full lg:w-1/2">
          <div className="w-full h-64 lg:h-96 bg-gray-200 rounded-lg animate-pulse"></div>
          {/* Replace the above div with <img src="path-to-image.jpg" alt="About Social Sphere" /> once the image is available */}
        </div>

        {/* Text Content Section */}
        <div className="content w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-blue-500">Social Sphere</span>
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            At Social Sphere, we specialize in turning your special moments into
            unforgettable experiences. We are a passionate team of event planners,
            designers, and creatives who bring elegance, style, and seamless execution
            to every occasion.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            From intimate weddings to large-scale celebrations, we pride ourselves on
            professionalism, creativity, and attention to detail. With years of
            experience, we tailor every event to reflect the uniqueness of our clients,
            ensuring it exceeds expectations.
          </p>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;