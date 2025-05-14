import React, { useState } from 'react';
import { Container, Row, Col, Nav, Card } from 'react-bootstrap';
import { BsChevronRight } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';

const tabs = [
  { key: 'gateway', label: 'Payment Gateway' },
  { key: 'intl', label: 'International Payments' },
  { key: 'optimizer', label: 'Optimizer' },
  { key: 'token', label: 'TokenHQ + 4 Others' }
];

const PaymentMethodsSection = () => {
  const [activeTab, setActiveTab] = useState('gateway');

  const renderContent = () => {
    switch (activeTab) {
      case 'gateway': return <PaymentGatewayContent />;
      case 'intl': return <InternationalPaymentsContent />;
      case 'optimizer': return <OptimizerContent />;
      case 'token': return <TokenHQContent />;
      default: return <PaymentGatewayContent />;
    }
  };

  return (
    <Container
      fluid
      className="bg-white py-4"
      style={{
        width: window.innerWidth < 992 ? '100%' : '80%',
        padding: window.innerWidth < 992 ? '0px' : '10px',
        marginTop: '50px',
      }}
    >
      {/* Row with two columns: left for the tabs, right for the content */}
      <Row>
        {/* Left side: Options (Tabs) */}
        <Col xs={12} md={3} className="mb-3">
          <div className="border-end">
            <Nav className="flex-column">
              {tabs.map(({ key, label }) => (
                <Nav.Item key={key}>
                  <Nav.Link
                    active={activeTab === key}
                    onClick={() => setActiveTab(key)}
                    className={`px-3 py-2 mb-2 ${activeTab === key
                        ? 'text-primary fw-bold border-start border-3'
                        : 'text-secondary border-0'
                      }`}
                  >
                    {label}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </div>
        </Col>

        {/* Right side: Content */}
        <Col xs={12} md={9}>
          <Card className="border-0 mt-4">
            <Card.Body className="p-4">{renderContent()}</Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

// Reusable Section Component
const PaymentSection = ({ title, children }) => (
  <div className="mb-5">
    <h5 className="fw-bold mb-4">{title}</h5>
    <Row className="align-items-center gy-4">{children}</Row>
  </div>
);

// Dummy Content Component (replace with your actual content)
const PaymentGatewayContent = () => (
  <>
    <PaymentSection title="Debit & Credit Cards">
      <Col xs={6} sm={4} md={2}>
        <div className="text-primary fw-bold" style={{ fontSize: '24px', fontStyle: 'italic' }}>VISA</div>
      </Col>
      <Col xs={6} sm={4} md={2}>
        <div className="text-primary fw-bold" style={{ fontSize: '22px' }}>RuPay</div>
        <div className="ms-1" style={{ width: 15, height: 15, backgroundColor: 'orange', borderRadius: '50%' }} />
      </Col>
      <Col xs={6} sm={4} md={2} className="d-flex">
        <div style={{ width: 30, height: 30, backgroundColor: '#EB001B', borderRadius: '50%', marginRight: -10, zIndex: 1 }} />
        <div style={{ width: 30, height: 30, backgroundColor: '#F79E1B', borderRadius: '50%' }} />
      </Col>
      <Col xs={6} sm={4} md={2}>
        <div className="bg-primary text-white p-1 fw-bold" style={{ fontSize: 12 }}>Mastercard</div>
      </Col>
      <Col xs={6} sm={4} md={2}>
        <div style={{ width: 30, height: 30, borderRadius: '50%', border: '2px solid #0077b6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span className="text-primary fw-bold" style={{ fontSize: 14 }}>D</span>
        </div>
        <div className="ms-2">
          <div className="fw-bold">Diners Club</div>
          <div style={{ fontSize: 10 }}>INTERNATIONAL</div>
        </div>
      </Col>
      {/* <Col xs={6} sm={4} md={2}>
        <p className="text-secondary mb-0 small">+ other international cards, Corporate (Business) Credit Cards</p>
      </Col> */}
    </PaymentSection>

    <PaymentSection title="UPI">
      <Col xs={6} sm={4} md={2}>
        <div className="text-secondary fw-bold">BHIM</div>
        <div className="ms-1" style={{ width: 12, height: 12, backgroundColor: 'orange', borderRadius: '50%' }} />
      </Col>
      <Col xs={6} sm={4} md={2}>
        <div className="d-flex align-items-center">
          {['#4285F4', '#EA4335', '#FBBC05', '#34A853'].map((color, index) => (
            <div key={index} style={{
              width: 20, height: 20, borderRadius: '50%', backgroundColor: color,
              marginLeft: index === 0 ? 0 : '-5px'
            }} />
          ))}
          <div className="ms-2 text-secondary fw-bold">Pay</div>
        </div>
      </Col>
      <Col xs={6} sm={4} md={2}>
        <div style={{ width: 25, height: 25, backgroundColor: '#5f259f', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span className="text-white">P</span>
        </div>
        <div className="ms-2 fw-bold" style={{ color: '#5f259f' }}>PhonePe</div>
      </Col>
      <Col xs={6} sm={4} md={2}>
        <div className="fw-bold" style={{ color: '#002970' }}>pay<span style={{ color: '#00BAF2' }}>tm</span></div>
      </Col>
      <Col xs={6} sm={4} md={2}>
        <div className="text-dark">amazon <span className="text-warning">pay</span></div>
      </Col>
      {/* <Col xs={6} sm={4} md={2}>
        <p className="text-secondary mb-0 d-flex align-items-center">
          + 51 Others <BsChevronRight className="ms-1" />
        </p>
      </Col> */}
    </PaymentSection>
  </>
);

// Placeholder components
const InternationalPaymentsContent = () => <p>International Payment Options</p>;
const OptimizerContent = () => <p>Optimizer Content</p>;
const TokenHQContent = () => <p>TokenHQ Content</p>;

export default PaymentMethodsSection;
