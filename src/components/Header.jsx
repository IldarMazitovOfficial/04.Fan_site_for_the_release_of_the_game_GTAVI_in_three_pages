import React, { useState, useEffect } from 'react';

function App() {
  const [timeLeft, setTimeLeft] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2027-01-07T00:00:00');
    
    const interval = setInterval(() => {
      const now = new Date();
      const timeDifference = targetDate - now;

      if (timeDifference <= 0) {
        clearInterval(interval);
        setTimeLeft('Время настало');
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        setTimeLeft(`${days}:${formattedHours}:${formattedMinutes}:${formattedSeconds}`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleMouseEnter = () => setShowTooltip(true);
  const handleMouseLeave = () => setShowTooltip(false);

  return (
    <div>
      <header style={{ 
        backgroundColor: 'black', 
        padding: '10px', 
        display: 'flex', 
        alignItems: 'center',  
        justifyContent: 'space-between'  
      }}>
        <a 
          href="https://www.rockstargames.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ 
            display: 'block', 
            width: '1.5%', 
            height: 'auto', 
            marginTop: '5px' 
          }}
          className="complex-glow"
        >
          <img 
            src="/1rockstargames.png" 
            alt="Rockstar Games"
            style={{ width: '100%', height: 'auto' }} 
          />
        </a>
        <span 
          className="gta-title"
          style={{ 
            color: 'white', 
            fontSize: '24px', 
            textTransform: 'uppercase', 
            margin: '0 10px', 
            textAlign: 'center', 
            flexGrow: 1,
            fontWeight: 'bold',
            letterSpacing: '1px'
          }}
        >
          GRAND THEFT AUTO VI
        </span>
        <span 
          style={{ color: 'white', position: 'relative' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span style={{ color: '#FF69B4' }}>{timeLeft}</span> {/* Светло-розовый цвет для текста обратного отсчета */}
          {showTooltip && (
          <div 
      style={{
      position: 'absolute',
      bottom: '-35px', 
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: '#FFB6C1',
      color: '#333',
      padding: '5px 10px',
      borderRadius: '5px',
      border: '2px solid #FFB6C1',
      fontSize: '12px',
      whiteSpace: 'nowrap',
      animation: showTooltip ? 'fadeIn 0.5s forwards' : 'fadeOut 0.5s forwards',
      zIndex: 1000,
    }}
  >
    07.01.2027
  </div>
)}
        </span>
      </header>

      <style>
  {`
    @keyframes fadeIn {
      0% {
        opacity: 0;
        transform: translateX(-50%) translateY(10px);
      }
      100% {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
      }
    }

    @keyframes fadeOut {
      0% {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
      }
      100% {
        opacity: 0;
        transform: translateX(-50%) translateY(10px);
      }
    }

    @keyframes glowEffect {
  0%, 80% {
    color: white;
    text-shadow: none;
  }
  90% {
    color: rgb(255, 110, 187); /* Ярко-розовый цвет */
    text-shadow: 0 0 15px rgb(255, 110, 187), 0 0 25px rgb(255, 110, 187), 0 0 40px rgb(255, 110, 187), 0 0 60px rgb(255, 110, 187);
  }
  100% {
    color: white;
    text-shadow: none;
    transition: color 10s, text-shadow 10s;
  }
}

.gta-title {
  animation: glowEffect 30s infinite; /* Более продолжительный эффект */
  animation-delay: 5s;
}

    .complex-glow img {
      transition: all 0.4s ease-in-out;
    }

    .complex-glow:hover img {
      filter: drop-shadow(0 0 20px rgba(255, 105, 180, 0.8)) drop-shadow(0 0 50px rgba(255, 182, 193, 0.9));
      transform: scale(1.15);
    }

    .complex-glow:hover img::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: linear-gradient(45deg, rgba(255, 182, 193, 0.5), rgba(255, 105, 180, 0.7));
      animation: pulsate 1.5s infinite;
    }

    @keyframes pulsate {
      0% {
        transform: scale(1);
        opacity: 0.7;
      }
      50% {
        transform: scale(1.2);
        opacity: 1;
      }
      100% {
        transform: scale(1);
        opacity: 0.7;
      }
    }
  `}
</style>
    </div>
  );
}

export default App;