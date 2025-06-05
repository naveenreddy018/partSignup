// import React, { useState } from 'react';
// import { Container, Row, Col, Nav, Card } from 'react-bootstrap';
// import { BsChevronRight } from 'react-icons/bs';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const tabs = [
//   { key: 'gateway', label: 'Payment Gateway' },
//   { key: 'intl', label: 'International Payments' },
//   { key: 'optimizer', label: 'Optimizer' },
//   { key: 'token', label: 'TokenHQ + 4 Others' }
// ];

// const PaymentMethodsSection = () => {
//   const [activeTab, setActiveTab] = useState('gateway');

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'gateway': return <PaymentGatewayContent />;
//       case 'intl': return <InternationalPaymentsContent />;
//       case 'optimizer': return <OptimizerContent />;
//       case 'token': return <TokenHQContent />;
//       default: return <PaymentGatewayContent />;
//     }
//   };

//   return (
//     <Container
//       fluid
//       className="bg-white py-4"
//       style={{
//         width: window.innerWidth < 992 ? '100%' : '80%',
//         padding: window.innerWidth < 992 ? '0px' : '10px',
//         marginTop: '50px',
//       }}
//     >
//       {/* Row with two columns: left for the tabs, right for the content */}
//       <Row>
//         {/* Left side: Options (Tabs) */}
//         <Col xs={12} md={3} className="mb-3">
//           <div className="border-end">
//             <Nav className="flex-column">
//               {tabs.map(({ key, label }) => (
//                 <Nav.Item key={key}>
//                   <Nav.Link
//                     active={activeTab === key}
//                     onClick={() => setActiveTab(key)}
//                     className={`px-3 py-2 mb-2 ${activeTab === key
//                         ? 'text-primary fw-bold border-start border-3'
//                         : 'text-secondary border-0'
//                       }`}
//                   >
//                     {label}
//                   </Nav.Link>
//                 </Nav.Item>
//               ))}
//             </Nav>
//           </div>
//         </Col>

//         {/* Right side: Content */}
//         <Col xs={12} md={9}>
//           <Card className="border-0 mt-4">
//             <Card.Body className="p-4">{renderContent()}</Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// // Reusable Section Component
// const PaymentSection = ({ title, children }) => (
//   <div className="mb-5">
//     <h5 className="fw-bold mb-4">{title}</h5>
//     <Row className="align-items-center gy-4">{children}</Row>
//   </div>
// );

// // Dummy Content Component (replace with your actual content)
// const PaymentGatewayContent = () => (
//   <>
//     <PaymentSection title="Debit & Credit Cards">
//       <Col xs={6} sm={4} md={2}>
//         <div className="text-primary fw-bold" style={{ fontSize: '24px', fontStyle: 'italic' }}>VISA</div>
//       </Col>
//       <Col xs={6} sm={4} md={2}>
//         <div className="text-primary fw-bold" style={{ fontSize: '22px' }}>RuPay</div>
//         <div className="ms-1" style={{ width: 15, height: 15, backgroundColor: 'orange', borderRadius: '50%' }} />
//       </Col>
//       <Col xs={6} sm={4} md={2} className="d-flex">
//         <div style={{ width: 30, height: 30, backgroundColor: '#EB001B', borderRadius: '50%', marginRight: -10, zIndex: 1 }} />
//         <div style={{ width: 30, height: 30, backgroundColor: '#F79E1B', borderRadius: '50%' }} />
//       </Col>
//       <Col xs={6} sm={4} md={2}>
//         <div className="bg-primary text-white p-1 fw-bold" style={{ fontSize: 12 }}>Mastercard</div>
//       </Col>
//       <Col xs={6} sm={4} md={2}>
//         <div style={{ width: 30, height: 30, borderRadius: '50%', border: '2px solid #0077b6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//           <span className="text-primary fw-bold" style={{ fontSize: 14 }}>D</span>
//         </div>
//         <div className="ms-2">
//           <div className="fw-bold">Diners Club</div>
//           <div style={{ fontSize: 10 }}>INTERNATIONAL</div>
//         </div>
//       </Col>
//       {/* <Col xs={6} sm={4} md={2}>
//         <p className="text-secondary mb-0 small">+ other international cards, Corporate (Business) Credit Cards</p>
//       </Col> */}
//     </PaymentSection>

