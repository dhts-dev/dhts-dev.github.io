import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { Link } from 'react-router-dom';

const applications = [
  { job: 'Security guard', location: 'City Center', status: 'Pending' },
  { job: 'Security guard', location: 'City Center', status: 'Completed' },
  { job: 'Security guard', location: 'City Center', status: 'Completed' },
  { job: 'Security guard', location: 'City Center', status: 'Pending' },
];

const EmployersServices = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f3f5ed]">
      <Header />
      <main className="flex-1 w-full flex flex-col items-center pt-16 lg:pt-20">
        {/* Hero Section */}
        <section className="w-full flex flex-col items-center bg-[#f3f5ed]">
          <div className="w-full max-w-7xl relative flex justify-center items-center">
            <img
              src="/images/for employee.jpeg" // Replace with handshake image if available
              alt="Handshake"
              className="w-full h-[420px] object-cover rounded-none"
            />
            {/* Overlay content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <h1 className="text-white text-4xl md:text-6xl font-extrabold text-center drop-shadow-lg mb-10">
                Hire the right candidate
              </h1>

              <div className="flex gap-8 mt-2">
                <Link to="/post-job">
                  <button className="bg-[#f7931e] text-white text-2xl font-semibold rounded-xl px-10 py-4 min-w-[200px]">
                    Post a Job
                  </button>
                </Link>

                <Link to="/request-team">
                  <button className="bg-[#f7931e] text-white text-2xl font-semibold rounded-xl px-10 py-4 min-w-[200px]">
                    Request Team
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Applications Table */}
        <section className="w-full flex flex-col items-center mt-16">
          <h2 className="text-[#f7931e] text-xl md:text-2xl font-semibold mb-6 text-center">View and manage Your list of applications</h2>
          <div className="w-full max-w-3xl bg-[#f3f5ed] rounded-lg overflow-hidden shadow-none">
            <table className="w-full text-left border-separate border-spacing-0">
              <thead>
                <tr className="bg-[#e9ecdf] text-black text-lg">
                  <th className="py-4 px-6 font-semibold">Job Title</th>
                  <th className="py-4 px-6 font-semibold">Location</th>
                  <th className="py-4 px-6 font-semibold">Status</th>
                  <th className="py-4 px-6 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-[#f7f6f3]">
                {applications.map((app, idx) => (
                  <tr key={idx} className="border-t border-[#e9ecdf]">
                    <td className="py-6 px-6 text-lg">{app.job}</td>
                    <td className="py-6 px-6 text-lg">{app.location}</td>
                    <td className="py-6 px-6">
                      <span className={`px-6 py-1 rounded-full text-base font-semibold ${app.status === 'Completed' ? 'bg-[#f7931e] text-white' : 'bg-white text-black border border-[#ccc]'}`}>{app.status}</span>
                    </td>
                    <td className="py-6 px-6 text-lg text-[#333] underline cursor-pointer">View More</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Two Cards Section */}
        <section className="w-full max-w-4xl flex flex-col md:flex-row justify-center items-start gap-12 mt-20 mb-16 px-4">
          {/* Left Card */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-[#f7931e] text-2xl font-semibold mb-4">Have a Job vacancy?</h3>
            <img src="/images/post a job.jpeg" alt="Post a Job" className="w-56 h-44 object-cover rounded mb-4 mx-auto md:mx-0" />
            <p className="text-base text-black mb-6">Post Your Job Vacancies and reach thousand of qualified candidates</p>
            <button className="bg-[#f7931e] text-white text-xl font-semibold rounded-xl px-8 py-3">post a Job</button>
          </div>
          {/* Divider */}
          <div className="hidden md:block w-px h-64 bg-[#b0b0b0] mx-4" />
          {/* Right Card */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-[#f7931e] text-2xl font-semibold mb-4">Bulk Hiring/ManPower</h3>
            <img src="/images/request a team.jpeg" alt="Request Team" className="w-56 h-44 object-cover rounded mb-4 mx-auto md:mx-0" />
            <p className="text-base text-black mb-6">Get Teams for HouseKeeping,Security,Labours, and more</p>
            <button className="bg-[#f7931e] text-white text-xl font-semibold rounded-xl px-8 py-3">Request Team</button>
          </div>
        </section>

        {/* Hiring Support Section */}
        <section className="w-full flex flex-col items-center py-10 px-4">
          <h3 className="text-[#f7931e] text-2xl font-semibold mb-8 text-left w-full max-w-6xl">Hiring Support -We handle it all</h3>
          <div className="w-full max-w-6xl bg-[#e9ecdf] rounded-lg p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Verification */}
            <div className="flex flex-col items-center md:items-start">
              {/* Heroicon: Check Badge */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2l4-4m5 2a9 9 0 11-18 0a9 9 0 0118 0z" /></svg>
              <h4 className="text-lg font-semibold mb-2">Verification</h4>
              <p className="text-sm text-black">We ensure all candidates are background checked and qualified</p>
            </div>
            {/* Documentation */}
            <div className="flex flex-col items-center md:items-start">
              {/* Heroicon: Document Text */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z" /></svg>
              <h4 className="text-lg font-semibold mb-2">Documentation</h4>
              <p className="text-sm text-black">We help prepare and process required documents, including contracts and visa paperwork.</p>
            </div>
            {/* Deployment assistance */}
            <div className="flex flex-col items-center md:items-start">
              {/* Heroicon: Truck */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0a2 2 0 014 0zm10 0a2 2 0 11-4 0a2 2 0 014 0zM13 16V6a1 1 0 011-1h3a1 1 0 011 1v10m-5 0h5m-5 0H6a1 1 0 01-1-1V6a1 1 0 011-1h7v11z" /></svg>
              <h4 className="text-lg font-semibold mb-2">Deployment assistance</h4>
              <p className="text-sm text-black">We assist with travel arrangements and smooth relocation to the job site</p>
            </div>
          </div>
          {/* Bottom Text */}
          <p className="text-base font-bold text-black mt-10 text-center">
            Specialised overseas hiring support for Dubai, Oman and other GCC countries
          </p>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default EmployersServices; 