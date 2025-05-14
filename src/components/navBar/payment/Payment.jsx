import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const features = [
  {
    section: 'ACCEPT PAYMENTS ONLINE',
    items: [
      { icon: '💳', title: 'Payment Aggregator', desc: 'Accepting payments made easy for businesses' },
      { icon: '🌐', title: 'Payment Gateway', desc: 'Payments on your Website & App' },
      { icon: '🔗', title: 'Payment Links', desc: 'Create & send links to collect money' },
    ],
  },
  {
    section: 'ACCEPT PAYMENTS OFFLINE',
    items: [
      { icon: '🧾', title: 'Jaisvik POS', desc: 'Accept Payments In-Store', isNew: true },
    ],
  },
  {
    section: 'PARTNER APPS',
    items: [
      { icon: '💬', title: 'Payments on WhatsApp', desc: 'Accept payments within WhatsApp chat', isNew: true },
      { icon: '🔗', title: 'Optimizer', desc: 'Manage multiple payment gateways', isNew: true },
    ],
  },
];

const Payment = () => {
  return (
    <div style={styles.wrapper}>
      <h2 style={styles.heading}>Features</h2>
      <div style={styles.grid}>
        {features.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            {section.section && <h3 style={styles.sectionTitle}>{section.section}</h3>}
            <div className="feature-grid" style={styles.featureGrid}>
              {section.items.map((item, idx) => (
                <div key={idx} className="feature-tile" style={styles.tile}>
                  <div style={styles.icon}>{item.icon}</div>
                  <div className="slide-title" style={styles.title}>
                    {item.title}
                  </div>
                  <div style={styles.desc}>{item.desc}</div>
                  {item.isNew && (
                    <span style={styles.newBadge}>NEW</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .feature-tile {
          transition: all 0.3s ease-in-out;
          position: relative;
          border-bottom: 2px solid transparent;
        }

        .feature-tile:hover {
          background-color: #e8f0fe;
          border-bottom: 2px solid #007bff;
        }

        .slide-title {
          transition: transform 0.3s ease;
          font-weight: 600;
          font-size: 0.75rem;
          color: #007bff;
        }

        .feature-tile:hover .slide-title {
          transform: translateX(6px);
        }

        .newBadge {
          background-color: #e6f4ea;
          color: #198754;
          font-size: 0.6rem;
          font-weight: 500;
          margin-left: 0.5rem;
          padding: 0.2rem 0.4rem;
          border-radius: 0.25rem;
        }

        @media (max-width: 576px) {
          .feature-tile {
            padding: 0.6rem;
          }

          .slide-title {
            font-size: 0.7rem;
          }

          .newBadge {
            font-size: 0.55rem;
            padding: 0.15rem 0.3rem;
          }
        }
      `}</style>
    </div>
  );
};

const styles = {
  wrapper: {
    background: '#ffffff',
    padding: '1rem',
    minHeight: '60vh',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    textAlign: 'center',
    color: '#0056b3',
    fontWeight: 700,
    marginBottom: '1.5rem',
    fontSize: '1.4rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '1rem',
  },
  sectionTitle: {
    fontSize: '1rem',
    fontWeight: 700,
    color: '#343a40',
    marginTop: '1.5rem',
  },
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '1rem',
  },
  tile: {
    background: '#f8f9fa',
    borderRadius: '0.5rem',
    padding: '0.6rem',
    textAlign: 'left',
    cursor: 'pointer',
    minHeight: '80px',
  },
  icon: {
    fontSize: '1.2rem',
    marginBottom: '0.2rem',
  },
  title: {
    marginBottom: '0.3rem',
  },
  desc: {
    fontSize: '0.65rem',
    color: '#495057',
  },
};

export default Payment;
