import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const industries = [
  { title: 'Construction and Real Estate', image: '/images/construction-and-real-estate.webp' },
  { title: 'Manufacturing and Industrial', image: '/images/manufacturing-and-industrial-1.webp' },
  { title: 'Hospitality and Tourism', image: '/images/hospitality-and-tourism.webp' },
  { title: 'Healthcare', image: '/images/healthcare.webp' },
  { title: 'Retail and Customer Service', image: '/images/retail-and-customer-service.webp' },
  { title: 'Logistics and Transportation', image: '/images/logistics-and-transportation.webp' },
  { title: 'Security Services', image: '/images/security-services.webp' },
  { title: 'Cleaning and Facility Management', image: '/images/cleaning-and-facility-management.webp' },
];

const Industry = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-50 to-pink-50">
      <Header />

      <main className="flex-1 w-full flex flex-col items-center pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="w-full flex flex-col items-center">
          <div className="w-full max-w-5xl relative mt-2 sm:mt-4 mb-10 sm:mb-12">
            <img
              src="/images/request-a-team.webp"
              alt="Team"
              className="w-full h-52 sm:h-72 md:h-96 object-cover rounded-b-3xl shadow-lg"
              loading="eager"
            />

            {/* Overlay container that centers on mobile, left-aligns on larger screens */}
            <div className="absolute inset-0 flex flex-col items-center justify-center sm:items-start sm:justify-center px-4 sm:px-10">
              <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow-2xl text-center sm:text-left max-w-[90%] sm:max-w-[70%]">
                Get Teams for Housekeeping, Security, Labours & More
              </h1>

              <button className="mt-4 sm:mt-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-base sm:text-xl font-bold rounded-xl px-6 sm:px-8 py-3 shadow-md hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500">
                Request Team
              </button>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="w-full flex flex-col items-center mb-16 px-4">
          <h2 className="text-purple-700 text-xl sm:text-2xl md:text-3xl font-extrabold mb-2 text-center">
            Industries We Serve
          </h2>
          <p className="text-center text-gray-700 text-sm sm:text-base mb-8 sm:mb-10 max-w-xl">
            Explore job opportunities across sectors—locally and overseas in GCC countries.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 w-full max-w-6xl">
            {industries.map((ind, idx) => (
              <div
                key={idx}
                className="relative flex flex-col justify-end items-center h-48 sm:h-64 lg:h-72 rounded-2xl shadow-xl overflow-hidden group transform transition duration-300 hover:scale-105 touch-manipulation"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url("${ind.image}")` }}
                ></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-purple-700/70 group-hover:via-pink-500/40 transition-all duration-300"></div>

                {/* Title */}
                <div className="relative z-10 w-full text-center px-3 sm:px-4 pb-4 sm:pb-6">
                  <span className="text-white text-base sm:text-xl lg:text-2xl font-bold drop-shadow-lg">
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
