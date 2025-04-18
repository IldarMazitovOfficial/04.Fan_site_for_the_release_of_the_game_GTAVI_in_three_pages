import React, { useState, useEffect } from 'react';
import './MainContent3.css'; // Подключаем CSS файл для стилей и анимаций

function MainContent3() {
  const [showImage, setShowImage] = useState(false); // Состояние для картинки
  const [showText, setShowText] = useState(false); // Состояние для текста

  useEffect(() => {
    // Задержка появления изображения на 2.5 секунды
    const imageTimer = setTimeout(() => {
      setShowImage(true);
    }, 2500);

    // Задержка появления текста на 7 секунд
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 7000);

    return () => {
      clearTimeout(imageTimer);
      clearTimeout(textTimer);
    }; // Очистка таймеров при размонтировании компонента
  }, []);

  return (
    <div className="main-content">
      <img
        src="/2maxresdefault.png" // Оставляем только одну картинку
        alt="Центральное изображение"
        className={`main-image ${showImage ? 'fade-in' : ''}`} // Управление классом fade-in
      />
      {showText && (
        <div className="main-text">
          Скоро на PlayStation 5|Pro, Xbox Series X|S и PC.
        </div>
      )}
      <div className="main-text-small">
  <a 
    href="https://t.me/Ildarmazitovfanzilovich" 
    target="_blank" 
    rel="noopener noreferrer" 
    style={{ textDecoration: 'underline', color: 'white', textUnderlineOffset: '5px'}}
  >
    Rockstar Games | 2025 | by Ildar Mazitov
  </a>
</div>
      {/* Ряд из 5 картинок в самом низу с добавленными ссылками */}
      <div className="image-row">
        <a href="https://www.esrb.org" target="_blank" rel="noopener noreferrer">
          <img src="/Screenshot_2.png" alt="Screenshot 2" className="row-image yellow" />
        </a>
        <a href="https://www.playstation.com" target="_blank" rel="noopener noreferrer">
          <img src="/maxresdefault.png" alt="Maxres Default" className="row-image blue" />
        </a>
        <a href="https://www.microsoft.com" target="_blank" rel="noopener noreferrer">
          <img src="/копия.png" alt="Копия" className="row-image green" />
        </a>
        <a href="https://www.xbox.com" target="_blank" rel="noopener noreferrer">
          <img src="/xbox-battle-net.png" alt="Xbox Battle Net" className="row-image red" />
        </a>
        <a href="https://www.rockstargames.com" target="_blank" rel="noopener noreferrer">
          <img src="/Screenshot_1.png" alt="Screenshot 1" className="row-image white" />
        </a>
      </div>
    </div>
  );
}

export default MainContent3;