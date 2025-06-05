// import React from 'react';
// import { Container, Row, Col, Button, Card } from 'react-bootstrap';
// import { BsInfoCircle, BsHeadset } from 'react-icons/bs';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import assets from '../../assets/assests';

// const PaymentGatewayPromoSmall = () => {
//   const handleSignUp = () => alert('Redirecting to Sign Up...');
//   const handleSales = () => alert('Contacting Sales...');

//   return (
//     <section style={{ padding: '200px 0 30px 0' }}>
//       <Container>
//         <Row className="justify-content-center">
//           {/* Main Content */}
//           <Col xs={12} md={6} className="text-center mb-4 mb-md-0">
//             <div>
//               <h5 className="fw-bold text-dark">Accept Payments Easily</h5>
//               <p className="text-muted small">Fast and affordable payment solutions.</p>
//             </div>

//             <div className="text-center mb-3">
//               <h6 className="fw-semibold text-primary">Transaction Fee: </h6>
//               <div className="d-flex justify-content-center align-items-baseline mt-1">
//                 <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e293b' }}>1.5%</span>
//                 <div className="ms-2">
//                   <p className="mb-0 small">Platform Charges</p>
//                   <BsInfoCircle className="text-muted mt-1" />
//                 </div>
//               </div>
//             </div>

//             {/* Call to Action Buttons */}
//             <Row className="mb-3">
//               <Col xs={12} sm={6}>
//                 <Button
//                   variant="primary"
//                   size="sm"
//                   onClick={handleSignUp}
//                   className="w-100 py-1 fw-semibold"
//                   style={{
//                     border: 'none',
//                   }}
//                 >
//                   Get Started
//                 </Button>
//               </Col>
//               <Col xs={12} sm={6} className="mt-3 mt-sm-0">
//                 <Button
//                   variant="outline-primary"
//                   size="sm"
//                   onClick={handleSales}
//                   className="w-100 py-1 fw-semibold"
//                   style={{
//                     border: '2px solid #0077b6',
//                   }}
//                 >
//                   <BsHeadset className="me-1" /> Talk to Sales
//                 </Button>
//               </Col>
//             </Row>

//             {/* Info Card (commented out as it is empty) */}
//             <Card className="shadow-sm border-0 rounded-2 bg-white">
//               <Card.Body className="text-center p-2"></Card.Body>
//             </Card>
//           </Col>

//           {/* Right-Side Image Section */}
//           <Col xs={12} md={6} className="d-flex justify-content-center mt-3 mt-md-0">
//             <div
//               className="payment-graphic"
//               style={{
//                 background: 'url(https://via.placeholder.com/250) no-repeat center center',
//                 backgroundSize: 'cover',
//                 borderRadius: '6px',
//                 width: '100%',
//                 height: '200px',
//                 // boxShadow: '0 3px 8px rgba(0,0,0,0.1)',
//               }}
//             >
//               <img
//                 src={assets.contact}
//                 alt="contact sales"
//                 style={{
//                   maxWidth: '100%',
//                   height: '400px',
//                   objectFit: 'contain',
//                   paddingLeft: "100px",
//                   marginBottom: "100px"
//                 }}
//               />
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default PaymentGatewayPromoSmall;

import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { BsInfoCircle, BsHeadset } from 'react-icons/bs';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import 'bootstrap/dist/css/bootstrap.min.css';
import assets from '../../assets/assests';

const PaymentGatewayPromoSmall = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [imgHovered, setImgHovered] = useState(false);

  const handleSignUp = () => alert('Redirecting to Sign Up...');
  const handleSales = () => alert('Contacting Sales...');

  return (
    <section
      style={{ padding: '120px 0 60px 0', backgroundColor: '#f9fafb', overflow: 'hidden' }}
      ref={ref}
    >
      <Container>
        <Row className="align-items-center justify-content-center">
          {/* Left Side - Image */}
          <Col xs={12} md={6} className="d-flex justify-content-center mb-4 mb-md-0">
            <img
              src={assets.contact}
              alt="Contact sales"
              onMouseEnter={() => setImgHovered(true)}
              onMouseLeave={() => setImgHovered(false)}
              style={{
                maxWidth: '100%',
                height: '350px',
                objectFit: 'contain',
                borderRadius: '10px',
                boxShadow: imgHovered
                  ? '0 0 20px 4px rgba(0, 119, 182, 0.6)'
                  : '0 4px 15px rgba(0,0,0,0.1)',
                padding: '1rem',
                backgroundColor: 'white',
                cursor: 'pointer',
                transform: imgHovered ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
            />
          </Col>

          {/* Right Side - Text and Buttons */}
          <Col
            xs={12}
            md={6}
            className={`${
              inView ? 'animate-slideup-fadein' : 'opacity-0'
            }`}
            style={{ transition: 'all 0.8s ease-out', transitionDelay: '0.3s' }}
          >
            <Card className="p-4 shadow-sm rounded-3" style={{ backgroundColor: 'white' }}>
              <h5 className="fw-bold text-dark mb-2">Accept Payments Easily</h5>
              <p className="text-muted small mb-4">Fast and affordable payment solutions.</p>

              <div className="d-flex align-items-center mb-4">
                <h6 className="fw-semibold text-primary mb-0 me-3">Transaction Fee:</h6>
                <div className="d-flex align-items-baseline">
                  <span
                    style={{
                      fontSize: '1.75rem',
                      fontWeight: '700',
                      color: '#1e293b',
                      minWidth: '60px',
                      display: 'inline-block',
                    }}
                  >
                    {inView ? <CountUp end={1.5} decimals={1} duration={2} suffix="%" /> : '0%'}
                  </span>

                  <OverlayTrigger
                    placement="right"
                    overlay={<Tooltip id="tooltip-info">Platform Charges</Tooltip>}
                  >
                    <BsInfoCircle
                      className="text-muted ms-2"
                      size={20}
                      style={{ cursor: 'help' }}
                    />
                  </OverlayTrigger>
                </div>
              </div>

              <Row className="g-3">
                <Col xs={12} sm={6}>
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={handleSignUp}
                    className="w-100 fw-semibold"
                    style={{
                      border: 'none',
                      transition: 'transform 0.2s ease',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  >
                    Get Started
                  </Button>
                </Col>
                <Col xs={12} sm={6}>
                  <Button
                    variant="outline-primary"
                    size="lg"
                    onClick={handleSales}
                    className="w-100 fw-semibold d-flex align-items-center justify-content-center gap-2"
                    style={{
                      border: '2px solid #0077b6',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.backgroundColor = '#0077b6';
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#0077b6';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <BsHeadset /> Talk to Sales
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Extra CSS for fade-in and slide-up */}
      <style>{`
        .opacity-0 {
          opacity: 0;
          transform: translateY(20px);
        }
        .animate-slideup-fadein {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
};

export default PaymentGatewayPromoSmall;
