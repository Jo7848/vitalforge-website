// src/pages/StoriesPage.jsx
import griffineImage from '../assets/griffine.png';
import maryImage from '../assets/mary.png';
import johnImage from '../assets/john.png';
import sarahImage from '../assets/sarah.png';
import alexImage from '../assets/alex.png';

const TestimonialCard = ({ testimonial, author, location, imageSrc }) => (
  <div style={{
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
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#a855f7', textAlign: 'center', marginBottom: '2rem' }}>Success Stories</h1>
        
        <TestimonialCard
          testimonial="I was constantly tired and had no idea why. I thought I was eating healthy, but my energy levels were always low. Josh's nutritional guidance was a revelation. He helped me understand the science behind food and created a simple, personalized plan that worked for my lifestyle. I've never felt so vibrant and healthy. It's not just about what you eat-it's about understanding how to properly fuel your body, and Josh taught me that."
          author="Griffine N."
          location="Kisumu"
          imageSrc={griffineImage}
        />

        <TestimonialCard
          testimonial="For years, I suffered from constant back pain and felt self-conscious about my posture. I thought it was just something I had to live with. Josh's corrective therapy changed everything. He showed me how to correct my movements and stance, and the pain is now gone. I stand taller, feel more confident, and my quality of life has improved dramatically. It's been a truly transformative experience."
          author="Mary A."
          location="Nairobi"
          imageSrc={maryImage}
        />

        <TestimonialCard
          testimonial="Working with Josh has been a game-changer. I'd struggled with my weight for years and felt stuck. Josh's personalized training and nutrition guidance were exactly what I needed. In just a few months, I've lost significant weight, gained energy, and feel more confident than ever. The support and motivation I received were incredible. I highly recommend Josh to anyone serious about transforming their health."
          author="John K."
          location="Nakuru"
          imageSrc={johnImage}
        />

        <TestimonialCard
          testimonial="After a nasty ankle sprain during a football match, I thought my season was over. Josh's expert guidance in injury rehabilitation was incredible. He created a tailored plan that helped me regain strength and mobility much faster than I expected. Not only did I get back on the field, but I also feel stronger and more resilient than before. Josh's knowledge and support were invaluable."
          author="Sarah M."
          location="Eldoret"
          imageSrc={sarahImage}
        />

        <TestimonialCard
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