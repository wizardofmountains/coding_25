import Header from './components/Header';
import SearchBar from './components/SearchBar';
import FavoriteCities from './components/FavoriteCities';
import WeatherDisplay from './components/WeatherDisplay';
import GeolocationButton from './components/GeolocationButton';
import Forecast from './components/Forecast';
import { useWeather } from './hooks/useWeather';
import { useGeolocation } from './hooks/useGeolocation';
import { useLocalStorage } from './hooks/useLocalStorage';
import { FavoriteCity } from './types';

const App = () => {
  const [favorites, setFavorites] = useLocalStorage<FavoriteCity[]>('weatherFavorites', []);

  const {
    weather,
    forecast,
    loading,
    error,
    fetchWeatherByCity,
    fetchWeatherByCoordinates,
    retryLastSearch,
    setError,
  } = useWeather();

  const { geolocating, getLocation } = useGeolocation({
    autoDetect: true,
    onSuccess: (lat, lon) => {
      fetchWeatherByCoordinates(lat, lon);
    },
    onError: (errorMessage) => {
      setError(errorMessage);
    },
  });

  const handleSearch = (city: string) => {
    fetchWeatherByCity(city);
  };

  const handleSelectFavorite = (cityName: string) => {
    fetchWeatherByCity(cityName);
  };

  const handleRetry = () => {
    retryLastSearch();
  };

  const handleGeolocation = () => {
    getLocation();
  };

  const isFavorite = (cityName: string, countryCode: string): boolean => {
    return favorites.some(
      (fav) => fav.name.toLowerCase() === cityName.toLowerCase() && fav.country === countryCode
    );
  };

  const handleToggleFavorite = (cityName: string, countryCode: string) => {
    if (isFavorite(cityName, countryCode)) {
      // Remove from favorites
      setFavorites(
        favorites.filter(
          (fav) => !(fav.name.toLowerCase() === cityName.toLowerCase() && fav.country === countryCode)
        )
      );
    } else {
      // Add to favorites
      const newFavorite: FavoriteCity = {
        name: cityName,
        country: countryCode,
        addedAt: Date.now(),
      };
      setFavorites([...favorites, newFavorite]);
    }
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
          <GeolocationButton 
            onLocationClick={handleGeolocation}
            disabled={geolocating || loading}
          />
          <WeatherDisplay 
            weather={weather} 
            loading={loading} 
            error={error}
            onRetry={handleRetry}
            isFavorite={weather ? isFavorite(weather.name, weather.sys.country) : false}
            onToggleFavorite={weather ? () => handleToggleFavorite(weather.name, weather.sys.country) : undefined}
          />
          {forecast && <Forecast forecast={forecast} />}
        </main>
      </div>
    </div>
  );
};

export default App;
