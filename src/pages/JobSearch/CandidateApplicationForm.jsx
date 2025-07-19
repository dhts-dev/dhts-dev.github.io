import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const CandidateApplicationForm = () => {
  const tableCell = 'border px-4 py-3 text-[16px] h-[60px]';
  const [presentAddress, setPresentAddress] = useState('');
  const [permanentAddress, setPermanentAddress] = useState('');
  const [sameAsPresent, setSameAsPresent] = useState(false);

  const sanitizeInput = (value) => {
    return value.replace(/[^a-zA-Z0-9\s]/g, '');
  };

  const handleInputChange = (setter) => (e) => {
    setter(sanitizeInput(e.target.value));
  };

  const handlePresentAddressChange = (e) => {
    const value = sanitizeInput(e.target.value);
    setPresentAddress(value);
    if (sameAsPresent) {
      setPermanentAddress(value);
    }
  };

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setSameAsPresent(isChecked);
    if (isChecked) {
      setPermanentAddress(presentAddress);
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f5ed] flex flex-col">
      <Header />
      <div className="flex-1 w-full flex flex-col items-center px-4 py-6 overflow-auto pt-16 lg:pt-20">
        <div className="w-full max-w-5xl bg-white rounded-lg shadow p-8">
          <h1 className="text-[#642c92] text-3xl font-bold mb-2 text-center">
            Candidate Application Form
          </h1>
          <p className="text-center text-base mb-6">Please fill in the details in capital letter</p>

          {/* Personal Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <input
              className="border border-gray-300 rounded px-4 py-3 text-base"
              placeholder="First Name"
              onChange={handleInputChange(() => {})}
            />
            <input
              className="border border-gray-300 rounded px-4 py-3 text-base"
              placeholder="Middle Name"
              onChange={handleInputChange(() => {})}
            />
            <input
              className="border border-gray-300 rounded px-4 py-3 text-base"
              placeholder="Last Name"
              onChange={handleInputChange(() => {})}
            />
            <input
              className="border border-gray-300 rounded px-4 py-3 text-base"
              placeholder="Father's/Spouse Name"
              onChange={handleInputChange(() => {})}
            />
            <input
              className="border border-gray-300 rounded px-4 py-3 text-base"
              placeholder="Date of Birth"
              type="date"
            />

            {/* Gender Dropdown */}
            <select className="border border-gray-300 rounded px-4 py-3 text-base" defaultValue="">
              <option value="" disabled>
                Gender
              </option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <input
              className="border border-gray-300 rounded px-4 py-3 text-base"
              placeholder="Nationality"
              onChange={handleInputChange(() => {})}
            />

            {/* Marital Status Dropdown */}
            <select className="border border-gray-300 rounded px-4 py-3 text-base" defaultValue="">
              <option value="" disabled>
                Marital Status
              </option>
              <option>Single</option>
              <option>Married</option>
              <option>Divorced</option>
              <option>Widowed</option>
            </select>

            <input
              className="border border-gray-300 rounded px-4 py-3 text-base"
              placeholder="Contact Number"
              onChange={handleInputChange(() => {})}
            />
            <input
              className="border border-gray-300 rounded px-4 py-3 text-base col-span-2 md:col-span-3"
              placeholder="Email ID"
              onChange={handleInputChange(() => {})}
            />
            <input
              className="border border-gray-300 rounded px-4 py-3 text-base col-span-2 md:col-span-3"
              placeholder="Present Address"
              value={presentAddress}
              onChange={handlePresentAddressChange}
            />
          </div>

          <textarea
            className="border border-gray-300 rounded px-4 py-3 text-base w-full mb-2"
            placeholder="Permanent Address"
            value={permanentAddress}
            onChange={(e) => setPermanentAddress(sanitizeInput(e.target.value))}
            readOnly={sameAsPresent}
          />

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={sameAsPresent}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <label className="text-base">Same as Present Address</label>
          </div>

          <div className="flex items-center gap-4 mb-6 text-base">
            <span>Passport Available:</span>
            <label className="flex items-center gap-2">
              <input type="radio" name="passport" value="yes" /> Yes
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="passport" value="no" /> No
            </label>
          </div>

          {/* Job Applied For */}
          <input
            className="border border-gray-300 rounded px-4 py-3 text-base w-full mb-6"
            placeholder="Job Applied For"
            onChange={handleInputChange(() => {})}
          />

          {/* Experience Details Table */}
          <h2 className="text-[#642c92] text-lg font-semibold mt-6 mb-2">EXPERIENCE DETAILS</h2>
          <table className="w-full mb-6 border border-gray-300 text-base">
            <thead>
              <tr className="bg-[#f3f5ed]">
                <th className={tableCell}>Company Name</th>
                <th className={tableCell}>Designation</th>
                <th className={tableCell}>From</th>
                <th className={tableCell}>To</th>
                <th className={tableCell}>Gross/Final Salary</th>
                <th className={tableCell}>Reason for exit</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((i) => (
                <tr key={i}>
                  <td className={tableCell}>
                    <input
                      className="w-full border px-2 py-1"
                      onChange={handleInputChange(() => {})}
                    />
                  </td>
                  <td className={tableCell}>
                    <input
                      className="w-full border px-2 py-1"
                      onChange={handleInputChange(() => {})}
                    />
                  </td>
                  <td className={tableCell}>
                    <input type="date" className="w-full border px-2 py-1" />
                  </td>
                  <td className={tableCell}>
                    <input type="date" className="w-full border px-2 py-1" />
                  </td>
                  <td className={tableCell}>
                    <input
                      className="w-full border px-2 py-1"
                      onChange={handleInputChange(() => {})}
                    />
                  </td>
                  <td className={tableCell}>
                    <input
                      className="w-full border px-2 py-1"
                      onChange={handleInputChange(() => {})}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Education Qualification Table */}
          <h2 className="text-[#642c92] text-lg font-semibold mt-6 mb-2">
            EDUCATION QUALIFICATION
          </h2>
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
              {[1, 2, 3].map((i) => (
                <tr key={i}>
                  <td className={tableCell}>
                    <input
                      className="w-full border px-2 py-1"
                      onChange={handleInputChange(() => {})}
                    />
                  </td>
                  <td className={tableCell}>
                    <input
                      className="w-full border px-2 py-1"
                      onChange={handleInputChange(() => {})}
                    />
                  </td>
                  <td className={tableCell}>
                    <input
                      className="w-full border px-2 py-1"
                      onChange={handleInputChange(() => {})}
                    />
                  </td>
                  <td className={tableCell}>
                    <input
                      className="w-full border px-2 py-1"
                      onChange={handleInputChange(() => {})}
                    />
                  </td>
                  <td className={tableCell}>
                    <input
                      className="w-full border px-2 py-1"
                      onChange={handleInputChange(() => {})}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Skill & Trade Details */}
          <h2 className="text-[#642c92] text-lg font-semibold mt-6 mb-2">SKILL & TRADE DETAILS</h2>
          <table className="w-full mb-6 border border-gray-300 text-base">
            <thead>
              <tr className="bg-[#f3f5ed]">
                <th className={tableCell}>Skill/Trade Name</th>
                <th className={tableCell}>Institute Name</th>
                <th className={tableCell}>Years of Experience</th>
                <th className={tableCell}>Other Details</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((i) => (
                <tr key={i}>
                  <td className={tableCell}>
                    <input
                      className="w-full border px-2 py-1"
                      onChange={handleInputChange(() => {})}
                    />
                  </td>
                  <td className={tableCell}>
                    <input
                      className="w-full border px-2 py-1"
                      onChange={handleInputChange(() => {})}
                    />
                  </td>
                  <td className={tableCell}>
                    <input
                      className="w-full border px-2 py-1"
                      onChange={handleInputChange(() => {})}
                    />
                  </td>
                  <td className={tableCell}>
                    <input
                      className="w-full border px-2 py-1"
                      onChange={handleInputChange(() => {})}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Additional Info */}
          <h2 className="text-[#642c92] text-lg font-semibold mt-6 mb-2">ADDITIONAL INFORMATION</h2>
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
              {[1, 2, 3].map((i) => (
                <tr key={i}>
                  <td className={tableCell}>
                    <input
                      className="w-full border px-2 py-1"
                      onChange={handleInputChange(() => {})}
                    />
                  </td>
                  <td className={tableCell}>
                    <select className="w-full border px-2 py-1">
                      <option value="">--</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </td>
                  <td className={tableCell}>
                    <select className="w-full border px-2 py-1">
                      <option value="">--</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </td>
                  <td className={tableCell}>
                    <select className="w-full border px-2 py-1">
                      <option value="">--</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="text-base text-gray-700 mt-4 mb-6">
            I declare that the information given, herein above, is true and correct to the best of
            my knowledge and belief and nothing material has been concealed.
          </p>

          <div className="flex justify-center gap-6 mt-4">
            <button className="bg-[#642c92] text-white px-8 py-3 rounded font-semibold text-base transition-transform duration-200 hover:scale-105 hover:bg-[#4f2275]">
              GO BACK
            </button>
            <button className="bg-[#642c92] text-white px-8 py-3 rounded font-semibold text-base transition-transform duration-200 hover:scale-105 hover:bg-[#4f2275]">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CandidateApplicationForm;
