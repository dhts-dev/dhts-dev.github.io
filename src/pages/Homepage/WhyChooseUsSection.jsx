import React from 'react';
import { Globe, ShieldCheck, FileText, Zap, Users, Languages } from 'lucide-react'; // using lucide-react icons

const WhyChooseUsSection = () => {
  const items = [
    {
      icon: <Globe size={28} className="text-[#000]" />,
      title: "Local & Overseas Opportunities",
      description: "Access a wide range of jobs both locally and in Dubai, Oman and across GCC countries"
    },
    {
      icon: <ShieldCheck size={28} className="text-[#000]" />,
      title: "Verified Employers & Job Seekers",
      description: "We ensure all jobs and employers are verified to protect safety and rights"
    },
    {
      icon: <FileText size={28} className="text-[#000]" />,
      title: "End-to-End Support",
      description: "From application to deployment—we help with documentation, visa process, and relocation assistance"
    },
    {
      icon: <Zap size={28} className="text-[#000]" />,
      title: "Simple & Fast Application Process",
      description: "Easily browse jobs, post jobs, apply and track your status in one platform."
    },
    {
      icon: <Users size={28} className="text-[#000]" />,
      title: "Bulk Hiring Solutions for Employers",
      description: "Post jobs, manage applications and request teams for local and overseas hiring"
    },
    {
      icon: <Languages size={28} className="text-[#000]" />,
      title: "Multi-Language Access",
      description: "Our platform is available in English, Arabic, Hindi, Tamil, and more so you can search and apply comfortably"
    },
  ];

  return (
    <section className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-24 bg-white">
      <h2 className="text-[#f7931e] text-xl sm:text-2xl md:text-3xl font-semibold mb-8">
        Why Choose Our Job Platform
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="mt-1">
              {item.icon}
            </div>
            <div>
              <h3 className="text-[17px] font-semibold text-black mb-1">{item.title}</h3>
              <p className="text-gray-700 text-[15px] leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
