import React from 'react'


import JasivikPayPage from './pricingHeroSection3'
import BankingHeroSection from './pricingHeroSection4'
import PaymentGatewayPromoSmall from './pricingHeroSection'
import PaymentMethodsSection from './pricingHeroSection2'
import Footer from '../Footer/paymentFooter'

function PricingPage() {
  return (
    <div >
      <PaymentGatewayPromoSmall />
      <PaymentMethodsSection />
      <JasivikPayPage />
      <BankingHeroSection />
      <Footer />
    </div>
  )
}

export default PricingPage
