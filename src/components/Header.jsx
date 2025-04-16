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
          style={{ display: 'block', width: '2.5%', height: 'auto' }}
        >
          <img 
            src="/1rockstargames.png" 
            alt="Rockstar Games"
            style={{ width: '80%', height: 'auto' }} 
          />
        </a>
        <span style={{ 
          color: 'white', 
          fontSize: '24px', 
          textTransform: 'uppercase', 
          margin: '0 10px', 
          textAlign: 'center', 
          flexGrow: 1,
          fontWeight: 'bold',
          letterSpacing: '1px'
        }}>
          GRAND THEFT AUTO VI
        </span>
        <span 
          style={{ color: 'white', position: 'relative' }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span style={{ color: '#FF69B4' }}>{timeLeft}</span> {/* Розовый цвет для цифр */}
          {showTooltip && (
            <div 
              style={{
                position: 'absolute',
                bottom: '-35px', // Позиционируем подсказку ниже
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: '#FFB6C1', // Светло-розовый фон
                color: '#333',
                padding: '5px 10px', // Уменьшаем padding на 50%
                borderRadius: '5px',
                border: '2px solid #FFB6C1', // Светло-розовая рамка
                fontSize: '12px',
                whiteSpace: 'nowrap',
                opacity: 0,
                animation: 'fadeIn 0.5s forwards', // Анимация появления
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
        `}
      </style>
    </div>
  );
}

export default App;
