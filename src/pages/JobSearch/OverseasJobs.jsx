import React, { useState, useEffect } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { useNavigate } from 'react-router-dom';

const jobs = [
  {
    title: 'Constructor worker',
    position: 30,
    pay: '₹30,000',
    location: 'Paris',
    image: '/images/img_image_12.png',
  },
  {
    title: 'House Keeping',
    position: 30,
    pay: '₹30,000',
    location: 'Paris',
    image: '/images/housekeeper.png',
  },
  {
    title: 'Driver',
    position: 30,
    pay: '₹30,000',
    location: 'Paris',
    image: '/images/driver.jpeg',
  },
  {
    title: 'Technician',
    position: 30,
    pay: '₹30,000',
    location: 'Paris',
    image: '/images/garments.jpeg',
  },
];

const jobTypes = [
  'Construction',
  'House Keeping',
  'Construction and real estate',
  'Manufacturing and industrial',
  'Hospitality and tourism',
  'Healthcare',
  'Retail and customer service',
  'Logistics and transportation',
  'Security services',
  'Cleaning and facility management',
];

const locations = ['Dubai', 'Paris', 'QATAR', 'Turkey'];

const KnowMoreDialog = ({ isOpen, onClose, onSignup }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40" onClick={onClose}>
      <div className="bg-white rounded-xl pt-7 pr-7 pb-5 pl-5 min-w-[240px] max-w-[90vw] relative shadow-xl" onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-3 right-3 text-lg text-gray-400 hover:text-gray-700" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <div className="flex flex-col items-center">
          <div className="text-lg font-semibold text-gray-900 mb-5 text-center">To know more, register here:</div>
          <button
            onClick={onSignup}
            className="bg-[#f7931e] text-white text-base rounded px-6 py-2 font-semibold shadow hover:bg-[#e67e22] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f7931e] focus:ring-offset-2"
            style={{ minWidth: '100px' }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

const SkeletonDropdown = () => (
  <div className="w-full h-[48px] bg-gray-200 rounded-md animate-pulse mb-0.5"></div>
);

const OverseasJobs = () => {
  const [selected, setSelected] = useState('overseas');
  const [showDialog, setShowDialog] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedJobType, setSelectedJobType] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleKnowMore = () => setShowDialog(true);
  const handleSignup = () => {
    setShowDialog(false);
    navigate('/signup');
  };
  const handleCloseDialog = () => setShowDialog(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#f3f5ed]">
      <Header />

      <main className="flex-1 w-full flex flex-col items-center pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="w-full bg-[#f3f5ed] relative z-10">
          <div className="relative w-full max-w-5xl mx-auto">
            <img
              src="/images/job over.jpeg"
              alt="Hero"
              className="w-full h-[480px] sm:h-[520px] md:h-[600px] object-cover object-top rounded-b-2xl"
            />
            <div className="absolute left-8 top-1/3 text-white text-xl sm:text-2xl md:text-3xl font-black leading-tight drop-shadow-lg max-w-[60%]">
              Explore Jobs in GCC Countries
              <br />
              Visa and placement support provided
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="w-full flex flex-col items-center bg-[#f3f5ed] mt-10 relative z-20">
          <div className="flex justify-center mb-10">
            <div className="flex rounded-full bg-[#d2dac3] p-1 w-[400px]">
              <button
                className={`flex-1 px-8 py-3 rounded-full text-lg font-medium transition-all duration-200 ${
                  selected === 'local' ? 'bg-[#c7d2b5]' : 'bg-transparent'
                }`}
                onClick={() => setSelected('local')}
              >
                Local Jobs (INR)
              </button>
              <button
                className={`flex-1 px-8 py-3 rounded-full text-lg font-medium transition-all duration-200 ${
                  selected === 'overseas' ? 'bg-white shadow' : 'bg-transparent'
                }`}
                onClick={() => setSelected('overseas')}
              >
                Overseas Job (USD/AED)
              </button>
            </div>
          </div>

          <div className="flex flex-row gap-8 max-w-2xl w-full px-6 mb-16">
            {loading ? (
              <>
                <SkeletonDropdown />
                <SkeletonDropdown />
              </>
            ) : (
              <>
                <select
                  className="flex-1 w-40 max-w-xs border border-gray-400 rounded-md px-3 py-2 text-sm text-gray-800 relative z-30"
                  value={selectedJobType}
                  onChange={(e) => setSelectedJobType(e.target.value)}
                >
                  <option value="">Job Type</option>
                  {jobTypes.map((type, idx) => (
                    <option key={idx} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <select
                  className="flex-1 w-40 max-w-xs border border-gray-400 rounded-md px-3 py-2 text-sm text-gray-800 relative z-30"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  <option value="">Location</option>
                  {locations.map((loc, idx) => (
                    <option key={idx} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </>
            )}
          </div>
        </section>

        {/* Job Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 w-full max-w-5xl mb-16 relative z-10">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-end items-center h-64 rounded-2xl shadow-lg overflow-hidden group transform transition-transform duration-300 hover:scale-105 bg-gray-100"
              style={{
                backgroundImage: `url(${job.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:from-[#f7931e]/80 group-hover:via-[#f7931e]/40 group-hover:to-transparent transition-all duration-300"></div>
              <div className="relative z-10 w-full text-center px-4 pb-6">
                <div className="text-white text-2xl font-bold mb-2 drop-shadow-lg">{job.title}</div>
                <div className="text-white text-base mb-1 drop-shadow">Position: {job.position}</div>
                <div className="text-white text-base mb-1 drop-shadow">Pay: {job.pay}</div>
                <div className="text-white text-base mb-4 drop-shadow">Location: {job.location}</div>
                <button
                  className="bg-[#f7931e] text-white rounded-full px-6 py-2 text-lg font-semibold shadow hover:bg-[#e67e22] transition-colors"
                  onClick={handleKnowMore}
                >
                  Know more
                </button>
              </div>
            </div>
          ))}
        </div>

        <KnowMoreDialog isOpen={showDialog} onClose={handleCloseDialog} onSignup={handleSignup} />
      </main>

      <Footer />
    </div>
  );
};

export default OverseasJobs;
