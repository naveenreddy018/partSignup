import React from 'react';

const AboutJaisvik = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      {/* Header */}
      <header className="bg-blue-600 text-white p-6 -m-6 mb-6 rounded-t-lg">
        <h1 className="text-2xl font-bold mb-2">Jasivik Payment Gateway</h1>
        <p className="mb-4">Powerful payment solutions for businesses of all sizes</p>
        <div className="flex gap-3">
          <button className="bg-white text-blue-700 px-4 py-2 rounded-md font-medium">Get Started</button>
          <button className="border border-white text-white px-4 py-2 rounded-md font-medium">View Demo</button>
        </div>
      </header>

      {/* Features */}
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Why Choose Jasivik</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-2">Global Transactions</h3>
            <p className="text-gray-600">Process payments in 180+ countries with multi-currency support</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-2">Secure & Compliant</h3>
            <p className="text-gray-600">PCI DSS Level 1 certified with advanced fraud protection</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-2">Instant Transfers</h3>
            <p className="text-gray-600">Real-time payment processing with 99.99% uptime guarantee</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-2">Multiple Payment Methods</h3>
            <p className="text-gray-600">Credit cards, digital wallets, UPI, bank transfers & more</p>
          </div>
        </div>
      </section>

      {/* Integration Example */}
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Simple Integration</h2>
        <div className="bg-gray-100 p-4 rounded-md">
          <pre className="text-sm text-gray-700 overflow-x-auto">
            <code>{`// Simple money transfer with Jasivik API
const jasivik = require('jasivik-payments');

// Process a payment
async function transferMoney() {
  const result = await gateway.transfer({
    amount: 1000,
    currency: 'USD',
    source: 'card_12345',
    destination: 'acct_67890'
  });
  return result;
}`}</code>
          </pre>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="mb-6">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Supported Payment Methods</h2>
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Visa</span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Mastercard</span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">American Express</span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">PayPal</span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Apple Pay</span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Google Pay</span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">UPI</span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">Bank Transfer</span>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t pt-6 mt-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="font-bold text-gray-800">Ready to get started?</h3>
            <p className="text-gray-600">Join thousands of businesses using Jasivik</p>
          </div>
          <a href="#" className="mt-4 md:mt-0 bg-blue-600 text-white px-5 py-2 rounded-md font-medium">
            Sign Up Free
          </a>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-gray-50 p-4 rounded-md mt-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-bold text-gray-800">Transparent Pricing</h3>
            <p className="text-gray-600">2.9% + $0.30 per successful transaction</p>
          </div>
          <a href="#" className="text-blue-600 font-medium">
            View pricing details
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutJaisvik;
