import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const likedJobs = [
  {
    id: 1,
    title: 'Constructor worker',
    subtitle: 'Class 3 Worker',
    position: 20,
    pay: '$20/hr',
    location: 'Paris',
    image: '/images/img_image_12.png',
  },
  {
    id: 2,
    title: 'House Keeping',
    subtitle: 'Class 3 Worker',
    position: 20,
    pay: '$20/hr',
    location: 'Paris',
    image: '/images/img_image_13.png',
  },
  {
    id: 3,
    title: 'House Keeping',
    subtitle: 'Class 3 Worker',
    position: 20,
    pay: '$20/hr',
    location: 'Paris',
    image: '/images/img_image_12.png',
  },
];

const appliedJobs = [
  {
    id: 1,
    title: 'House keeping',
    location: 'UAE',
    appliedDate: '01/02/30',
    status: 'Pending',
  },
  {
    id: 2,
    title: 'House keeping',
    location: 'ZALARA',
    appliedDate: '01/02/30',
    status: 'Completed',
  },
  {
    id: 3,
    title: 'Security guard',
    location: 'UAE',
    appliedDate: '01/02/30',
    status: 'Pending',
  },
];

const recommendations = [
  {
    id: 1,
    title: 'Hotel Staff',
    position: 20,
    pay: '$20/hr',
    location: 'Paris',
  },
  {
    id: 2,
    title: 'Hotel Staff',
    position: 20,
    pay: '$20/hr',
    location: 'Paris',
  },
  {
    id: 3,
    title: 'Security',
    position: 20,
    pay: '$20/hr',
    location: 'Paris',
  },
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f3f5ed]">
      <Header />
      <main className="flex-1 w-full flex flex-col items-center">
        {/* Hero Section */}
        <section className="w-full flex flex-col items-center bg-[#f3f5ed]">
          <div className="w-full max-w-5xl relative">
            <img
              src="/images/services.jpeg"
              alt="Hero"
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-b-2xl"
            />
            <h1 className="absolute left-8 top-1/3 text-white text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black leading-tight drop-shadow-lg max-w-[50%]">
              Helping you to find the right job
            </h1>
          </div>
        </section>

        {/* Jobs Liked */}
        <section className="w-full max-w-6xl px-4 mt-4">
          <h2 className="text-2xl font-bold text-[#f7931e] text-center mb-6">Jobs liked</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {likedJobs.map((job) => (
              <div
                key={job.id}
                className="bg-[#dde6ce] rounded-2xl p-6 w-80 flex flex-col items-center shadow-md relative"
              >
                <div className="text-xl font-bold mb-1 w-full text-left">{job.title}</div>
                <div className="text-gray-500 mb-2 w-full text-left">({job.subtitle})</div>
                <img
                  src={job.image}
                  alt={job.title}
                  className="w-48 h-28 object-cover rounded mb-4"
                />
                <div className="text-base mb-1 w-full text-left">Position : {job.position}</div>
                <div className="text-base mb-1 w-full text-left">Pay : {job.pay}</div>
                <div className="text-base mb-4 w-full text-left">Location : {job.location}</div>
                <div className="flex gap-4 w-full">
                  <button className="bg-[#f7931e] text-white rounded-full w-1/2 py-2 text-lg font-semibold">Know more</button>
                  <button className="bg-white text-[#f7931e] border border-[#f7931e] rounded-full w-1/2 py-2 text-lg font-semibold">Call Now</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Jobs Applied */}
        <section className="w-full max-w-6xl px-4 mt-12">
          <h2 className="text-2xl font-bold text-[#f7931e] text-center mb-6">Jobs Applied</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-[#e5e5e5] rounded-lg shadow">
              <thead>
                <tr className="bg-[#dde6ce]">
                  <th className="py-4 px-6 text-xl font-bold text-left">Job Title</th>
                  <th className="py-4 px-6 text-xl font-bold text-left">Location</th>
                  <th className="py-4 px-6 text-xl font-bold text-left">Applied date</th>
                  <th className="py-4 px-6 text-xl font-bold text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {appliedJobs.map(job => (
                  <tr key={job.id} className="border-t">
                    <td className="py-8 px-6 text-2xl">{job.title}</td>
                    <td className="py-8 px-6 text-2xl">{job.location}</td>
                    <td className="py-8 px-6 text-2xl">{job.appliedDate}</td>
                    <td className="py-8 px-6">
                      <span className={`px-8 py-3 rounded-full text-2xl font-semibold ${job.status === 'Completed' ? 'bg-[#f7931e] text-white' : 'bg-white text-black'}`}>
                        {job.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Overseas Job Placement Assistance */}
        <section className="w-full max-w-6xl mx-auto px-4 mt-16 flex flex-col items-center">
          <div className="flex justify-center w-full mb-12">
            <Link to="/candidate-application" className="w-[600px] flex justify-center">
              <button className="bg-[#f7931e] text-white text-3xl font-bold rounded-xl px-12 py-6 w-full">
                Apply Now -Candidate Form
              </button>
            </Link>
          </div>
          <div className="w-full flex justify-center">
            <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-5xl py-12 px-8">
              <img src="/images/Globe.png" alt="Globe" className="w-32 h-32" />
              <div className="flex-1 flex flex-col items-center md:items-start">
                <h3 className="text-4xl font-bold mb-4 text-center md:text-left">
                  Overseas Job Placement Assistance
                </h3>
                <p className="text-2xl mb-8 text-center md:text-left max-w-2xl">
                  Looking for work abroad? We help with job matching, visa processes, contracts
                  and relocation to Dubai, Oman, and other GCC countries
                </p>
                <div className="flex w-full md:justify-end justify-center">
                  <button className="bg-[#f7931e] text-white rounded-xl px-12 py-4 text-2xl font-bold w-[350px] flex justify-center">
                    overseas placement
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Jobs Recommendations */}
        <section className="w-full max-w-6xl px-4 mt-12 mb-16">
          <h2 className="text-2xl font-bold text-[#f7931e] text-center mb-6">Jobs Recommendations</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {recommendations.map((job) => (
              <div
                key={job.id}
                className="bg-[#dde6ce] rounded-2xl p-6 w-80 flex flex-col shadow-md"
              >
                <div className="text-xl font-bold mb-1 w-full text-left">{job.title}</div>
                <div className="text-base mb-1 w-full text-left">Position: {job.position}</div>
                <div className="text-base mb-1 w-full text-left">Pay: {job.pay}</div>
                <div className="text-base mb-4 w-full text-left">Location: {job.location}</div>
                <div className="flex gap-4 w-full">
                  <button className="bg-[#f7931e] text-white rounded-full w-1/2 py-2 text-lg font-semibold">Know more</button>
                  <button className="bg-white text-[#f7931e] border border-[#f7931e] rounded-full w-1/2 py-2 text-lg font-semibold">Call Now</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;