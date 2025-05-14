import React, { useState } from 'react';
import { Form, Button, Card, Alert, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import FormInput from './formInput';
import { useAuth } from './authentication';
import { FaLock, FaEnvelope } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Clear errors when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitError('');
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // Mock login - in a real app this would call an API
        const user = {
          id: 'user123',
          email: formData.email,
          name: 'Merchant User',
          businessType: 'E-commerce',
          // Other user details would be returned from the API
        };
        
        login(user, formData.rememberMe);
        navigate('/');
      } catch (error) {
        setSubmitError('Failed to log in. Please check your credentials and try again.');
        console.error('Login error:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <Card className="auth-card border-0 fade-in">
      <Card.Body className="p-4 p-md-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold mb-2">Welcome Back</h2>
          <p className="text-muted">Log in to your Jaisvik merchant account</p>
        </div>
        
        {submitError && (
          <Alert variant="danger" className="mb-4">
            {submitError}
          </Alert>
        )}
        
        <Form onSubmit={handleSubmit}>
          <div className="mb-4">
            <FormInput
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              error={errors.email}
              prepend={<FaEnvelope />}
            />
          </div>
          
          <div className="mb-3">
            <FormInput
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              error={errors.password}
              prepend={<FaLock />}
            />
          </div>
          
          <Row className="mb-4">
            <Col>
              <Form.Check
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                label="Remember me"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
            </Col>
            <Col className="text-end">
              <Link to="/forgot-password" className="text-decoration-none">
                Forgot password?
              </Link>
            </Col>
          </Row>
          
          <Button 
            variant="primary" 
            type="submit" 
            className="w-100 py-2 mb-3" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Logging in...' : 'Log In'}
          </Button>
          
          <div className="text-center">
            <p className="mb-0">
              Don't have an account?{' '}
              <Link to="/signup" className="text-decoration-none fw-medium">
                Sign up
              </Link>
            </p>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default LoginForm;