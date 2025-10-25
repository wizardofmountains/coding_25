import { useState } from 'react';
import { WeatherData, ForecastData } from '../types';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const FORECAST_API_URL = 'https://api.openweathermap.org/data/2.5/forecast';

export const useWeather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [lastSearchedCity, setLastSearchedCity] = useState('');

  const fetchForecastByCity = async (city: string) => {
    try {
      const response = await fetch(
        `${FORECAST_API_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
      );

      if (response.ok) {
        const data: ForecastData = await response.json();
        setForecast(data);
      }
    } catch (err) {
      console.error('Failed to fetch forecast data:', err);
      setForecast(null);
    }
  };

  const fetchForecastByCoordinates = async (lat: number, lon: number) => {
    try {
      const response = await fetch(
        `${FORECAST_API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );

      if (response.ok) {
        const data: ForecastData = await response.json();
        setForecast(data);
      }
    } catch (err) {
      console.error('Failed to fetch forecast data:', err);
      setForecast(null);
    }
  };

  const fetchWeatherByCity = async (city: string) => {
    setLoading(true);
    setError('');
    setLastSearchedCity(city);

    try {
      const response = await fetch(
        `${API_BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error(`City "${city}" not found. Please check the spelling and try again.`);
        } else if (response.status === 401) {
          throw new Error('Invalid API key. Please check your .env file.');
        } else {
          throw new Error('Failed to fetch weather data. Please try again later.');
        }
      }

      const data: WeatherData = await response.json();
      setWeather(data);
      setError('');
      
      // Fetch forecast data as well
      fetchForecastByCity(city);
      
      return data;
    } catch (err) {
      const errorMessage = err instanceof Error 
        ? err.message 
        : 'An unexpected error occurred. Please try again.';
      setError(errorMessage);
      setWeather(null);
      setForecast(null);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const fetchWeatherByCoordinates = async (lat: number, lon: number) => {
    setLoading(true);
    setError('');
    setLastSearchedCity('');

    try {
      const response = await fetch(
        `${API_BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Invalid API key. Please check your .env file.');
        } else {
          throw new Error('Failed to fetch weather data for your location. Please try again later.');
        }
      }

      const data: WeatherData = await response.json();
      setWeather(data);
      setError('');
      
      // Fetch forecast data as well
      fetchForecastByCoordinates(lat, lon);
      
      return data;
    } catch (err) {
      const errorMessage = err instanceof Error 
        ? err.message 
        : 'An unexpected error occurred. Please try again.';
      setError(errorMessage);
      setWeather(null);
      setForecast(null);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const retryLastSearch = () => {
    if (lastSearchedCity) {
      fetchWeatherByCity(lastSearchedCity);
    }
  };

  const clearError = () => {
    setError('');
  };

  return {
    weather,
    forecast,
    loading,
    error,
    lastSearchedCity,
    fetchWeatherByCity,
    fetchWeatherByCoordinates,
    retryLastSearch,
    clearError,
    setError,
  };
};

