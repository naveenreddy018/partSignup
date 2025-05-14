import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SignupForm from '../components/auth/SignupForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignupPage() {
  return (
    <Container >
      <Row className="justify-content-center py-5">
        <Col lg={6} xl={4}>
          <SignupForm />
        </Col>
      </Row>
    </Container>
  );
}

export default SignupPage;