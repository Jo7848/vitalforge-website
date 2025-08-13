// src/pages/HomePage.jsx
import React from 'react';
import homepageBg from '../assets/homepage-bg.png';
import NeonButton from '../components/NeonButton';

const HomePage = ({ onStartJourney }) => {
  return (
    <section style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      {/* Background image and overlay */}
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
        <style>
          {`
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

            .hero-title-container {
              animation: fadeInSlideUp 0.8s ease-out forwards;
              opacity: 0;
            }

            .hero-subtitle-container {
              animation: fadeInSlideUp 0.8s ease-out forwards;
              animation-delay: 0.2s;
              opacity: 0;
            }

            .hero-button-container {
              animation: fadeInSlideUp 0.8s ease-out forwards;
              animation-delay: 0.4s;
              opacity: 0;
            }

            .hero-title {
              font-size: 4.5rem;
              font-weight: bold;
              line-height: 1;
              margin-bottom: 0.5rem;
            }
            .hero-subtitle {
              margin-top: 1rem;
              font-size: 2.25rem;
              font-weight: 300;
            }

            @media (max-width: 768px) {
              .hero-title {
                font-size: 2.5rem;
              }
              .hero-subtitle {
                font-size: 1.25rem;
              }
            }
          `}
        </style>
        <div className="hero-title-container">
          <h1 className="hero-title">
            <span style={{ color: '#a855f7' }}>VITALFORGE</span>
          </h1>
        </div>
        <div className="hero-subtitle-container">
          <h2 className="hero-subtitle">
            Tempered by Sweat, Sharpened by Purpose.
          </h2>
        </div>
        <div className="hero-button-container" style={{ marginTop: '3rem' }}>
          <NeonButton onClick={onStartJourney}>
            Start Your Journey
          </NeonButton>
        </div>
      </div>
    </section>
  );
};

export default HomePage;