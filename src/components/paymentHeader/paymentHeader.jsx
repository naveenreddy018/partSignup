import React, { useState, useEffect } from 'react';
import {
  Navbar,
  Nav,
  Container,
  Button,
  NavDropdown,
} from 'react-bootstrap';
import { FaUser, FaShoppingCart, FaTimes } from 'react-icons/fa';
import { BsBag } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Payment from '../paymentFeatures/Payment';
import PayrollMenu from '../paymentFeatures/payRoll';
import AboutJaisvik from '../paymentFeatures/About';
import Resources from '../paymentFeatures/resources';
import "./paymentHeader.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [showPayroll, setShowPayroll] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLargeScreen = window.innerWidth >= 992;

  return (
    <header
      style={{
        transition: 'transform 0.3s ease, opacity 0.3s ease',
        transform: scrolled ? 'translateY(-100%)' : 'translateY(0)',
        opacity: scrolled ? 0 : 1,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 1000,
      }}
    >
      <Container
        fluid="md"
        style={{
          background: 'linear-gradient(to right, #eaf6f3, #fbf9f6)',
          borderRadius: '999px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          padding: '20px 20px',
          marginTop: '30px',
        }}
      >
        <Navbar expand="lg" variant="light" className="p-0">
          <Navbar.Brand
            href="#"
            className="fw-bold d-flex align-items-center"
            style={{ gap: '8px' }}
          >
            <BsBag />
            <span>JAISVIK PAY</span>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="main-navbar-nav"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              border: 'none',
              fontSize: '24px',
              transition: 'transform 0.3s ease-in-out',
              transform: menuOpen ? 'rotate(90deg)' : 'rotate(0deg)',
            }}
          >
            {menuOpen ? <FaTimes /> : '☰'}
          </Navbar.Toggle>

          <Navbar.Collapse
            id="main-navbar-nav"
            className={`justify-content-between ${menuOpen ? 'd-block' : 'd-none'} d-lg-flex`}
          >
            <Nav className="mx-auto gap-3 text-center flex-column flex-lg-row">
              <Nav.Link
                href="#"
                className="rounded-pill px-4 fw-bold text-white nav-link-hover"
                onMouseEnter={() => isLargeScreen && setShowResources(true)}
                onMouseLeave={() => isLargeScreen && setShowResources(false)}
                style={{
                  backgroundColor: 'rgb(48, 94, 255)',
                  position: 'relative',
                  transition: 'background-color 0.3s ease',
                }}
              >
                Resources
                {showResources && isLargeScreen && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      width: '1000px',
                      background: 'white',
                      zIndex: 1000,
                      padding: '10px',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                      opacity: 1,
                      transition: 'opacity 0.3s ease-in-out',
                    }}
                    onMouseEnter={() => setShowResources(true)}
                    onMouseLeave={() => setShowResources(false)}
                  >
                    <Resources />
                  </div>
                )}
              </Nav.Link>

              <Nav.Link href="#" className="fw-medium text-dark nav-link-hover">
                Products
              </Nav.Link>

              <Nav.Link
                href="#"
                className="fw-medium text-dark position-relative nav-link-hover"
                onMouseEnter={() => isLargeScreen && setShowPayment(true)}
                onMouseLeave={() => isLargeScreen && setShowPayment(false)}
                style={{ position: 'relative' }}
              >
                Payments
                {showPayment && isLargeScreen && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '100%',
                      width: '1000px',
                      left: '-300px',
                      background: 'white',
                      zIndex: 1000,
                      padding: '10px',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                      opacity: 1,
                      transition: 'opacity 0.3s ease-in-out',
                    }}
                    onMouseEnter={() => setShowPayment(true)}
                    onMouseLeave={() => setShowPayment(false)}
                  >
                    <Payment />
                  </div>
                )}
              </Nav.Link>

              <Nav.Link href="#" className="fw-medium text-dark nav-link-hover">
                Docs
              </Nav.Link>
              <Nav.Link href="#" className="fw-medium text-dark nav-link-hover">
                Pricing
              </Nav.Link>

              <NavDropdown
                title="Payroll"
                className="fw-medium text-dark position-relative"
                onMouseEnter={() => isLargeScreen && setShowPayroll(true)}
                onMouseLeave={() => isLargeScreen && setShowPayroll(false)}
              >
                <NavDropdown.Item href="#">For Startups & SMEs</NavDropdown.Item>
                <NavDropdown.Item href="#">For Enterprises</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                href="#"
                className="fw-medium text-dark position-relative nav-link-hover"
                onMouseEnter={() => isLargeScreen && setShowAbout(true)}
                onMouseLeave={() => isLargeScreen && setShowAbout(false)}
              >
                About us
                {showAbout && isLargeScreen && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: '-800px',
                      width: '1000px',
                      background: 'white',
                      zIndex: 1000,
                      padding: '10px',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                      opacity: 1,
                      transition: 'opacity 0.3s ease-in-out',
                    }}
                    onMouseEnter={() => setShowAbout(true)}
                    onMouseLeave={() => setShowAbout(false)}
                  >
                    <AboutJaisvik />
                  </div>
                )}
              </Nav.Link>
            </Nav>

            <div className="text-center mt-3 mt-lg-0">
              <Button
                style={{
                  borderRadius: '999px',
                  padding: '6px 20px',
                  fontWeight: '600',
                  color: '#fff',
                  backgroundColor: 'rgb(48, 94, 255)',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgb(34, 72, 153)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'rgb(48, 94, 255)'}
              >
                Sign Up
              </Button>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
