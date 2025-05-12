import React from 'react'


import JasivikPayPage from './pricingHeroSection3'
import BankingHeroSection from './pricingHeroSection4'
import PaymentGatewayPromoSmall from './pricingHeroSection'
import PaymentMethodsSection from './pricingHeroSection2'

function  PricingPage() {
  return (
    <div >
       <PaymentGatewayPromoSmall />
        <PaymentMethodsSection />
         <JasivikPayPage />
         <BankingHeroSection/>
    </div>
  )
}

export default PricingPage
