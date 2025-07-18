import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from './HeroSection';
import JobCategorySection from './JobCategorySection';
import FeaturedJobsSection from './FeaturedJobsSection';
import WhyChooseUsSection from './WhyChooseUsSection';
import TestimonialsSection from './TestimonialsSection';


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
         <Footer />
      </main>
    </div>
  );
};

export default Homepage;