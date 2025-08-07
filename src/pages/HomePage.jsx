// src/pages/HomePage.jsx
import { useState, useEffect } from 'react';
import homepageBg from '../assets/homepage-bg.png';
import NeonButton from '../components/NeonButton';

const HomePage = ({ onStartJourney }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const h1Style = {
    fontSize: isMobile ? '3rem' : '4.5rem',
    fontWeight: 'bold',
    lineHeight: '1',
  };

  const h2Style = {
    marginTop: '1rem',
    fontSize: isMobile ? '1.5rem' : '2.25rem',
    fontWeight: '300',
  };

  return (
    <section style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      {/* Background image from local assets */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          src={homepageBg}
          alt="Homepage background of a person working out"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.6)' }}></div>
      </div>

      {/* Hero content */}
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem', textAlign: 'center', color: 'white' }}>
        <h1 style={h1Style}>
          <span style={{ color: '#6a5a79ff' }}>VITALFORGE</span>
        </h1>
        <h2 style={h2Style}>
          Tempered by Sweat, harpened by Purpose.
        </h2>
        <div style={{ marginTop: '3rem' }}>
          <NeonButton onClick={onStartJourney}>
            Start Your Journey
          </NeonButton>
        </div>
      </div>
    </section>
  );
};

export default HomePage;