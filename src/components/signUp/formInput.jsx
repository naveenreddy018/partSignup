import React from 'react';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function FormInput({ 
  label, 
  type = 'text', 
  name, 
  value, 
  onChange, 
  placeholder, 
  required = false, 
  error, 
  note,
  className = '',
  ...props 
}) {
  return (
    <Form.Group className={`mb-3 ${className}`}>
      {label && (
        <Form.Label>
          {label} {required && <span className="text-danger">*</span>}
        </Form.Label>
      )}
      <Form.Control
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        isInvalid={!!error}
        {...props}
      />
      {note && <div className="field-note">{note}</div>}
      {error && <div className="error-message">{error}</div>}
    </Form.Group>
  );
}

export default FormInput;