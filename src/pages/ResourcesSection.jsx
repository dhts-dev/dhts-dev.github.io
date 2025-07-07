import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const resources = [
  {
    title: 'Skill Videos',
    image: '/images/post a job.jpeg',
    description: 'Basic Training Videos (Plumping, Delivery)',
  },
  {
    title: 'Legal Info',
    image: '/images/legal info.jpeg',
    description: `Worker's rights, visa process`,
  },
  {
    title: 'Hiring Guide',
    image: '/images/hiring guide.jpeg',
    description: 'Basic Training Videos (Plumping, Delivery)',
  },
  {
    title: 'Salary Insights',
    image: '/images/Ac Mechanic.jpeg',
    description: 'Basic Training Videos (Plumping, Delivery)',
  },
  {
    title: 'Relocation tips',
    image: '/images/request a team.jpeg',
    description: 'Tips to relocate to GCC countries',
  },
  {
    title: 'Packers and Movers',
    image: '/images/packers movers.jpeg',
    description: 'Basic Training Videos (Plumping, Delivery)',
  },
];

const ResourcesSection = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f7f6f3]">
      <Header />
      <main className="flex-1 flex flex-col items-center w-full pt-16 lg:pt-20">
        <section className="w-full py-16 px-4 flex flex-col items-center">
          <h2 className="text-[2rem] md:text-[2.5rem] text-center font-extrabold text-[#f7931e] mb-16">
            Helping resources for both Job Seekers and Employers
          </h2>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 max-w-6xl w-full">
            {resources.map((res, idx) => (
              <div
                key={idx}
                className="flex items-start gap-6 w-full"
              >
                <img
                  src={res.image}
                  alt={res.title}
                  className="w-[120px] h-[120px] object-cover rounded-md"
                />
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold text-black mb-1">
                    {res.title}
                  </h3>
                  <hr className="border-t border-gray-400 w-3/4 mb-2" />
                  <p className="text-base text-gray-700">{res.description}</p>
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

export default ResourcesSection;
