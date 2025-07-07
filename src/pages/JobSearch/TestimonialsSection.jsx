import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
      name: 'Ramesh S',
      designation: 'Driver',
      backgroundImage: '/images/img_vector.svg'
    },
    {
      id: 2,
      content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
      name: 'Logistics Enterprises',
      designation: '',
      backgroundImage: '/images/img_vector.svg'
    }
  ];

  return (
    <section className="w-full py-8 sm:py-12 lg:py-16">
      <div className="flex flex-col gap-8 sm:gap-12 lg:gap-20 justify-start items-center w-full px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-4 sm:gap-0">
          <div className="flex justify-center items-center w-16 sm:w-20 lg:w-[70px] h-20 sm:h-24 lg:h-[100px]">
            <img 
              src="/images/img_account_circle.png" 
              alt="User testimonials" 
              className="w-full h-full object-contain"
            />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-inter font-semibold leading-10 lg:leading-[49px] text-left text-global-3">
            What Our Users Say
          </h2>
        </div>

        {/* Testimonials */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-5 w-full justify-center px-0 sm:px-8 lg:px-34">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="flex flex-col justify-center items-end w-full lg:w-1/2 bg-cover bg-center bg-no-repeat rounded-lg p-6 sm:p-8 lg:p-8"
              style={{ backgroundImage: `url(${testimonial.backgroundImage})` }}
            >
              <div className="flex flex-col gap-8 sm:gap-10 lg:gap-10 justify-start items-center w-full lg:w-5/6">
                {/* Testimonial Content */}
                <p className="text-base sm:text-lg lg:text-xl font-inter font-normal leading-5 sm:leading-6 lg:leading-6 text-left text-global-1 w-full lg:w-11/12">
                  {testimonial.content}
                </p>

                {/* Author Info */}
                <div className="text-xl sm:text-2xl lg:text-3xl font-inter font-semibold leading-8 sm:leading-9 lg:leading-[38px] tracking-[1px] text-left text-global-1 whitespace-pre-line text-center">
                  {testimonial.name}
                  {testimonial.designation && `\n    ${testimonial.designation}`}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;