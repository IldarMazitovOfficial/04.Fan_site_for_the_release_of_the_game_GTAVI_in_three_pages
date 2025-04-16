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

    // Задержка появления текста (включая "ТМ") на 7 секунд
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
      {showText && (
        <div className="trademark">ТМ</div> // Появляется одновременно с основным текстом
      )}
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
    </div>
  );
}

export default MainContent3;