const Loading = () => {
  return (
    <div className="loading-container">
      <div className="cookie-spinner">
        <div className="cookie-body">
          <div className="chocolate-chip chip-1"></div>
          <div className="chocolate-chip chip-2"></div>
          <div className="chocolate-chip chip-3"></div>
          <div className="chocolate-chip chip-4"></div>
          <div className="chocolate-chip chip-5"></div>
          <div className="chocolate-chip chip-6"></div>
        </div>
        <div className="cookie-bite"></div>
      </div>
      <h3 className="loading-text">Fetching weather data...</h3>
      <p className="loading-subtext">Please wait a moment</p>
    </div>
  );
};

export default Loading;

