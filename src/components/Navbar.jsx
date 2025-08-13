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
          }
          .nav-link:hover {
            color: #a855f7;
          }

          @media (min-width: 768px) {
            .desktop-nav {
              display: flex;
              gap: 2rem;
            }
            .mobile-menu-button {
              display: none;
            }
            .mobile-nav {
              display: none;
            }
            .nav-link {
                padding: 0.5rem 0;
            }
          }
          
          .mobile-nav {
            position: absolute;
            top: 100%;
            right: 0;
            background-color: rgba(0, 0, 0, 0.9);
            border: 1px solid #a855f7;
            border-radius: 8px;
            margin-top: 0.5rem;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            gap: 1rem;
            box-shadow: 0 0 10px rgba(168, 85, 247, 0.5);
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