import React, { useState, useEffect, useRef } from 'react';
import { FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { indianJobs, overseasJobs } from '../../components/common/jobsData';


const FadeInOnScroll = ({ children }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
};

const JobRecommendationsSection = () => {
  const [jobType, setJobType] = useState('indian');
  const [location, setLocation] = useState('');
  const [industry, setIndustry] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [showCount, setShowCount] = useState(6);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const navigate = useNavigate();

  const allJobs = jobType === 'indian' ? indianJobs : overseasJobs;
  const uniqueLocations = [...new Set(allJobs.map((job) => job.location))];
  const uniqueIndustries = [...new Set(allJobs.map((job) => job.title))];

  const filteredJobs = allJobs.filter(
    (job) =>
      (!location || job.location === location) &&
      (!industry || job.title === industry) &&
      (!jobTitle || job.title.toLowerCase().includes(jobTitle.toLowerCase()))
  );

  const visibleJobs = filteredJobs.slice(0, showCount);

  const handleKnowMore = (job) => {
    setSelectedJob(job);
    setShowPopup(true);
  };

  useEffect(() => {
    setLocation('');
  }, [jobType]);

  const goToSignup = () => {
    navigate('/signup');
  };

  return (
    <div className="w-full bg-[#f3f5ed] text-gray-800 pb-16">
      {/* Hero Banner */}
      <div
        className="relative w-full h-[250px] md:h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(/images/current-jobs.jpeg)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-white text-2xl md:text-4xl font-bold mb-4">
            Discover Jobs Tailored for You
          </h1>
          <input
            type="text"
            placeholder="Search Job Title..."
            className="w-full max-w-md px-4 py-2 rounded-md border border-white bg-white text-gray-800 shadow-md focus:outline-none"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>
      </div>

      {/* Job Type Toggle */}
      <div className="flex justify-center mt-6">
        <div className="flex bg-white border border-orange-300 rounded-full overflow-hidden shadow-md">
          <button
            onClick={() => setJobType('indian')}
            className={`px-6 py-2 transition-all ${
              jobType === 'indian' ? 'bg-[#f7931e] text-white' : 'bg-white text-gray-700'
            }`}
          >
            Indian Jobs (INR)
          </button>
          <button
            onClick={() => setJobType('overseas')}
            className={`px-6 py-2 transition-all ${
              jobType === 'overseas' ? 'bg-[#f7931e] text-white' : 'bg-white text-gray-700'
            }`}
          >
            Overseas Jobs (AED)
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4 px-4">
        <select
          className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-md bg-white"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">All Locations</option>
          {uniqueLocations.map((loc, index) => (
            <option key={index} value={loc}>
              {loc}
            </option>
          ))}
        </select>

        <select
          className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-md bg-white"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
        >
          <option value="">All Industries</option>
          {uniqueIndustries.map((ind, index) => (
            <option key={index} value={ind}>
              {ind}
            </option>
          ))}
        </select>
      </div>

      {/* Jobs Grid */}
      <div className="mt-10 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {visibleJobs.map((job) => (
          <FadeInOnScroll key={job.id}>
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              <div className="w-full aspect-[1/1] overflow-hidden rounded-t-xl">
                <img
                  src={job.image}
                  alt={job.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#f7931e]">{job.title}</h3>
                <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                  <FaMapMarkerAlt className="text-[#f7931e]" />
                  {job.location}
                </div>
                <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
                  <FaBriefcase className="text-[#f7931e]" />
                  {job.position} positions
                </div>
                <p className="mt-1 text-sm font-semibold text-red-500">{job.pay}</p>
                <button
                  className="mt-3 bg-[#f7931e] text-white px-4 py-2 rounded-full hover:bg-orange-600 w-full text-sm"
                  onClick={() => handleKnowMore(job)}
                >
                  Know More
                </button>
              </div>
            </div>
          </FadeInOnScroll>
        ))}
      </div>

      {/* Load More */}
      {showCount < filteredJobs.length && (
        <div className="mt-8 flex justify-center">
          <button
            className="bg-[#f7931e] text-white px-6 py-2 rounded-full hover:bg-orange-600"
            onClick={() => setShowCount((prev) => prev + 9)}
          >
            Load More
          </button>
        </div>
      )}

      {/* Signup Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full relative shadow-lg">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold text-[#f7931e] mb-4">Sign Up to Apply</h2>
            <p className="mb-4 text-gray-700">
              Please sign up or log in to view full job details and apply for{' '}
              <strong>{selectedJob?.title}</strong> in <strong>{selectedJob?.location}</strong>.
            </p>
            <button
              onClick={goToSignup}
              className="bg-[#f7931e] text-white px-4 py-2 rounded-full w-full hover:bg-orange-600"
            >
              Go to Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobRecommendationsSection;