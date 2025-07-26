import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.terms) newErrors.terms = 'You must accept the terms';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form logic here
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#23212b] px-2 py-8">
      <div className="w-full max-w-4xl bg-[#2d2b38] rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden animate-fadeIn">
        {/* Left Panel (unchanged) */}
        <div className="md:w-1/2 bg-gradient-to-br from-[#f5ec4e] to-[#f7931e] flex flex-col p-8 gap-6">
          <div className="flex">
            <img src="/images/Final sanvi logo.png" alt="Logo" className="w-40 md:w-44 lg:w-52" />
          </div>
          <div className="h-64 w-full rounded-2xl overflow-hidden">
            <img src="/images/home.png" alt="Signup Visual" className="object-cover w-full h-full" />
          </div>
          <div>
            <h2 className="text-white text-2xl font-bold mb-2">
              Capturing Moments, Creating Memories
            </h2>
            <p className="text-white text-opacity-80 leading-relaxed">
              Join Sunvi Hi-Tech and start your journey today.
            </p>
          </div>
        </div>

        {/* Right Panel (Form) */}
        <div className="md:w-1/2 bg-[#4a4950] flex flex-col justify-center p-8">
          <h1 className="text-3xl font-extrabold text-white mb-2">Create an account</h1>
          <p className="text-white mb-6">
            Already have an account?{' '}
            <Link to="/login" className="text-[#f7931e] font-semibold hover:underline">
              Log in
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Fields */}
            <div className="w-full flex flex-col md:flex-row gap-3">
              <div className="w-full md:w-1/2">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#23212b] text-white focus:outline-none focus:ring-2 focus:ring-[#f7931e]"
                  required
                />
                {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>}
              </div>
              <div className="w-full md:w-1/2">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#23212b] text-white focus:outline-none focus:ring-2 focus:ring-[#f7931e]"
                  required
                />
                {errors.lastName && <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>}
              </div>
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#23212b] text-white focus:outline-none focus:ring-2 focus:ring-[#f7931e]"
                required
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#23212b] text-white focus:outline-none focus:ring-2 focus:ring-[#f7931e]"
                required
                minLength="8"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-gray-400 hover:text-[#f7931e]"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
              {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#23212b] text-white focus:outline-none focus:ring-2 focus:ring-[#f7931e]"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3.5 text-gray-400 hover:text-[#f7931e]"
              >
                {showConfirmPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
              {errors.confirmPassword && <p className="text-red-400 text-sm mt-1">{errors.confirmPassword}</p>}
            </div>

            {/* Terms */}
            <div className="flex items-start">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                className="mr-2 mt-1 accent-[#f7931e]"
              />
              <label htmlFor="terms" className="text-gray-300 text-sm">
                I agree to the{' '}
                <a href="#" className="text-[#f7931e] underline">
                  Terms & Conditions
                </a>
                {errors.terms && <p className="text-red-400 text-sm mt-1">{errors.terms}</p>}
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

          {/* Divider and Social Buttons (unchanged) */}
          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-700" />
            <span className="mx-4 text-gray-400">or register with</span>
            <div className="flex-grow h-px bg-gray-700" />
          </div>
          <div className="flex gap-4 justify-center">
            <button className="flex items-center gap-2 px-6 py-2 rounded-lg bg-white text-[#23212b] font-semibold shadow hover:bg-gray-200 transition">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>
            <button className="flex items-center gap-2 px-6 py-2 rounded-lg bg-white text-[#23212b] font-semibold shadow hover:bg-gray-200 transition">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;