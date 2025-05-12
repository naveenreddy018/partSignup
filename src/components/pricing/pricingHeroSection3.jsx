
import React, { useEffect, useRef } from 'react';
import assets from '../../assets/assests';

const JasivikPayPage = () => {
  // Refs for different sections
  const netbankingRef = useRef(null);
  const walletsRef = useRef(null);
  const blueSectionRef = useRef(null);
  const featureItemsRef = useRef([]);

  useEffect(() => {
    // Add keyframe animations to the document
    const style = document.createElement('style');
    // style.innerHTML = `
    //   @keyframes bounceUp {
    //     0% {
    //       opacity: 0;
    //       transform: translateY(50px);
    //     }
    //     60% {
    //       opacity: 1;
    //       transform: translateY(-10px);
    //     }
    //     80% {
    //       transform: translateY(5px);
    //     }
    //     100% {
    //       transform: translateY(0);
    //     }
    //   }

    //   .animate-on-scroll {
    //     opacity: 0;
    //   }

    //   .animate-active {
    //     animation: bounceUp 0.8s ease forwards;
    //   }

    //   .staggered-item {
    //     opacity: 0;
    //   }
    // `;
    document.head.appendChild(style);

    const observerOptions = {
      root: null, 
      rootMargin: '0px',
      threshold: 0.1 
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {

          if (entry.target.classList.contains('staggered-container')) {

            const children = Array.from(entry.target.querySelectorAll('.staggered-item'));
            children.forEach((child, index) => {
              setTimeout(() => {
                child.style.animation = `bounceUp 0.8s ease forwards`;
                child.style.opacity = 1;
              }, index * 100);
            });
          } else {

            entry.target.classList.add('animate-active');
          }

          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (netbankingRef.current) {
      observer.observe(netbankingRef.current);
    }
    
    if (walletsRef.current) {
      observer.observe(walletsRef.current);
    }
    
    if (blueSectionRef.current) {
      observer.observe(blueSectionRef.current);
    }

 
    featureItemsRef.current.forEach(item => {
      if (item) observer.observe(item);
    });

    return () => {
      // Clean up
      document.head.removeChild(style);
      observer.disconnect();
    };
  }, []);

  const styles = {
    mainContainer: {
            width : window.innerWidth < 992 ? "100%" : "80%",
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    section: {
      marginBottom: '30px',
    },
    sectionTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    optionBox: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '15px',
      background: '#fff',
      borderRadius: '4px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      height: '60px',
      cursor: 'pointer',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    optionBoxHover: {

      boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
    },
    optionImage: {
      maxWidth: '100%',
      maxHeight: '40px',
      objectFit: 'contain',
    },
    moreOptions: {
      color: '#3366cc',
      fontSize: '14px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      height: '60px',
    },
    blueSection: {
      backgroundColor: '#0066ff',
      color: 'white',
      borderRadius: '15px',
      padding: '30px',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 10px 25px rgba(0, 102, 255, 0.3)',
    },
    starText: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '25px',
      fontSize: '18px',
      fontWeight: 'bold',
    },
    star: {
      color: '#ffcc00',
      marginRight: '10px',
      fontSize: '24px',
    },
    featureItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '15px',
      padding: '10px',
      borderRadius: '8px',
      transition: 'background-color 0.3s ease',
    },
    featureItemHover: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    featureIcon: {
      backgroundColor: 'white',
      color: '#0066ff',
      borderRadius: '50%',
      width: '36px',
      height: '36px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: '10px',
      transition: 'transform 0.3s ease',
    },
    featureIconHover: {
      transform: 'rotate(10deg)',
    },
    featureText: {
      fontWeight: 'bold',
      fontSize: '16px',
    },
    imagesContainer: {
      position: 'absolute',
      right: '30px',
      top: '50%',
      transform: 'translateY(-50%)',
    },
    phoneImage: {
      maxWidth: '300px',
      height: 'auto',
    },
    coinsImage: {
      position: 'absolute',
      width: '80px',
      bottom: '-20px',
      left: '50%',
      transform: 'translateX(-50%)',
    },
  };

  // const handleMouseOver = (e, hoverStyle) => {
  //   Object.entries(hoverStyle).forEach(([key, value]) => {
  //     e.currentTarget.style[key] = value;
  //   });
  // };

  // const handleMouseOut = (e, originalStyle) => {
  //   Object.entries(originalStyle).forEach(([key, value]) => {
  //     e.currentTarget.style[key] = value;
  //   });
  // };

  const banks = [
    { name: 'ICICI Bank', logo: assets.iciciIcon },
    { name: 'Kotak Bank', logo: assets.hdfcIcon },
    { name: 'AXIS Bank', logo: assets.AxisIcon },
    { name: 'HDFC Bank', logo: assets.hdfcIcon },
    { name: 'SBI', logo: assets.sbiIcon },
  ];


  const wallets = [
    { name: 'MobiKwik', logo: assets.mobiwik },
    { name: 'PayZapp', logo: assets.payzappIcon },
    { name: 'FreeCharge', logo: assets.freecharge },
    { name: 'JioMoney', logo: assets.jiomoney },
    { name: 'Airtel Money', logo: assets.airtelmoney },
    { name: 'PayPal', logo: assets.paypal },
  ];

 
  const features = [
    { name: 'Payment Links', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></svg> },
    { name: 'Payment Pages', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path></svg> },
    { name: 'Payment Buttons', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 12H5V7h14v10z"></path><path d="M7 9h2v6H7zm4 0h2v6h-2zm4 0h2v6h-2z"></path></svg> },
    { name: 'Invoices', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"></path><path d="M6 10h4v2H6zm0 4h4v2H6zm10-6h-4v2h4zm0 4h-4v2h4z"></path></svg> },
  ];

  return (
    <div style={styles.mainContainer}>
      {/* Netbanking Section */}
      <div 
        ref={netbankingRef} 
        style={styles.section} 
        className="animate-on-scroll"
      >
        <h2 style={styles.sectionTitle}>Netbanking</h2>
        <div 
          className="row staggered-container" 
          style={{ display: 'flex', flexWrap: 'wrap', margin: '0 -10px' }}
        >
          {banks.map((bank, index) => (
            <div 
              key={index} 
              className="col-md-2 col-sm-4 col-6 staggered-item" 
              style={{ padding: '0 10px', marginBottom: '15px' }}
            >
              <div 
                style={styles.optionBox}
                // onMouseOver={(e) => handleMouseOver(e, styles.optionBoxHover)}
                // onMouseOut={(e) => handleMouseOut(e, { transform: 'translateY(0)', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' })}
              >
                <img src={bank.logo} alt={bank.name} style={styles.optionImage} />
              </div>
            </div>
          ))}
          <div 
            className="col-md-2 col-sm-4 col-6 staggered-item" 
            style={{ padding: '0 10px', marginBottom: '15px' }}
          >
            <div style={styles.moreOptions}>+ 67 Others &gt;</div>
          </div>
        </div>
      </div>

      {/* Wallets Section */}
      <div 
        ref={walletsRef} 
        style={styles.section}
        className="animate-on-scroll"
      >
        <h2 style={styles.sectionTitle}>Wallets</h2>
        <div 
          className="row staggered-container" 
          style={{ display: 'flex', flexWrap: 'wrap', margin: '0 -10px' }}
        >
          {wallets.map((wallet, index) => (
            <div 
              key={index} 
              className="col-md-2 col-sm-4 col-6 staggered-item" 
              style={{ padding: '0 10px', marginBottom: '15px' }}
            >
              <div 
                style={styles.optionBox}
                // onMouseOver={(e) => handleMouseOver(e, styles.optionBoxHover)}
                // onMouseOut={(e) => handleMouseOut(e, { transform: 'translateY(0)', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' })}
              >
                <img src={wallet.logo} alt={wallet.name} style={styles.optionImage} />
              </div>
            </div>
          ))}
          <div 
            className="col-md-2 col-sm-4 col-6 staggered-item" 
            style={{ padding: '0 10px', marginBottom: '15px' }}
          >
            <div style={styles.moreOptions}>+ 4 Others &gt;</div>
          </div>
        </div>
      </div>

      {/* Blue section with features */}
      <div 
        ref={blueSectionRef} 
        style={styles.blueSection}
        className="animate-on-scroll"
      >
        <div style={styles.starText}>
          <span style={styles.star}>★</span>
          <span>Use the entire suite of Jasivik Pay products at the same cost to accept payments efficiently:</span>
        </div>

        <div className="row" style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '20px' }}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="col-md-6" 
              style={{ marginBottom: '15px' }}
            >
              <div 
                ref={el => featureItemsRef.current[index] = el}
                className="animate-on-scroll"
                style={styles.featureItem}
                // onMouseOver={(e) => handleMouseOver(e, styles.featureItemHover)}
                // onMouseOut={(e) => handleMouseOut(e, { backgroundColor: 'transparent' })}
              >
                <div 
                  style={styles.featureIcon}
                  // onMouseOver={(e) => handleMouseOver(e, styles.featureIconHover)}
                  // onMouseOut={(e) => handleMouseOut(e, { transform: 'rotate(0deg)' })}
                >
                  {feature.icon}
                </div>
                <div style={styles.featureText}>{feature.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JasivikPayPage;