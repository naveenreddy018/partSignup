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


    </div>
  )
}

export default Herosection
