import React, { useState } from 'react';
import { Form, Button, Card, Alert, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import FormInput from './formInput';
import { useAuth } from './authentication';
import { FaUser, FaEnvelope, FaLock, FaBuilding, FaGlobe, FaIdCard, FaPhone } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const BUSINESS_TYPES = [
  'E-commerce',
  'SaaS',
  'Professional Services',
  'Retail',
  'Food & Beverage',
  'Travel & Hospitality',
  'Education',
  'Healthcare',
  'Finance',
  'Manufacturing',
  'Other'
];

function SignupForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Basic Information
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    
    // Step 2: Business Information
    businessName: '',
    businessType: '',
    website: '',
    businessAddress: '',
    gstNumber: '',
    
    // Step 3: Identity Verification
    panCard: '',
    aadhaarNumber: '',
    accountNumber: '',
    ifscCode: '',
    bankName: '',
    
    termsAccepted: false
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    setFormData({
      ...formData,
      [name]: newValue
    });
    
    // Clear errors when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
    
    // Check password strength
    if (name === 'password') {
      checkPasswordStrength(value);
    }
  };
  
  const checkPasswordStrength = (password) => {
    if (!password) {
      setPasswordStrength('');
      return;
    }
    
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isLongEnough = password.length >= 8;
    
    const strength = 
      (hasLowerCase ? 1 : 0) + 
      (hasUpperCase ? 1 : 0) + 
      (hasNumber ? 1 : 0) + 
      (hasSpecialChar ? 1 : 0) + 
      (isLongEnough ? 1 : 0);
    
    if (strength <= 2) setPasswordStrength('weak');
    else if (strength <= 4) setPasswordStrength('medium');
    else setPasswordStrength('strong');
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      // Validate basic information
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
      }
      
      if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
      
      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (formData.password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters';
      }
      
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
      
      if (!formData.phone) {
        newErrors.phone = 'Phone number is required';
      } else if (!/^\d{10}$/.test(formData.phone)) {
        newErrors.phone = 'Please enter a valid 10-digit phone number';
      }
    } 
    else if (step === 2) {
      // Validate business information
      if (!formData.businessName.trim()) {
        newErrors.businessName = 'Business name is required';
      }
      
      if (!formData.businessType) {
        newErrors.businessType = 'Please select a business type';
      }
      
      if (!formData.website) {
        newErrors.website = 'Website URL is required';
      } else if (
        !/(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(
          formData.website
        )
      ) {
        newErrors.website = 'Please enter a valid URL';
      }
      
      if (!formData.businessAddress.trim()) {
        newErrors.businessAddress = 'Business address is required';
      }
    } 
    else if (step === 3) {
      // Validate identity verification
      if (!formData.panCard) {
        newErrors.panCard = 'PAN card number is required';
      } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.panCard)) {
        newErrors.panCard = 'Please enter a valid PAN card number (e.g., ABCDE1234F)';
      }
      
      if (!formData.accountNumber) {
        newErrors.accountNumber = 'Account number is required';
      }
      
      if (!formData.ifscCode) {
        newErrors.ifscCode = 'IFSC code is required';
      } else if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(formData.ifscCode)) {
        newErrors.ifscCode = 'Please enter a valid IFSC code';
      }
      
      if (!formData.bankName.trim()) {
        newErrors.bankName = 'Bank name is required';
      }
      
      if (!formData.termsAccepted) {
        newErrors.termsAccepted = 'You must accept the terms and conditions';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitError('');
    
    if (validateStep(currentStep)) {
      setIsSubmitting(true);
      
      try {
        // Mock registration - in a real app this would call an API
        const user = {
          id: 'user' + Date.now(),
          ...formData
        };
        
        register(user);
        navigate('/login');
      } catch (error) {
        setSubmitError('Failed to create an account. Please try again.');
        console.error('Registration error:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Render progress indicator
  const renderProgressIndicator = () => {
    return (
      <div className="progress-indicator mb-4">
        <div 
          className={`progress-step ${currentStep >= 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}`}
        >
          1
        </div>
        <div 
          className={`progress-step ${currentStep >= 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}`}
        >
          2
        </div>
        <div 
          className={`progress-step ${currentStep >= 3 ? 'active' : ''}`}
        >
          3
        </div>
      </div>
    );
  };

  // Render form steps
  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="form-step slide-in">
            <h4 className="mb-4">Basic Information</h4>
            
            <Row>
              <Col md={6}>
                <FormInput
                  label="Full Name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  error={errors.name}
                />
              </Col>
              <Col md={6}>
                <FormInput
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  error={errors.email}
                  note="We'll send a verification link to this email"
                />
              </Col>
            </Row>
            
            <Row>
              <Col md={6}>
                <FormInput
                  label="Password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  required
                  error={errors.password}
                  note="Use 8+ characters with a mix of letters, numbers & symbols"
                />
                {passwordStrength && (
                  <div className="password-strength mb-3">
                    <div className={`password-strength-bar ${passwordStrength}`}></div>
                  </div>
                )}
              </Col>
              <Col md={6}>
                <FormInput
                  label="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  required
                  error={errors.confirmPassword}
                />
              </Col>
            </Row>
            
            <FormInput
              label="Phone Number"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your 10-digit phone number"
              required
              error={errors.phone}
            />
            
            <div className="d-flex justify-content-between mt-4">
              <div></div>
              <Button variant="primary" onClick={handleNextStep}>
                Next: Business Details
              </Button>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="form-step slide-in">
            <h4 className="mb-4">Business Information</h4>
            
            <Row>
              <Col md={6}>
                <FormInput
                  label="Business Name"
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Enter your business name"
                  required
                  error={errors.businessName}
                />
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>
                    Business Type <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    isInvalid={!!errors.businessType}
                  >
                    <option value="">Select business type</option>
                    {BUSINESS_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </Form.Select>
                  {errors.businessType && (
                    <div className="error-message">{errors.businessType}</div>
                  )}
                </Form.Group>
              </Col>
            </Row>
            
            <FormInput
              label="Website URL"
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="https://example.com"
              required
              error={errors.website}
            />
            
            <FormInput
              label="Business Address"
              as="textarea"
              rows={3}
              name="businessAddress"
              value={formData.businessAddress}
              onChange={handleChange}
              placeholder="Enter your complete business address"
              required
              error={errors.businessAddress}
            />
            
            <FormInput
              label="GST Number"
              type="text"
              name="gstNumber"
              value={formData.gstNumber}
              onChange={handleChange}
              placeholder="Enter your GST number (if applicable)"
              error={errors.gstNumber}
              note="Optional for businesses not registered under GST"
            />
            
            <div className="d-flex justify-content-between mt-4">
              <Button variant="outline-secondary" onClick={handlePrevStep}>
                Back: Personal Details
              </Button>
              <Button variant="primary" onClick={handleNextStep}>
                Next: Verification
              </Button>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="form-step slide-in">
            <h4 className="mb-4">Identity Verification</h4>
            
            <Row>
              <Col md={6}>
                <FormInput
                  label="PAN Card Number"
                  type="text"
                  name="panCard"
                  value={formData.panCard}
                  onChange={handleChange}
                  placeholder="Enter your PAN card number"
                  required
                  error={errors.panCard}
                  note="Format: ABCDE1234F"
                />
              </Col>
              <Col md={6}>
                <FormInput
                  label="Aadhaar Number"
                  type="text"
                  name="aadhaarNumber"
                  value={formData.aadhaarNumber}
                  onChange={handleChange}
                  placeholder="Enter your Aadhaar number (if applicable)"
                  error={errors.aadhaarNumber}
                  note="Optional for certain business types"
                />
              </Col>
            </Row>
            
            <hr className="my-4" />
            <h5 className="mb-3">Bank Account Details</h5>
            
            <Row>
              <Col md={6}>
                <FormInput
                  label="Account Number"
                  type="text"
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleChange}
                  placeholder="Enter your account number"
                  required
                  error={errors.accountNumber}
                />
              </Col>
              <Col md={6}>
                <FormInput
                  label="IFSC Code"
                  type="text"
                  name="ifscCode"
                  value={formData.ifscCode}
                  onChange={handleChange}
                  placeholder="Enter bank IFSC code"
                  required
                  error={errors.ifscCode}
                />
              </Col>
            </Row>
            
            <FormInput
              label="Bank Name"
              type="text"
              name="bankName"
              value={formData.bankName}
              onChange={handleChange}
              placeholder="Enter bank name"
              required
              error={errors.bankName}
            />
            
            <Form.Group className="mb-4 mt-4">
              <Form.Check
                type="checkbox"
                id="termsAccepted"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                label={
                  <span>
                    I agree to Jaisvik's{' '}
                    <Link to="/terms" className="text-decoration-none">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-decoration-none">
                      Privacy Policy
                    </Link>
                  </span>
                }
                isInvalid={!!errors.termsAccepted}
              />
              {errors.termsAccepted && (
                <div className="error-message">{errors.termsAccepted}</div>
              )}
            </Form.Group>
            
            {submitError && (
              <Alert variant="danger" className="mb-4">
                {submitError}
              </Alert>
            )}
            
            <div className="d-flex justify-content-between mt-4">
              <Button variant="outline-secondary" onClick={handlePrevStep}>
                Back: Business Details
              </Button>
              <Button 
                variant="primary" 
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Creating Account...' : 'Complete Registration'}
              </Button>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <Card style={{
      width : "50%"
    }} className="auth-card border-0 fade-in">
      <Card.Body className="p-3 p-md-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold mb-2">Create Your Account</h2>
          <p className="text-muted">Join Jaisvik Payment Gateway to start accepting payments</p>
        </div>
        
        {renderProgressIndicator()}
        
        <Form onSubmit={(e) => e.preventDefault()}>
          {renderFormStep()}
        </Form>
      </Card.Body>
    </Card>
  );
}

export default SignupForm;