import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Phone, MessageCircle, Monitor, Video, Megaphone, 
  PenTool, Zap, Clock, ThumbsUp, Palette, Globe, Share2, Heart 
} from 'lucide-react';
import './index.css';

// Custom Hook for Scroll Reveal
const useScrollReveal = () => {
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return ref;
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#" className="logo" onClick={closeMenu}>Ila<span>nilai</span></a>
        
        <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  const revealRef = useScrollReveal();
  
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content reveal" ref={revealRef}>
          <h1>Creative Digital Solutions for Your <span>Business Growth</span></h1>
          <p>We help businesses grow with poster design, digital marketing, website development, and video editing. Elevate your brand today.</p>
          <div className="hero-btns">
            <a href="tel:+918015480166" className="btn btn-primary">
              <Phone size={20} /> Call Now
            </a>
            <a href="https://wa.me/918015480166" target="_blank" rel="noreferrer" className="btn btn-secondary">
              <MessageCircle size={20} /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const revealRef = useScrollReveal();
  const highlightsRef = useScrollReveal();

  const highlights = [
    { title: 'Creative Designs', icon: <Palette size={20} /> },
    { title: 'Fast Delivery', icon: <Clock size={20} /> },
    { title: 'Affordable Pricing', icon: <Zap size={20} /> },
    { title: '100% Client Satisfaction', icon: <ThumbsUp size={20} /> }
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-head reveal" ref={revealRef}>
          <h2>About <span>Ilanilai</span></h2>
        </div>
        
        <div className="about-wrapper">
          <div className="about-text reveal" ref={useScrollReveal()}>
            <p>
              <span className="highlight">Ilanilai</span> is a creative freelancing team focused on delivering high-quality digital solutions for businesses and individuals. We specialize in poster creation, digital marketing, website development, and video editing.
            </p>
            <p>
              Our mission is to help brands grow, stand out, and connect with their audience through creative and impactful designs. Whether you are a startup or an established business, we bring your ideas to life with modern and attractive solutions.
            </p>
            <p>
              At Ilanilai, we believe in creativity, quality, and client satisfaction. We work closely with our clients to understand their needs and deliver results that exceed expectations.
            </p>
          </div>
          
          <div className="about-highlights reveal" ref={highlightsRef}>
            {highlights.map((item, index) => (
              <div className="highlight-pill stagger-item" key={index} style={{ '--stagger': index }}>
                <div className="highlight-icon">{item.icon}</div>
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const revealRef = useScrollReveal();

  const services = [
    {
      title: 'Poster Creation',
      icon: <PenTool />,
      features: ['Social media posters', 'Ads & flyers']
    },
    {
      title: 'Digital Marketing',
      icon: <Megaphone />,
      features: ['Instagram & Facebook growth', 'Promotions & campaigns']
    },
    {
      title: 'Website Development',
      icon: <Monitor />,
      features: ['Business websites', 'Portfolio websites']
    },
    {
      title: 'Video Editing',
      icon: <Video />,
      features: ['Reels & Shorts', 'Promotional videos']
    }
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-head reveal" ref={revealRef}>
          <h2>Our <span>Services</span></h2>
          <p>Comprehensive digital solutions tailored to boost your brand's presence and engagement across all platforms.</p>
        </div>
        <div className="grid grid-2 reveal" ref={useScrollReveal()}>
          {services.map((service, index) => (
            <div className="service-card stagger-item" key={index} style={{ '--stagger': index }}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}><Zap /> {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const revealRef = useScrollReveal();

  const features = [
    { title: 'Fast Delivery', desc: 'We value your time and ensure prompt delivery of all projects without compromising quality.', icon: <Clock /> },
    { title: 'Affordable Pricing', desc: 'Premium quality services at pricing structures designed specifically for growing businesses.', icon: <Zap /> },
    { title: 'Creative Designs', desc: 'Unique, eye-catching designs that help your brand stand out in a crowded market.', icon: <Palette /> },
    { title: 'Client Satisfaction', desc: 'We iterate and work closely with you until you are 100% satisfied with the outcome.', icon: <ThumbsUp /> }
  ];

  return (
    <section className="section why-us">
      <div className="container">
        <div className="section-head reveal" ref={revealRef}>
          <h2>Why <span>Choose Us</span></h2>
        </div>
        <div className="grid grid-4 reveal" ref={useScrollReveal()}>
          {features.map((feature, index) => (
            <div className="feature-card stagger-item" key={index} style={{ '--stagger': index }}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const revealRef = useScrollReveal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/deepak1552005@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          _subject: "New website inquiry for Ilanilai!"
        })
      });
      
      if (response.ok) {
        setSubmitSuccess(true);
        e.target.reset();
      } else {
        alert("Oops, something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Oops, something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-head reveal" ref={revealRef}>
          <h2>Get In <span>Touch</span></h2>
          <p>Ready to start your next project? Contact us today for a free consultation.</p>
        </div>
        
        <div className="contact-wrap reveal" ref={useScrollReveal()}>
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon"><Phone /></div>
              <div className="info-content">
                <h4>Phone / WhatsApp</h4>
                <a href="tel:+918015480166">+91 80154 80166</a>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon"><MessageCircle /></div>
              <div className="info-content">
                <h4>Social Media</h4>
                <a href="https://wa.me/918015480166" target="_blank" rel="noreferrer">Chat with us on WhatsApp</a>
              </div>
            </div>
          </div>
          
          {submitSuccess ? (
            <div className="contact-form" style={{textAlign: 'center', padding: '60px 40px'}}>
              <div style={{color: '#25D366', marginBottom: '20px', display: 'flex', justifyContent: 'center'}}>
                <ThumbsUp size={64} strokeWidth={1} style={{ fill: 'currentColor' }} />
              </div>
              <h3 style={{fontSize: '1.5rem', marginBottom: '10px'}}>Message Sent Successfully!</h3>
              <p style={{color: 'var(--text-secondary)', marginBottom: '30px'}}>Thank you for reaching out. We will get back to you shortly.</p>
              <button className="btn btn-primary" onClick={() => setSubmitSuccess(false)}>Send Another Message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <input type="hidden" name="_captcha" value="false" />
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" className="form-control" required disabled={isSubmitting} />
              </div>
              <div className="form-group">
                <input type="tel" name="phone" placeholder="Your Phone Number" className="form-control" required disabled={isSubmitting} />
              </div>
              <div className="form-group">
                <select name="service" className="form-control" required defaultValue="" disabled={isSubmitting}>
                  <option value="" disabled>Select Service Needed</option>
                  <option value="poster">Poster Creation</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="website">Website Development</option>
                  <option value="video">Video Editing</option>
                </select>
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" className="form-control" required disabled={isSubmitting}></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{width: '100%'}} disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="logo">Ila<span>nilai</span></a>
            <p>Your dedicated partners in creative digital solutions, empowering businesses to grow with cutting-edge design and technology.</p>
            <div className="social-links">
              <a href="#"><Globe size={18} /></a>
              <a href="#"><Share2 size={18} /></a>
              <a href="#"><Heart size={18} /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Poster Creation</a></li>
              <li><a href="#services">Digital Marketing</a></li>
              <li><a href="#services">Website Development</a></li>
              <li><a href="#services">Video Editing</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Ilanilai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => (
  <a href="https://wa.me/918015480166" className="floating-whatsapp" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
    <MessageCircle size={32} />
  </a>
);

const IntroScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Fade out text early
    const contentTimer = setTimeout(() => {
      const content = document.querySelector('.intro-content');
      if (content) {
        content.classList.add('exit');
      }
    }, 1800);

    // Open shutters
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1200); // Unmount after shutter animation completes
    }, 2800);

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(timer);
    };
  }, [onComplete]);

  useEffect(() => {
    // Prevent scrolling while intro is playing
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className={`intro-screen ${!isVisible ? 'hidden' : ''}`}>
      <div className="intro-content">
        <div className="intro-logo">
          <span className="word word-1">Ila</span>
          <span className="word word-2">nilai</span>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <IntroScreen onComplete={() => setShowIntro(false)} />}
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;
