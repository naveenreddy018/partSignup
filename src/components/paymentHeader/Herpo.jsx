import React from 'react'
import assets from '../../assets/assests'

function Herosection() {
    
  const featuresList = [
    {
      icon: assets.upi_id,
      title: "UPI",
      description: "Instant UPI payments with dynamic QR support.",
    },
    {
      icon: assets.cardspayments,
      title: "Cards",
      description: "Accept all major credit & debit cards.",
    },
    {
      icon: assets.netBanking,
      title: "Netbanking",
      description: "Supports 50+ banks in India for quick checkout.",
    },
  ];

  const quickActions = [
    "Accept Payments",
    "Make Payments",
    "Start Business Banking",
    "Get Working Capital",
    "Automate Payroll",
  ];
  return (
    <div>
    
      {/* Quick Actions */}
      <div
        style={{
          background: "#fff",
          margin: "50px auto 40px",
          maxWidth: "1140px",
          padding: "24px",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <label style={{ fontWeight: "bold" }}>I'm here to</label>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "12px" }}>
          {quickActions.map((action, i) => (
            <button
              key={i}
              style={{
                border: "1px solid #ccc",
                padding: "8px 12px",
                borderRadius: "4px",
                background: "transparent",
              }}
            >
              {action}
            </button>
          ))}
        </div>
      </div>

      {/* Features */}
      <div style={{ maxWidth: "1140px", margin: "50px auto 40px", padding: "0 16px" }}>
        <h2 style={{ textAlign: "center", fontWeight: "bold", marginBottom: "24px" }}>
          Payment Gateway Features
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "center" }}>
          {featuresList.map((feature, index) => (
            <div
              key={index}
              style={{
                flex: "1 1 30%",
                background: "#fff",
                padding: "24px",
                textAlign: "center",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <img src={feature.icon} alt={feature.title} height="100" style={{ marginBottom: "12px" }} />
              <h5>{feature.title}</h5>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

         <div style={{ maxWidth: "1140px", margin: "40px auto", textAlign: "center" }}>
        <h4 style={{ fontWeight: "bold" }}>Trusted by 10,000+ Businesses</h4>
        <p style={{ color: "#6c757d" }}>Startups, Enterprises, MSMEs trust Jaisvik Pay</p>
        <img
          src="https://razorpay.com/build/browser/static/brands.20ef423c.png"
          alt="Trusted Brands"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>

      {/* Footer */}
      <div style={{ background: "#222", color: "#fff", padding: "40px 16px" }}>
        <div
          style={{
            maxWidth: "1140px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
          }}
        >
          <div style={{ flex: "1 1 50%" }}>
            <h5>JAISVIK SOFTWARE</h5>
            <p>Revolutionizing payments for modern businesses.</p>
          </div>
          <div>
            <h6>Company</h6>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li><a href="#" style={{ color: "#fff" }}>About Us</a></li>
              <li><a href="#" style={{ color: "#fff" }}>Careers</a></li>
              <li><a href="#" style={{ color: "#fff" }}>Contact</a></li>
            </ul>
          </div>
          <div>
            <h6>Solutions</h6>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li><a href="#" style={{ color: "#fff" }}>Payment Gateway</a></li>
              <li><a href="#" style={{ color: "#fff" }}>Payouts</a></li>
              <li><a href="#" style={{ color: "#fff" }}>Payroll</a></li>
            </ul>
          </div>
        </div>
        <hr style={{ borderColor: "#555" }} />
        <p style={{ textAlign: "center", marginTop: "16px" }}>
          © 2025 Jaisvik Software Pvt Ltd. All rights reserved.
        </p>
      </div>


    </div>
  )
}

export default Herosection
