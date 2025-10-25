import { useState } from 'react';

interface SearchBarProps {
  onSearch: (city: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [cityInput, setCityInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCityInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (cityInput.trim()) {
      onSearch(cityInput.trim());
      setCityInput(''); // Clear input after search
    }
  };

  return (
    <div className="search-section">
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          value={cityInput}
          onChange={handleChange}
          placeholder="Enter city name..."
          className="search-input"
          aria-label="City name"
        />
        <button 
          type="submit" 
          className="search-button"
        >
          <svg
            className="search-icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

