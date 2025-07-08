import React from 'react';
import { Link } from 'react-router-dom';

const FooterSection = () => {
  const jobsByLocation = ['India', 'Overseas'];
  const jobsByIndustry = [
    'Constructor worker',
    'Driver',
    'Hotel Staff',
    'Security',
    'House Helping',
    'Cook',
    'Maintenance'
  ];
  const forJobSeekers = [
    'Job Seekers Login',
    'Search Jobs',
    'How to find Job'
  ];
  const forEmployers = [
    'EmployersLogin',
    'Post Job',
    'Hiring Guide'
  ];
  const mainNavigation = [
    'Home',
    'Available Jobs',
    'Sectors'
  ];

  return (
    <footer
      className="relative w-full bg-cover bg-center bg-no-repeat py-8 sm:py-12 md:py-10 px-4 sm:px-6 md:px-10"
      style={{ backgroundImage: 'url(/images/img_image.png)' }}
    >
      {/* QR Code Button at top right of footer */}
      <button
        className="absolute top-6 right-10 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3 border border-gray-300 hover:shadow-xl transition-all z-50 text-lg"
      >
        <img src="/images/qr.svg" alt="QR Code" className="w-16 h-16 object-contain" />
        <span className="text-base font-medium text-gray-700 hidden sm:inline">Scan QR</span>
      </button>
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 md:mb-16">
          {/* Company Info */}
          <div className="flex-1 max-w-xs">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold leading-6 sm:leading-7 md:leading-[29px] text-global-5 mb-4 sm:mb-6">
              Sunvi Hi-Tech
            </h3>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-6 sm:leading-7 md:leading-[29px] text-global-5">
              Helping workers to find trusted job
            </p>
          </div>

          {/* Navigation and Location */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 sm:gap-8 lg:gap-12 flex-1">
            {/* Main Navigation */}
            <div className="flex flex-col gap-2 sm:gap-4">
              {mainNavigation.map((item, index) => (
                <button
                  key={index}
                  className="text-lg sm:text-xl md:text-2xl font-semibold leading-10 sm:leading-12 md:leading-[52px] text-global-5 text-left hover:text-global-3 transition-colors"
                >
                  {item}
                </button>
              ))}
              <Link
                to="/privacy-policy"
                className="text-lg sm:text-xl md:text-2xl font-semibold leading-10 sm:leading-12 md:leading-[52px] text-global-5 text-left hover:text-global-3 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-and-conditions"
                className="text-lg sm:text-xl md:text-2xl font-semibold leading-10 sm:leading-12 md:leading-[52px] text-global-5 text-left hover:text-global-3 transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>

            {/* Jobs by Location */}
            <div className="flex flex-col gap-6 sm:gap-8 relative">
              <div className="flex flex-col gap-2 sm:gap-4">
                <h4 className="text-lg sm:text-xl md:text-2xl font-semibold leading-10 sm:leading-12 md:leading-[52px] text-global-5">
                  Jobs By Location
                </h4>
                {jobsByLocation.map((location, index) => (
                  <button
                    key={index}
                    className="text-lg sm:text-xl md:text-2xl font-semibold leading-10 sm:leading-12 md:leading-[52px] text-global-5 text-left hover:text-global-3 transition-colors"
                  >
                    {location}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* For Job Seekers */}
          <div className="flex flex-col gap-2 sm:gap-4">
            <h4 className="text-lg sm:text-xl md:text-2xl font-semibold leading-10 sm:leading-12 md:leading-[52px] text-global-5 mb-2 sm:mb-4">
              For Job Seekers
            </h4>
            {forJobSeekers.map((item, index) => (
              <button
                key={index}
                className="text-lg sm:text-xl md:text-2xl font-semibold leading-10 sm:leading-12 md:leading-[52px] text-global-5 text-left hover:text-global-3 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* For Employers */}
          <div className="flex flex-col gap-2 sm:gap-4">
            <h4 className="text-lg sm:text-xl md:text-2xl font-semibold leading-10 sm:leading-12 md:leading-[52px] text-global-5 mb-2 sm:mb-4">
              For Employers
            </h4>
            {forEmployers.map((item, index) => (
              <button
                key={index}
                className="text-lg sm:text-xl md:text-2xl font-semibold leading-10 sm:leading-12 md:leading-[52px] text-global-5 text-left hover:text-global-3 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Jobs by Industry */}
          <div className="flex flex-col gap-2 sm:gap-4">
            <h4 className="text-lg sm:text-xl md:text-2xl font-semibold leading-10 sm:leading-12 md:leading-[52px] text-global-5 mb-2 sm:mb-4">
              Jobs By Industry
            </h4>
            {jobsByIndustry.map((industry, index) => (
              <button
                key={index}
                className="text-lg sm:text-xl md:text-2xl font-semibold leading-10 sm:leading-12 md:leading-[52px] text-global-5 text-left hover:text-global-3 transition-colors"
              >
                {industry}
              </button>
            ))}
          </div>
        </div>

        {/* Social Media & QR Code Row */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-300 relative">
          {/* Social Media Icons */}
          <div className="flex gap-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg className="w-7 h-7 text-global-5 hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0" /></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg className="w-7 h-7 text-global-5 hover:text-pink-500 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.094 12 2.094zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.635.4 3.662 1.374c-.974.974-1.246 2.241-1.308 3.608C2.175 8.414 2.163 8.794 2.163 12s.012 3.584.07 4.85c.062 1.366.334 2.633 1.308 3.608.974.974 2.241 1.246 3.608 1.308 1.266.058 1.646.069 4.85.069s3.584-.012 4.85-.07c1.366-.062 2.633-.334 3.608-1.308.974-.974 1.246-2.241 1.308-3.608.058-1.266.069-1.646.069-4.85s-.012-3.584-.07-4.85c-.062-1.366-.334-2.633-1.308-3.608-.974-.974-2.241-1.246-3.608-1.308C15.647 2.175 15.267 2.163 12 2.163zm0 5.838a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.563a2.563 2.563 0 1 1 0-5.126 2.563 2.563 0 0 1 0 5.126zm6.406-6.844a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z" /></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg className="w-7 h-7 text-global-5 hover:text-red-600 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.386.574A2.994 2.994 0 0 0 .502 6.186C0 8.072 0 12 0 12s0 3.928.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.5 20.5 12 20.5 12 20.5s7.5 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.928 24 12 24 12s0-3.928-.502-5.814zM9.75 15.568V8.432L15.818 12l-6.068 3.568z" /></svg>
            </a>
          </div>


        </div>
      </div>
    </footer>
  );
};

export default FooterSection;