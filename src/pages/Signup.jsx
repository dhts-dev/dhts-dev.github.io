import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#23212b] px-2 py-8">
      <div className="w-full max-w-4xl bg-[#2d2b38] rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
        {/* Left Panel */}
        <div className="md:w-1/2 bg-gradient-to-br from-[#f7931e] to-[#23212b] flex flex-col justify-between p-8 relative">
          <div>
            <img src="/images/Final sanvi logo.png" alt="Logo" className="w-20 mb-8" />
            <div className="h-64 w-full rounded-2xl overflow-hidden mb-8">
              <img
                src="/images/home.png"
                alt="Signup Visual"
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="text-white text-2xl font-bold mb-2">
              Capturing Moments, Creating Memories
            </h2>
            <p className="text-white text-opacity-80">
              Join Sunvi Hi-Tech and start your journey today.
            </p>
          </div>
        </div>

        {/* Right Panel (Form) */}
        <div className="md:w-1/2 bg-[#2d2b38] flex flex-col justify-center p-8">
          <h1 className="text-3xl font-extrabold text-white mb-2">Create an account</h1>
          <p className="text-gray-400 mb-6">
            Already have an account?{' '}
            <Link to="/login" className="text-[#f7931e] font-semibold hover:underline">
              Log in
            </Link>
          </p>

          <form className="space-y-4">
            {/* Name Fields */}
            <div className="w-full flex flex-col md:flex-row gap-3">
              <input
                type="text"
                placeholder="First name"
                className="w-full md:w-1/2 px-4 py-3 rounded-lg bg-[#23212b] text-white focus:outline-none focus:ring-2 focus:ring-[#f7931e]"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full md:w-1/2 px-4 py-3 rounded-lg bg-[#23212b] text-white focus:outline-none focus:ring-2 focus:ring-[#f7931e]"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg bg-[#23212b] text-white focus:outline-none focus:ring-2 focus:ring-[#f7931e]"
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg bg-[#23212b] text-white focus:outline-none focus:ring-2 focus:ring-[#f7931e]"
            />
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full px-4 py-3 rounded-lg bg-[#23212b] text-white focus:outline-none focus:ring-2 focus:ring-[#f7931e]"
            />

            {/* Terms */}
            <div className="flex items-center">
              <input type="checkbox" id="terms" className="mr-2 accent-[#f7931e]" />
              <label htmlFor="terms" className="text-gray-300 text-sm">
                I agree to the{' '}
                <a href="#" className="text-[#f7931e] underline">
                  Terms & Conditions
                </a>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-[#f7931e] text-white font-bold text-lg shadow hover:bg-[#d87c0e] transition"
            >
              Create account
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-700" />
            <span className="mx-4 text-gray-400">or register with</span>
            <div className="flex-grow h-px bg-gray-700" />
          </div>

          {/* Social Buttons */}
          <div className="flex gap-4 justify-center">
            <button className="flex items-center gap-2 px-6 py-2 rounded-lg bg-white text-[#23212b] font-semibold shadow hover:bg-gray-200 transition">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Google
            </button>
            <button className="flex items-center gap-2 px-6 py-2 rounded-lg bg-white text-[#23212b] font-semibold shadow hover:bg-gray-200 transition">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="Apple"
                className="w-5 h-5"
              />
              Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
