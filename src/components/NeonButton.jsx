// src/components/NeonButton.jsx
import React from 'react';

const NeonButton = ({ children, onClick }) => (
  <>
    <style>
      {`
        .neon-button {
          position: relative;
          padding: 12px 24px;
          font-size: 18px;
          font-weight: bold;
          color: white;
          background-color: black;
          border-radius: 9999px;
          border: 2px solid transparent;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.3s ease-in-out;
          outline: none;
          width: 100%;
          text-decoration: none; /* Ensure no underline for a tags */
          display: inline-block;
          text-align: center;
        }

        .neon-button:hover,
        .neon-button:focus {
          box-shadow: 0 0 10px #a855f7, 0 0 20px #a855f7, 0 0 30px #a855f7;
          transform: scale(1.05);
          border-color: #a855f7;
        }

        @media (max-width: 768px) {
          .neon-button {
            font-size: 16px;
            padding: 10px 20px;
          }
        }
      `}
    </style>
    <button onClick={onClick} className="neon-button">
      <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>
    </button>
  </>
);

export default NeonButton;