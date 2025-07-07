import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#23212b] px-2 py-8">
      <div className="w-full max-w-4xl bg-[#2d2b38] rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
        {/* Left Panel */}
        <div className="md:w-1/2 bg-gradient-to-br from-[#f7931e] to-[#23212b] flex flex-col justify-between p-8 relative">
          <div>
            <img src="/images/img_header_logo.png" alt="Logo" className="w-20 mb-8" />
            <div className="h-64 w-full rounded-2xl overflow-hidden mb-8">
              <img src="/images/home.png" alt="Login Visual" className="object-cover w-full h-full" />
            </div>
            <h2 className="text-white text-2xl font-bold mb-2">Welcome Back!</h2>
            <p className="text-white text-opacity-80">Log in to continue your journey with Sunvi Hi-Tech.</p>
          </div>
        </div>
        {/* Right Panel (Form) */}
        <div className="md:w-1/2 bg-[#2d2b38] flex flex-col justify-center p-8">
          <h1 className="text-3xl font-extrabold text-white mb-2">Log In</h1>
          <p className="text-gray-400 mb-6">Don't have an account? <Link to="/signup" className="text-[#f7931e] font-semibold hover:underline">Sign up</Link></p>
          <form className="space-y-4">
            <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg bg-[#23212b] text-white focus:outline-none focus:ring-2 focus:ring-[#f7931e]" />
            <input type="password" placeholder="Enter your password" className="w-full px-4 py-3 rounded-lg bg-[#23212b] text-white focus:outline-none focus:ring-2 focus:ring-[#f7931e]" />
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2 accent-[#f7931e]" />
                <label htmlFor="remember" className="text-gray-300 text-sm">Remember me</label>
              </div>
              <a href="#" className="text-[#f7931e] text-sm hover:underline">Forgot password?</a>
            </div>
            <button type="submit" className="w-full py-3 rounded-lg bg-[#f7931e] text-white font-bold text-lg shadow hover:bg-[#d87c0e] transition">Log In</button>
          </form>
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-700" />
            <span className="mx-4 text-gray-400">or log in with</span>
            <div className="flex-grow h-px bg-gray-700" />
          </div>
          <div className="flex gap-4 justify-center">
            <button className="flex items-center gap-2 px-6 py-2 rounded-lg bg-white text-[#23212b] font-semibold shadow hover:bg-gray-200 transition"><img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-5 h-5" /> Google</button>
            <button className="flex items-center gap-2 px-6 py-2 rounded-lg bg-white text-[#23212b] font-semibold shadow hover:bg-gray-200 transition"><img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="w-5 h-5" /> Apple</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 