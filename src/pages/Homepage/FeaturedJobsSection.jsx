import React, { useState } from 'react';
import Login from '../LoginDialog';
import Signup from '../SignupDialog';
import { indianJobs, overseasJobs } from '../../components/common/jobsData';

const filters = [
  { label: 'All', value: 'all' },
  { label: 'India', value: 'India' },
  { label: 'Overseas', value: 'overseas' },
];

const FeaturedJobsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [authDialog, setAuthDialog] = useState(null);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  const allJobs = [...indianJobs, ...overseasJobs];
  const filteredJobs = activeFilter === 'all'
    ? allJobs
    : allJobs.filter((j) => j.type.toLowerCase() === activeFilter.toLowerCase());

  const visibleJobs = filteredJobs.slice(0, 4);

  return (
    <section className="w-full bg-[#f7f6f2] py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#642c92] mb-8">Featured Jobs</h2>

        {/* Filter Buttons */}
        <div className="flex gap-6 mb-8">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-8 py-2 rounded-full text-lg font-medium transition-all ${
                activeFilter === f.value
                  ? 'bg-white text-[#642c92] border-2 border-[#642c92]'
                  : 'bg-white text-black'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="relative flex items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
            {visibleJobs.map((job, idx) => (
              <div
                key={job.id}
                className="relative rounded-xl overflow-hidden shadow-md group bg-white flex flex-col min-h-[420px] max-w-[320px] w-full mx-auto animate-fadeUp"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                {/* Image */}
                <div className="relative w-full aspect-[4/3] flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={job.image}
                    alt={job.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white z-10">
                    <div className="text-lg font-semibold mb-1 drop-shadow">{job.title}</div>
                    <div className="text-sm font-medium drop-shadow">{job.location}</div>
                  </div>
                  {job.type === 'overseas' && (
                    <span className="absolute top-2 right-2 bg-[#642c92] text-white px-3 py-1 rounded-full text-xs font-medium">
                      overseas
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between p-4">
                  <button
                    className="mt-auto w-full bg-[#642c92] hover:bg-[#4b216e] text-white rounded-b-xl py-3 text-lg font-semibold transition-colors duration-200"
                    onClick={() => setShowLoginPrompt(true)}
                  >
                    Know More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Fade and Arrow */}
          <div className="absolute right-0 top-0 h-full flex items-center pr-2 z-20">
            <div className="w-16 h-48 bg-gradient-to-l from-[#f7f6f2] to-transparent pointer-events-none" />
            <button
              className="ml-[-2.5rem] bg-[#642c92] hover:bg-[#4b216e] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-colors duration-200 z-30 border-2 border-white"
              onClick={() => setShowLoginPrompt(true)}
              aria-label="See more jobs"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Login Prompt */}
        {showLoginPrompt && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
            onClick={() => setShowLoginPrompt(false)}
          >
            <div
              className="bg-white rounded-2xl p-8 min-w-[320px] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="absolute top-2 right-2 text-2xl" onClick={() => setShowLoginPrompt(false)}>
                &times;
              </button>
              <div className="text-xl font-semibold mb-6">To know more, register here:</div>
              <div className="flex gap-4">
                <a
                  href="/signup"
                  className="bg-[#642c92] text-white px-6 py-2 rounded-lg font-medium text-lg hover:bg-[#4b216e] transition"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Auth Dialogs */}
        {authDialog === 'login' && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
            onClick={() => setAuthDialog(null)}
          >
            <div
              className="bg-white rounded-2xl p-6 min-w-[350px] max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Login />
            </div>
          </div>
        )}
        {authDialog === 'signup' && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
            onClick={() => setAuthDialog(null)}
          >
            <div
              className="bg-white rounded-2xl p-6 min-w-[350px] max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Signup />
            </div>
          </div>
        )}
      </div>

      {/* Fade-up Animation */}
      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp {
          animation: fadeUp 0.7s cubic-bezier(.4,0,.2,1) both;
        }
      `}</style>
    </section>
  );
};

export default FeaturedJobsSection;
