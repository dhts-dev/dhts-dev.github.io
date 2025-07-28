import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import Homepage from './pages/Homepage';
import JobSearch from './pages/JobSearch';
import AboutUs from './pages/AboutUs';
import ResourcesSection from './pages/ResourcesSection';
import EmployersServices from './pages/EmployersServices';
import PostJobForm from './pages/JobSearch/PostJobForm';
import CandidateApplicationForm from './pages/JobSearch/CandidateApplicationForm';
import Industry from './pages/Industry';
import Login from './pages/LoginDialog';
import Signup from './pages/Signup';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Gallery from './pages/Resources/Gallery';
import Blogs from './pages/Resources/Blogs';
import LanguageSelector from './pages/Resources/LanguageSelector';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/current-jobs" element={<JobSearch />} />
        <Route path="/about-us" element={<AboutUs />} />
        {/* <Route path="/resources" element={<ResourcesSection />} />
        <Route path="/resources/gallery" element={<Gallery />} />
        <Route path="/resources/blogs" element={<Blogs />} />
        <Route path="/resources/language" element={<LanguageSelector />} />
        <Route path="/post-job" element={<PostJobForm />} /> */}
        <Route path="/candidate-application" element={<CandidateApplicationForm />} />
        <Route path="/industry" element={<Industry />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
