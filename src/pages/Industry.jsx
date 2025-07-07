import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const industries = [
  { title: 'Construction and real estate', image: '/images/img_image_12.png' },
  { title: 'Manufacturing and industrial', image: '/images/img_image_13.png' },
  { title: 'Hospitality and tourism', image: '/images/img_image_14.png' },
  { title: 'Healthcare', image: '/images/housekeeper.png' },
  { title: 'Retail and customer service', image: '/images/img_image_14.png' },
  { title: 'Logistics and transportation', image: '/images/img_image_13.png' },
  { title: 'Security services', image: '/images/img_image_12.png' },
  { title: 'Cleaning and facility management', image: '/images/img_image_12.png' },
];

const Industry = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f3f5ed]">
      <Header />
      <main className="flex-1 w-full flex flex-col items-center pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="w-full flex flex-col items-center bg-[#f3f5ed]">
          <div className="w-full max-w-5xl relative mt-4 mb-8">
            <img
              src="/images/request a team.jpeg"
              alt="Team"
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-b-2xl"
            />
            <div className="absolute left-8 top-1/3 text-white text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black leading-tight drop-shadow-lg max-w-[60%]">
              Get Teams for HouseKeeping, Security, Labours and more
            </div>
            <button className="absolute right-8 bottom-8 bg-[#f7931e] text-white text-xl font-bold rounded-xl px-8 py-3">
              Request Team
            </button>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="w-full flex flex-col items-center mb-16">
          <h2 className="text-[#f7931e] text-xl md:text-2xl font-bold mb-2 text-center">Industries We serve</h2>
          <p className="text-center text-base mb-8">Explore job opportunities across sectors-locally and overseas in GCC countries</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-5xl">
            {industries.map((ind, idx) => (
              <div
                key={idx}
                className="relative flex flex-col justify-end items-center h-56 sm:h-64 lg:h-72 rounded-2xl shadow-lg overflow-hidden group transform transition-transform duration-300 hover:scale-105 bg-gray-100"
                style={{ backgroundImage: `url(${ind.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:from-[#f7931e]/80 group-hover:via-[#f7931e]/40 group-hover:to-transparent transition-all duration-300"></div>
                {/* Title */}
                <div className="relative z-10 w-full text-center px-4 pb-6">
                  <span className="text-white text-lg sm:text-xl lg:text-2xl font-bold drop-shadow-lg">
                    {ind.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Industry; 