//     <PaymentSection title="UPI">
//       <Col xs={6} sm={4} md={2}>
//         <div className="text-secondary fw-bold">BHIM</div>
//         <div className="ms-1" style={{ width: 12, height: 12, backgroundColor: 'orange', borderRadius: '50%' }} />
//       </Col>
//       <Col xs={6} sm={4} md={2}>
//         <div className="d-flex align-items-center">
//           {['#4285F4', '#EA4335', '#FBBC05', '#34A853'].map((color, index) => (
//             <div key={index} style={{
//               width: 20, height: 20, borderRadius: '50%', backgroundColor: color,
//               marginLeft: index === 0 ? 0 : '-5px'
//             }} />
//           ))}
//           <div className="ms-2 text-secondary fw-bold">Pay</div>
//         </div>
//       </Col>
//       <Col xs={6} sm={4} md={2}>
//         <div style={{ width: 25, height: 25, backgroundColor: '#5f259f', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//           <span className="text-white">P</span>
//         </div>
//         <div className="ms-2 fw-bold" style={{ color: '#5f259f' }}>PhonePe</div>
//       </Col>
//       <Col xs={6} sm={4} md={2}>
//         <div className="fw-bold" style={{ color: '#002970' }}>pay<span style={{ color: '#00BAF2' }}>tm</span></div>
//       </Col>
//       <Col xs={6} sm={4} md={2}>
//         <div className="text-dark">amazon <span className="text-warning">pay</span></div>
//       </Col>
//       {/* <Col xs={6} sm={4} md={2}>
//         <p className="text-secondary mb-0 d-flex align-items-center">
//           + 51 Others <BsChevronRight className="ms-1" />
//         </p>
//       </Col> */}
//     </PaymentSection>
//   </>
// );

// // Placeholder components
// const InternationalPaymentsContent = () => <p>International Payment Options</p>;
// const OptimizerContent = () => <p>Optimizer Content</p>;
// const TokenHQContent = () => <p>TokenHQ Content</p>;

// export default PaymentMethodsSection;


import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const options = [
  {
    key: "gateway",
    label: "Payment Gateway",
    emoji: "💳",
    description: "Secure & fast payment processing",
  },
  {
    key: "intl",
    label: "International Payments",
    emoji: "🌍",
    description: "Accept payments worldwide",
  },
  {
    key: "optimizer",
    label: "Optimizer",
    emoji: "⚙️",
    description: "Maximize transaction efficiency",
  },
  {
    key: "token",
    label: "TokenHQ + 4 Others",
    emoji: "🔐",
    description: "Secure tokenized payments",
  },
];

