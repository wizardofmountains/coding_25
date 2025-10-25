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
          <svg
            className="welcome-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
            />
          </svg>
          <h2>Welcome to Weather Dashboard</h2>
          <p>Search for a city to see current weather conditions</p>
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;

