import React from 'react';

const jobCategories = [
  {
    id: 1,
    image: "/images/carp1.png", // House Keeper
    title: "Carpenter",
    backgroundIcon: "/images/img_union.svg"
  },
  {
    id: 2,
    image: "/images/ac mec1.png", // Construction Worker
    title: "AC Mechanic",
    backgroundIcon: "/images/img_union.svg"
  },
  {
    id: 3,
    image: "/images/con_super1.png", // Packers and Movers
    title: "Construction Supervisor",
    backgroundIcon: "/images/img_union.svg"
  },
  {
    id: 4,
    image: "/images/elec1.png", // Handyman
    title: "Handyman (Electrician) ",
    backgroundIcon: "/images/img_union.svg"
  },
  {
    id: 5,
    image: "/images/plumber1.png", // Ac Mechanic
    title: "Handyman(plumbing)",
    backgroundIcon: "/images/img_union.svg"
  },
  {
    id: 6,
    image: "/images/housekeeper.png", // Groomer
    title: "Housekeepers",
    backgroundIcon: "/images/img_union.svg"
  },
  {
    id: 7,
    image: "/images/constru1.png", // Nurse
    title: "Construction Worker",
    backgroundIcon: "/images/img_union.svg"
  },
   {
    id: 8,
    image: "/images/gardener1.png", // security
    title: "Gardener",
    backgroundIcon: "/images/img_union.svg"
  }
];

const JobCategorySection = () => {
  return (
    <section className="w-full py-8 sm:py-12 md:py-16">
      <div className="px-4 sm:px-6 lg:px-24">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-[40px] font-semibold leading-tight md:leading-[49px] text-global-2 mb-8 sm:mb-12 md:mb-[58px]">
          Browse Job Category
        </h2>

        {/* Job Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12 mb-4 sm:mb-6 md:mb-8">
          {jobCategories.map((category) => (
            <div key={category.id} className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4">
              {/* Image Container with Background Icon */}
              <div className="relative w-full aspect-square max-w-[200px] sm:max-w-[220px] md:max-w-[258px]">
                {/* Background Icon */}
                <img 
                  src={category.backgroundIcon} 
                  alt="" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Main Image */}
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />
              </div>
              {/* Category Title */}
              <h3 className="text-sm sm:text-base md:text-xl font-semibold leading-tight md:leading-[25px] text-global-1 text-center">
                {category.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Removed Sunvi Hi-Tech scroll button */}
      </div>
    </section>
  );
};

export default JobCategorySection;