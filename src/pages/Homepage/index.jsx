import React from 'react';
import Header from '../../components/common/Header';
import HeroSection from './HeroSection';
import JobCategorySection from './JobCategorySection';
import FeaturedJobsSection from './FeaturedJobsSection';
import WhyChooseUsSection from './WhyChooseUsSection';
import TestimonialsSection from './TestimonialsSection';
import FooterSection from './FooterSection';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-global-3">
      <Header />
      <main className="w-full pt-16 lg:pt-20">
        <HeroSection />
        <JobCategorySection />
        <FeaturedJobsSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <FooterSection />
      </main>
    </div>
  );
};

export default Homepage;