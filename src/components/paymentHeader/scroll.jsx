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
  assets.visaIcon ,
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
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const containerStyle = {
    width: '100%',
    overflow: 'hidden',
    backgroundColor: '#fff',
    padding: '20px 0',
    margin : "50px 0px",
    backgroundColor : "whiteSmoke",
    padding : "30px 0px"
  };

  const trackStyle = {
    display: 'flex',
    animation: 'scrollLeft 30s linear infinite',
    width: 'fit-content',
  };

  const logoBoxStyle = {
    width: '150px',
    height: '50px',
    margin: '0 20px',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
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
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BankScroll;
