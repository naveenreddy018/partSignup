import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const features = [
  {
    section: 'ACCEPT PAYMENTS ONLINE',
    items: [
      { icon: '💳', title: 'Payment Aggregator', desc: 'Accepting payments made easy for businesses' },
      { icon: '🌐', title: 'Payment Gateway', desc: 'Payments on your Website & App' },
      { icon: '🔗', title: 'Payment Links', desc: 'Create & send links to collect money' },
      // { icon: '📄', title: 'Payment Pages', desc: 'Get paid with personalized page' },
      // { icon: '🛒', title: 'Webstore', desc: 'List, sell, get paid in minutes' },
      // { icon: '📷', title: 'QR Codes', desc: 'Multi-feature QR for your business' },
    ],
  },
  {
    section: '',
    items: [
      { icon: '⚡', title: 'Instant Settlement', desc: 'Customer payments settled faster' },
      { icon: '🛍️', title: 'Magic Checkout', desc: 'Improve Order Conversions & Reduce RTOs', isNew: true },
      { icon: '🤖', title: 'Smart Collect 2.0', desc: 'Automate NEFT, RTGS, IMPS payments' },
      // { icon: '🔁', title: 'Subscriptions', desc: 'Collect recurring subscription payments' },
      // { icon: '🌎', title: 'International Payments', desc: 'Accept payments from across the globe' },
      // { icon: '🧩', title: 'Embedded Payments', desc: 'End-to-end payments stack for Platforms' },
    ],
  },
  {
    section: 'ACCEPT PAYMENTS OFFLINE',
    items: [
      { icon: '🧾', title: 'Razorpay POS', desc: 'Accept Payments In-Store', isNew: true },
    ],
  },
  {
    section: 'PARTNER APPS',
    items: [
      { icon: '💬', title: 'Payments on WhatsApp', desc: 'Accept payments within WhatsApp chat', isNew: true },
      { icon: '🔗', title: 'Optimizer', desc: 'Manage multiple payment gateways', isNew: true },
    ],
  },
  {
    section: 'WITH POWER ADD ONS',
    items: [
      { icon: '🧰', title: 'App Store', desc: 'Find right app for your business' },
    ],
  },
];

const Payment = () => {
  // Flatten items into 3 equal column groups
  const flatItems = features.flatMap(section =>
    section.items.map(item => ({ ...item, section: section.section }))
  );
  const columnCount = 3;
  const columns = Array.from({ length: columnCount }, (_, i) =>
    flatItems.filter((_, idx) => idx % columnCount === i)
  );

  return (
    <Container
      style={{
        padding: '2rem 1rem',
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 8px rgba(255, 255, 255, 1)',
        border: '1px solid #e0e0e0',
      }}
    >
      <Row>
        {columns.map((colItems, colIndex) => (
          <Col key={colIndex} md={4}>
            {colItems.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  marginBottom: '1.5rem',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  border: '1px solid transparent',
                  backgroundColor: 'white',
                  boxShadow: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.border = '1px solid #dee2e6';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.border = '1px solid transparent';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  style={{
                    fontSize: '1.5rem',
                    color: '#1a56db',
                    marginRight: '0.75rem',
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: '1rem',
                      color: '#212529',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {item.title}
                    {item.isNew && (
                      <Badge
                        bg=""
                        style={{
                          backgroundColor: '#e6f4ea',
                          color: '#198754',
                          fontSize: '0.65rem',
                          fontWeight: 500,
                          marginLeft: '0.5rem',
                          padding: '0.2rem 0.4rem',
                          borderRadius: '0.25rem',
                        }}
                      >
                        NEW
                      </Badge>
                    )}
                  </div>
                  <div style={{ color: '#6c757d', fontSize: '0.875rem' }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Payment;
