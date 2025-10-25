import { ForecastData } from '../types';
import ForecastCard from './ForecastCard';

interface ForecastProps {
  forecast: ForecastData;
}

interface DailyForecast {
  date: string;
  day: string;
  icon: string;
  description: string;
  tempHigh: number;
  tempLow: number;
}

const Forecast = ({ forecast }: ForecastProps) => {
  // Process forecast data to get daily highs and lows
  const getDailyForecasts = (): DailyForecast[] => {
    const dailyData: { [key: string]: DailyForecast } = {};

    forecast.list.forEach((item) => {
      const date = new Date(item.dt * 1000);
      const dateKey = date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit' 
      });

      if (!dailyData[dateKey]) {
        dailyData[dateKey] = {
          date: dateKey,
          day: date.toLocaleDateString('en-US', { weekday: 'long' }),
          icon: item.weather[0].icon,
          description: item.weather[0].description,
          tempHigh: item.main.temp_max,
          tempLow: item.main.temp_min,
        };
      } else {
        // Update high and low temps
        dailyData[dateKey].tempHigh = Math.max(dailyData[dateKey].tempHigh, item.main.temp_max);
        dailyData[dateKey].tempLow = Math.min(dailyData[dateKey].tempLow, item.main.temp_min);
        
        // Use the icon from noon time (12:00) if available for more accurate representation
        const hour = date.getHours();
        if (hour >= 11 && hour <= 14) {
          dailyData[dateKey].icon = item.weather[0].icon;
          dailyData[dateKey].description = item.weather[0].description;
        }
      }
    });

    // Convert to array and take first 5 days
    return Object.values(dailyData).slice(0, 5);
  };

  const dailyForecasts = getDailyForecasts();

  if (dailyForecasts.length === 0) {
    return null;
  }

  return (
    <div className="forecast-section">
      <h3 className="forecast-title">5-Day Forecast</h3>
      <div className="forecast-grid">
        {dailyForecasts.map((day, index) => (
          <ForecastCard
            key={day.date}
            day={index === 0 ? 'Today' : day.day}
            icon={day.icon}
            description={day.description}
            tempHigh={day.tempHigh}
            tempLow={day.tempLow}
          />
        ))}
      </div>
    </div>
  );
};

export default Forecast;

