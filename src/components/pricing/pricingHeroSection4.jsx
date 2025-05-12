import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// For the RazorpayX logo
const RazorpayXLogo = () => (
  <div className="d-flex align-items-center">
    {/* <div className="text-white fw-bold" style={{ fontSize: '32px', fontFamily: 'Arial, sans-serif' ,marginLeft : "50px" }}>Jaisvik</div> */}
    {/* <div className="text-white fw-bold ms-1" style={{ fontSize: '32px', fontFamily: 'Arial, sans-serif', 
        

     }}>
      <span style={{ 
        display: 'inline-block',
        transform: 'skewX(-10deg)',
        letterSpacing: '-1px'
      }}>Pay</span>
    </div> */}
  </div>
);

const BankingHeroSection = () => {


  return (
    <div style={{
      background: 'linear-gradient(180deg, #2D2684 0%, #231D69 100%)',
      borderRadius: '0% 80% 0% 0% / 20%',
      padding: '0px 0 180px',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '580px',
      width: "100% ",
      marginTop: "100px",

    }}>
      {/* Background Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, rgba(99, 102, 241, 0) 70%)',
        borderRadius: '50%',
        zIndex: 1
      }}></div>

      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: '10%',
        width: '150px',
        height: '150px',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0) 70%)',
        borderRadius: '50%',
        zIndex: 1
      }}></div>

      <Container className="position-relative" style={{ zIndex: 2 }}>
        <Row className="align-items-center">
          <Col lg={6} md={6} className="mb-4 mb-md-0">
            <div className="mb-4">
              <RazorpayXLogo />
            </div>

            <h1 className="fw-bold text-white mb-4" style={{ fontSize: '48px' }}>
              Banking made awesome for business
            </h1>

            <p className="text-white fs-5 mb-5">
              Banking that helps save time and money.
            </p>

            <div className="p-4 rounded mb-5" style={{
              backgroundColor: 'rgba(99, 102, 241, 0.8)',
              transition: 'all 0.3s ease',
              transform: 'translateZ(0)',
              boxShadow: '0 6px 20px rgba(99, 102, 241, 0.3)'
            }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(99, 102, 241, 0.9)';
                e.currentTarget.style.transform = 'translateZ(0) scale(1.02)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(99, 102, 241, 0.8)';
                e.currentTarget.style.transform = 'translateZ(0) scale(1)';
              }}>
              <div className="d-flex align-items-center">
                <div style={{
                  width: '12px',
                  height: '12px',
                  backgroundColor: '#FFC107',
                  borderRadius: '50%',
                  marginRight: '15px'
                }}></div>
                <p className="text-white fw-bold mb-0 fs-5">
                  Collateral FREE Corporate Card with high limits.
                </p>
              </div>
            </div>

            <p className="text-white mb-3">
              Get the best banking experience and Automate your banking now!
            </p>

            <div className="d-flex flex-wrap mb-5">
              {['Banking', 'Payroll', 'Current Account', 'Tax Payments', 'Vendor Payments'].map((item, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <span className="text-white me-3 mb-2">|</span>}
                  <a
                    href="#"
                    className="text-white me-3 mb-2"
                    style={{
                      textDecoration: 'none',
                      transition: 'opacity 0.3s ease, transform 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.opacity = '0.8';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.opacity = '1';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {item}
                  </a>
                </React.Fragment>
              ))}
            </div>

            <Button
              variant="primary"
              className="px-4 py-2 d-flex align-items-center"
              style={{
                backgroundColor: '#2196F3',
                borderColor: '#2196F3',
                boxShadow: '0 4px 14px rgba(33, 150, 243, 0.4)',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(33, 150, 243, 0.6)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(33, 150, 243, 0.4)';
              }}
            >
              <span style={{
                width: '20px',
                height: '20px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '8px',
                fontWeight: 'bold'
              }}>X</span>
              Sign Up
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg>
            </Button>
          </Col>

          <Col lg={6} md={6} className="d-flex justify-content-center">
            <div className="position-relative" style={{ maxWidth: '450px' }}>
              {/* Main Banking App UI with animation */}
              <div style={{
                width: '350px',
                height: '400px',
                backgroundColor: '#1E88E5',
                borderRadius: '20px',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 20px 30px rgba(0, 0, 0, 0.3)',
                transform: 'rotate(-5deg)',
                animation: 'pulse 6s ease-in-out infinite',
                animationDelay: '0.5s'
              }}>
                {/* Top Blue Header with Logo */}
                <div style={{
                  height: '70px',
                  background: 'linear-gradient(90deg, #1976D2 0%, #2196F3 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 20px'
                }}>
                  <div style={{ color: 'white', fontWeight: 'bold', fontSize: '28px' }}>
                    Jaisvik Pay
                  </div>
                  <div style={{
                    marginLeft: '10px',
                    color: 'white',
                    fontSize: '12px',
                    opacity: 0.8
                  }}>
                    Current A/c
                  </div>
                </div>

                {/* Dashboard Content */}
                <div style={{ padding: '15px' }}>
                  {/* Charts and financial data would go here */}
                  <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    height: '200px',
                    marginBottom: '10px'
                  }}></div>
                </div>
              </div>

              {/* Mobile App UI with animation */}
              <div style={{
                width: '160px',
                height: '320px',
                backgroundColor: '#2979FF',
                borderRadius: '30px',
                position: 'absolute',
                right: '0',
                bottom: '-40px',
                overflow: 'hidden',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
                border: '8px solid #1A237E',
                animation: 'fadeMove 8s ease-in-out infinite',
                animationDelay: '1s'
              }}>
                {/* Phone App Interface */}
                <div style={{ padding: '15px 10px' }}>
                  {/* App circles/buttons */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '110px'
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: '#4CAF50',
                      marginRight: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <div style={{ color: 'white', fontSize: '18px' }}>✓</div>
                    </div>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      marginRight: '10px'
                    }}></div>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)'
                    }}></div>
                  </div>

                  {/* Payment button */}
                  <div style={{
                    backgroundColor: '#4CAF50',
                    borderRadius: '20px',
                    padding: '8px 15px',
                    color: 'white',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontSize: '12px',
                    marginTop: '20px'
                  }}>
                    Send Payment
                  </div>
                </div>
              </div>

              {/* Analytics Card with animation */}
              <div
                style={{
                  width: '200px',
                  height: '130px',
                  backgroundColor: '#4CAF50',
                  borderRadius: '15px',
                  position: 'absolute',
                  top: '100px',
                  right: '80px',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                  padding: '15px',
                  transform: 'rotate(5deg)',
                  animation: 'float 6s ease-in-out infinite',
                }}
              >
                <div style={{
                  color: 'white',
                  fontSize: '12px',
                  marginBottom: '5px',
                  opacity: 0.8
                }}>
                  Mar 2025
                </div>

                {/* Chart Line */}
                <div style={{
                  height: '50px',
                  margin: '10px 0',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '0',
                    right: '0',
                    height: '2px',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)'
                  }}></div>

                  <div style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    right: '0',
                    height: '40px',
                    overflow: 'hidden'
                  }}>
                    <svg width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none">
                      <path
                        d="M0,40 L10,30 L20,35 L30,25 L40,30 L50,15 L60,20 L70,10 L80,15 L90,5 L100,10 L100,40 L0,40 Z"
                        fill="rgba(255, 255, 255, 0.3)"
                      />
                      <path
                        d="M0,40 L10,30 L20,35 L30,25 L40,30 L50,15 L60,20 L70,10 L80,15 L90,5 L100,10"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Person Illustration - More detailed */}
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '50px'
              }}>
                <div style={{
                  width: '120px',
                  height: '160px',
                  position: 'relative'
                }}>
                  {/* Head */}
                  <div style={{
                    position: 'absolute',
                    top: '0',
                    left: '40px',
                    width: '40px',
                    height: '45px',
                    borderRadius: '50% 50% 45% 45%',
                    background: '#502A2A',
                    zIndex: 2
                  }}></div>

                  {/* Hair */}
                  <div style={{
                    position: 'absolute',
                    top: '-5px',
                    left: '35px',
                    width: '50px',
                    height: '30px',
                    borderRadius: '50% 50% 0 0',
                    background: '#3A1D1D',
                    zIndex: 1
                  }}></div>

                  {/* Body/Shirt */}
                  <div style={{
                    position: 'absolute',
                    top: '45px',
                    left: '30px',
                    width: '60px',
                    height: '80px',
                    borderRadius: '15px 15px 0 0',
                    background: '#1DA654', // Green shirt
                    zIndex: 2
                  }}></div>

                  {/* Arm pointing */}
                  <div style={{
                    position: 'absolute',
                    top: '60px',
                    right: '0',
                    width: '50px',
                    height: '15px',
                    background: '#1DA654', // Green shirt
                    borderRadius: '10px',
                    transform: 'rotate(-20deg)',
                    transformOrigin: 'left center',
                    zIndex: 1
                  }}></div>

                  {/* Legs */}
                  <div style={{
                    position: 'absolute',
                    top: '125px',
                    left: '35px',
                    width: '20px',
                    height: '40px',
                    background: '#17233F', // Dark pants
                    borderRadius: '10px 10px 0 0',
                    zIndex: 2
                  }}></div>

                  <div style={{
                    position: 'absolute',
                    top: '125px',
                    left: '65px',
                    width: '20px',
                    height: '30px',
                    background: '#17233F', // Dark pants
                    borderRadius: '10px 10px 0 0',
                    zIndex: 2,
                    transform: 'rotate(20deg)',
                    transformOrigin: 'top center'
                  }}></div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BankingHeroSection;