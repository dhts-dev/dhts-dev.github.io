import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import JobRecommendationsSection from './JobRecommendationsSection';
import SubmissionSuccess from '@/components/common/SubmissionSuccess';

const JobSearchPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f3f5ed]">
      <Header />
      <main className="flex-1 flex flex-col items-center w-full pt-16 lg:pt-20">
        <JobRecommendationsSection />
        <SubmissionSuccess />
      </main>
      <Footer />
    </div>
  );
};

export default JobSearchPage;