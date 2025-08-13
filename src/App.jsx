// src/App.jsx
import { useState } from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import StoriesPage from './pages/StoriesPage';
import FaqsPage from './pages/FaqsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import logo from './assets/logo.png';
import NeonButton from './components/NeonButton';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onStartJourney={() => setCurrentPage('services')} />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'stories':
        return <StoriesPage />;
      case 'faqs':
        return <FaqsPage />;
      case 'blog':
        return <BlogPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'black', color: 'white', fontFamily: 'Inter, sans-serif' }}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap');
          body {
            margin: 0;
            font-family: 'Inter', sans-serif;
            background-color: #000;
            color: #fff;
          }
          * {
            box-sizing: border-box;
          }

          @keyframes fadeInSlideUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .page-content {
            animation: fadeInSlideUp 0.8s ease-out forwards;
          }
        `}
      </style>
      <Navbar setCurrentPage={setCurrentPage} />
      <div className="page-content" key={currentPage}>
        {renderPage()}
      </div>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;