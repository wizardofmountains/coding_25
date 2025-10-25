import { Heart } from 'lucide-react';
import { FavoriteCity } from '../types';

interface FavoriteCitiesProps {
  favorites: FavoriteCity[];
  onSelectCity: (cityName: string) => void;
}

const FavoriteCities = ({ favorites, onSelectCity }: FavoriteCitiesProps) => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">
        <Heart className="sidebar-icon" size={20} strokeWidth={2} fill="currentColor" />
        Favorite Cities
      </h2>
      
      {favorites.length === 0 ? (
        <div className="favorites-placeholder">
          <p>No favorites yet</p>
          <p className="favorites-hint">Search for a city and add it to favorites</p>
        </div>
      ) : (
        <ul className="favorites-list">
          {favorites.map((city) => (
            <li key={`${city.name}-${city.country}`} className="favorite-item">
              <button
                className="favorite-button"
                onClick={() => onSelectCity(city.name)}
              >
                <span className="favorite-name">{city.name}</span>
                <span className="favorite-country">{city.country}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
};

export default FavoriteCities;

