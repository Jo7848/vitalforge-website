import { useState, useEffect } from 'react';
import NeonButton from '../components/NeonButton';

const ServicesPage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleWhatsAppClick = (message) => {
    const phoneNumber = '+254746631707';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  let gridTemplateColumns = '1fr';
  if (!isMobile && isTablet) {
    gridTemplateColumns = 'repeat(2, 1fr)';
  } else if (!isMobile && !isTablet) {
    gridTemplateColumns = 'repeat(4, 1fr)'; // Updated for the 4 service cards
  }

  return (
    <div style={{ minHeight: '100vh', padding: '6rem 2rem', backgroundColor: 'black', color: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#a855f7', marginBottom: '2rem' }}>Our Services</h1>
        <p style={{ fontSize: '1.25rem', lineHeight: '1.6', marginBottom: '4rem' }}>
          At VITALFORGE, we offer a range of personalized services designed to help you achieve your fitness goals. All programs are grounded in science and tailored to your unique needs.
        </p>

        {/* Responsive Grid for Service Cards */}
        <div style={{
          display: 'grid',
          gap: '2rem',
          gridTemplateColumns: gridTemplateColumns,
        }}>
          {/* Individual Sessions */}
          <div style={{
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
          <div style={{
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
          <div style={{
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
          <div style={{
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