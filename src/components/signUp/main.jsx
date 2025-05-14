import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import { Container, Navbar } from 'react-bootstrap';
import  "./main.css"

import LoginForm from './loginForm';
import SignupForm from './signUpForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthContextProvider from './authentication';

function Main() {
  return (
    <AuthContextProvider>
      <BrowserRouter> {/* Wrap the app in BrowserRouter */}
        <div className="d-flex flex-column min-vh-100">
          <Container className="flex-grow-1 py-4">
            <Routes>
              <Route path="/login" element={<LoginForm />} />
              <Route path="/" element={<SignupForm />} />
            </Routes>
          </Container>
        </div>
      </BrowserRouter> {/* Close BrowserRouter */}
    </AuthContextProvider>
  );
}

export default Main;
