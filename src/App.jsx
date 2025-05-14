import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./App.css"

import PaymentCarousel from './components/Carousel/paymentCasoursel'
import BankScroll from './components/bankIconsroll/scroll'
import Herosection from './components/heroSection/heroSection'
import Header from './components/Header/paymentHeader'
import ApiCodeIntegration from './components/apiIntergrationCode/ApiCodeSection'
import Footer from './components/Footer/paymentFooter'
import PricingPage from './components/pricing/mainPricingSection'
import TestimonialCarousel from './components/review/review'
import JasivikAPIIntegrationDoc from './components//navBar/documentPage/docsPage'
import AboutPage from './components/navBar/about/About'

function App() {
  return (
    <Router>
      <Header/>
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

