import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const InputBox = ({ label, placeholder, className = "" }) => (
  <div className="flex flex-col gap-1 mb-4 w-full">
    <label className="text-sm text-gray-600">{label}</label>
    <input
      type="text"
      placeholder={placeholder}
      className={`border border-gray-300 rounded px-3 py-2 text-sm ${className}`}
    />
  </div>
);

const PostJobForm = () => {
  return (
    <div className="min-h-screen bg-[#f3f5ed]">
      <Header />
      <div className="max-w-5xl mx-auto px-4 py-8 pt-24 lg:pt-28">
        <h1 className="text-[#f7931e] text-xl font-semibold mb-2">Post a Job</h1>
        <p className="text-sm text-gray-600 mb-8">Format to follow while posting a job</p>

        {/* Grid Form Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InputBox label="Job Title" placeholder="Text - 30 Characters" />
          <InputBox label="Job Code" placeholder="Alpha-Numeric - 10 Characters" />
          <InputBox label="Grade" placeholder="Text - 30 Characters" />
          <InputBox label="Business Vertical" placeholder="Text - 30 Characters" />
          <InputBox label="Qualification" placeholder="Text - 30 Characters" />
          <InputBox label="Function" placeholder="Text - 30 Characters" />
          <InputBox label="Work Experience" placeholder="Years of experience" />
          <InputBox label="Sub Function" placeholder="Text - 30 Characters" />
          <InputBox label="Position Category" placeholder="Full-Time/Part-Time/Intern" />
          <InputBox label="Remuneration & Benefits Type" placeholder="..." />
          <InputBox label="Position Schedule" placeholder="General Shift/Rotational Shift" />
          <InputBox label="Traveling Requirement" placeholder="No Travel / Occasional / Extensive" />
        </div>

        {/* Job Brief */}
        <div className="mt-8">
          <label className="block mb-2 text-sm text-gray-600">Job Brief</label>
          <textarea className="w-full border border-gray-300 rounded px-3 py-2 text-sm" rows="4" placeholder="Alpha-Numeric - 500 Characters"></textarea>
        </div>

        {/* Job Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <InputBox key={i} label={`Detail ${i}`} placeholder="Text - 150 Characters" />
          ))}
        </div>

        {/* Mandatory Fields */}
        <h2 className="mt-8 mb-4 text-md font-semibold">Mandatory Requirements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <InputBox label="Knowledge" placeholder="Text - 30 Characters" />
          <InputBox label=" " placeholder="Text - 30 Characters" />
          <InputBox label="Abilities" placeholder="Text - 30 Characters" />
          <InputBox label=" " placeholder="Text - 30 Characters" />
          <InputBox label="Skills" placeholder="Text - 30 Characters" />
          <InputBox label=" " placeholder="Text - 30 Characters" />
        </div>

        {/* Other Details */}
        <div className="mt-8">
          <label className="block mb-2 text-sm text-gray-600">Other Details</label>
          <textarea className="w-full border border-gray-300 rounded px-3 py-2 text-sm" rows="4" placeholder="Alpha-Numeric - 500 Characters"></textarea>
        </div>

        <div className="flex justify-end mt-8">
          <button className="bg-[#f7931e] text-white text-lg px-6 py-3 rounded-lg font-semibold">Submit</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostJobForm;