const PaymentMethodsSection = () => {
  const [activeKey, setActiveKey] = useState("gateway");

  const renderContent = () => {
    switch (activeKey) {
      case "gateway":
        return <PaymentGatewayContent />;
      case "intl":
        return <InternationalPaymentsContent />;
      case "optimizer":
        return <OptimizerContent />;
      case "token":
        return <TokenHQContent />;
      default:
        return <PaymentGatewayContent />;
    }
  };

  return (
    <Container
      fluid="md"
      className="py-5"
      style={{
        maxWidth: 960,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#0a2540", // dark blue text
        backgroundColor: "#f9fbff", // very light blue-white background
        borderRadius: 16,
        padding: "2rem 1rem",
        boxShadow:
          "0 8px 32px rgba(0, 70, 204, 0.1), inset 0 0 20px rgba(0, 70, 204, 0.05)",
      }}
    >
      {/* Option Selector */}
      <Row className="mb-5 justify-content-center gx-4" style={{ userSelect: "none" }}>
        {options.map(({ key, label, emoji, description }) => {
          const isActive = activeKey === key;
          return (
            <Col
              key={key}
              xs={6}
              sm={4}
              md={3}
              style={{ perspective: "600px" }}
              aria-pressed={isActive}
            >
              <div
                role="button"
                tabIndex={0}
                onClick={() => setActiveKey(key)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setActiveKey(key);
                }}
                style={{
                  cursor: "pointer",
                  borderRadius: 20,
                  background: isActive
                    ? "linear-gradient(135deg, #007BFF, #66B2FF)" // bright blues
                    : "rgba(0, 123, 255, 0.08)", // subtle light blue
                  boxShadow: isActive
                    ? "0 20px 40px rgba(0, 123, 255, 0.4)"
                    : "0 8px 16px rgba(0, 123, 255, 0.12)",
                  padding: "1.8rem 1rem",
                  height: "220px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  backdropFilter: "blur(12px)",
                  transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                  transformStyle: "preserve-3d",
                  transform: isActive ? "scale(1.1) rotateY(10deg)" : "scale(1) rotateY(0deg)",
                  color: isActive ? "#ffffff" : "#004085",
                  boxSizing: "border-box",
                  position: "relative",
                  userSelect: "none",
                  willChange: "transform, box-shadow, background",
                  outline: "none",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.transform = "scale(1.05) rotateY(5deg)";
                    e.currentTarget.style.boxShadow =
                      "0 16px 32px rgba(0, 123, 255, 0.25)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.transform = "scale(1) rotateY(0deg)";
                    e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 123, 255, 0.12)";
                  }
                }}
              >
                {/* Emoji with bounce on active */}
                <div
                  aria-hidden="true"
                  style={{
                    fontSize: "3.5rem",
                    marginBottom: "1rem",
                    animation: isActive ? "bounce 1.5s infinite" : "none",
                    transformOrigin: "center bottom",
                    willChange: "transform",
                  }}
                >
                  {emoji}
                </div>

                {/* Label with animated underline */}
                <h5
                  style={{
                    margin: 0,
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    textAlign: "center",
                    position: "relative",
                    paddingBottom: "0.35rem",
                    color: "inherit",
                  }}
                >
                  {label}
                  {isActive && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "40%",
                        height: 4,
                        borderRadius: 2,
                        background:
                          "linear-gradient(90deg, #66B2FF, #007BFF, #66B2FF)",
                        boxShadow:
                          "0 0 8px 2px rgba(102,178,255,0.6), 0 0 20px 6px #007BFF",
                        animation: "slideInUnderline 0.4s ease forwards",
                      }}
                    />
                  )}
                </h5>

                {/* Description */}
                <p
                  style={{
                    marginTop: 6,
                    fontSize: "0.9rem",
                    lineHeight: 1.3,
                    textAlign: "center",
                    color: isActive ? "rgba(255,255,255,0.85)" : "#004085",
                  }}
                >
                  {description}
                </p>
              </div>
            </Col>
          );
        })}
      </Row>

      {/* Content Area */}
      <div
        key={activeKey}
        style={{
          backgroundColor: "rgba(0, 123, 255, 0.08)",
          padding: 32,
          borderRadius: 24,
          boxShadow:
            "inset 0 0 40px rgba(0, 123, 255, 0.12), 0 8px 32px rgba(0, 70, 204, 0.15)",
          minHeight: 280,
          color: "#004085",
          fontSize: "1rem",
          fontWeight: 400,
          lineHeight: 1.5,
          userSelect: "text",
          animation: "fadeSlideIn 0.5s ease forwards",
        }}
      >
        {renderContent()}
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-12%) scale(1.1);
          }
        }
        @keyframes slideInUnderline {
          0% {
            width: 0;
            opacity: 0;
          }
          100% {
            width: 40%;
            opacity: 1;
          }
        }
        @keyframes fadeSlideIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        div[role="button"]:focus {
          outline: 3px solid #66B2FF;
          outline-offset: 4px;
          box-shadow: 0 0 12px #66B2FF;
        }
      `}</style>
    </Container>
  );
};

const PaymentGatewayContent = () => (
  <>
    <h3 style={{ color: "#007BFF", marginBottom: 20, fontWeight: 700 }}>
      Debit & Credit Cards
    </h3>
    <Row className="gy-3" style={{ userSelect: "none" }}>
      <Col xs={4} sm={3} md={2}>
        <div
          style={{
            fontSize: "24px",
            fontWeight: "700",
            fontStyle: "italic",
            color: "#0056b3",
            userSelect: "none",
          }}
        >
          VISA
        </div>
      </Col>
      <Col xs={4} sm={3} md={2}>
        <div style={{ fontWeight: "700", fontSize: "22px", color: "#0056b3" }}>
          RuPay
        </div>
        <div
          style={{
            width: 15,
            height: 15,
            backgroundColor: "#1a73e8",
            borderRadius: "50%",
            marginTop: 4,
          }}
        />
      </Col>
      <Col xs={4} sm={3} md={2} className="d-flex">
        <div
          style={{
            width: 30,
            height: 30,
            backgroundColor: "#004085",
            borderRadius: "50%",
            marginRight: -10,
            zIndex: 1,
          }}
        />
        <div
          style={{
            width: 30,
            height: 30,
            backgroundColor: "#66B2FF",
            borderRadius: "50%",
          }}
        />
      </Col>
      <Col xs={4} sm={3} md={2}>
        <div
          style={{
            backgroundColor: "#007BFF",
            color: "white",
            padding: "2px 6px",
            fontWeight: "700",
            fontSize: 12,
            borderRadius: 6,
            userSelect: "none",
          }}
        >
          Mastercard
        </div>
      </Col>
      <Col
        xs={4}
        sm={3}
        md={2}
        className="d-flex align-items-center"
        style={{ userSelect: "none" }}
      >
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: "50%",
            border: "2px solid #007BFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontWeight: "700", fontSize: 14, color: "#007BFF" }}>
            D
          </span>
        </div>
        <div style={{ marginLeft: 8 }}>
          <div style={{ fontWeight: "700", color: "#0056b3" }}>Diners Club</div>
          <div style={{ fontSize: 10, color: "#99bbff" }}>INTERNATIONAL</div>
        </div>
      </Col>
    </Row>

    <h3
      style={{ color: "#007BFF", marginTop: 40, marginBottom: 20, fontWeight: 700 }}
    >
      UPI
    </h3>
    <Row className="gy-3" style={{ userSelect: "none" }}>
      <Col xs={4} sm={3} md={2}>
        <div style={{ fontWeight: "700", color: "#004085" }}>BHIM</div>
        <div
          style={{
            width: 12,
            height: 12,
            backgroundColor: "#1a73e8",
            borderRadius: "50%",
            marginTop: 4,
          }}
        />
      </Col>
      <Col xs={4} sm={3} md={2} className="d-flex align-items-center">
        {["#4285F4", "#EA4335", "#FBBC05", "#34A853"].map((color, index) => (
          <div
            key={index}
            style={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              backgroundColor: color,
              marginLeft: index === 0 ? 0 : -5,
              boxShadow: "0 0 8px rgba(0,0,0,0.2)",
            }}
          />
        ))}
        <div
          style={{
            marginLeft: 8,
            fontWeight: "700",
            color: "#004085",
            userSelect: "none",
          }}
        >
          Pay
        </div>
      </Col>
      <Col
        xs={4}
        sm={3}
        md={2}
        className="d-flex align-items-center"
        style={{ userSelect: "none" }}
      >
        <div
          style={{
            width: 25,
            height: 25,
            backgroundColor: "#1546a0",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 8px #1546a0",
          }}
        >
          <span style={{ color: "white", fontWeight: "700" }}>P</span>
        </div>
        <div style={{ marginLeft: 8, fontWeight: "700", color: "#1546a0" }}>
          PhonePe
        </div>
      </Col>
      <Col
        xs={4}
        sm={3}
        md={2}
        style={{ fontWeight: "700", color: "#002970", userSelect: "none" }}
      >
        pay<span style={{ color: "#0056b3" }}>tm</span>
      </Col>
      <Col xs={4} sm={3} md={2} style={{ color: "#004085", userSelect: "none" }}>
        amazon <span style={{ color: "#1a73e8" }}>pay</span>
      </Col>
    </Row>
  </>
);

const InternationalPaymentsContent = () => (
  <p>
    International payment options help you accept payments globally, with
    currency conversion, multi-currency support, and fraud protection.
  </p>
);
const OptimizerContent = () => (
  <p>
    The optimizer helps improve transaction success rates, reduce
    failures, and streamline payment flows with intelligent routing.
  </p>
);
const TokenHQContent = () => (
  <p>
    TokenHQ provides secure tokenization solutions along with four other
    premium features for seamless payment security.
  </p>
);

export default PaymentMethodsSection;
