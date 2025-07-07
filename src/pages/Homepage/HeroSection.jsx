import React from 'react';

const HeroSection = () => {
  return (
    <section className="w-full bg-[#f3f5ed] flex justify-center items-center">
      <div className="w-full max-w-7xl h-[420px] relative rounded-b-2xl overflow-hidden flex items-stretch">
        {/* Background Image centered */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/images/home.png"
            alt="Hero"
            className="w-full h-full object-contain object-center"
            style={{ background: '#f3f5ed' }}
          />
        </div>

        {/* Text Area (centered overlay, smaller, lower) */}
        <div className="relative z-10 flex flex-col justify-center h-full items-center w-full mt-16">
          {/* <h1
            className="text-white text-2xl sm:text-3xl font-extrabold leading-tight drop-shadow-lg max-w-lg text-center"
            style={{ textShadow: '0 2px 6px rgba(0,0,0,0.25)' }}
          >
            Welcome to the Ultimate Job Platform
          </h1> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
