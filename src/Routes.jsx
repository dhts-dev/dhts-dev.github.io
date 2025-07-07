import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import Homepage from './pages/Homepage';
import JobSearch from './pages/JobSearch';
import Services from './pages/Services';
import ResourcesSection from './pages/ResourcesSection';
import EmployersServices from './pages/EmployersServices';
import PostJobForm from './pages/JobSearch/PostJobForm';
import CandidateApplicationForm from './pages/JobSearch/CandidateApplicationForm';
import Industry from './pages/Industry';
import OverseasJobs from './pages/JobSearch/OverseasJobs';
import Login from './pages/LoginDialog';
import Signup from './pages/Signup';
import FeaturedJobsSection from './pages/Homepage/FeaturedJobsSection';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Gallery from './pages/Resources/Gallery';
import Blogs from './pages/Resources/Blogs';
import AboutUs from './pages/Resources/AboutUs';
import LanguageSelector from './pages/Resources/LanguageSelector';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/current-jobs" element={<JobSearch />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/job-seekers" element={<Services />} />
        <Route path="/services/employers" element={<EmployersServices />} />
        <Route path="/resources" element={<ResourcesSection />} />
        <Route path="/resources/gallery" element={<Gallery />} />
        <Route path="/resources/blogs" element={<Blogs />} />
        <Route path="/resources/about-us" element={<AboutUs />} />
        <Route path="/resources/language" element={<LanguageSelector />} />
        <Route path="/post-job" element={<PostJobForm />} />
        <Route path="/candidate-application" element={<CandidateApplicationForm />} />
        <Route path="/industry" element={<Industry />} />
        <Route path="/overseas-jobs" element={<OverseasJobs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/FeaturedjobsSection" element={<FeaturedJobsSection/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;