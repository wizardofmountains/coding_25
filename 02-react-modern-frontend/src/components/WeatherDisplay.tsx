const WeatherDisplay = () => {
  return (
    <div className="weather-display">
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
    </div>
  );
};

export default WeatherDisplay;

