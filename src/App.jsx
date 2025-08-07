import { useState } from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import StoriesPage from './pages/StoriesPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import logo from './assets/logo.png';
import NeonButton from './components/NeonButton';
import Navbar from './components/Navbar';

// A custom modal component to replace alert()
const MessageModal = ({ message, onClose }) => {
  if (!message) return null;
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100,
    }}>
      <div style={{
        backgroundColor: 'black',
        color: 'white',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 0 20px #a855f7',
        textAlign: 'center',
        border: '1px solid #a855f7',
      }}>
        <p>{message}</p>
        <button
          onClick={onClose}
          style={{
            marginTop: '1rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#a855f7',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          OK
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [modalMessage, setModalMessage] = useState('');

  const handleStartJourney = () => {
    setModalMessage('Your journey starts now!');
  };

  const Navbar = () => (
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
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={logo}
          alt="Vitalforge Logo"
          style={{ height: '40px', marginRight: '1rem' }}
        />
      </div>
      <nav style={{ display: 'flex', gap: '2rem' }}>
        <a href="#" onClick={() => setCurrentPage('home')} style={{ transition: 'color 0.3s', textDecoration: 'none' }} onMouseEnter={e => e.target.style.color = '#a855f7'} onMouseLeave={e => e.target.style.color = '#fff'}>Home</a>
        <a href="#" onClick={() => setCurrentPage('about')} style={{ transition: 'color 0.3s', textDecoration: 'none' }} onMouseEnter={e => e.target.style.color = '#a855f7'} onMouseLeave={e => e.target.style.color = '#fff'}>About Josh</a>
        <a href="#" onClick={() => setCurrentPage('services')} style={{ transition: 'color 0.3s', textDecoration: 'none' }} onMouseEnter={e => e.target.style.color = '#a855f7'} onMouseLeave={e => e.target.style.color = '#fff'}>Services</a>
        <a href="#" onClick={() => setCurrentPage('stories')} style={{ transition: 'color 0.3s', textDecoration: 'none' }} onMouseEnter={e => e.target.style.color = '#a855f7'} onMouseLeave={e => e.target.style.color = '#fff'}>Success Stories</a>
        <a href="#" onClick={() => setCurrentPage('contact')} style={{ transition: 'color 0.3s', textDecoration: 'none' }} onMouseEnter={e => e.target.style.color = '#a855f7'} onMouseLeave={e => e.target.style.color = '#fff'}>Contact</a>
      </nav>
    </header>
  );

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
        `}
      </style>
      <Navbar />
      {renderPage()}
      <Footer />
      <MessageModal message={modalMessage} onClose={() => setModalMessage('')} />
    </div>
  );
};

export default App;