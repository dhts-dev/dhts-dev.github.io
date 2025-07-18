import React from 'react';
import { Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';

const FooterSection = () => {
  const mainNavigation = ['Home', 'Industries', 'Resources', 'About Us', 'Contact Us'];
  const jobsByLocation = ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Al Ain', 'Fujairah'];
  const jobsByIndustry = [
    'Construction & Real Estate',
    'Oil & Gas',
    'Tourism & Hospitality',
    'Aviation & Aerospace',
    'Renewable Energy',
    'Health Care',
  ];
  const forJobSeekers = ['Create Account', 'Login', 'Track Application'];
  const forEmployers = ['Employer Login', 'Submit Requirement'];

  return (
    <div className="bg-global-2 py-10 px-4 sm:px-6 lg:px-8 text-global-5">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start flex-wrap gap-10 mb-12">
          {/* Company Info */}
          <div className="flex-1 min-w-[180px] max-w-xs">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-global-5 mb-4">Sunvi Hi-Tech</h3>
            <p className="text-base text-global-5">Helping workers to find trusted job</p>
          </div>

          {/* Main Navigation */}
          <div className="flex flex-col gap-2 min-w-[180px]">
            <h4 className="text-lg font-semibold text-global-5 mb-2">Main Navigation</h4>
            {mainNavigation.map((item, index) => (
              <span
                key={index}
                className="text-base text-left text-global-5 hover:text-global-3 cursor-pointer transition-colors"
              >
                {item}
              </span>
            ))}
            <span className="text-base text-global-5 hover:text-global-3 cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="text-base text-global-5 hover:text-global-3 cursor-pointer transition-colors">
              Terms & Conditions
            </span>
          </div>

          {/* Jobs by Location */}
          <div className="flex flex-col gap-2 min-w-[180px]">
            <h4 className="text-lg font-semibold text-global-5 mb-2">Jobs by Location</h4>
            {jobsByLocation.map((location, index) => (
              <span
                key={index}
                className="text-base text-left text-global-5 hover:text-global-3 cursor-pointer transition-colors"
              >
                {location}
              </span>
            ))}
          </div>

          {/* Jobs by Industry */}
          <div className="flex flex-col gap-2 min-w-[180px]">
            <h4 className="text-lg font-semibold text-global-5 mb-2">Jobs by Industry</h4>
            {jobsByIndustry.map((industry, index) => (
              <span
                key={index}
                className="text-base text-left text-global-5 hover:text-global-3 cursor-pointer transition-colors"
              >
                {industry}
              </span>
            ))}
          </div>

          {/* Job Seekers + Employers Combined Column */}
          <div className="flex flex-col gap-6 min-w-[180px]">
            {/* For Job Seekers */}
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-semibold text-global-5 mb-2">For Job Seekers</h4>
              {forJobSeekers.map((item, index) => (
                <span
                  key={index}
                  className="text-base text-left text-global-5 hover:text-global-3 cursor-pointer transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* For Employers */}
            <div className="flex flex-col gap-2">
              <h4 className="text-lg font-semibold text-global-5 mb-2">For Employers</h4>
              {forEmployers.map((item, index) => (
                <span
                  key={index}
                  className="text-base text-left text-global-5 hover:text-global-3 cursor-pointer transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media & QR Section */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-300">
          <div className="flex gap-6">
            <a href="#" className="hover:text-global-3 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-global-3 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-global-3 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-global-3 transition-colors"><Twitter size={20} /></a>
          </div>

          {/* QR Code Placeholder */}
          <div className="w-20 h-20 bg-gray-200 flex items-center justify-center text-sm text-gray-500 rounded">
            QR
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
