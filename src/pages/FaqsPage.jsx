// src/pages/FaqsPage.jsx
import React, { useState } from 'react';

const FaqsPage = () => {
  const faqs = [
    {
      question: "What makes VITALFORGE different from other fitness programs?",
      answer: "VITALFORGE stands out because we focus on personalized, science-backed training. Every program is tailored to your unique goals and body type. We don't believe in one-size-fits-all solutions or fad diets; instead, we prioritize sustainable, evidence-based methods to ensure you get real, lasting results."
    },
    {
      question: "Do I need to have a gym membership?",
      answer: "Not necessarily! While a gym membership can be beneficial, many of our programs are designed to be done at home with minimal to no equipment. We can create a custom plan that fits your resources and preferences, whether you prefer to train at a gym, at home, or outdoors."
    },
    {
      question: "How do the virtual group sessions work?",
      answer: "Our virtual group sessions are live, trainer-led workouts conducted via a video conferencing platform. You'll join a group of motivated individuals, get real-time instruction and encouragement, and be part of a supportive community—all from the comfort of your home."
    },
    {
      question: "Can you help me if I have a pre-existing injury?",
      answer: "Yes. As a specialist in injury rehabilitation and posture correction, Josh will assess your condition and create a safe, customized program designed to help you recover, rebuild strength, and restore proper function. We focus on movement correction and foundational strength building to ensure you can train smarter and avoid future injuries."
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ minHeight: '100vh', padding: '8rem 2rem 4rem 2rem', backgroundColor: 'black', color: 'white' }}>
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
          @media (max-width: 768px) {
            .faq-main-title {
              font-size: 2rem !important;
            }
            .faq-subtitle {
              font-size: 1rem !important;
            }
            .accordion-button {
              font-size: 1rem !important;
              padding: 1.25rem !important;
            }
            .accordion-answer {
              font-size: 0.9rem !important;
              padding: 1.25rem !important;
            }
          }
          .faq-main-title {
            animation: fadeInSlideUp 0.8s ease-out forwards;
            opacity: 0;
          }
          .faq-subtitle {
            animation: fadeInSlideUp 0.8s ease-out forwards;
            animation-delay: 0.2s;
            opacity: 0;
          }
          .faq-item {
            animation: fadeInSlideUp 0.8s ease-out forwards;
            opacity: 0;
          }
          .faq-item:nth-child(1) { animation-delay: 0.4s; }
          .faq-item:nth-child(2) { animation-delay: 0.6s; }
          .faq-item:nth-child(3) { animation-delay: 0.8s; }
          .faq-item:nth-child(4) { animation-delay: 1s; }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 className="faq-main-title" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#a855f7', marginBottom: '2rem' }}>
          Frequently Asked Questions
        </h1>
        <p className="faq-subtitle" style={{ fontSize: '1.25rem', lineHeight: '1.6', marginBottom: '4rem' }}>
          Got questions? We've got answers.
        </p>

        {faqs.map((faq, index) => (
          <div key={index} className="faq-item" style={{ marginBottom: '1.5rem' }}>
            <button
              onClick={() => toggleAccordion(index)}
              className="accordion-button"
              style={{
                width: '100%',
                backgroundColor: '#1a1a1a',
                color: 'white',
                border: '1px solid #333',
                borderRadius: '8px',
                padding: '1.5rem',
                textAlign: 'left',
                cursor: 'pointer',
                fontSize: '1.25rem',
                fontWeight: 'bold',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'background-color 0.3s, border-color 0.3s, box-shadow 0.3s',
                boxShadow: openIndex === index ? '0 0 15px #a855f7' : 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2c2c2c';
                e.currentTarget.style.borderColor = '#a855f7';
              }}
              onMouseLeave={(e) => {
                if (openIndex !== index) {
                  e.currentTarget.style.backgroundColor = '#1a1a1a';
                  e.currentTarget.style.borderColor = '#333';
                }
              }}
            >
              {faq.question}
              <span style={{ fontSize: '1.5rem', color: '#a855f7' }}>
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div
                className="accordion-answer"
                style={{
                  backgroundColor: '#0f0f0f',
                  color: 'white',
                  padding: '1.5rem',
                  border: '1px solid #333',
                  borderTop: 'none',
                  borderRadius: '0 0 8px 8px',
                  textAlign: 'left',
                  lineHeight: '1.6',
                  animation: 'fadeIn 0.3s ease-in-out',
                }}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqsPage;