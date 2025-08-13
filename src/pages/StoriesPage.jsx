// src/pages/StoriesPage.jsx
import React from 'react';
import griffineImage from '../assets/griffine.png';
import maryImage from '../assets/mary.png';
import johnImage from '../assets/john.png';
import sarahImage from '../assets/sarah.png';
import alexImage from '../assets/alex.png';

const TestimonialCard = ({ testimonial, author, location, imageSrc, className }) => (
  <div className={className} style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    border: '1px solid #333',
    borderRadius: '8px',
    padding: '2rem',
    marginBottom: '2rem',
    boxShadow: '0 0 15px #a855f7',
    background: '#1a1a1a',
  }}>
    <img
      src={imageSrc}
      alt={`Portrait of ${author}`}
      style={{
        borderRadius: '50%',
        width: '120px',
        height: '120px',
        objectFit: 'cover',
        border: '3px solid #a855f7',
        marginBottom: '1rem',
      }}
    />
    <p style={{ fontStyle: 'italic', lineHeight: '1.6', marginBottom: '1rem' }}>
      "{testimonial}"
    </p>
    <p style={{ fontWeight: 'bold', color: '#a855f7' }}>
      - {author}, <span style={{ color: 'white', fontWeight: 'normal' }}>{location}</span>
    </p>
  </div>
);

const StoriesPage = () => {
  return (
    <div style={{ minHeight: '100vh', padding: '6rem 2rem', backgroundColor: 'black', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
          .stories-title {
            animation: fadeInSlideUp 0.8s ease-out forwards;
          }
          .testimonial-card {
            opacity: 0;
            animation: fadeInSlideUp 0.8s ease-out forwards;
          }
          .testimonial-card:nth-child(1) { animation-delay: 0.4s; }
          .testimonial-card:nth-child(2) { animation-delay: 0.6s; }
          .testimonial-card:nth-child(3) { animation-delay: 0.8s; }
          .testimonial-card:nth-child(4) { animation-delay: 1.0s; }
          .testimonial-card:nth-child(5) { animation-delay: 1.2s; }

          @media (max-width: 768px) {
            .testimonial-card-text {
              font-size: 0.9rem !important;
            }
          }
        `}
      </style>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="stories-title" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#a855f7', textAlign: 'center', marginBottom: '2rem', opacity: 0 }}>Success Stories</h1>
        
        <TestimonialCard
          className="testimonial-card"
          testimonial="I was constantly tired and had no idea why. I thought I was eating healthy, but my energy levels were always low. Josh's nutritional guidance was a revelation. He helped me understand the science behind food and created a simple, personalized plan that worked for my lifestyle. I've never felt so vibrant and healthy. It's not just about what you eat-it's about understanding how to properly fuel your body, and Josh taught me that."
          author="Griffine N."
          location="Kisumu"
          imageSrc={griffineImage}
        />

        <TestimonialCard
          className="testimonial-card"
          testimonial="For years, I suffered from constant back pain and felt self-conscious about my posture. I thought it was just something I had to live with. Josh's corrective therapy changed everything. He showed me how to correct my movements and stance, and the pain is now gone. I stand taller, feel more confident, and my quality of life has improved dramatically. It's been a truly transformative experience."
          author="Mary A."
          location="Nairobi"
          imageSrc={maryImage}
        />

        <TestimonialCard
          className="testimonial-card"
          testimonial="Working with Josh has been a game-changer. I'd struggled with my weight for years and felt stuck. Josh's personalized training and nutrition guidance were exactly what I needed. In just a few months, I've lost significant weight, gained energy, and feel more confident than ever. The support and motivation I received were incredible. I highly recommend Josh to anyone serious about transforming their health."
          author="John K."
          location="Nakuru"
          imageSrc={johnImage}
        />

        <TestimonialCard
          className="testimonial-card"
          testimonial="After a nasty ankle sprain during a football match, I thought my season was over. Josh's expert guidance in injury rehabilitation was incredible. He created a tailored plan that helped me regain strength and mobility much faster than I expected. Not only did I get back on the field, but I also feel stronger and more resilient than before. Josh's knowledge and support were invaluable."
          author="Sarah M."
          location="Eldoret"
          imageSrc={sarahImage}
        />

        <TestimonialCard
          className="testimonial-card"
          testimonial="I was always the skinny guy and never thought I could gain muscle I trained on my own for months with no results. When I started working with Josh, he gave me a clear, science-backed plan that completely changed my physique. Not only did I gain a significant amount of muscle, but I also learned how to train properly and fuel my body for growth. Josh's expertise and encouragement were key to my transformation."
          author="Alex M."
          location="Kisumu"
          imageSrc={alexImage}
        />
      </div>
    </div>
  );
};

export default StoriesPage;