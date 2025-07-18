import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-[linear-gradient(192deg,#ffd700_0%,_#ed8733_100%)] py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        
        {/* 1. Company Info */}
        <div className="flex flex-col space-y-2">
          <span className="text-2xl font-bold text-white">Sunvi Hi-Tech</span>
          <span className="text-xl text-white">Helping workers to find trusted job</span>
        </div>

        {/* 2. Main Navigation */}
        <div className="flex flex-col space-y-1">
          <span className="text-2xl text-white font-semibold mb-2">Navigation</span>
          <ul className="ml-2 space-y-1">
            <li className="text-xl text-white">Home</li>
            <li className="text-xl text-white">Current Jobs</li>
            <li className="text-xl text-white">Services</li>
            <li className="text-xl text-white">Resources</li>
            <li className="text-xl text-white">Industry</li>
          </ul>
        </div>

        {/* 3. Jobs by Location */}
        <div className="flex flex-col space-y-1">
          <span className="text-2xl text-white font-semibold mb-2">Jobs By Location</span>
          <ul className="ml-2 space-y-1">
            <li className="text-xl text-white">India</li>
            <li className="text-xl text-white">Overseas</li>
          </ul>
        </div>

        {/* 4. Jobs by Industry */}
        <div className="flex flex-col space-y-1">
          <span className="text-2xl text-white font-semibold mb-2">Jobs By Industry</span>
          <ul className="ml-2 space-y-1">
            <li className="text-xl text-white">Constructor Worker</li>
            <li className="text-xl text-white">Driver</li>
            <li className="text-xl text-white">Hotel Staff</li>
            <li className="text-xl text-white">Security</li>
            <li className="text-xl text-white">House Helping</li>
            <li className="text-xl text-white">Cook</li>
            <li className="text-xl text-white">Maintenance</li>
          </ul>
        </div>

        {/* 5. Job Seekers & Employers vertically stacked */}
        <div className="flex flex-col space-y-6">
          {/* For Job Seekers */}
          <div>
            <span className="text-2xl text-white font-semibold">For Job Seekers</span>
            <ul className="ml-2 space-y-1 mt-1">
              <li className="text-xl text-white">Job Seekers Login</li>
              <li className="text-xl text-white">Search Jobs</li>
              <li className="text-xl text-white">How to Find Job</li>
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <span className="text-2xl text-white font-semibold">For Employers</span>
            <ul className="ml-2 space-y-1 mt-1">
              <li className="text-xl text-white">Employers Login</li>
              <li className="text-xl text-white">Post Job</li>
              <li className="text-xl text-white">Hiring Guide</li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;
