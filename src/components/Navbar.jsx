// src/components/Navbar.jsx
import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = ({ setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setIsOpen(false);
  };

  const navLinks = (
    <>
      <a href="#" onClick={() => handleNavigation('home')} className="nav-link">Home</a>
      <a href="#" onClick={() => handleNavigation('about')} className="nav-link">About Josh</a>
      <a href="#" onClick={() => handleNavigation('services')} className="nav-link">Services</a>
      <a href="#" onClick={() => handleNavigation('stories')} className="nav-link">Success Stories</a>
      <a href="#" onClick={() => handleNavigation('faqs')} className="nav-link">FAQs</a>
      <a href="#" onClick={() => handleNavigation('blog')} className="nav-link">Blog</a>
      <a href="#" onClick={() => handleNavigation('contact')} className="nav-link">Contact</a>
    </>
  );

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 2rem',
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <style>
        {`
          @keyframes slideDownAndFadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .desktop-nav {
            display: none;
          }
          .mobile-menu-button {
            display: block;
            background: none;
            border: none;
            color: #a855f7;
            font-size: 1.5rem;
            cursor: pointer;
          }
          .nav-link {
            transition: color 0.3s;
            text-decoration: none;
            color: white;
            padding: 0.5rem 0;
            display: block;
            font-size: 2rem;
          }
          .nav-link:hover {
            color: #a855f7;
          }

          @media (min-width: 768px) {
            .desktop-nav {
              display: flex !important;
              gap: 2rem;
            }
            .mobile-menu-button,
            .mobile-nav {
              display: none !important;
            }
            .nav-link {
              padding: 0;
              font-size: 1rem;
            }
          }
          
          .mobile-nav {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.95);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2rem;
            animation: slideDownAndFadeIn 0.3s ease-out forwards;
          }
        `}
      </style>
      
      <div onClick={() => handleNavigation('home')} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
        <img
          src={logo}
          alt="Vitalforge Logo"
          style={{ height: '40px' }}
        />
      </div>

      <nav className="desktop-nav">
        {navLinks}
      </nav>

      <button onClick={toggleMenu} className="mobile-menu-button">
        {isOpen ? '✕' : '☰'}
      </button>

      {isOpen && (
        <nav className="mobile-nav">
          {navLinks}
        </nav>
      )}
    </header>
  );
};

export default Navbar;