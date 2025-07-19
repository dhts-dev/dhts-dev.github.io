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
    <section className="w-full flex flex-col items-center pt-0 pb-0 bg-[#f3f5ed]">
      {/* Toggle Scroller */}
      <div className="flex justify-center mb-12 mt-16">
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
      {/* Removed empty filter dropdowns container and its margin to eliminate gap */}
    </section>
  );
};

export default SearchSection;
