import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <section className="w-full bg-[#f3f5ed] flex justify-center items-center">
      <div className="w-full max-w-7xl h-[440px] relative rounded-b-2xl overflow-hidden flex items-stretch">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/current jobs.jpeg"
            alt="Hero"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Text & Button Area */}
        <div className="relative z-10 flex flex-col justify-center items-end w-full h-full px-8">
          <div className="max-w-xl w-full text-right ml-auto">
            <h1
              className="text-4xl md:text-5xl font-extrabold text-white mb-2"
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.25)' }}
            >
              Find Your Next <br />
              Opportunity
            </h1>
            <p
              className="text-lg md:text-xl font-medium text-white mb-6 leading-snug"
              style={{ textShadow: '0 1px 2px rgba(0,0,0,0.15)' }}
            >
              Browse available jobs locally or abroad – <br />
              filtered for your needs
            </p>
            {/* Search Bar */}
            <form
              className="flex rounded-full overflow-hidden shadow-lg w-[400px] h-[48px] mt-[-24px] ml-auto"
              onSubmit={handleSearch}
            >
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search jobs here"
                className="bg-[#dbe6cb] flex-grow px-4 h-full text-black text-base font-semibold outline-none"
              />
              <button
                type="submit"
                className="bg-[#f7931e] w-[90px] h-full flex items-center justify-center text-white font-bold text-lg hover:bg-[#d87c0e] transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;