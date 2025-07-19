import React, { useState } from 'react';

const testimonials = [
  {
    text: '"Sunvi Hi-Tech helped me find my dream job overseas quickly and easily. The process was smooth, and the support team guided me at every step!"',
    name: 'PRIYA SINGH',
    job: 'CANDIDATE (NURSE, UAE)',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    text: '"We hired skilled workers for our company through Sunvi Hi-Tech. The platform is reliable, and the candidates are well-screened. Highly recommended for employers!"',
    name: 'RAHUL MEHTA',
    job: 'HR MANAGER, TECH SOLUTIONS',
    avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
  },
  {
    text: '"The job alerts and recommendations matched my skills perfectly. I got placed in a reputed company within weeks. Thank you, Sunvi Hi-Tech!"',
    name: 'ANITA DESAI',
    job: 'CANDIDATE (ACCOUNTANT, INDIA)',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  const handlePrev = () => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const handleNext = () => setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">Testimonials</h2>
        <p className="text-center text-gray-600 mb-8">
          Hear from our job seekers and employers about their experience with Sunvi Hi-Tech.<br />
          We connect talent and opportunity across India and overseas.
        </p>
        <div className="flex items-center justify-center">
          {/* Left Arrow */}
          <button
            className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 mr-4"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <span className="text-2xl">&#60;</span>
          </button>
          {/* Testimonial Card */}
          <div className="flex-1 max-w-3xl bg-white border border-gray-200 rounded-2xl p-8 flex flex-col md:flex-row items-center relative shadow-sm min-h-[200px]">
            {/* Avatar */}
            <img
              src={t.avatar}
              alt={t.name}
              className="w-16 h-16 rounded-full object-cover mr-6 mb-4 md:mb-0"
            />
            {/* Testimonial Text and Info */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="text-gray-700 text-base md:text-lg mb-4">{t.text}</div>
              <div className="mt-2">
                <span className="text-[#642c92] font-bold uppercase tracking-wide text-sm">{t.name}</span>
                <div className="text-xs text-gray-400 tracking-widest mt-1">{t.job}</div>
              </div>
            </div>
            {/* Quote Icon */}
            <span className="absolute bottom-4 right-6 text-5xl text-gray-200 select-none">&ldquo;</span>
          </div>
          {/* Right Arrow */}
          <button
            className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 ml-4"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <span className="text-2xl">&#62;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;