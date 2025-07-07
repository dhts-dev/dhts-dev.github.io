import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchSection = () => {
  const [filters, setFilters] = useState({
    jobType: '',
    keywords: '',
    experience: '',
    location: '',
  });
  const [selected, setSelected] = useState('local');
  const navigate = useNavigate();

  const handleToggle = (type) => {
    setSelected(type);
    if (type === 'overseas') {
      navigate('/overseas-jobs');
    }
  };

  return (
    <section className="w-full flex flex-col items-center py-14 bg-[#f3f5ed]">
      {/* Toggle Scroller */}
      <div className="flex justify-center mb-12">
        <div className="flex rounded-full bg-[#d2dac3] p-1 w-[400px]">
          <button
            className={`flex-1 px-8 py-3 rounded-full text-lg font-medium transition-all duration-200 ${selected === 'local' ? 'bg-[#c7d2b5] text-black' : 'bg-transparent text-black'}`}
            onClick={() => handleToggle('local')}
          >
            Local Jobs (INR)
          </button>
          <button
            className={`flex-1 px-8 py-3 rounded-full text-lg font-medium transition-all duration-200 ${selected === 'overseas' ? 'bg-white text-black shadow' : 'bg-transparent text-black'}`}
            onClick={() => handleToggle('overseas')}
          >
            Overseas Job (USD/AED)
          </button>
        </div>
      </div>
      {/* Filter Dropdowns */}
      <div className="w-full flex justify-center mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl w-full px-6">
          <select className="w-full border border-gray-400 rounded-md px-4 py-3 text-base text-gray-800">
            <option>Job Type</option>
            <option>Construction</option>
            <option>House Keeping</option>
            <option>Construction and real estate</option>
            <option>Manufacturing and industrial </option>
            <option>Hospitality and tourism</option>
            <option>Healthcare</option>
            <option>Retail and customer service</option>
            <option>Logistics and transportation</option>
            <option>Security services</option>
            <option>Cleaning and facility management</option>
          </select>
          <select className="w-full border border-gray-400 rounded-md px-4 py-3 text-base text-gray-800">
            <option>Location</option>
            <option>Dubai</option>
            <option>Paris</option>
            <option>QATAR</option>
            <option>Turkey</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
