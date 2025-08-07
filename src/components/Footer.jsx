import React from 'react';

const Footer = ({ onNavigate }) => {
  return (
    <footer style={{
      backgroundColor: '#080808ff',
      padding: '2rem',
      color: 'white',
      textAlign: 'center',
      borderTop: '1px solid #333',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{ fontSize: '1rem', marginBottom: '1rem' }}>
          &copy; 2025 VITALFORGE. All Rights Reserved.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
          <button onClick={() => onNavigate('privacy')} style={{ color: '#a855f7', textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '0', fontSize: '1rem' }}>Privacy Policy</button>
          <button onClick={() => onNavigate('terms')} style={{ color: '#a855f7', textDecoration: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '0', fontSize: '1rem' }}>Terms of Service</button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          {/* Social media icons with neon purple styling */}
          <a href="https://wa.me/254746631707" target="_blank" rel="noopener noreferrer" style={{ color: '#a855f7', fontSize: '1.5rem' }}>
            <i className="fa fa-whatsapp"></i>
          </a>
          <a href="mailto:indiatsiwilliams@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: '#a855f7', fontSize: '1.5rem' }}>
            <i className="fa fa-envelope"></i>
          </a>
        </div>
      </div>
      {/* Link to Font Awesome for the icons */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    </footer>
  );
};

export default Footer;