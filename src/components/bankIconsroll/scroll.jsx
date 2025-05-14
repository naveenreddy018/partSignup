import React, { useEffect } from 'react';
import assets from '../../assets/assests';
const bankLogos = [
  assets.upi_id,
  assets.sbiIcon,
  assets.iciciIcon,
  assets.masterIcon,
  assets.visaIcon,
  assets.unionIcon,
  assets.indianBankIcon,
  assets.indian_Overseas_BankIcon,
  assets.AxisIcon,
  assets.hdfcIcon,
  assets.masterIcon,
  assets.AxisIcon,
  assets.iciciIcon,
  assets.unionIcon,
  assets.visaIcon,
  assets.hdfcIcon,
  assets.sbiIcon,
  assets.indian_Overseas_BankIcon,
  assets.indianBankIcon,
  assets.sbiIcon,
  assets.upi_id,
  assets.AxisIcon
];

const BankScroll = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes scrollLeft {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }

      @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const containerStyle = {
    width: '100%',
    overflow: 'hidden',
    padding: '30px 0',
    margin: '50px 0',
    background: 'linear-gradient(-45deg, #f8f9fa, #e6f0ff, #f9f9f9, #eaf4ff)',
    backgroundSize: '400% 400%',
    animation: 'gradientShift 25s ease infinite',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
  };

  const trackStyle = {
    display: 'flex',
    animation: 'scrollLeft 30s linear infinite',
    width: 'fit-content',
    alignItems: 'center',
  };

  const logoBoxStyle = {
    width: '130px',
    height: '50px',
    margin: '0 15px',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    borderRadius: '10px',
    filter: 'grayscale(0%)',
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.filter = 'grayscale(100%)';
    e.currentTarget.style.transform = 'scale(1.05)';
    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.3)';
    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.filter = 'grayscale(0%)';
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.backgroundColor = 'transparent';
    e.currentTarget.style.boxShadow = 'none';
  };

  return (
    <div style={containerStyle}>
      <div style={trackStyle}>
        {[...bankLogos, ...bankLogos].map((logo, index) => (
          <div
            key={index}
            style={{
              ...logoBoxStyle,
              backgroundImage: `url(${logo})`,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
    </div>
  );
};

export default BankScroll;
