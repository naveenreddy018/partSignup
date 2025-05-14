import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LoginForm from '../components/auth/LoginForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginPage() {
  return (
    <Container>
      <Row className="justify-content-center align-items-center py-5">
        <Col md={8} lg={6}>
          <LoginForm />
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;