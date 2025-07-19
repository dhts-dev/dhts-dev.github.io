import React from 'react';
import Button from '../../components/ui/Button';

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      image: '/image/housekeeper.png',
      backgroundImage: '/images/img_union.svg',
      title: null,
      hasButton: false
    },
    {
      id: 2,
      image: '/images/img_image_12.png',
      backgroundImage: '/images/img_union.svg',
      title: null,
      hasButton: false
    },
    {
      id: 3,
      image: '/images/img_image_13.png',
      backgroundImage: '/images/img_union.svg',
      title: null,
      hasButton: false
    },
    {
      id: 4,
      image: '/images/img_image_14.png',
      backgroundImage: '/images/img_union.svg',
      title: null,
      hasButton: false
    },
    {
      id: 5,
      image: '/images/img_image_14.png',
      backgroundImage: '/images/img_union.svg',
      title: null,
      hasButton: false
    },
    {
      id: 6,
      image: '/images/img_image_13.png',
      backgroundImage: '/images/img_union.svg',
      title: 'Driver',
      hasButton: true
    },
    {
      id: 7,
      image: '/images/img_rectangle.png',
      backgroundImage: '/images/img_union.svg',
      title: null,
      hasButton: false
    },
    {
      id: 8,
      image: '/images/img_image_12.png',
      backgroundImage: '/images/img_union.svg',
      title: null,
      hasButton: false
    }
  ];

  return (
    <section className="w-full py-8 sm:py-12 lg:py-16">
      <div className="flex flex-col gap-4 sm:gap-8 lg:gap-8 justify-start items-center w-full px-4 sm:px-8 lg:px-16">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter font-semibold leading-10 lg:leading-[49px] text-left text-global-3">
          Category
        </h2>

        {/* Categories Grid */}
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-4 mb-4 sm:mb-8 lg:mb-8">
            {categories.slice(0, 4).map((category) => (
              <div key={category.id} className="flex flex-col justify-start items-center w-full">
                <div
                  className="relative flex justify-center items-center w-full h-48 sm:h-52 lg:h-57 bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden"
                  style={{ backgroundImage: `url(${category.backgroundImage})` }}
                >
                  <img
                    src={category.image}
                    alt={category.title || `Category ${category.id}`}
                    className="w-full h-full object-cover"
                  />
                  {category.hasButton && category.title && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full px-4">
                      <Button
                        variant="primary"
                        size="small"
                        className="w-full bg-button-1 text-global-5 text-base sm:text-lg lg:text-xl font-inter font-semibold leading-5 lg:leading-[25px] px-6 sm:px-8 py-2 sm:py-3"
                      >
                        {category.title}
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-4">
            {categories.slice(4, 8).map((category) => (
              <div key={category.id} className="flex flex-col justify-start items-center w-full">
                <div
                  className="relative flex justify-center items-center w-full h-48 sm:h-52 lg:h-57 bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden"
                  style={{ backgroundImage: `url(${category.backgroundImage})` }}
                >
                  <img
                    src={category.image}
                    alt={category.title || `Category ${category.id}`}
                    className="w-full h-full object-cover"
                  />
                  {category.hasButton && category.title && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full px-4">
                      <Button
                        variant="primary"
                        size="small"
                        className="w-full bg-button-1 text-global-5 text-base sm:text-lg lg:text-xl font-inter font-semibold leading-5 lg:leading-[25px] px-6 sm:px-8 py-2 sm:py-3"
                      >
                        {category.title}
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Button */}
        <div className="flex justify-end items-center w-full">
          <Button
            variant="primary"
            size="large"
            className="bg-global-3 text-global-5 text-lg sm:text-xl lg:text-2xl font-inter font-normal leading-6 lg:leading-[30px] px-6 sm:px-8 lg:px-12 py-6 sm:py-8 lg:py-8"
          >
            Sunvi Hi-Tech
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;