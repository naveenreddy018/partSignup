import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import assets from '../../../assets/assests';
import Footer from '../../Footer/paymentFooter';


const items = [
  { name: 'Security First', image: assets.security },
  { name: 'Innovation', image: assets.innovation },
  { name: 'Customer-Centric', image: assets.customer_centric },
  { name: 'Integrity', image: assets.integrity },
  { name: 'Excellence', image: assets.execellence },
  { name: 'Collaboration', image: assets.collabration },
];


const AboutPage = () => (

  <>
    <div style={{ backgroundColor: '#f8f9fa', paddingTop: '150px', paddingBottom: '40px' }}>
      <Container>
        {/* Hero Section */}
        <Row className="align-items-center d-flex justify-content-center gap-5 mb-5">
          <Col md={6}>
            <h1 style={{ fontSize: '3rem', fontWeight: '700', color: '#212529' }}>About Jaisvik Payment Gateway</h1>
            <p style={{ fontSize: '1.2rem', color: '#6c757d' }}>
              Secure, Fast, and Reliable Payment Solutions for Businesses in India
            </p>
            <Button variant="primary" style={{ padding: '10px 24px', fontWeight: '600' }}>Contact Us</Button>
          </Col>
          <Col md={4}>
            <img src={assets.aboutLogo} width="300px" alt="Payment Gateway" className="img-fluid rounded" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }} />
          </Col>
        </Row>

        {/* Mission Section */}
        <Row className="text-center my-5">
          <Col>
            <h2 style={{ fontSize: '2.5rem', color: '#343a40' }}>Our Mission</h2>
            <p style={{ color: '#6c757d', fontSize: '1.1rem', maxWidth: '700px', margin: 'auto' }}>
              Revolutionizing digital payments in India with secure, fast, and seamless solutions tailored to meet the diverse needs of businesses of all sizes.
            </p>
            <p style={{ color: '#6c757d', maxWidth: '700px', margin: 'auto' }}>
              We aim to empower businesses by offering secure, easy-to-integrate payment solutions, enhancing the user experience while ensuring customer satisfaction and security.
            </p>
          </Col>
        </Row>

        {/* Stats Section */}
        <Row className="text-center mb-5">
          {[
            { title: '₹10B+', desc: 'Transactions Processing' },
            { title: '50,000+', desc: 'Businesses Trust Us' },
            { title: '99.99%', desc: 'Uptime Reliability' },
          ].map((stat, index) => (
            <Col md={4} key={index}>
              <Card className="border-0 shadow-sm" style={{ backgroundColor: '#ffffff', padding: '30px' }}>
                <Card.Body>
                  <h3 style={{ color: '#007bff', fontWeight: '700' }}>{stat.title}</h3>
                  <p style={{ color: '#6c757d' }}>{stat.desc}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Core Values Section */}
        <Row className="text-center mb-5">
          <Col>
            <h2 style={{ fontSize: '2.5rem', color: '#343a40' }}>Our Core Values</h2>
            <p style={{ color: '#6c757d', maxWidth: '700px', margin: 'auto' }}>
              At Jaisvik, we live by a set of core values that guide us in everything we do.
            </p>
          </Col>
        </Row>
        <Row className="text-center mb-5">
          {items.map((item, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="border-0 shadow-sm h-100" style={{ padding: '20px' }}>
                <Card.Body>
                  <div style={{ marginBottom: '10px' }}>
                    <img
                      src={item.image} // Replace with your actual image path
                      alt={item.name}
                      width={62}
                      height={62}
                    />
                  </div>
                  <h5 style={{ fontWeight: '700', color: '#343a40' }}>{item.name}</h5>
                  <p style={{ color: '#6c757d' }}>
                    We believe in {item.name.toLowerCase()} to create lasting relationships and fuel our commitment to growth and progress.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {/* Testimonials */}
        <Row className="text-center mb-5">
          <Col>
            <h2 style={{ fontSize: '2.5rem', color: '#343a40' }}>What Our Customers Say</h2>
            <p style={{ color: '#6c757d' }}>Hear from businesses who have benefited from our payment solutions.</p>
          </Col>
        </Row>

        <Row className="text-center mb-5">
          {[
            { text: 'Jaisvik Payment Gateway transformed our payment processes. Transactions are faster, more secure, and we couldn’t be happier!', name: 'Rajesh Kumar' },
            { text: 'The integration with our existing system was seamless. Jaisvik’s team provided great support and helped us improve our payment experience significantly.', name: 'Suman Patel' },
            { text: 'We have seen a drastic improvement in customer satisfaction and a boost in sales since we started using Jaisvik’s services!', name: 'Anita Desai' },
          ].map((testimonial, index) => (
            <Col md={4} key={index}>
              <Card className="border-0 shadow-sm h-100" style={{ padding: '20px' }}>
                <Card.Body>
                  <p style={{ color: '#6c757d', fontStyle: 'italic' }}>{`"${testimonial.text}"`}</p>
                  <h5 style={{ fontWeight: '600', marginTop: '15px' }}>{testimonial.name}</h5>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Vision Section */}
        <Row className="text-center mb-5">
          <Col>
            <h2 style={{ fontSize: '2.5rem', color: '#343a40' }}>Our Vision</h2>
            <p style={{ color: '#6c757d', maxWidth: '700px', margin: 'auto' }}>
              At Jaisvik, we envision a future where digital payments are universally accessible, secure, and optimized for businesses of all sizes.
            </p>
          </Col>
        </Row>

        <Row className="text-center">
          <Col md={6}>
            <Card className="border-0 shadow-sm" style={{ padding: '25px' }}>
              <Card.Body>
                <h3 style={{ color: '#007bff' }}>Expanding Globally</h3>
                <p style={{ color: '#6c757d' }}>
                  We are actively working on expanding our payment solutions to international markets, aiming to bring the same security and ease to businesses worldwide.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="border-0 shadow-sm" style={{ padding: '25px' }}>
              <Card.Body>
                <h3 style={{ color: '#007bff' }}>Innovating for the Future</h3>
                <p style={{ color: '#6c757d' }}>
                  We continue to invest in cutting-edge technologies, including blockchain and AI, to enhance payment security and improve customer experience.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

    </div>
    <Footer />
  </>
);

export default AboutPage;
