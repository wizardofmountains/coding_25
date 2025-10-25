import { MapPin } from 'lucide-react';

interface GeolocationButtonProps {
  onLocationClick: () => void;
  disabled: boolean;
}

const GeolocationButton = ({ onLocationClick, disabled }: GeolocationButtonProps) => {
  return (
    <div className="geolocation-section">
      <div className="divider">
        <span className="divider-text">or</span>
      </div>
      <button
        className="geolocation-button"
        onClick={onLocationClick}
        disabled={disabled}
      >
        <MapPin className="location-icon" size={20} strokeWidth={2} />
        {disabled ? 'Getting Location...' : 'Use My Location'}
      </button>
    </div>
  );
};

export default GeolocationButton;

