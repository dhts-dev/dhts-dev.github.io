import React from 'react';

const HeroSection = ({ scrollToJobs }) => {
  return (
    <section className="w-full bg-[#f3f5ed] flex justify-center items-center px-4">
      <div className="w-full max-w-7xl relative rounded-b-2xl overflow-hidden">
        {/* Background Image with overlay */}
        <div className="h-[480px] relative flex items-center justify-center">
          <img src="/images/home.png" alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-30"></div>

          {/* Text content - always visible */}
          <div className="relative z-10 text-center text-white px-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-xl">
              Find the Right Job, Right Now
            </h1>
            <p className="mt-4 text-lg sm:text-xl font-medium text-[#f3f5ed] drop-shadow-md">
              Explore verified overseas and local opportunities across top industries
            </p>

            {/* Always visible button inside hero for all screen sizes */}
            <button
              onClick={scrollToJobs}
              className="mt-6 px-6 py-3 rounded-full bg-[#642c92] text-white font-semibold hover:bg-[#4a2369] transition duration-300"
            >
              Browse Jobs
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
