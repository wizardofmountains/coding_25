interface ForecastCardProps {
  day: string;
  icon: string;
  description: string;
  tempHigh: number;
  tempLow: number;
}

const ForecastCard = ({ day, icon, description, tempHigh, tempLow }: ForecastCardProps) => {
  return (
    <div className="forecast-card">
      <h4 className="forecast-day">{day}</h4>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
        className="forecast-icon"
      />
      <p className="forecast-description">{description}</p>
      <div className="forecast-temps">
        <span className="temp-high">{Math.round(tempHigh)}°</span>
        <span className="temp-separator">/</span>
        <span className="temp-low">{Math.round(tempLow)}°</span>
      </div>
    </div>
  );
};

export default ForecastCard;

