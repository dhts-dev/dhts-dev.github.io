import React from 'react';
import Button from '../ui/Button';

const Footer = () => {
  return (
    <footer className="w-full bg-[linear-gradient(192deg,#ffd700_0%,_#ed8733_100%)] py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-bold text-white">Sunvi Hi-Tech</span>
          <span className="text-xl text-white">Helping workers to find trusted job</span>
        </div>
        {/* Main Navigation */}
        <div className="flex flex-col gap-2">
          <span className="text-2xl text-white font-semibold mb-2">Home</span>
          <span className="text-2xl text-white font-semibold mb-2">Current Jobs</span>
          <span className="text-2xl text-white font-semibold mb-2">Services</span>
          <span className="text-2xl text-white font-semibold mb-2">Resources</span>
          <span className="text-2xl text-white font-semibold mb-2">Industry</span>
        </div>
        {/* Search and Location/Industry */}
        <div className="flex flex-col gap-4">
          <Button variant="search" size="large" className="w-full mb-2 text-xl">search jobs</Button>
          <div>
            <span className="text-2xl text-white font-semibold">Jobs By Location</span>
            <div className="flex flex-col gap-1 ml-2">
              <span className="text-xl text-white">India</span>
              <span className="text-xl text-white">Overseas</span>
            </div>
          </div>
          <div>
            <span className="text-2xl text-white font-semibold">Jobs By Industry</span>
            <div className="flex flex-col gap-1 ml-2">
              <span className="text-xl text-white">Constructor worker</span>
              <span className="text-xl text-white">Driver</span>
              <span className="text-xl text-white">Hotel Staff</span>
              <span className="text-xl text-white">Security</span>
              <span className="text-xl text-white">House Helping</span>
              <span className="text-xl text-white">Cook</span>
              <span className="text-xl text-white">Maintenance</span>
            </div>
          </div>
        </div>
        {/* For Job Seekers & Employers */}
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-2xl text-white font-semibold">For Job Seekers</span>
            <div className="flex flex-col gap-1 ml-2">
              <span className="text-xl text-white">Job Seekers Login</span>
              <span className="text-xl text-white">Search Jobs</span>
              <span className="text-xl text-white">How to find Job</span>
            </div>
          </div>
          <div>
            <span className="text-2xl text-white font-semibold">For Employers</span>
            <div className="flex flex-col gap-1 ml-2">
              <span className="text-xl text-white">EmployersLogin</span>
              <span className="text-xl text-white">Post Job</span>
              <span className="text-xl text-white">Hiring Guide</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;