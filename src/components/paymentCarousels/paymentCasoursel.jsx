import React, { useEffect, useState, useRef } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import assets from '../../assets/assests';

const slides = [
  {
    title: "Advanced Payment Solutions",
    subtitle: "for India's boldest disruptors",
    description: "100+ Payment Methods | Easy Integration | Powerful Dashboard",
    image: assets.jaisvikAccepts,
    button1: "Sign Up Now",
    button2: "Know More",
  },
  {
    title: "Grow Your Business Fast",
    subtitle: "with Secure Payments",
    description: "Fast Checkout | Fraud Protection | Global Support",
    image: assets.jaisvikAccepts,
    button1: "Get Started",
    button2: "Explore",
  },
  {
    title: "Smart Payment Gateway",
    subtitle: "for Modern Businesses",
    description: "Easy Setup | Customizable | Scalable APIs",
    image: assets.jaisvikAccepts,
    button1: "Try Free",
    button2: "Learn More",
  }
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const handleNext = () => setCurrent((prev) => (prev + 1) % slides.length);

  // Swipe functionality for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    if (touchStartX.current - touchEndX.current > 75) {
      handleNext();
    }
    if (touchEndX.current - touchStartX.current > 75) {
      handlePrev();
    }
  };

  const slide = slides[current];

  const carouselStyle = {
    transition: 'transform 1s ease-in-out',
    width: '85%', // Set the width to 75% of the screen
    margin: '100px auto 0', // Center it and add top margin
    display: 'flex',
    height : "70vh",
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    padding: '40px 20px',
    zIndex: 10,
  };

  const controlButtonStyle = {
    borderRadius: '50%',
    padding: '15px 20px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    border: 'none',
    color: '#333',
    fontSize: '24px',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div
      className="hero-carousel"
      style={carouselStyle}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Container fluid>
        <Row className="align-items-center justify-content-center">
          <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
            <h1 className="text-primary fw-bold display-4">{slide.title}</h1>
            <h3 className="fw-semibold">{slide.subtitle}</h3>
            <p className="text-muted">{slide.description}</p>
            <div className="d-flex justify-content-center justify-content-md-start gap-4 mt-4">
              <Button variant="primary" size="lg">{slide.button1}</Button>
              <Button variant="outline-primary" size="lg">{slide.button2}</Button>
            </div>
          </Col>
          <Col md={6} className="text-center">
            <Image src={slide.image} fluid style={{ maxHeight: '400px', objectFit: 'cover' }} />
          </Col>
        </Row>
      </Container>

      {/* Controls */}
      <Button
        variant="light"
        onClick={handlePrev}
        className="position-absolute top-50 start-0 translate-middle-y d-none d-md-inline"
        style={controlButtonStyle}
      >
        &lt;
      </Button>

      <Button
        variant="light"
        onClick={handleNext}
        className="position-absolute top-50 end-0 translate-middle-y d-none d-md-inline"
        style={controlButtonStyle}
      >
        &gt;
      </Button>
    </div>
  );
};

export default HeroCarousel;
