import React from 'react';

const jobCategories = [
  {
    id: 1,
    image: '/images/carp1.png',
    title: 'Carpenter',
    backgroundIcon: '/images/img_union.svg',
  },
  {
    id: 2,
    image: '/images/ac mec1.png',
    title: 'AC Mechanic',
    backgroundIcon: '/images/img_union.svg',
  },
  {
    id: 3,
    image: '/images/con_super1.png',
    title: 'Construction Supervisor',
    backgroundIcon: '/images/img_union.svg',
  },
  {
    id: 4,
    image: '/images/elec1.png',
    title: 'Electrician',
    backgroundIcon: '/images/img_union.svg',
  },
  {
    id: 5,
    image: '/images/plumber1.png',
    title: 'Plumbing',
    backgroundIcon: '/images/img_union.svg',
  },
  {
    id: 6,
    image: '/images/housekeeping.png',
    title: 'Housekeepers',
    backgroundIcon: '/images/img_union.svg',
  },
  {
    id: 7,
    image: '/images/constru1.png',
    title: 'Construction Worker',
    backgroundIcon: '/images/img_union.svg',
  },
  {
    id: 8,
    image: '/images/gardener1.png',
    title: 'Gardener',
    backgroundIcon: '/images/img_union.svg',
  },
];

const JobCategorySection = () => {
  return (
    <section className="w-full bg-[#f3f5ed] py-10 sm:py-14 md:py-20">
      <div className="px-4 sm:px-6 lg:px-24">
        {/* Section Heading */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[#333] mb-10">
          Browse Job Categories
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-10">
          {jobCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => console.log(`Clicked on ${category.title}`)}
              className="group relative w-full aspect-[4/5] rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-lg transition duration-300 transform hover:-translate-y-1 focus:outline-none"
            >
              {/* Background Icon */}
              <img
                src={category.backgroundIcon}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-10"
              />

              {/* Foreground Image */}
              <div className="relative z-10 flex justify-center items-center h-3/4 px-4 pt-6">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-contain transition duration-300 scale-90 group-hover:scale-100"
                />
              </div>

              {/* Title */}
              <div className="relative z-10 h-1/4 flex items-center justify-center px-2">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-[#222] text-center">
                  {category.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobCategorySection;
