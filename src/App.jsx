// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import "./App.css"

// import PaymentCarousel from './components/Carousel/paymentCasoursel'
// import BankScroll from './components/bankIconsroll/scroll'
// import Herosection from './components/heroSection/heroSection'
// import Header from './components/Header/paymentHeader'
// import ApiCodeIntegration from './components/apiIntergrationCode/ApiCodeSection'
// import Footer from './components/Footer/paymentFooter'
// import PricingPage from './components/pricing/mainPricingSection'
// import TestimonialCarousel from './components/review/review'
// import JasivikAPIIntegrationDoc from './components//navBar/documentPage/docsPage'
// import AboutPage from './components/navBar/about/About'

// function App() {
//   return (
//     <Router>
//       <Header/>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <PaymentCarousel />
//               <BankScroll />
//               <Herosection />
//               <ApiCodeIntegration />
//               <TestimonialCarousel />
//               <Footer />

//             </>
//           }
//         />
//         <Route path="/docs" element={<JasivikAPIIntegrationDoc />} />
//         <Route path="/pricing" element={<PricingPage />} />
//          <Route   path="/about" element={<AboutPage />}          />
//       </Routes>
//     </Router>
//   )
// }

// export default App


// import React from 'react'
// import Main from './components/signUp/main'

// function App() {
//   return (
//     <div>
//       <Main />
//     </div>
//   )
// }

// export default App

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './main.css';

// Components for Main Pages
import Header from './components/Header/paymentHeader';
import PaymentCarousel from './components/Carousel/paymentCasoursel';
import BankScroll from './components/bankIconsroll/scroll';
import Herosection from './components/heroSection/heroSection';
import ApiCodeIntegration from './components/apiIntergrationCode/ApiCodeSection';
import TestimonialCarousel from './components/review/review';
import Footer from './components/Footer/paymentFooter';
import PricingPage from './components/pricing/mainPricingSection';
import JasivikAPIIntegrationDoc from './components/navBar/documentPage/docsPage';
import AboutPage from './components/navBar/about/About';

// Auth Pages
import LoginForm from './components/signUp/loginForm';
import SignupForm from './components/signUp/signUpForm';

// Context
import AuthContextProvider from './components/signUp/authentication';
function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Header />
        <Routes>

          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <PaymentCarousel />
                <BankScroll />
                <Herosection />
                <ApiCodeIntegration />
                <TestimonialCarousel />
                <Footer />
              </>
            }
          />

          {/* Auth Routes */}
          <Route
            path="/login"
            element={
              <Container className="py-4">
                <LoginForm />
              </Container>
            }
          />
          <Route
            path="/signup"
            element={
              <Container className="py-4">
                <SignupForm />
              </Container>
            }
          />

          {/* Static Pages */}
          <Route path="/docs" element={<JasivikAPIIntegrationDoc />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
