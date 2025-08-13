// src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import StoriesPage from './pages/StoriesPage';
import FAQsPage from './pages/FaqsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'stories':
        return <StoriesPage />;
      case 'faqs':
        return <FAQsPage />;
      case 'blog':
        return <BlogPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div>
      <Navbar setCurrentPage={setCurrentPage} />
      <div className="content-container">
        {renderPage()}
      </div>
    </div>
  );
};

export default App;