import { WeatherData } from '../types';

interface WeatherCardProps {
  weather: WeatherData;
  isFavorite: boolean;
  onToggleFavorite?: () => void;
}

const WeatherCard = ({ weather, isFavorite, onToggleFavorite }: WeatherCardProps) => {
  const temperature = Math.round(weather.main.temp);
  const feelsLike = Math.round(weather.main.feels_like);
  const weatherMain = weather.weather[0].main;
  const weatherDescription = weather.weather[0].description;
  const weatherIcon = weather.weather[0].icon;
  const humidity = weather.main.humidity;
  const windSpeed = Math.round(weather.wind.speed * 3.6); // Convert m/s to km/h

  return (
    <div className="weather-card">
      {/* City Name & Country with Favorite Button */}
      <div className="weather-card-header">
        <div className="city-info">
          <h2 className="city-name">{weather.name}</h2>
          <span className="country-code">{weather.sys.country}</span>
        </div>
        {onToggleFavorite && (
          <button 
            className={`favorite-toggle-button ${isFavorite ? 'is-favorite' : ''}`}
            onClick={onToggleFavorite}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <svg
              className="favorite-icon"
              fill={isFavorite ? 'currentColor' : 'none'}
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Main Temperature Display */}
      <div className="temperature-section">
        <img
          src={`https://openweathermap.org/img/wn/${weatherIcon}@4x.png`}
          alt={weatherDescription}
          className="weather-icon-large"
        />
        <div className="temperature-display">
          <span className="temperature-value">{temperature}</span>
          <span className="temperature-unit">°C</span>
        </div>
      </div>

      {/* Weather Description */}
      <div className="weather-description">
        <span className="weather-main">{weatherMain}</span>
        <span className="weather-detail">{weatherDescription}</span>
      </div>

      {/* Weather Details Grid */}
      <div className="weather-details">
        <div className="weather-detail-item">
          <svg
            className="detail-icon"
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
          <div className="detail-content">
            <span className="detail-label">Feels Like</span>
            <span className="detail-value">{feelsLike}°C</span>
          </div>
        </div>

        <div className="weather-detail-item">
          <svg
            className="detail-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <div className="detail-content">
            <span className="detail-label">Humidity</span>
            <span className="detail-value">{humidity}%</span>
          </div>
        </div>

        <div className="weather-detail-item">
          <svg
            className="detail-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
          <div className="detail-content">
            <span className="detail-label">Wind Speed</span>
            <span className="detail-value">{windSpeed} km/h</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;

