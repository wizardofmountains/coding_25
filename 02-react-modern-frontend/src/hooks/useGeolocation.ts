import { useState, useEffect } from 'react';

interface UseGeolocationOptions {
  autoDetect?: boolean;
  onSuccess?: (lat: number, lon: number) => void;
  onError?: (error: string) => void;
}

export const useGeolocation = (options: UseGeolocationOptions = {}) => {
  const { autoDetect = false, onSuccess, onError } = options;
  const [geolocating, setGeolocating] = useState(false);

  const getLocation = () => {
    if (!navigator.geolocation) {
      const errorMsg = 'Geolocation is not supported by your browser. Please search for a city manually.';
      onError?.(errorMsg);
      return;
    }

    setGeolocating(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setGeolocating(false);
        onSuccess?.(latitude, longitude);
      },
      (error) => {
        setGeolocating(false);
        let errorMessage: string;

        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = 'Location access denied. Please enable location permissions or search manually.';
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = 'Unable to determine your location. Please search manually.';
            break;
          case error.TIMEOUT:
            errorMessage = 'Location request timed out. Please try again or search manually.';
            break;
          default:
            errorMessage = 'An error occurred while getting your location. Please search manually.';
        }

        onError?.(errorMessage);
      },
      {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  useEffect(() => {
    if (autoDetect) {
      getLocation();
    }
  }, [autoDetect]);

  return {
    geolocating,
    getLocation,
  };
};

