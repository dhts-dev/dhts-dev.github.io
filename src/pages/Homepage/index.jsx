import React, { useRef } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import ApplyNowButton from '../../components/common/ApplyNowButton';
import HeroSection from './HeroSection';
import JobCategorySection from './JobCategorySection';
import FeaturedJobsSection from './FeaturedJobsSection';
import WhyChooseUsSection from './WhyChooseUsSection';
import TestimonialsSection from './TestimonialsSection';

const Homepage = () => {
  const jobCategoryRef = useRef(null);

  const scrollToJobs = () => {
    jobCategoryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // 🚫 Horizontal overflow fix
    <div className="overflow-x-hidden">
      <div className="min-h-screen bg-global-3">
        <Header />
        <main className="w-full pt-16 lg:pt-20">
          <HeroSection scrollToJobs={scrollToJobs} />

          {/* Target Job Category Section for Scroll */}
          <section ref={jobCategoryRef}>
            <JobCategorySection />
          </section>

          <FeaturedJobsSection />
          <WhyChooseUsSection />
          <TestimonialsSection />
          <Footer />
          <ApplyNowButton />
        </main>
      </div>
    </div>
  );
};

export default Homepage;
