import React, { useState } from 'react';

export function MainContent2() {
  const [query, setQuery] = useState(''); // Хранит введённый пользователем запрос

  const handleSearch = (e) => {
    if (e.key === 'Enter' && query.trim().length > 0) {
      const encodedQuery = encodeURIComponent(query.trim());
      window.location.href = `https://chatgpt.com/?q=${encodedQuery}`; // Перенаправляем пользователя на сайт ChatGPT с запросом
    }
  };

  return (
    <div
      style={{
        height: '100vh',
        backgroundImage: 'url("/42.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textShadow: '4px 4px 10px rgba(0, 0, 0, 0.9)',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          padding: '20px 80px',
          borderRadius: '15px',
          textAlign: 'center',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.6)',
          width: '80%',
          maxWidth: '1200px',
          height: 'auto',
        }}
      >
        <h1
          style={{
            fontSize: '48px',
            fontWeight: 'bold',
            margin: '0',
            marginBottom: '20px',
          }}
        >
          Остались вопросы? Спроси "ChatGPT":
        </h1>
        <input
          type="text"
          placeholder='Введите запрос, нажмите Enter и Вы будете перенаправлены на сайт "ChatGPT.com".'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleSearch}
          style={{
            width: '100%',
            padding: '15px',
            borderRadius: '15px',
            border: '2px solid #fff',
            outline: 'none',
            textAlign: 'center',
            fontSize: '20px',
            backgroundColor: '#fff',
            color: '#333',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
            marginBottom: '20px',
          }}
        />
      </div>
    </div>
  );
}

export default MainContent2;