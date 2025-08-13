// src/pages/AboutPage.jsx
import React from 'react';
import aboutBg from '../assets/about-bg.png';
import joshHeadshot from '../assets/josh-headshot.png';

const AboutPage = () => {
  return (
    <div style={{
      position: 'relative',
      minHeight: '100vh',
      padding: '6rem 2rem',
      backgroundColor: 'black',
      color: 'white',
      overflow: 'hidden'
    }}>
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
          .about-title {
            animation: fadeInSlideUp 0.8s ease-out forwards;
          }
          .about-headshot {
            animation: fadeInSlideUp 0.8s ease-out forwards;
            animation-delay: 0.2s;
          }
          .about-intro-text {
            animation: fadeInSlideUp 0.8s ease-out forwards;
            animation-delay: 0.4s;
          }
          .about-expertise-title {
            animation: fadeInSlideUp 0.8s ease-out forwards;
            animation-delay: 0.6s;
          }
          .about-expertise-item {
            opacity: 0;
            animation: fadeInSlideUp 0.8s ease-out forwards;
          }
          .about-expertise-item:nth-child(1) { animation-delay: 0.8s; }
          .about-expertise-item:nth-child(2) { animation-delay: 1.0s; }
          .about-expertise-item:nth-child(3) { animation-delay: 1.2s; }
          .about-personal-title {
            animation: fadeInSlideUp 0.8s ease-out forwards;
            animation-delay: 1.4s;
          }
          .about-personal-text {
            animation: fadeInSlideUp 0.8s ease-out forwards;
            animation-delay: 1.6s;
          }
          
          @media (max-width: 768px) {
            .about-section {
              flex-direction: column;
              align-items: center;
              text-align: center;
            }
            .about-list {
              padding: 0 !important;
              text-align: left;
            }
          }
        `}
      </style>
      {/* Background Image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          src={aboutBg}
          alt="Gym background"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: 0.15,
          }}
        />
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="about-title" style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#a855f7', textAlign: 'center', marginBottom: '2rem', opacity: 0 }}>About Josh</h1>

        <div className="about-section" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <img
            src={joshHeadshot}
            alt="Professional headshot of Josh"
            className="about-headshot"
            style={{ borderRadius: '50%', width: '200px', height: '200px', objectFit: 'cover', border: '3px solid #a855f7', boxShadow: '0 0 15px #a855f7', opacity: 0 }}
          />

          <p className="about-intro-text" style={{ lineHeight: '1.6', opacity: 0 }}>
            My name is Josh, and my fitness journey started back in high school — not as a coach, but as the chubby kid who didn’t feel good in his own body. I still remember the first time I stepped into a gym. I wasn’t chasing muscles or aesthetics; I just wanted to feel better about myself.

            But something happened — I fell in love with it.

            With every rep and routine, I became more curious about the human body — its design, its limits, and its unrealized potential. That curiosity evolved into a calling, and I knew I had to pursue it fully. So I enrolled in university and earned a degree in Exercise and Sports Science, diving deep into how movement, nutrition, and discipline can radically transform lives.

            Fitness didn’t just change my body — it changed my mindset, my confidence, and my purpose. Now, I’m here to help others experience that same transformation. Over the past three years, I’ve helped countless individuals not only transform their bodies, but also reclaim their confidence, strength, and quality of life. My work is backed by a degree in Exercise and Sports Science, and every program I create is grounded in evidence-based science — no guesswork, no hype.
          </p>

          <h2 className="about-expertise-title" style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#a855f7', marginTop: '2rem', opacity: 0 }}>My Expertise</h2>
          <ul className="about-list" style={{ listStyle: 'none', padding: 0 }}>
            <li className="about-expertise-item" style={{ marginBottom: '1rem' }}>
              <span style={{ fontWeight: 'bold' }}>Fat Loss & Muscle Gain:</span> Whether your goal is to shed excess fat, build lean muscle, or completely reshape your physique, I’ll guide you every step of the way with training methods that match your body type and lifestyle. I don’t use shortcuts or gimmicks — just real training, real strategy, and real results.

              Through tailored programming and progressive overload, you’ll not only see physical changes, but gain strength, endurance, and confidence along the way.
            </li>
            <li className="about-expertise-item" style={{ marginBottom: '1rem' }}>
              <span style={{ fontWeight: 'bold' }}>Holistic Nutrition:</span> Fitness isn’t just about what you do in the gym — it’s also about what you put into your body. I offer nutrition guidance that is science-based, sustainable, and tailored to your personal needs — whether that’s for fat loss, muscle gain, or long-term health.

              I don’t believe in fad diets. I believe in nourishment that fuels transformation, helps you perform better, and supports a longer, more vibrant life.
            </li>
            <li className="about-expertise-item" style={{ marginBottom: '1rem' }}>
              <span style={{ fontWeight: 'bold' }}>Injury Rehabilitation & Correction:</span> Your body is only as strong as its weakest link. I specialize in movement correction, postural realignment, and injury recovery — helping you move better, feel better, and train smarter.

              Whether you’re recovering from an injury, dealing with chronic pain, or struggling with mobility issues, I’ll create a custom plan to rebuild strength and restore your body’s natural function.
            </li>
          </ul>

          <h2 className="about-personal-title" style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#a855f7', marginTop: '2rem', opacity: 0 }}>A Personal Touch</h2>
          <p className="about-personal-text" style={{ lineHeight: '1.6', opacity: 0 }}>
            When I’m not coaching or training, you’ll probably find me out on a hiking trail, deep in a good book, or experimenting in the kitchen — cooking up something healthy (or occasionally not 😅). I'm also a bit of a stock trading enthusiast, always studying charts and learning the psychology behind the markets.

            Life is about balance — and fitness is the foundation that fuels everything else I do.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;