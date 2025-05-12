import React, { useState } from 'react';
import { Container, Row, Col, Nav, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsChevronRight } from 'react-icons/bs';

const PaymentMethodsSection = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState('paymentGateway');

  // Tab content components
  const renderTabContent = () => {
    switch (activeTab) {
      case 'paymentGateway':
        return <PaymentGatewayContent />;
      case 'internationalPayments':
        return <InternationalPaymentsContent />;
      case 'optimizer':
        return <OptimizerContent />;
      // case 'razorpayPOS':
      //   return <RazorpayPOSContent />;
      // case 'subscriptions':
      //   return <SubscriptionsContent />;
      case 'tokenHQ':
        return <TokenHQContent />;
      default:
        return <PaymentGatewayContent />;
    }
  };

  return (
    <Container fluid className="bg-white py-4"  style={ {
       width : window.innerWidth < 992 ? "100%" : "80%",
       padding : window.innerWidth < 992 ? "0px" : "10px",
      marginTop : "50px",
    }}>
      {/* Navigation Tabs */}
      <div className="border-bottom">
        <Nav className="border-0 mb-0 flex-nowrap overflow-auto" style={{ whiteSpace: 'nowrap' }}>
          <Nav.Item>
            <Nav.Link 
              active={activeTab === 'paymentGateway'}
              onClick={() => setActiveTab('paymentGateway')} 
              className={`px-3 py-2 me-2 ${activeTab === 'paymentGateway' ? 'text-primary fw-bold border-bottom border-primary border-3' : 'text-secondary border-0'}`}
            >
              Payment Gateway
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link 
              active={activeTab === 'internationalPayments'}
              onClick={() => setActiveTab('internationalPayments')} 
              className={`px-3 py-2 me-2 ${activeTab === 'internationalPayments' ? 'text-primary fw-bold border-bottom border-primary border-3' : 'text-secondary border-0'}`}
            >
              International Payments
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link 
              active={activeTab === 'optimizer'}
              onClick={() => setActiveTab('optimizer')} 
              className={`px-3 py-2 me-2 ${activeTab === 'optimizer' ? 'text-primary fw-bold border-bottom border-primary border-3' : 'text-secondary border-0'}`}
            >
              Optimizer
            </Nav.Link>
          </Nav.Item>
          {/* <Nav.Item>
            <Nav.Link 
              active={activeTab === 'razorpayPOS'}
              onClick={() => setActiveTab('razorpayPOS')} 
              className={`px-3 py-2 me-2 ${activeTab === 'razorpayPOS' ? 'text-primary fw-bold border-bottom border-primary border-3' : 'text-secondary border-0'}`}
            >
              Razorpay POS
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link 
              active={activeTab === 'subscriptions'}
              onClick={() => setActiveTab('subscriptions')} 
              className={`px-3 py-2 me-2 ${activeTab === 'subscriptions' ? 'text-primary fw-bold border-bottom border-primary border-3' : 'text-secondary border-0'}`}
            >
              Subscriptions
            </Nav.Link>
          </Nav.Item> */}
          <Nav.Item>
            <Nav.Link 
              active={activeTab === 'tokenHQ'}
              onClick={() => setActiveTab('tokenHQ')} 
              className={`px-3 py-2 ${activeTab === 'tokenHQ' ? 'text-primary fw-bold border-bottom border-primary border-3' : 'text-secondary border-0'}`}
            >
              TokenHQ + 4 Others
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      {/* Payment Methods Content */}
      <Card className="border-0 mt-4">
        <Card.Body className="p-4">
          {renderTabContent()}
        </Card.Body>
      </Card>
    </Container>
  );
};

