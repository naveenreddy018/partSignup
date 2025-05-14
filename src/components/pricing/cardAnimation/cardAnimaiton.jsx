import React, { useEffect, useState, useRef } from 'react';

const CardPaymentAnimation = () => {
  const [animationState, setAnimationState] = useState('initial');
  const terminalRef = useRef(null);
  const cardRef = useRef(null);
  const handRef = useRef(null);
  
  useEffect(() => {
    const runAnimation = () => {
      setTimeout(() => setAnimationState('hand-enter'), 500);
      setTimeout(() => setAnimationState('swipe-start'), 1500);
      setTimeout(() => setAnimationState('swipe-middle'), 2000);
      setTimeout(() => setAnimationState('swipe-end'), 2500);
      setTimeout(() => setAnimationState('processing'), 3000);
      setTimeout(() => setAnimationState('approved'), 4000);
      setTimeout(() => setAnimationState('hand-exit'), 5000);
      setTimeout(() => setAnimationState('reset'), 6500);
      setTimeout(() => runAnimation(), 7000);
    };
    
    runAnimation();
    
    return () => {
      // Clear any timeouts when unmounting
    };
  }, []);
  
  // Animation Classes
  const handClass = () => {
    switch(animationState) {
      case 'initial': return 'hand-hidden';
      case 'hand-enter': return 'hand-enter';
      case 'swipe-start': return 'hand-swipe-start';
      case 'swipe-middle': return 'hand-swipe-middle';
      case 'swipe-end': return 'hand-swipe-end';
      case 'processing': return 'hand-hold';
      case 'approved': return 'hand-approved';
      case 'hand-exit': return 'hand-exit';
      case 'reset': return 'hand-hidden';
      default: return '';
    }
  };
  
  const cardClass = () => {
    switch(animationState) {
      case 'initial': return 'card-hidden';
      case 'hand-enter': return 'card-enter';
      case 'swipe-start': return 'card-swipe-start';
      case 'swipe-middle': return 'card-swipe-middle';
      case 'swipe-end': return 'card-swipe-end';
      case 'processing': return 'card-processing';
      case 'approved': return 'card-approved';
      case 'hand-exit': return 'card-exit';
      case 'reset': return 'card-hidden';
      default: return '';
    }
  };
  
  const terminalClass = () => {
    switch(animationState) {
      case 'processing': return 'terminal-processing';
      case 'approved': return 'terminal-approved';
      default: return '';
    }
  };
  
  const screenText = () => {
    switch(animationState) {
      case 'initial': return 'Please Pay';
      case 'hand-enter': return 'Ready';
      case 'swipe-start': 
      case 'swipe-middle': 
      case 'swipe-end': return 'Reading Card';
      case 'processing': return 'Processing...';
      case 'approved': return 'Approved! ✓';
      case 'hand-exit': 
      case 'reset': return 'Thank You!';
      default: return 'Please Pay';
    }
  };

  return (
    <div style={{ 
        maxWidth: '1000px',
        margin: '2rem auto',
        padding: '0 15px'
      }}>
      <div style={{ 
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div style={{ 
          width: '100%',
          maxWidth: '300px'
        }}>
          <div style={{ 
            //  background: 'linear-gradient(180deg, #2D2684 0%, #231D69 100%)',
            borderRadius: '8px',
            // boxShadow: '0 1rem 3rem rgba(0,0,0,.175)',
            border: 'none'
          }}>
            <div style={{ 
              padding: '3rem'
            }}>
                {/* <h4 style={{ 
                    textAlign: 'center',
                    marginBottom: '1.5rem'
                }}>Jasivik Pay Terminal</h4>
                */}
              <div className="payment-animation-container position-relative mx-auto" style={{ height: '150px', width: '250px', overflow: 'hidden' }}>
                {/* Payment Terminal */}
                <div 
                  ref={terminalRef}
                  className={`payment-terminal ${terminalClass()}`}
                  style={{
                    position: 'absolute',
                    width: '250px',
                    height: '150px',
                    backgroundColor: '#2d2d2d',
                    borderRadius: '10px',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                    zIndex: 1
                  }}
                >
                  {/* Card Reader */}
                  <div 
                    className="card-reader"
                    style={{
                      position: 'absolute',
                      width: '80%',
                      height: '10px',
                      backgroundColor: '#1a1a1a',
                      top: '25px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      borderRadius: '3px',
                      zIndex: 2
                    }}
                  ></div>
                  
                  {/* Terminal Screen */}
                  <div 
                    className="terminal-screen"
                    style={{
                      position: 'absolute',
                      width: '80%',
                      height: '50px',
                      backgroundColor: '#75D1A0',
                      bottom: '20px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      borderRadius: '5px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontWeight: 'bold',
                      fontSize: '14px',
                      color: '#333',
                      transition: 'background-color 0.3s ease'
                    }}
                  >
                    {screenText()}
                  </div>
                </div>
                
                {/* Credit Card */}
                <div 
                  ref={cardRef}
                  className={`credit-card ${cardClass()}`}
                  style={{
                    position: 'absolute',
                    width: '120px',
                    height: '70px',
                    backgroundColor: '#1e88e5',
                    borderRadius: '8px',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-80%, 20%) rotate(0deg)',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                    zIndex: 3,
                    opacity: 0,
                    transition: 'all 0.5s ease-in-out'
                  }}
                >
                  {/* Card Chip */}
                  <div 
                    className="card-chip"
                    style={{
                      position: 'absolute',
                      width: '30px',
                      height: '20px',
                      backgroundColor: '#ffd700',
                      top: '15px',
                      left: '15px',
                      borderRadius: '3px'
                    }}
                  ></div>
                  
                  {/* Card Number */}
                  <div 
                    className="card-number"
                    style={{
                      position: 'absolute',
                      width: '80%',
                      height: '10px',
                      backgroundColor: 'rgba(255,255,255,0.4)',
                      bottom: '15px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      borderRadius: '2px'
                    }}
                  ></div>
                </div>
                
                {/* Hand */}
                <div 
                  ref={handRef}
                  className={`hand ${handClass()}`}
                  style={{
                    position: 'absolute',
                    width: '120px',
                    height: '80px',
                    backgroundImage: 'radial-gradient(#f5d0ba, #e5b299)',
                    borderRadius: '20px 20px 50px 20px',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-130%, 50%) rotate(45deg)',
                    zIndex: 2,
                    opacity: 0,
                    transition: 'all 0.5s ease-in-out'
                  }}
                >
                  {/* Thumb */}
                  <div 
                    className="thumb"
                    style={{
                      position: 'absolute',
                      width: '35px',
                      height: '60px',
                      backgroundImage: 'radial-gradient(#f5d0ba, #e5b299)',
                      borderRadius: '10px 10px 20px 20px',
                      bottom: '40px',
                      left: '-10px',
                      transform: 'rotate(-30deg)',
                      transformOrigin: 'bottom right'
                    }}
                  ></div>
                </div>
              </div>
              
              <div style={{ 
                textAlign: 'center',
                marginTop: '1.5rem'
              }}>
                <p style={{ 
                  color: '#6c757d',
                  fontSize: '0.9rem'
                }}>Contactless payment by Jasivik Pay</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes glow {
          0% { box-shadow: 0 0 5px rgba(117, 209, 160, 0.5); }
          50% { box-shadow: 0 0 20px rgba(117, 209, 160, 0.8); }
          100% { box-shadow: 0 0 5px rgba(117, 209, 160, 0.5); }
        }
        
        /* Hand animations */
        .hand-hidden {
          opacity: 0;
          transform: translate(-130%, 70%) rotate(45deg);
        }
        
        .hand-enter {
          opacity: 1;
          transform: translate(-130%, 50%) rotate(45deg);
        }
        
        .hand-swipe-start {
          opacity: 1;
          transform: translate(-100%, 40%) rotate(30deg);
        }
        
        .hand-swipe-middle {
          opacity: 1;
          transform: translate(-50%, 40%) rotate(20deg);
        }
        
        .hand-swipe-end {
          opacity: 1;
          transform: translate(0%, 40%) rotate(15deg);
        }
        
        .hand-hold {
          opacity: 1;
          transform: translate(0%, 40%) rotate(15deg);
        }
        
        .hand-approved {
          opacity: 1;
          transform: translate(0%, 30%) rotate(10deg);
        }
        
        .hand-exit {
          opacity: 0;
          transform: translate(50%, 0%) rotate(0deg);
        }
        
        /* Card animations */
        .card-hidden {
          opacity: 0;
          transform: translate(-80%, 20%) rotate(0deg);
        }
        
        .card-enter {
          opacity: 1;
          transform: translate(-80%, 20%) rotate(0deg);
        }
        
        .card-swipe-start {
          opacity: 1;
          transform: translate(-50%, 0%) rotate(-5deg);
        }
        
        .card-swipe-middle {
          opacity: 1;
          transform: translate(0%, -10%) rotate(-10deg);
        }
        
        .card-swipe-end {
          opacity: 1;
          transform: translate(50%, -10%) rotate(-10deg);
        }
        
        .card-processing {
          opacity: 1;
          transform: translate(50%, -10%) rotate(-10deg);
        }
        
        .card-approved {
          opacity: 1;
          transform: translate(50%, -20%) rotate(-15deg);
        }
        
        .card-exit {
          opacity: 0;
          transform: translate(100%, -30%) rotate(-20deg);
        }
        
        /* Terminal animations */
        .terminal-processing .terminal-screen {
          background-color: #ffc107 !important;
          animation: glow 1s infinite;
        }
        
        .terminal-approved .terminal-screen {
          background-color: #75D1A0 !important;
          animation: none;
        }
      `}</style>
    </div>
  );
};

export default CardPaymentAnimation;