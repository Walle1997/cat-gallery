import { useState, useEffect } from 'react';
import Header from './components/Header';
import Filter from './components/Filter';
import CatCard from './components/CatCard';
import './styles/main.scss';

function App() {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchCats = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(
          'https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1'
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setCats(data);
      } catch (err) {
        console.error('Ошибка при загрузке котиков:', err);
        setError('Не удалось загрузить котиков. Попробуйте позже.');
      } finally {
        setLoading(false);
      }
    };

    fetchCats();
  }, []);

  const filteredCats = filter === 'all' 
    ? cats 
    : cats.filter(cat => cat.breeds?.some(breed => breed.origin === filter));

  return (
    <div className="app">
      <Header />
      <Filter filter={filter} setFilter={setFilter} />
      
      {error && <div className="error-message">{error}</div>}
      
      <div className="cat-grid">
        {loading ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Загружаем котиков...</p>
          </div>
        ) : filteredCats.length === 0 ? (
          <p className="no-results">Нет котиков по выбранному фильтру 😿</p>
        ) : (
          filteredCats.map(cat => (
            <CatCard 
              key={`${cat.id}-${Math.random().toString(36).substr(2, 9)}`}
              cat={cat}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;