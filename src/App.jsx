import React from 'react'
import Header from './components/paymentHeader/paymentHeader'
import PaymentAd from './components/paymentCarousels/paymentCasoursel'
import PaymentCarousel from './components/paymentCarousels/paymentCasoursel'
import HeroCarousel from './components/paymentCarousels/paymentCasoursel'
import Herosection from './components/paymentHeader/Herpo'
import BankScroll from './components/paymentHeader/scroll'

function App() {
  return (
    <div>
      <Header />
      <HeroCarousel/>
       <BankScroll /> 
      <Herosection />
    </div>
  )
}

export default App
