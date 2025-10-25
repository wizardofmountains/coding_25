import { useState } from 'react';
import { Search } from 'lucide-react';

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
          <Search className="search-icon" size={20} strokeWidth={2} />
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

