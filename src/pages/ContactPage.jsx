import NeonButton from '../components/NeonButton';
import contactBg from '../assets/contact-bg.png';

const ContactPage = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Background Image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          src={contactBg}
          alt="Contact page background"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.7)' }}></div>
      </div>

      {/* Contact Form Content */}
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '800px', margin: '0 auto', padding: '6rem 2rem', textAlign: 'center', color: 'white' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#a855f7', marginBottom: '1rem' }}>Contact Josh</h1>
        <p style={{ fontSize: '1.25rem', lineHeight: '1.6', marginBottom: '2rem' }}>
          Get in touch to start your fitness journey today.
        </p>

        <div style={{
          backgroundColor: '#0f0f0fff',
          padding: '2rem',
          borderRadius: '8px',
          border: '1px solid #333',
          boxShadow: '0 0 15px #a855f7',
        }}>
          <form
            action="https://formspree.io/f/manbloeq"
            method="POST"
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              style={{
                padding: '1rem',
                backgroundColor: '#333',
                border: '1px solid #555',
                borderRadius: '4px',
                color: 'white',
                fontSize: '1rem',
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              style={{
                padding: '1rem',
                backgroundColor: '#333',
                border: '1px solid #555',
                borderRadius: '4px',
                color: 'white',
                fontSize: '1rem',
              }}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="5"
              style={{
                padding: '1rem',
                backgroundColor: '#333',
                border: '1px solid #555',
                borderRadius: '4px',
                color: 'white',
                fontSize: '1rem',
                resize: 'vertical',
              }}
            ></textarea>
            <NeonButton type="submit">Send Message</NeonButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;