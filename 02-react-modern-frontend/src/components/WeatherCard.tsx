import { Heart, Thermometer, Droplets, Wind } from 'lucide-react';
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
            <Heart 
              className="favorite-icon"
              size={24}
              strokeWidth={2}
              fill={isFavorite ? 'currentColor' : 'none'}
            />
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
          <Thermometer className="detail-icon" size={24} strokeWidth={2} />
          <div className="detail-content">
            <span className="detail-label">Feels Like</span>
            <span className="detail-value">{feelsLike}°C</span>
          </div>
        </div>

        <div className="weather-detail-item">
          <Droplets className="detail-icon" size={24} strokeWidth={2} />
          <div className="detail-content">
            <span className="detail-label">Humidity</span>
            <span className="detail-value">{humidity}%</span>
          </div>
        </div>

        <div className="weather-detail-item">
          <Wind className="detail-icon" size={24} strokeWidth={2} />
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

