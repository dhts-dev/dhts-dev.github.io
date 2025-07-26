import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

const AboutUs = () => {
  const navigate = useNavigate();
  const whoWeAreRef = useRef(null);

  const scrollToWhoWeAre = () => {
    whoWeAreRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#f7f6f2] text-[#333] min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#642c92] to-[#bf42bb] py-20 px-4 sm:px-6 lg:px-8 text-white">
        <div className="relative bg-[#f7f6f2] py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-b-2 border-[#642c92]/20">
          {/* Geometric pattern */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat"></div>
          </div>

          <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#642c92]">
                <span className="block">People First</span>
                <span className="text-[#8a4bbe]">Manpower Solutions</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                We create meaningful connections between skilled Indian workers and employers across
                India and the Gulf region.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate('/current-jobs')}
                  className="bg-[#642c92] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#4b216e] transition shadow-md"
                >
                  Explore Jobs
                </button>
                <button
                  onClick={scrollToWhoWeAre}
                  className="flex items-center text-[#642c92] font-medium group"
                >
                  Watch Our Story
                  <svg
                    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Workers silhouette image */}
                <img
                  src="/images/con_sup4.png"
                  alt="Skilled Workers"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 bg-white rounded-xl shadow-md p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img
                src="/images/for employee.jpeg"
                alt="Our Team"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4 text-[#642c92]">Who We Are</h2>
              <p className="mb-4">
                We are a people-first manpower recruitment company in India, focused on connecting
                skilled Indian workers with real job opportunities across India, Dubai and the wider
                Gulf region.
              </p>
              <p>
                Whether it's a building site in the UAE or a factory job in Maharashtra, we provide
                trained Indian workers who bring commitment, skill and reliability to every role.
              </p>
            </div>
          </div>
        </motion.section>

        {/* What We Do */}
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-center text-[#642c92]"
          >
            Our Services
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Construction Card */}
            <motion.div
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="h-40 bg-gradient-to-r from-[#642c92] to-[#8a4bbe] flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  ></path>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-[#642c92]">Construction & Technical</h3>
                <ul className="space-y-2">
                  {[
                    'Electricians',
                    'Plumbers',
                    'AC Technicians',
                    'Masons',
                    'Painters',
                    'Welders',
                  ].map((item) => (
                    <li key={item} className="flex items-center">
                      <span className="w-2 h-2 bg-[#642c92] rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Support Card */}
            <motion.div
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="h-40 bg-gradient-to-r from-[#642c92] to-[#8a4bbe] flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-[#642c92]">Support & Labor</h3>
                <ul className="space-y-2">
                  {[
                    'General Helpers',
                    'Construction Helpers',
                    'Site Staff',
                    'Cleaners',
                    'Housekeeping',
                    'Cooks',
                  ].map((item) => (
                    <li key={item} className="flex items-center">
                      <span className="w-2 h-2 bg-[#642c92] rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Services Card */}
            <motion.div
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="h-40 bg-gradient-to-r from-[#642c92] to-[#8a4bbe] flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-[#642c92]">Services & Facility</h3>
                <ul className="space-y-2">
                  {[
                    'Gardeners',
                    'Beauticians',
                    'Hotel Staff',
                    'Waiters',
                    'Laundry Workers',
                    'Facility Staff',
                  ].map((item) => (
                    <li key={item} className="flex items-center">
                      <span className="w-2 h-2 bg-[#642c92] rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Process */}
        {/* 
        <section className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 text-center text-[#642c92]"
          >
            Our Recruitment Process
          </motion.h2>

          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="grid md:grid-cols-5 gap-6">
              {[
                { icon: '📝', title: 'Registration', desc: 'Worker documentation collection' },
                { icon: '🔍', title: 'Verification', desc: 'Skill assessment & validation' },
                { icon: '🤝', title: 'Matching', desc: 'Connecting with right employers' },
                { icon: '✈️', title: 'Deployment', desc: 'Travel & onboarding support' },
                { icon: '📞', title: 'Follow-up', desc: 'Post-placement assistance' },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#f7f6f2] rounded-full flex items-center justify-center text-2xl">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-[#642c92] mb-2">{step.title}</h3>
                  <p className="text-sm">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        */}
        
        {/* Vision & Mission */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#642c92] text-white rounded-xl shadow-md p-8"
          >
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="mb-4">
              To become the most trusted recruitment partner between India's workforce and Gulf
              region markets.
            </p>
            <p>We aim to uplift individuals and help businesses grow through ethical placements.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md p-8 border-l-4 border-[#642c92]"
          >
            <h2 className="text-2xl font-bold mb-4 text-[#642c92]">Our Mission</h2>
            <p className="mb-4">
              Connect skilled workers with dignified employment while helping companies access
              verified, reliable manpower.
            </p>
            <p>We bridge the gap through transparent processes and long-term partnerships.</p>
          </motion.div>
        </section>

        {/* Closing CTA */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#642c92] to-[#8a4bbe] rounded-xl shadow-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Whether you're a skilled worker looking for opportunities or an employer seeking
              reliable manpower, we're here to help.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-white text-[#642c92] px-6 py-3 rounded-lg font-bold hover:bg-opacity-90 transition">
                For Workers
              </button>
              <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-[#642c92] transition">
                For Employers
              </button>
            </div>
          </div>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
