import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // 'resources' | 'company' | null
  const resourcesDropdownRef = useRef(null);
  const companyDropdownRef = useRef(null);
  const userDropdownRef = useRef(null);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Available Jobs', href: '/current-jobs' },
    { name: 'Sectors', href: '/industry' }
  ];

  const resourcesDropdownItems = [
    { name: 'Brochure & Catalogue', href: '/resources/brochure' },
    { name: 'Gallery', href: '/resources/gallery' },
    { name: 'Blogs', href: '/resources/blogs' }
  ];

  const companyDropdownItems = [
    { name: 'About Us', href: '/resources/about-us' },
    { name: 'CSR', href: '/company/csr' },
    { name: 'Clients', href: '/company/clients' },
    { name: 'Company Policy', href: '/company/policy' }
  ];

  // Close all dropdowns when mouse leaves nav
  const handleNavLeave = () => {
    setOpenDropdown(null);
    setShowUserDropdown(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setShowUserDropdown(false);
      }
    }
    if (showUserDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showUserDropdown]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 pl-2">
            <Link to="/" className="flex items-center">
              <h1 className="text-xl lg:text-2xl font-bold text-[#f7931e]">
                Sunvi Hi-Tech
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" onMouseLeave={handleNavLeave}>
            <div className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-base font-medium transition-colors duration-200 ${
                    location.pathname === item.href 
                      ? 'text-[#f7931e]' 
                      : 'text-gray-700 hover:text-[#f7931e]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Resources Dropdown */}
              <div className="relative" ref={resourcesDropdownRef}>
                <button
                  type="button"
                  className={`text-base font-medium transition-colors duration-200 ${
                    location.pathname.startsWith('/resources') 
                      ? 'text-[#f7931e]' 
                      : 'text-gray-700 hover:text-[#f7931e]'
                  }`}
                  onMouseEnter={() => setOpenDropdown('resources')}
                  onFocus={() => setOpenDropdown('resources')}
                  onClick={() => setOpenDropdown(openDropdown === 'resources' ? null : 'resources')}
                >
                  Resources
                </button>
                {openDropdown === 'resources' && (
                  <div
                    className="absolute left-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {resourcesDropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#f7931e] transition-colors"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Company Dropdown (Non-clickable label) */}
              <div className="relative" ref={companyDropdownRef}>
                <span
                  className="text-base font-medium text-gray-700 cursor-default"
                  onMouseEnter={() => setOpenDropdown('company')}
                  onFocus={() => setOpenDropdown('company')}
                >
                  Company
                </span>
                {openDropdown === 'company' && (
                  <div
                    className="absolute left-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {companyDropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#f7931e] transition-colors"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* User Menu Dropdown */}
            <div className="relative ml-4" ref={userDropdownRef}>
              <button
                type="button"
                className="p-2 text-gray-700 hover:text-[#f7931e] transition-colors"
                onClick={() => setShowUserDropdown((open) => !open)}
                aria-label="User menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              {showUserDropdown && (
                <div
                  className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#f7931e] transition-colors"
                    onClick={() => {
                      setShowUserDropdown(false);
                      navigate('/resources/language');
                    }}
                  >
                    Change Language
                  </button>
                  <div className="border-t border-gray-100 my-1"></div>
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#f7931e] transition-colors"
                    onClick={() => setShowUserDropdown(false)}
                  >
                    Log In
                  </Link>
                  <Link
                    to="/signup"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#f7931e] transition-colors"
                    onClick={() => setShowUserDropdown(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-gray-700 hover:text-[#f7931e] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                    location.pathname === item.href 
                      ? 'text-[#f7931e] bg-gray-50' 
                      : 'text-gray-700 hover:text-[#f7931e] hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Resources Dropdown */}
              <div className="px-3 py-2">
                <span className="text-base font-medium text-gray-700">Resources</span>
                <div className="ml-4 mt-2 space-y-1">
                  {resourcesDropdownItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-[#f7931e] transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Company Dropdown */}
              <div className="px-3 py-2">
                <span className="text-base font-medium text-gray-700">Company</span>
                <div className="ml-4 mt-2 space-y-1">
                  {companyDropdownItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-[#f7931e] transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile User Options */}
              <div className="border-t border-gray-200 pt-4 mt-4">
                <button className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-[#f7931e] transition-colors">
                  Change Language
                </button>
                <Link
                  to="/login"
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#f7931e] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Log In / Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
