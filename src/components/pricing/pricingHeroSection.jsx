import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { BsInfoCircle, BsHeadset } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';

const PaymentGatewayPromoSmall = () => {
  const handleSignUp = () => alert('Redirecting to Sign Up...');
  const handleSales = () => alert('Contacting Sales...');

  return (
    <Container fluid className="py-5 " style={{ width: '80%', marginTop : "100px", background: 'linear-gradient(to right, #f8f9fa, #e9f0f7)' }}>
      <Row className="justify-content-center align-items-center">
        <Col md={6}>
          <h4 className="fw-bold text-dark mb-1">
            Start accepting <span className="text-primary">payments</span>
          </h4>
          <h5 className="fw-bold text-dark">at just</h5>

          <div className="d-flex align-items-start mb-2">
            <span style={{ fontSize: '4rem', fontWeight: 'bold', color: '#0F2744' }}>2%</span>
            <div className="ms-2 small">
              <p className="mb-1">on all transactions</p>
              <p className="mb-0 fw-semibold">(Platform fees)*</p>
              <BsInfoCircle className="text-secondary mt-1" />
            </div>
          </div>

          <p className="text-secondary small mb-3">*18% GST applicable</p>
          <div className="d-flex mb-3 small">
            <span>₹0 Setup</span><span className="mx-2">•</span><span>₹0 Maintenance</span>
          </div>

          <Button
            variant="primary"
            size="sm"
            className="fw-semibold mb-3"
            onClick={handleSignUp}
            style={{
              width: '60%',
              background: 'linear-gradient(to right, #3b82f6, #2563eb)',
              border: 'none',
            }}
          >
            Sign Up →
          </Button>

          <Card className="border-0 shadow-sm bg-light">
            <Card.Body className="d-flex justify-content-between align-items-center p-2">
              <span className="small">Revenue above ₹5Lakh?</span>
              <Button variant="outline-primary" size="sm" onClick={handleSales}>
                <BsHeadset className="me-1" /> Sales
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="text-center mt-4 mt-md-0">
          <div
            className="rounded shadow"
            style={{
              width: '260px',
              height: '420px',
              backgroundColor: '#4285F4',
              borderRadius: '25px',
              margin: 'auto',
              position: 'relative',
            }}
          >
            <div
              className="bg-white position-absolute"
              style={{
                top: '40px',
                left: '15px',
                right: '15px',
                bottom: '15px',
                borderRadius: '15px',
                padding: '10px',
              }}
            >
              <h6 className="text-center small mb-2">Payment Gateway</h6>
              <div className="small mb-2">PREFERRED METHODS</div>
              <div className="d-flex gap-1 mb-2">
                <div className="border rounded bg-white p-1 text-center small" style={{ width: '50px' }}>VISA</div>
                <div className="border rounded bg-white p-1" style={{ width: '50px' }}></div>
                <div className="border rounded bg-white p-1" style={{ width: '50px' }}></div>
              </div>
              <div className="bg-primary text-white text-center py-1 rounded small position-absolute bottom-2 start-0 end-0 mx-2">
                PAY ₹300
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentGatewayPromoSmall;
