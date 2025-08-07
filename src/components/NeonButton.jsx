// src/components/NeonButton.jsx

const NeonButton = ({ children, onClick }) => (
  <button
    onClick={onClick}
    style={{
      position: 'relative',
      padding: '12px 24px',
      fontSize: '18px',
      fontWeight: 'bold',
      color: 'white',
      borderRadius: '9999px',
      backgroundColor: 'black',
      border: '2px solid transparent',
      cursor: 'pointer',
      overflow: 'hidden',
      transition: 'all 0.3s ease-in-out',
      outline: 'none',
      width: '100%', // Added for responsiveness
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = '0 0 10px #a855f7, 0 0 20px #a855f7, 0 0 30px #a855f7';
      e.currentTarget.style.transform = 'scale(1.05)';
      e.currentTarget.style.borderColor = '#a855f7';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.borderColor = 'transparent';
    }}
  >
    <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>
  </button>
);

export default NeonButton;
