import { FavoriteCity } from '../types';

interface FavoriteCitiesProps {
  favorites: FavoriteCity[];
  onSelectCity: (cityName: string) => void;
}

const FavoriteCities = ({ favorites, onSelectCity }: FavoriteCitiesProps) => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">
        <svg
          className="sidebar-icon"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
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

