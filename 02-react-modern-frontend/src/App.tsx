import { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import FavoriteCities from './components/FavoriteCities';
import WeatherDisplay from './components/WeatherDisplay';
import { FavoriteCity } from './types';

const App = () => {
  const [favorites] = useState<FavoriteCity[]>([]);

  const handleSearch = (city: string) => {
    console.log('Searching for:', city);
    // TODO: Fetch weather data for the city
  };

  const handleSelectFavorite = (cityName: string) => {
    console.log('Selected favorite:', cityName);
    // TODO: Fetch weather data for the favorite city
  };

  return (
    <div className="app-container">
      <Header />

      <div className="main-layout">
        <FavoriteCities 
          favorites={favorites} 
          onSelectCity={handleSelectFavorite} 
        />

        <main className="main-content">
          <SearchBar onSearch={handleSearch} />
          <WeatherDisplay />
        </main>
      </div>
    </div>
  );
};

export default App;
