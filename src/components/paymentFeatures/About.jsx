import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import assets from '../../assets/assests';

const AboutPage = () => (
  <div className="about-pag mt-5">
    <Container className="py-5">
      
      <Row className="align-items-center">
        <Col md={6}>
          <h1 className="display-4">About Jaisvik Payment Gateway</h1>
          <p className="lead">Secure, Fast, and Reliable Payment Solutions for Businesses in India</p>
          <Button variant="primary">Contact Us</Button>
        </Col>
        <Col md={6}>
          <img src={assets.upi_id} alt="Payment Gateway" className="img-fluid rounded" />
        </Col>
      </Row>

      {/* Mission Section */}
      <Row className="text-center my-5">
        <Col>
          <h2 className="display-4">Our Mission</h2>
          <p className="lead text-muted">
            Revolutionizing digital payments in India with secure, fast, and seamless solutions tailored to meet the diverse needs of businesses of all sizes.
          </p>
          <p className="text-muted">
            We aim to empower businesses by offering secure, easy-to-integrate payment solutions, enhancing the user experience while ensuring customer satisfaction and security.
          </p>
        </Col>
      </Row>

      {/* Stats Section */}
      <Row className="text-center">
        <Col md={4}>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <h3 className="text-primary">₹10B+</h3>
              <p className="text-muted">Transactions Processed</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <h3 className="text-primary">50,000+</h3>
              <p className="text-muted">Businesses Trust Us</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <h3 className="text-primary">99.99%</h3>
              <p className="text-muted">Uptime Reliability</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Core Values Section */}
      <Row className="text-center my-5">
        <Col>
          <h2 className="display-4">Our Core Values</h2>
          <p className="lead text-muted">At Jaisvik, we live by a set of core values that guide us in everything we do.</p>
        </Col>
      </Row>

      <Row className="text-center">
        {['Security First', 'Innovation', 'Customer-Centric', 'Integrity', 'Excellence', 'Collaboration'].map((value, index) => (
          <Col md={4} key={index}>
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <div className="mb-4 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h5 className="text-xl font-bold mb-3">{value}</h5>
                <p className="text-gray-700">{`We believe in ${value.toLowerCase()} to create lasting relationships and fuel our commitment to growth and progress.`}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Customer Testimonials Section */}
      <Row className="text-center my-5">
        <Col>
          <h2 className="display-4">What Our Customers Say</h2>
          <p className="lead text-muted">Hear from businesses who have benefited from our payment solutions.</p>
        </Col>
      </Row>

      <Row className="text-center">
        <Col md={4}>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <p className="text-muted">"Jaisvik Payment Gateway transformed our payment processes. Transactions are faster, more secure, and we couldn't be happier!"</p>
              <h5 className="font-bold">Rajesh Kumar</h5>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <p className="text-muted">"The integration with our existing system was seamless. Jaisvik’s team provided great support and helped us improve our payment experience significantly."</p>
              <h5 className="font-bold">Suman Patel</h5>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <p className="text-muted">"We have seen a drastic improvement in customer satisfaction and a boost in sales since we started using Jaisvik’s services!"</p>
              <h5 className="font-bold">Anita Desai</h5>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Our Vision Section */}
      <Row className="text-center my-5">
        <Col>
          <h2 className="display-4">Our Vision</h2>
          <p className="lead text-muted">
            At Jaisvik, we envision a future where digital payments are universally accessible, secure, and optimized for businesses of all sizes.
          </p>
        </Col>
      </Row>

      <Row className="text-center">
        <Col md={6}>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <h3 className="text-primary">Expanding Globally</h3>
              <p className="text-muted">
                We are actively working on expanding our payment solutions to international markets, aiming to bring the same security and ease to businesses worldwide.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="border-0 shadow-sm">
            <Card.Body>
              <h3 className="text-primary">Innovating for the Future</h3>
              <p className="text-muted">
                We continue to invest in cutting-edge technologies, including blockchain and AI, to enhance payment security and improve customer experience.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
);

export default AboutPage;
