// src/pages/ServicesPage.jsx
import React from 'react';
import NeonButton from '../components/NeonButton';

const ServicesPage = () => {
  const handleWhatsAppClick = (message) => {
    const phoneNumber = '+254746631707';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div style={{ minHeight: '100vh', padding: '6rem 2rem', backgroundColor: 'black', color: 'white' }}>
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

          .services-title {
            animation: fadeInSlideUp 0.8s ease-out forwards;
          }

          .services-subtitle {
            animation: fadeInSlideUp 0.8s ease-out forwards;
            animation-delay: 0.2s;
          }

          .service-card {
            opacity: 0;
            animation: fadeInSlideUp 0.8s ease-out forwards;
          }
          .service-card:nth-child(1) { animation-delay: 0.4s; }
          .service-card:nth-child(2) { animation-delay: 0.6s; }
          .service-card:nth-child(3) { animation-delay: 0.8s; }
          .service-card:nth-child(4) { animation-delay: 1s; }

          .service-cards-grid {
            display: grid;
            gap: 2rem;
            grid-template-columns: 1fr;
          }

          @media (min-width: 768px) {
            .service-cards-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (min-width: 1024px) {
            .service-cards-grid {
              grid-template-columns: repeat(4, 1fr);
            }
          }
        `}
      </style>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h1 className="services-title" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#a855f7', marginBottom: '2rem', opacity: 0 }}>
          Our Services
        </h1>
        <p className="services-subtitle" style={{ fontSize: '1.25rem', lineHeight: '1.6', marginBottom: '4rem', opacity: 0 }}>
          At VITALFORGE, we offer a range of personalized services designed to help you achieve your fitness goals. All programs are grounded in science and tailored to your unique needs.
        </p>

        {/* Responsive Grid for Service Cards */}
        <div className="service-cards-grid">
          {/* Individual Sessions */}
          <div className="service-card" style={{
            backgroundColor: '#1a1a1a',
            padding: '2rem',
            borderRadius: '8px',
            border: '1px solid #333',
            boxShadow: '0 0 15px #a855f7',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#a855f7', marginBottom: '1rem' }}>Individual Sessions</h2>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '1rem' }}>3,000 KES</p>
              <p style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>
                One-on-one personalized coaching sessions, focusing on your specific goals, form, and technique. Ideal for beginners or those seeking maximum individual attention.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', marginBottom: '2rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><span style={{ color: '#a855f7' }}>✓</span> Custom workout plan</li>
                <li style={{ marginBottom: '0.5rem' }}><span style={{ color: '#a855f7' }}>✓</span> Real-time form correction</li>
                <li><span style={{ color: '#a855f7' }}>✓</span> Detailed progress tracking</li>
              </ul>
            </div>
            <NeonButton onClick={() => handleWhatsAppClick('Hello, I am interested in your Individual Sessions.')}>
              Get This
            </NeonButton>
          </div>

          {/* Premium Packages */}
          <div className="service-card" style={{
            backgroundColor: '#1a1a1a',
            padding: '2rem',
            borderRadius: '8px',
            border: '1px solid #333',
            boxShadow: '0 0 15px #a855f7',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#a855f7', marginBottom: '1rem' }}>Premium Packages</h2>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '1rem' }}>15,000 KES</p>
              <p style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Comprehensive programs that combine training, nutrition guidance, and continuous support to accelerate your results.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', marginBottom: '2rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><span style={{ color: '#a855f7' }}>✓</span> All benefits of individual sessions</li>
                <li style={{ marginBottom: '0.5rem' }}><span style={{ color: '#a855f7' }}>✓</span> Personalized meal plans</li>
                <li><span style={{ color: '#a855f7' }}>✓</span> 24/7 support</li>
              </ul>
            </div>
            <NeonButton onClick={() => handleWhatsAppClick('Hello, I am interested in your Premium Packages.')}>
              Get This
            </NeonButton>
          </div>

          {/* Injury rehabilitation and posture correction */}
          <div className="service-card" style={{
            backgroundColor: '#1a1a1a',
            padding: '2rem',
            borderRadius: '8px',
            border: '1px solid #333',
            boxShadow: '0 0 15px #a855f7',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#a855f7', marginBottom: '1rem' }}>Injury Rehabilitation & Posture Correction</h2>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '1rem' }}>2,000 KES / hour</p>
              <p style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Specialized sessions to help you recover from injuries, correct postural imbalances, and build a resilient body.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', marginBottom: '2rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><span style={{ color: '#a855f7' }}>✓</span> Customized corrective exercises</li>
                <li style={{ marginBottom: '0.5rem' }}><span style={{ color: '#a855f7' }}>✓</span> Postural analysis</li>
                <li><span style={{ color: '#a855f7' }}>✓</span> Foundational strength building</li>
              </ul>
            </div>
            <NeonButton onClick={() => handleWhatsAppClick('Hello, I am interested in Injury Rehabilitation & Posture Correction.')}>
              Get This
            </NeonButton>
          </div>

          {/* Virtual group sessions */}
          <div className="service-card" style={{
            backgroundColor: '#1a1a1a',
            padding: '2rem',
            borderRadius: '8px',
            border: '1px solid #333',
            boxShadow: '0 0 15px #a855f7',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#a855f7', marginBottom: '1rem' }}>Virtual Group Sessions</h2>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '1rem' }}>1,000 KES / hour</p>
              <p style={{ lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Join our live, interactive group classes from the comfort of your home. A great way to stay motivated and connect with a community.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', marginBottom: '2rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><span style={{ color: '#a855f7' }}>✓</span> Live trainer-led workouts</li>
                <li style={{ marginBottom: '0.5rem' }}><span style={{ color: '#a855f7' }}>✓</span> Community support</li>
                <li><span style={{ color: '#a855f7' }}>✓</span> Flexible scheduling</li>
              </ul>
            </div>
            <NeonButton onClick={() => handleWhatsAppClick('Hello, I am interested in Virtual Group Sessions.')}>
              Get This
            </NeonButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;