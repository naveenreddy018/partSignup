import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/paymentHeader/paymentHeader'
import PaymentCarousel from './components/paymentCarousels/paymentCasoursel'
import BankScroll from './components/paymentHeader/scroll'
import Herosection from './components/paymentHeader/heroSection'

import ApiCodeIntegration from './components/paymentHeader/ApiCodeSection'
import Footer from './components/paymentFooter/paymentFooter'
import PricingPage from './components/pricing/pricing'
import TestimonialCarousel from './components/paymentHeader/review'
import JasivikAPIIntegrationDoc from './components/paymentDocument/docsPage'
import AboutPage from './components/paymentFeatures/About'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
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
        <Route path="/docs" element={<JasivikAPIIntegrationDoc />} />
        <Route path="/pricing" element={<PricingPage />} />
         <Route   path="/about" element={<AboutPage />}          />
      </Routes>
    </Router>
  )
}

export default App

