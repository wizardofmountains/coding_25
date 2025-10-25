import { CloudRain } from 'lucide-react';
import { WeatherData } from '../types';
import WeatherCard from './WeatherCard';
import Loading from './Loading';
import ErrorMessage from './ErrorMessage';

interface WeatherDisplayProps {
  weather: WeatherData | null;
  loading: boolean;
  error: string;
  onRetry?: () => void;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}

const WeatherDisplay = ({ weather, loading, error, onRetry, isFavorite, onToggleFavorite }: WeatherDisplayProps) => {
  if (loading) {
    return (
      <div className="weather-display">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="weather-display">
        <ErrorMessage message={error} onRetry={onRetry} />
      </div>
    );
  }

  return (
    <div className="weather-display">
      {weather ? (
        <WeatherCard 
          weather={weather} 
          isFavorite={isFavorite || false}
          onToggleFavorite={onToggleFavorite}
        />
      ) : (
        <div className="welcome-message">
          <CloudRain className="welcome-icon" size={64} strokeWidth={1.5} />
          <h2>Welcome to Weather Dashboard</h2>
          <p>Search for a city to see current weather conditions</p>
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;

