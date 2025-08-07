import React, { useState } from 'react';

const Navbar = ({ onNavigate }) => {
  // State to manage the visibility of the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to close the mobile menu after a link is clicked
  const handleNavigate = (page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 shadow-lg py-4 px-6">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo and brand name. Always visible. */}
        <div className="flex items-center">
          <img src={logo} alt="Vitalforge Logo" className="h-10 w-auto mr-4" />
          <button onClick={() => handleNavigate('home')} className="text-2xl font-bold text-white tracking-wider focus:outline-none">
            <span className="text-purple-500">VITALFORGE</span>
          </button>
        </div>

        {/* Desktop Navigation Links - hidden on small screens */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <button onClick={() => handleNavigate('home')} className="text-white hover:text-purple-500 transition-colors duration-300">Home</button>
          </li>
          <li>
            <button onClick={() => handleNavigate('about')} className="text-white hover:text-purple-500 transition-colors duration-300">About Josh</button>
          </li>
          <li>
            <button onClick={() => handleNavigate('services')} className="text-white hover:text-purple-500 transition-colors duration-300">Services</button>
          </li>
          <li>
            <button onClick={() => handleNavigate('stories')} className="text-white hover:text-purple-500 transition-colors duration-300">Success Stories</button>
          </li>
          <li>
            <button onClick={() => handleNavigate('contact')} className="text-white hover:text-purple-500 transition-colors duration-300">Contact</button>
          </li>
        </ul>

        {/* Mobile menu button (Hamburger Icon) - visible on small screens only */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none">
            {/* Hamburger menu icon SVG */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu - shown/hidden with a smooth slide animation */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col space-y-4 text-center">
          <li>
            <button onClick={() => handleNavigate('home')} className="block py-2 text-white hover:text-purple-500 transition-colors duration-300">Home</button>
          </li>
          <li>
            <button onClick={() => handleNavigate('about')} className="block py-2 text-white hover:text-purple-500 transition-colors duration-300">About Josh</button>
          </li>
          <li>
            <button onClick={() => handleNavigate('services')} className="block py-2 text-white hover:text-purple-500 transition-colors duration-300">Services</button>
          </li>
          <li>
            <button onClick={() => handleNavigate('stories')} className="block py-2 text-white hover:text-purple-500 transition-colors duration-300">Success Stories</button>
          </li>
          <li>
            <button onClick={() => handleNavigate('contact')} className="block py-2 text-white hover:text-purple-500 transition-colors duration-300">Contact</button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;