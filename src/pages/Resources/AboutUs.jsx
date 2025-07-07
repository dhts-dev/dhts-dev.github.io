import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const team = [
  { name: 'Priya Sharma', role: 'Founder & CEO', avatar: 'https://i.pravatar.cc/100?img=47' },
  { name: 'Rahul Verma', role: 'Head of Operations', avatar: 'https://i.pravatar.cc/100?img=12' },
  { name: 'Sunvi Team', role: 'Support & Community', avatar: 'https://i.pravatar.cc/100?img=33' },
];

const stats = [
  { label: 'Jobs Placed', value: '10,000+' },
  { label: 'Employers', value: '500+' },
  { label: 'Countries', value: '12' },
  { label: 'Years Experience', value: '15+' },
];

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen flex flex-col bg-[#f3f5ed]">
      <Header />
      <main className="flex-1 w-full flex flex-col items-center pt-16 lg:pt-20">
        {/* Hero Section */}
        <div className="w-full h-[320px] flex items-center justify-center relative bg-gradient-to-r from-[#f7931e] to-[#f3f5ed] mb-12">
          <div className="z-10 text-center w-full">
            <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-2 tracking-tight">{t('welcome')}</h1>
            <h2 className="text-2xl font-semibold text-white drop-shadow mb-4">{t('tagline')}</h2>
          </div>
        </div>
        {/* Mission & Values */}
        <section className="max-w-4xl w-full px-4 mb-16 text-center">
          <h3 className="text-3xl font-bold text-[#f7931e] mb-4">Our Mission</h3>
          <p className="text-lg text-gray-700 mb-6">To bridge the gap between skilled professionals and top employers, fostering growth, opportunity, and success for all. We believe in integrity, innovation, and inclusivity as the pillars of our work.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <span className="bg-[#f7931e] text-white px-6 py-2 rounded-full font-semibold shadow">Integrity</span>
            <span className="bg-[#f7931e] text-white px-6 py-2 rounded-full font-semibold shadow">Innovation</span>
            <span className="bg-[#f7931e] text-white px-6 py-2 rounded-full font-semibold shadow">Inclusivity</span>
            <span className="bg-[#f7931e] text-white px-6 py-2 rounded-full font-semibold shadow">Growth</span>
          </div>
        </section>
        {/* Team Section */}
        <section className="w-full max-w-5xl px-4 mb-16">
          <h3 className="text-3xl font-bold text-[#f7931e] mb-8 text-center">Meet Our Team</h3>
          <div className="flex flex-wrap justify-center gap-12">
            {team.map((member, idx) => (
              <div key={idx} className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-6 w-64">
                <img src={member.avatar} alt={member.name} className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-[#f7931e]" />
                <div className="text-xl font-bold text-[#f7931e] mb-1">{member.name}</div>
                <div className="text-gray-700 text-base">{member.role}</div>
              </div>
            ))}
          </div>
        </section>
        {/* Stats Section */}
        <section className="w-full max-w-5xl px-4 mb-16">
          <h3 className="text-3xl font-bold text-[#f7931e] mb-8 text-center">Our Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center">
                <div className="text-3xl font-extrabold text-[#f7931e] mb-2">{stat.value}</div>
                <div className="text-gray-700 text-lg font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
        {/* Call to Action */}
        <div className="w-full flex flex-col items-center mb-16">
          <h3 className="text-2xl font-bold text-[#f7931e] mb-2">Join Our Journey</h3>
          <p className="text-gray-800 mb-4">Ready to take the next step in your career or partner with us? Let’s connect and grow together!</p>
          <a href="#" className="bg-[#f7931e] text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-[#d87c0e] transition">Contact Us</a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs; 