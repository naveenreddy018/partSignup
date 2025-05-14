import React, { useEffect, useState, useRef } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import assets from '../../assets/assests';
// @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
const slides = [
  {
    title: "Seamless PayTech Solutions",
    subtitle: "Powering India’s Payment Revolution",
    description: "One Platform. 100+ Ways to Pay. Total Business Control",
    image: assets.jaisvikAccepts,
    button1: "Sign Up",
    button2: "Know More",
  },
  {
    title: "Grow Your Business Fast",
    subtitle: "with Secure Payments",
    description: "Fast Checkout | Fraud Protection | Global Support",
    image: assets.upi_id,
    button1: "Get Started",
    button2: "Explore",
  },
  {
    title: "Smart Payment Gateway",
    subtitle: "for Modern Businesses",
    description: "Easy Setup | Customizable | Scalable APIs",
    image: assets.cardspayments,
    button1: "Try Free",
    button2: "Learn More",
  }
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 1000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setFade(true);
    }, 300);
  };

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setFade(true);
    }, 300);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    if (touchStartX.current - touchEndX.current > 75) handleNext();
    if (touchEndX.current - touchStartX.current > 75) handlePrev();
  };

  const slide = slides[current];

  const carouselStyle = {
    transition: 'transform 1s ease-in-out',
    width: '85%',
    margin: 'auto',
    display: 'flex',
    height: "70vh",
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: "#e0f7ff",
    borderRadius: '10px',
    padding: '40px 20px',
    zIndex: 100,
    marginTop: window.innerWidth < 992 ? "180px" : "150px"
  };

  const fadeStyle = {
    opacity: fade ? 1 : 0,
    transition: 'opacity 0.5s ease-in-out',
  };

  const controlButtonStyle = {
    borderRadius: '50%',
    padding: '15px 20px',
    border: 'none',
    color: '#333',
    fontSize: '24px',
    transition: 'background-color 0.3s ease',
    backgroundColor: "#e0f7ff",
  };

  return (
    <div
      className="hero-carousel"
      style={carouselStyle}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Container fluid style={fadeStyle}>
        <Row className="align-items-center p-5 justify-content-center">
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
            <Image
              src={slide.image}
              fluid
              style={{
                maxHeight: '500px',
                objectFit: 'cover',
                transition: 'opacity 0.5s ease-in-out',
                opacity: fade ? 1 : 0,
              }}
            />
          </Col>
        </Row>
      </Container>

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
