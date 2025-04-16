import React, { useState } from 'react';
import MainContent2 from './MainContent2'; // Импорт секции 2
import MainContent3 from './MainContent3'; // Импорт секции 3
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

function MainContent() {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    {
      id: 0,
      content: (
        <div
          style={{
            padding: '20px',
            color: '#fff',
            backgroundImage: 'url("/13559.png")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            minHeight: '100vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            zIndex: '1', // Устанавливаем z-index
          }}
        >
          <h1 style={{ fontSize: '150px', letterSpacing: '20px' }}>
            ДОБРО ПОЖАЛОВАТЬ В ЛЕОНИДУ
          </h1>
          <div
            style={{
              padding: '20px',
              border: '2px solid #fff',
              borderRadius: '20px',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              marginTop: '20px',
              maxWidth: '800px',
              zIndex: '2', // Устанавливаем z-index для всплывающей подсказки
            }}
          >
            <p>
              В Grand Theft Auto VI вы отправитесь в штат Леонида, навстречу неоновым огням Вайс-Сити.
              Вас ждет самый большой, самый правдоподобный мир за всю историю Grand Theft Auto.
              <br />
              Игра выйдет в 2026–2027 году на PlayStation 5|Pro, Xbox Series X|S и PC.
            </p>
          </div>
          <a
            href="https://youtu.be/QdBZY2fkU-0?si=0gn3_QDDU3g1_MZO"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '20px 40px',
              marginTop: '30px',
              backgroundColor: '#ffffff',
              color: '#000000',
              fontSize: '20px',
              fontWeight: 'bold',
              textDecoration: 'none',
              borderRadius: '10px',
              transition: 'background-color 0.3s, color 0.3s',
              zIndex: '3', // Устанавливаем z-index для ссылки
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#f2f2f2';
              e.target.style.color = '#000';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#ffffff';
              e.target.style.color = '#000000';
            }}
          >
            <FontAwesomeIcon icon={faPlay} style={{ marginRight: '10px' }} />
            ПОСМОТРЕТЬ ТРЕЙЛЕР
          </a>
        </div>
      ),
    },
    {
      id: 1,
      content: <MainContent2 />, // Используем секцию 2 из отдельного файла
    },
    {
      id: 2,
      content: <MainContent3 />, // Используем секцию 3 из отдельного файла
    },
  ];

  const handleWheel = (e) => {
    if (e.deltaY > 0 && currentSection < sections.length - 1) {
      setCurrentSection((prev) => prev + 1);
    } else if (e.deltaY < 0 && currentSection > 0) {
      setCurrentSection((prev) => prev - 1);
    }
  };

  return (
    <div
      onWheel={handleWheel}
      style={{
        height: '100vh',
        overflow: 'hidden', // Убираем скролл
        scrollBehavior: 'smooth',
      }}
    >
      {sections.map((section, index) => (
        <div
          key={section.id}
          style={{
            transform: `translateY(-${currentSection * 100}vh)`,
            transition: 'transform 0.5s ease-in-out',
          }}
        >
          {section.content}
        </div>
      ))}
    </div>
  );
}

export default MainContent;