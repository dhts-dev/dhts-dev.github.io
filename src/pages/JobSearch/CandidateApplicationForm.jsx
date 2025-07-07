import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const CandidateApplicationForm = () => {
  const tableCell = "border px-4 py-3 text-[16px] h-[60px]";

  return (
    <div className="min-h-screen bg-[#f3f5ed] flex flex-col">
      <Header />
      <div className="flex-1 w-full flex flex-col items-center px-4 py-6 overflow-auto pt-16 lg:pt-20">
        <div className="w-full max-w-5xl bg-white rounded-lg shadow p-8">
          <div className="mb-4 text-sm text-gray-700 cursor-pointer">
            &larr; Back to job Seeker Dashboard
          </div>
          <h1 className="text-[#f7931e] text-3xl font-bold mb-2 text-center">
            Candidate Application Form
          </h1>
          <p className="text-center text-base mb-6">
            Please fill in the details in capital letter
          </p>

          {/* Personal Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <input className="border border-gray-300 rounded px-4 py-3 text-base" placeholder="First Name" />
            <input className="border border-gray-300 rounded px-4 py-3 text-base" placeholder="Middle Name" />
            <input className="border border-gray-300 rounded px-4 py-3 text-base" placeholder="Last Name" />
            <input className="border border-gray-300 rounded px-4 py-3 text-base" placeholder="Father's/Spouse Name" />
            <input className="border border-gray-300 rounded px-4 py-3 text-base" placeholder="Date of Birth" type="date" />
            <input className="border border-gray-300 rounded px-4 py-3 text-base" placeholder="Gender" />
            <input className="border border-gray-300 rounded px-4 py-3 text-base" placeholder="Nationality" />
            <input className="border border-gray-300 rounded px-4 py-3 text-base" placeholder="Marital Status" />
            <input className="border border-gray-300 rounded px-4 py-3 text-base" placeholder="Contact Number" />
            <input className="border border-gray-300 rounded px-4 py-3 text-base col-span-2 md:col-span-3" placeholder="Email ID" />
            <input className="border border-gray-300 rounded px-4 py-3 text-base col-span-2 md:col-span-3" placeholder="Present Address" />
          </div>

          <textarea className="border border-gray-300 rounded px-4 py-3 text-base w-full mb-4" placeholder="Permanent Address (If Different from Present Address)" />

          <div className="flex items-center gap-4 mb-6 text-base">
            <span>Passport Available:</span>
            <label className="flex items-center gap-2">
              <input type="radio" name="passport" value="yes" /> Yes
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="passport" value="no" /> No
            </label>
          </div>

          {/* Experience Details Table */}
          <h2 className="text-[#f7931e] text-lg font-semibold mt-6 mb-2">EXPERIENCE DETAILS</h2>
          <table className="w-full mb-6 border border-gray-300 text-base">
            <thead>
              <tr className="bg-[#f3f5ed]">
                <th className={tableCell}>Organization/Institute</th>
                <th className={tableCell}>Designation</th>
                <th className={tableCell}>From</th>
                <th className={tableCell}>Period To</th>
                <th className={tableCell}>Gross/Final Salary</th>
                <th className={tableCell}>Reason for exit</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map(i => (
                <tr key={i}>
                  {[...Array(6)].map((_, idx) => (
                    <td key={idx} className={tableCell} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          {/* Education Qualification Table */}
          <h2 className="text-[#f7931e] text-lg font-semibold mt-6 mb-2">EDUCATION QUALIFICATION</h2>
          <table className="w-full mb-6 border border-gray-300 text-base">
            <thead>
              <tr className="bg-[#f3f5ed]">
                <th className={tableCell}>Qualification</th>
                <th className={tableCell}>University/Institute</th>
                <th className={tableCell}>Year of passing</th>
                <th className={tableCell}>Marks</th>
                <th className={tableCell}>Major Subject</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map(i => (
                <tr key={i}>
                  {[...Array(5)].map((_, idx) => (
                    <td key={idx} className={tableCell} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          {/* Training & Additional Qualification Table */}
          <h2 className="text-[#f7931e] text-lg font-semibold mt-6 mb-2">TRAINING & ADDITIONAL QUALIFICATION</h2>
          <table className="w-full mb-6 border border-gray-300 text-base">
            <thead>
              <tr className="bg-[#f3f5ed]">
                <th className={tableCell}>Course/Programme Name</th>
                <th className={tableCell}>Institute Name</th>
                <th className={tableCell}>Year of completion</th>
                <th className={tableCell}>Skills Acquired</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map(i => (
                <tr key={i}>
                  {[...Array(4)].map((_, idx) => (
                    <td key={idx} className={tableCell} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          {/* Additional Information Table */}
          <h2 className="text-[#f7931e] text-lg font-semibold mt-6 mb-2">ADDITIONAL INFORMATION</h2>
          <table className="w-full mb-6 border border-gray-300 text-base">
            <thead>
              <tr className="bg-[#f3f5ed]">
                <th className={tableCell}>Language known</th>
                <th className={tableCell}>Read</th>
                <th className={tableCell}>Write</th>
                <th className={tableCell}>Speak</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map(i => (
                <tr key={i}>
                  {[...Array(4)].map((_, idx) => (
                    <td key={idx} className={tableCell} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <p className="text-base text-gray-700 mt-4 mb-6">
            I declare that the information given, herein above, is true and correct to the best of my knowledge and belief and nothing material has been concealed.
          </p>

          <div className="flex justify-center gap-6 mt-4">
            <button className="bg-[#f7931e] text-white px-8 py-3 rounded font-semibold text-base">SUBMIT</button>
            <button className="bg-[#f7931e] text-white px-8 py-3 rounded font-semibold text-base">REFRESH</button>
            <button className="bg-[#f7931e] text-white px-8 py-3 rounded font-semibold text-base">GO BACK</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CandidateApplicationForm;