// Payment Gateway Tab Content
const PaymentGatewayContent = () => (
  <>
    {/* Debit & Credit Cards Section */}
    <div className="mb-5">
      <h5 className="fw-bold mb-4">Debit & Credit Cards</h5>
      <Row className="align-items-center gy-4">
        <Col xs={6} sm={4} md={2} className="d-flex align-items-center">
          <div className="text-primary fw-bold" style={{ fontSize: '24px', fontStyle: 'italic' }}>VISA</div>
        </Col>
        <Col xs={6} sm={4} md={2} className="d-flex align-items-center">
          <div className="text-primary fw-bold" style={{ fontSize: '22px' }}>RuPay</div>
          <div className="ms-1" style={{ width: '15px', height: '15px', backgroundColor: 'orange', borderRadius: '50%' }}></div>
        </Col>
        <Col xs={6} sm={4} md={2} className="d-flex align-items-center">
          <div style={{ width: '30px', height: '30px', backgroundColor: '#EB001B', borderRadius: '50%', marginRight: '-10px', zIndex: 1 }}></div>
          <div style={{ width: '30px', height: '30px', backgroundColor: '#F79E1B', borderRadius: '50%' }}></div>
        </Col>
        <Col xs={6} sm={4} md={2} className="d-flex align-items-center">
          <div className="bg-primary text-white p-1 fw-bold" style={{ fontSize: '12px' }}>AMERICAN EXPRESS</div>
        </Col>
        <Col xs={6} sm={4} md={2} className="d-flex align-items-center">
          <div style={{ width: '30px', height: '30px', borderRadius: '50%', border: '2px solid #0077b6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span className="text-primary fw-bold" style={{ fontSize: '14px' }}>D</span>
          </div>
          <div className="ms-2 text-dark">
            <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Diners Club</div>
            <div style={{ fontSize: '10px' }}>INTERNATIONAL</div>
          </div>
        </Col>
        <Col xs={6} sm={4} md={2} className="d-flex align-items-center">
          <p className="text-secondary mb-0 small">+ other international cards, Corporate (Business) Credit Cards</p>
        </Col>
      </Row>
    </div>

    {/* UPI Section */}
    <div className="mb-5">
      <h5 className="fw-bold mb-4">UPI</h5>
      <Row className="align-items-center gy-4">
        <Col xs={6} sm={4} md={2} className="d-flex align-items-center">
          <div className="text-secondary" style={{ fontSize: '20px', fontWeight: 'bold' }}>BHIM</div>
          <div className="ms-1" style={{ width: '12px', height: '12px', backgroundColor: 'orange', borderRadius: '50%' }}></div>
        </Col>
        <Col xs={6} sm={4} md={2} className="d-flex align-items-center">
          <div className="d-flex align-items-center">
            <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#4285F4' }}></div>
            <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#EA4335', marginLeft: '-5px' }}></div>
            <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#FBBC05', marginLeft: '-5px' }}></div>
            <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#34A853', marginLeft: '-5px' }}></div>
            <div className="ms-2 text-secondary fw-bold">Pay</div>
          </div>
        </Col>
        <Col xs={6} sm={4} md={2} className="d-flex align-items-center">
          <div style={{ width: '25px', height: '25px', backgroundColor: '#5f259f', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span className="text-white" style={{ fontSize: '12px' }}>P</span>
          </div>
          <div className="ms-2 fw-bold" style={{ color: '#5f259f' }}>PhonePe</div>
        </Col>
        <Col xs={6} sm={4} md={2} className="d-flex align-items-center">
          <div className="fw-bold" style={{ color: '#002970' }}>pay<span style={{ color: '#00BAF2' }}>tm</span></div>
        </Col>
        <Col xs={6} sm={4} md={2} className="d-flex align-items-center">
          <div className="text-dark">amazon <span className="text-warning">pay</span></div>
        </Col>
        <Col xs={6} sm={4} md={2} className="d-flex align-items-center">
          <p className="text-secondary mb-0 d-flex align-items-center">
            + 51 Others <BsChevronRight className="ms-1" />
          </p>
        </Col>
      </Row>
    </div>

    {/* Cardless EMI Section */}
    <div className="mb-5">
      <h5 className="fw-bold mb-4">Cardless EMI</h5>
      <Row className="align-items-center gy-4">
        <Col xs={6} sm={4} md={2} className="d-flex align-items-center">
          <div className="bg-danger text-white p-1 fw-bold" style={{ fontSize: '14px' }}>HDFC BANK</div>
        </Col>
        <Col xs={6} sm={4} md={2} className="d-flex align-items-center">
          <div className="d-flex align-items-center">
            <div style={{ width: '25px', height: '25px', backgroundColor: 'red', borderRadius: '50%' }}></div>
            <div className="ms-2 text-dark fw-bold" style={{ fontSize: '14px' }}>kotak</div>
          </div>
        </Col>
        <Col xs={6} sm={4} md={2} className="d-flex align-items-center">
          <div className="text-primary fw-bold" style={{ fontSize: '18px' }}>ICICI Bank</div>
        </Col>
        <Col xs={6} sm={4} md={2} className="d-flex align-items-center">
          <div className="text-success fw-bold" style={{ fontSize: '24px' }}>zest</div>
        </Col>
        <Col xs={6} sm={4} md={2} className="d-flex align-items-center">
          <div className="d-flex align-items-center">
            <div className="text-warning fw-bold" style={{ fontSize: '14px' }}>Bank of Baroda</div>
          </div>
        </Col>
        <Col xs={6} sm={4} md={2} className="d-flex align-items-center">
          <p className="text-secondary mb-0 d-flex align-items-center">
            + 5 Others <BsChevronRight className="ms-1" />
          </p>
        </Col>
      </Row>
    </div>

    {/* EMI Section */}
    <div>
      <h5 className="fw-bold mb-4">EMI <span className="fw-normal text-secondary">(Credit Card and Debit Card)</span></h5>
      <Row className="align-items-center gy-4">
        <Col xs={6} sm={3} md={3} className="d-flex align-items-center">
          <div className="text-primary fw-bold" style={{ fontSize: '24px', fontStyle: 'italic' }}>VISA</div>
        </Col>
        <Col xs={6} sm={3} md={3} className="d-flex align-items-center">
          <div style={{ width: '30px', height: '30px', backgroundColor: '#EB001B', borderRadius: '50%', marginRight: '-10px', zIndex: 1 }}></div>
          <div style={{ width: '30px', height: '30px', backgroundColor: '#F79E1B', borderRadius: '50%' }}></div>
        </Col>
        <Col xs={6} sm={3} md={3} className="d-flex align-items-center">
          <div className="bg-primary text-white p-1 fw-bold" style={{ fontSize: '12px' }}>AMERICAN EXPRESS</div>
        </Col>
        <Col xs={6} sm={3} md={3} className="d-flex align-items-center">
          <div style={{ width: '30px', height: '30px', borderRadius: '50%', border: '2px solid #0077b6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span className="text-primary fw-bold" style={{ fontSize: '14px' }}>D</span>
          </div>
          <div className="ms-2 text-dark">
            <div style={{ fontSize: '14px', fontWeight: 'bold' }}>Diners Club</div>
            <div style={{ fontSize: '10px' }}>INTERNATIONAL</div>
          </div>
        </Col>
      </Row>
    </div>
  </>
);

// International Payments Tab Content
const InternationalPaymentsContent = () => (
  <div className="py-3">
    <h5 className="fw-bold mb-4">International Payment Methods</h5>
    <Row className="align-items-center gy-4">
      <Col xs={6} sm={4} md={2} className="d-flex align-items-center">
        <div className="text-primary fw-bold" style={{ fontSize: '24px', fontStyle: 'italic' }}>VISA</div>
      </Col>
      <Col xs={6} sm={4} md={2} className="d-flex align-items-center">
        <div style={{ width: '30px', height: '30px', backgroundColor: '#EB001B', borderRadius: '50%', marginRight: '-10px', zIndex: 1 }}></div>
        <div style={{ width: '30px', height: '30px', backgroundColor: '#F79E1B', borderRadius: '50%' }}></div>
      </Col>
      <Col xs={6} sm={4} md={2} className="d-flex align-items-center">
        <div className="bg-primary text-white p-1 fw-bold" style={{ fontSize: '12px' }}>AMERICAN EXPRESS</div>
      </Col>
      <Col xs={6} sm={4} md={2} className="d-flex align-items-center">
        <div className="text-success fw-bold">PayPal</div>
      </Col>
      <Col xs={6} sm={4} md={2} className="d-flex align-items-center">
        <div className="text-info fw-bold">Stripe</div>
      </Col>
    </Row>
    <div className="mt-4 text-center text-secondary">
      <p>Facilitate cross-border transactions with international payment methods.</p>
    </div>
  </div>
);

// Optimizer Tab Content
const OptimizerContent = () => (
  <div className="py-3">
    <h5 className="fw-bold mb-4">Payment Optimizer</h5>
    <div className="p-4 bg-light rounded">
      <p className="mb-3">Optimize your payment processing with intelligent routing and fee optimization.</p>
      <ul className="mb-0">
        <li>Smart Routing</li>
        <li>Fee Optimization</li>
        <li>Analytics Dashboard</li>
        <li>Custom Rules Engine</li>
      </ul>
    </div>
  </div>
);

// Razorpay POS Tab Content
const RazorpayPOSContent = () => (
  <div className="py-3">
    <h5 className="fw-bold mb-4">Razorpay POS Solutions</h5>
    <Row className="gy-4">
      <Col md={6}>
        <Card className="h-100">
          <Card.Body>
            <h6 className="fw-bold">Hardware POS</h6>
            <p className="text-secondary small mb-0">Accept card payments in-store with our POS terminals</p>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <Card className="h-100">
          <Card.Body>
            <h6 className="fw-bold">Software POS</h6>
            <p className="text-secondary small mb-0">Turn your phone into a payment terminal</p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
);

// Subscriptions Tab Content
const SubscriptionsContent = () => (
  <div className="py-3">
    <h5 className="fw-bold mb-4">Subscription Management</h5>
    <div className="mb-4">
      <p>Manage recurring payments and subscriptions with flexible billing options.</p>
    </div>
    <Row className="gy-3">
      <Col md={4}>
        <Card className="h-100 border-0 shadow-sm">
          <Card.Body className="text-center">
            <h6 className="fw-bold">Recurring Billing</h6>
            <p className="small text-secondary mb-0">Automate your recurring payment collection</p>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="h-100 border-0 shadow-sm">
          <Card.Body className="text-center">
            <h6 className="fw-bold">Subscription Analytics</h6>
            <p className="small text-secondary mb-0">Track MRR, churn, and customer lifetime value</p>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card className="h-100 border-0 shadow-sm">
          <Card.Body className="text-center">
            <h6 className="fw-bold">Dunning Management</h6>
            <p className="small text-secondary mb-0">Reduce failed payments and involuntary churn</p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
);

// TokenHQ Tab Content
const TokenHQContent = () => (
  <div className="py-3">
    <h5 className="fw-bold mb-4">TokenHQ and More</h5>
    <Row className="gy-4">
      <Col md={6} lg={3}>
        <Card className="h-100 border-0 shadow-sm">
          <Card.Body className="text-center">
            <h6 className="fw-bold">TokenHQ</h6>
            <p className="small text-secondary">Secure tokenization for payment details</p>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} lg={3}>
        <Card className="h-100 border-0 shadow-sm">
          <Card.Body className="text-center">
            <h6 className="fw-bold">Checkout</h6>
            <p className="small text-secondary">Optimized payment flow</p>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} lg={3}>
        <Card className="h-100 border-0 shadow-sm">
          <Card.Body className="text-center">
            <h6 className="fw-bold">Smart Collect</h6>
            <p className="small text-secondary">Virtual accounts for reconciliation</p>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} lg={3}>
        <Card className="h-100 border-0 shadow-sm">
          <Card.Body className="text-center">
            <h6 className="fw-bold">Route</h6>
            <p className="small text-secondary">Payment routing solutions</p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </div>
);

export default PaymentMethodsSection;