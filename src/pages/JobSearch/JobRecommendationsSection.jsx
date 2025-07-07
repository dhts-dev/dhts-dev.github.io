import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const jobs = [
  {
    id: 1,
    title: 'Packers Movers',
    position: '20',
    pay: 'Rs30,000',
    location: 'Paris',
    image: '/images/packers movers.jpeg',
  },
  {
    id: 2,
    title: 'Carpenter',
    position: '20',
    pay: 'Rs30,000',
    location: 'Paris',
    image: '/images/carpenter.jpeg',
  },
  {
    id: 3,
    title: 'Grooming',
    position: '20',
    pay: 'Rs30,000',
    location: 'Paris',
    image: '/images/grooming.jpeg',
  },
  {
    id: 4,
    title: 'Handyman',
    position: '20',
    pay: 'Rs30,000',
    location: 'Paris',
    image: '/images/handyman servies.jpeg',
  },
];

const RegistrationDialog = ({ isOpen, onClose, onSignup }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40" onClick={onClose}>
      <div className="bg-white rounded-xl pt-7 pr-7 pb-5 pl-5 min-w-[240px] max-w-[90vw] relative shadow-xl" onClick={e => e.stopPropagation()}>
        <button className="absolute top-3 right-3 text-lg text-gray-400 hover:text-gray-700" onClick={onClose} aria-label="Close">&times;</button>
        <div className="flex flex-col items-center">
          <div className="text-lg font-semibold text-gray-900 mb-5 text-center">To know more, register here:</div>
          <button 
            onClick={onSignup}
            className="bg-[#f7931e] text-white text-base rounded px-6 py-2 font-semibold shadow hover:bg-[#e67e22] transition-colors focus:outline-none focus:ring-2 focus:ring-[#f7931e] focus:ring-offset-2"
            style={{minWidth: '100px'}}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

const JobCard = ({ job }) => {
  const navigate = useNavigate();
  const [showDialog, setShowDialog] = useState(false);

  const handleKnowMoreClick = () => {
    setShowDialog(true);
  };

  const handleSignup = () => {
    setShowDialog(false);
    navigate('/signup');
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
  };

  return (
    <>
      <div className="bg-[#d4dbbe] rounded-2xl p-6 w-full max-w-md flex flex-col relative shadow-lg min-h-[420px] transition-transform hover:scale-105">
        {/* Heart Icon */}
        <button className="absolute top-4 right-4 text-gray-600 text-lg">♡</button>

        {/* Job Title */}
        <h3 className="text-xl font-semibold mb-4">{job.title}</h3>

        {/* Job Image */}
        <img
          src={job.image}
          alt={job.title}
          className="w-full h-48 object-cover rounded-md mb-6"
        />

        {/* Job Details */}
        <p className="text-sm mb-1"><span className="font-medium">Position :</span> {job.position}</p>
        <p className="text-sm mb-1"><span className="font-medium">Pay :</span> {job.pay}</p>
        <p className="text-sm mb-6"><span className="font-medium">Location :</span> {job.location}</p>

        {/* Button */}
        <div className="mt-auto">
          <button 
            className="bg-[#f7931e] text-white text-sm rounded w-full py-2 font-semibold hover:bg-[#e67e22] transition-colors"
            onClick={handleKnowMoreClick}
          >
            Know more
          </button>
        </div>
      </div>

      <RegistrationDialog 
        isOpen={showDialog}
        onClose={handleCloseDialog}
        onSignup={handleSignup}
      />
    </>
  );
};

const JobRecommendationsSection = () => (
  <section className="w-full bg-[#f3f5ed] py-20 flex justify-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-24 gap-y-20 max-w-7xl px-8">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  </section>
);

export default JobRecommendationsSection;
