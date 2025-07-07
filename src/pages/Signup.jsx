import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#23212b] px-4 py-8">
      <div className="w-full max-w-4xl bg-[#2d2b38] rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
        {/* Left Panel */}
        <div className="md:w-1/2 bg-gradient-to-br from-[#f7931e] to-[#23212b] flex flex-col justify-between p-8">
          <div>
            <img src="/images/img_header_logo.png" alt="Logo" className="w-20 mb-8" />
            <div className="h-64 w-full rounded-2xl overflow-hidden mb-8">
              <img
                src="/images/home.png"
                alt="Signup Visual"
                className="object-cover w-full h-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/400x300?text=Sunvi+Hi-Tech";
                }}
              />
            </div>
            <h2 className="text-white text-2xl font-bold mb-2">Capturing Moments, Creating Memories</h2>
            <p className="text-white text-opacity-80">Join Sunvi Hi-Tech and start your journey today.</p>
          </div>
        </div>

        {/* Right Panel (Form) */}
        <div className="md:w-1/2 bg-[#2d2b38] flex flex-col justify-center p-8">
          <h1 className="text-3xl font-extrabold text-white mb-2">Create an account</h1>
          <p className="text-gray-400 mb-6">
            Already have an account?{' '}
            <Link to="/login" className="text-[#f7931e] font-semibold hover:underline">Log in</Link>
          </p>

          <form className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="First name"
                className="flex-1 px-4 py-3 rounded-lg bg-[#23212b] text-white focus:outline-none focus:ring-2 focus:ring-[#f7931e]"
                required
              />
              <input
                type="text"
                placeholder="Last name"
                className="flex-1 px-4 py-3 rounded-lg bg-[#23212b] text-white focus:outline-none focus:ring-2 focus:ring-[#f7931e]"
                required
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg bg-[#23212b] text-white focus:outline-none focus:ring-2 focus:ring-[#f7931e]"
              required
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg bg-[#23212b] text-white focus:outline-none focus:ring-2 focus:ring-[#f7931e]"
              required
              minLength="8"
            />
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full px-4 py-3 rounded-lg bg-[#23212b] text-white focus:outline-none focus:ring-2 focus:ring-[#f7931e]"
              required
            />
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="mr-2 accent-[#f7931e]"
                required
              />
              <label htmlFor="terms" className="text-gray-300 text-sm">
                I agree to the{' '}
                <Link to="/terms" className="text-[#f7931e] underline">Terms & Conditions</Link>
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-[#f7931e] text-white font-bold text-lg shadow hover:bg-[#d87c0e] transition"
            >
              Create account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;