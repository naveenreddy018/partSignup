// Basic validation functions for form fields

// Email validation
export const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    if (!email) return 'Email is required';
    if (!regex.test(email)) return 'Email is invalid';
    return '';
  };
  
  // Password validation
  export const validatePassword = (password) => {
    if (!password) return 'Password is required';
    if (password.length < 8) return 'Password must be at least 8 characters';
    return '';
  };
  
  // Password strength checker
  export const checkPasswordStrength = (password) => {
    if (!password) return '';
    
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
    
    if (strength <= 2) return 'weak';
    if (strength <= 4) return 'medium';
    return 'strong';
  };
  
  // Name validation
  export const validateName = (name) => {
    if (!name.trim()) return 'Name is required';
    return '';
  };
  
  // Phone validation
  export const validatePhone = (phone) => {
    if (!phone) return 'Phone number is required';
    if (!/^\d{10}$/.test(phone)) return 'Please enter a valid 10-digit phone number';
    return '';
  };
  
  // PAN card validation
  export const validatePanCard = (panCard) => {
    if (!panCard) return 'PAN card number is required';
    if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(panCard)) {
      return 'Please enter a valid PAN card number (e.g., ABCDE1234F)';
    }
    return '';
  };
  
  // IFSC code validation
  export const validateIfscCode = (ifscCode) => {
    if (!ifscCode) return 'IFSC code is required';
    if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(ifscCode)) {
      return 'Please enter a valid IFSC code';
    }
    return '';
  };
  
  // Website URL validation
  export const validateWebsite = (website) => {
    if (!website) return 'Website URL is required';
    
    try {
      new URL(website.startsWith('http') ? website : `https://${website}`);
      return '';
    } catch (e) {
      return 'Please enter a valid URL';
    }
  };
  
  // Business name validation
  export const validateBusinessName = (name) => {
    if (!name.trim()) return 'Business name is required';
    return '';
  };