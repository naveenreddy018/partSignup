import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Resources = () => {
  const [hovered, setHovered] = useState(null);

  // Inline style for hover effect
  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
  };

  const linkHoveredStyle = {
    textDecoration: 'underline',
    color: '#007bff', // Blue color
  };

  return (
    <Container className="py-5">
      <Card className="border-0 ">
        <Card.Body className="p-4">
          {/* Section Headers */}
          <Row className="mb-4">
            <Col md={3}>
              <h6 className="text-secondary" style={{ fontSize: '14px', fontWeight: '500' }}>AWARENESS</h6>
            </Col>
            <Col md={3}>
              <h6 className="text-secondary" style={{ fontSize: '14px', fontWeight: '500' }}>DEVELOPERS</h6>
            </Col>
            <Col md={3}>
              <h6 className="text-secondary" style={{ fontSize: '14px', fontWeight: '500' }}>SOLUTIONS</h6>
            </Col>
            <Col md={3}>
              <h6 className="text-secondary" style={{ fontSize: '14px', fontWeight: '500' }}>FREE TOOLS</h6>
            </Col>
          </Row>
          
          {/* Row 1 */}
          <Row className="mb-3">
            <Col md={3}>
              <a 
                href="#" 
                style={hovered === 'blog' ? { ...linkStyle, ...linkHoveredStyle } : linkStyle}
                onMouseEnter={() => setHovered('blog')}
                onMouseLeave={() => setHovered(null)}
              >
                Blog
              </a>
            </Col>
            <Col md={3}>
              <a 
                href="#" 
                style={hovered === 'developerDocs' ? { ...linkStyle, ...linkHoveredStyle } : linkStyle}
                onMouseEnter={() => setHovered('developerDocs')}
                onMouseLeave={() => setHovered(null)}
              >
                Developer Docs
              </a>
            </Col>
            <Col md={3}>
              <a 
                href="#" 
                style={hovered === 'saas' ? { ...linkStyle, ...linkHoveredStyle } : linkStyle}
                onMouseEnter={() => setHovered('saas')}
                onMouseLeave={() => setHovered(null)}
              >
                SaaS
              </a>
            </Col>
            <Col md={3}>
              <a 
                href="#" 
                style={hovered === 'gstCalculator' ? { ...linkStyle, ...linkHoveredStyle } : linkStyle}
                onMouseEnter={() => setHovered('gstCalculator')}
                onMouseLeave={() => setHovered(null)}
              >
                GST Calculator
              </a>
            </Col>
          </Row>

          {/* Row 2 */}
          <Row className="mb-3">
            <Col md={3}>
              <a 
                href="#" 
                style={hovered === 'learn' ? { ...linkStyle, ...linkHoveredStyle } : linkStyle}
                onMouseEnter={() => setHovered('learn')}
                onMouseLeave={() => setHovered(null)}
              >
                Learn
              </a>
            </Col>
            <Col md={3}>
              <a 
                href="#" 
                style={hovered === 'integrations' ? { ...linkStyle, ...linkHoveredStyle } : linkStyle}
                onMouseEnter={() => setHovered('integrations')}
                onMouseLeave={() => setHovered(null)}
              >
                Integrations
              </a>
            </Col>
            <Col md={3}>
              <a 
                href="#" 
                style={hovered === 'eCommerce' ? { ...linkStyle, ...linkHoveredStyle } : linkStyle}
                onMouseEnter={() => setHovered('eCommerce')}
                onMouseLeave={() => setHovered(null)}
              >
                E-commerce
              </a>
            </Col>
            <Col md={3}>
              <a 
                href="#" 
                style={hovered === 'gstSearch' ? { ...linkStyle, ...linkHoveredStyle } : linkStyle}
                onMouseEnter={() => setHovered('gstSearch')}
                onMouseLeave={() => setHovered(null)}
              >
                GST Number Search
              </a>
            </Col>
          </Row>

          {/* Row 3 */}
          <Row className="mb-3">
            <Col md={3}>
              <a 
                href="#" 
                style={hovered === 'events' ? { ...linkStyle, ...linkHoveredStyle } : linkStyle}
                onMouseEnter={() => setHovered('events')}
                onMouseLeave={() => setHovered(null)}
              >
                Events
              </a>
            </Col>
            <Col md={3}>
              <a 
                href="#" 
                style={hovered === 'apiReference' ? { ...linkStyle, ...linkHoveredStyle } : linkStyle}
                onMouseEnter={() => setHovered('apiReference')}
                onMouseLeave={() => setHovered(null)}
              >
                API Reference
              </a>
            </Col>
            <Col md={3}>
              <a 
                href="#" 
                style={hovered === 'education' ? { ...linkStyle, ...linkHoveredStyle } : linkStyle}
                onMouseEnter={() => setHovered('education')}
                onMouseLeave={() => setHovered(null)}
              >
                Education
              </a>
            </Col>
            <Col md={3}>
              <a 
                href="#" 
                style={hovered === 'gstSearchByPan' ? { ...linkStyle, ...linkHoveredStyle } : linkStyle}
                onMouseEnter={() => setHovered('gstSearchByPan')}
                onMouseLeave={() => setHovered(null)}
              >
                GST Search by PAN
              </a>
            </Col>
          </Row>

          {/* Row 4 */}
          <Row className="mb-3">
            <Col md={3}>
              <a 
                href="#" 
                style={hovered === 'whitePapers' ? { ...linkStyle, ...linkHoveredStyle } : linkStyle}
                onMouseEnter={() => setHovered('whitePapers')}
                onMouseLeave={() => setHovered(null)}
              >
                White papers
              </a>
            </Col>
            <Col md={3}>
              <a 
                href="#" 
                style={hovered === 'apiPlayground' ? { ...linkStyle, ...linkHoveredStyle } : linkStyle}
                onMouseEnter={() => setHovered('apiPlayground')}
                onMouseLeave={() => setHovered(null)}
              >
                API Playground
              </a>
            </Col>
            <Col md={3}>
              <a 
                href="#" 
                style={hovered === 'bfsi' ? { ...linkStyle, ...linkHoveredStyle } : linkStyle}
                onMouseEnter={() => setHovered('bfsi')}
                onMouseLeave={() => setHovered(null)}
              >
                BFSI
              </a>
            </Col>
            <Col md={3}>
              <div className="d-flex align-items-center gap-2">
                <a 
                  href="#" 
                  style={hovered === 'roiCalculator' ? { ...linkStyle, ...linkHoveredStyle } : linkStyle}
                  onMouseEnter={() => setHovered('roiCalculator')}
                  onMouseLeave={() => setHovered(null)}
                >
                  ROI Calculator
                </a>
                <Badge bg="success" className="px-1 py-0" style={{ fontSize: '10px' }}>NEW</Badge>
              </div>
            </Col>
          </Row>

          {/* Row 5 */}
          <Row className="mb-3">
            <Col md={3}>
              <a 
                href="#" 
                style={hovered === 'customerStories' ? { ...linkStyle, ...linkHoveredStyle } : linkStyle}
                onMouseEnter={() => setHovered('customerStories')}
                onMouseLeave={() => setHovered(null)}
              >
                Customer Stories
              </a>
            </Col>
            <Col md={3}>
              <a 
                href="#" 
                style={hovered === 'onboardingApis' ? { ...linkStyle, ...linkHoveredStyle } : linkStyle}
                onMouseEnter={() => setHovered('onboardingApis')}
                onMouseLeave={() => setHovered(null)}
              >
                Onboarding APIs
              </a>
            </Col>
            <Col md={3}>
              <a 
                href="#" 
                style={hovered === 'freelance' ? { ...linkStyle, ...linkHoveredStyle } : linkStyle}
                onMouseEnter={() => setHovered('freelance')}
                onMouseLeave={() => setHovered(null)}
              >
                Freelance
              </a>
            </Col>
            <Col md={3}>
              <div className="d-flex align-items-center gap-2">
                <a 
                  href="#" 
                  style={hovered === 'cagrCalculator' ? { ...linkStyle, ...linkHoveredStyle } : linkStyle}
                  onMouseEnter={() => setHovered('cagrCalculator')}
                  onMouseLeave={() => setHovered(null)}
                >
                  CAGR Calculator
                </a>
                <Badge bg="success" className="px-1 py-0" style={{ fontSize: '10px' }}>NEW</Badge>
              </div>
            </Col>
          </Row>

          {/* Row 6 (only for the last column) */}
          <Row>
            <Col md={3}></Col>
            <Col md={3}></Col>
            <Col md={3}></Col>
            <Col md={3}>
              <div className="d-flex align-items-center gap-2">
                <a 
                  href="#" 
                  style={hovered === 'ebitdaCalculator' ? { ...linkStyle, ...linkHoveredStyle } : linkStyle}
                  onMouseEnter={() => setHovered('ebitdaCalculator')}
                  onMouseLeave={() => setHovered(null)}
                >
                  EBITDA Calculator
                </a>
                <Badge bg="success" className="px-1 py-0" style={{ fontSize: '10px' }}>NEW</Badge>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Resources;
