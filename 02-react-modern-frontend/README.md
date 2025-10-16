# ⚛️ Project 2: React Modern Frontend

**Focus:** React, Hooks, Component Architecture

Welcome to modern React development! In this project, you'll build an interactive weather dashboard application using React 18, hooks, and component-based architecture.

## Learning Objectives

By the end of this project, you will understand:
- React component creation and composition
- Props for passing data between components
- useState for state management
- useEffect for side effects and API calls
- Event handlers (onClick, onChange, onSubmit)
- Conditional rendering
- Mapping over arrays to render lists
- TypeScript with React

## Project Goal

Build a **Weather Dashboard** application with:
- Search for cities and display weather information
- Current weather display with temperature, conditions, humidity, wind speed
- 5-day forecast
- Save favorite cities
- Recent searches
- Beautiful, responsive UI
- Loading and error states

## Getting Started

1. **Navigate to this directory:**
   ```bash
   cd 02-react-modern-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to http://localhost:5173

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool and dev server
- **Weather API** - We'll use OpenWeatherMap (free tier)

## API Setup

For this project, you'll use the OpenWeatherMap API:

1. Sign up for a free account at https://openweathermap.org/api
2. Get your API key
3. Create a `.env` file in this directory:
   ```env
   VITE_WEATHER_API_KEY=your_api_key_here
   ```

The free tier gives you 1000 calls/day, which is perfect for learning!

## AI Prompts - Copy & Paste These Step-by-Step

### Prompt 1: Project Setup & Types
```
I'm building a weather dashboard with React and TypeScript. First, help me set up the project:

1. In src/App.tsx, create the main App component structure with:
   - A header section with the app title "Weather Dashboard"
   - A search section
   - A main content area for displaying weather
   - A sidebar for favorite cities

2. Create a new file src/types.ts with TypeScript interfaces for:
   - WeatherData (temperature, description, humidity, wind speed, etc.)
   - ForecastData (array of forecast items)
   - City (name, country)

3. Add basic styling in src/index.css to make it look clean and modern.

Use semantic structure and prepare for adding components.
```

### Prompt 2: Search Component with useState
```
Create a SearchBar component in src/components/SearchBar.tsx:

1. Use useState to manage the search input value
2. Create a form with:
   - An input field for city name
   - A search button
   - onChange handler to update the input state
   - onSubmit handler to prevent default and call a search function
3. Accept a prop: onSearch (function to call when user searches)
4. Add proper TypeScript types for props
5. Style the component to look modern with a search icon

The component should pass the search query to the parent component when the form is submitted.
```

### Prompt 3: Weather Display Component with Props
```
Create a WeatherCard component in src/components/WeatherCard.tsx:

1. Accept weather data as props (use the WeatherData interface)
2. Display:
   - City name and country
   - Current temperature (large and prominent)
   - Weather description and icon
   - Humidity percentage
   - Wind speed
   - "Feels like" temperature
3. Add TypeScript types for all props
4. Style it beautifully with:
   - Card layout with shadow
   - Weather icon from OpenWeatherMap
   - Gradient background
   - Responsive design

If no weather data is provided, show a placeholder or empty state.
```

### Prompt 4: API Integration with useEffect
```
In src/App.tsx, implement the weather API integration:

1. Add useState hooks for:
   - Current weather data
   - Loading state
   - Error state
   - Search query

2. Create an async function fetchWeather(city: string) that:
   - Sets loading to true
   - Makes a fetch request to OpenWeatherMap API
   - Parses the JSON response
   - Updates the weather data state
   - Handles errors gracefully
   - Sets loading to false

3. Use the API key from environment variables (import.meta.env.VITE_WEATHER_API_KEY)

4. Call fetchWeather when the user submits a search

5. Pass the weather data to the WeatherCard component

API endpoint: https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric
```

### Prompt 5: Loading and Error States
```
Improve the user experience in src/App.tsx:

1. Create a Loading component in src/components/Loading.tsx:
   - Show a spinner or skeleton while fetching data
   - Add a nice animation

2. Create an ErrorMessage component in src/components/ErrorMessage.tsx:
   - Display error messages in a friendly way
   - Include a retry button
   - Accept error message as a prop

3. In App.tsx, conditionally render:
   - Loading component when loading is true
   - ErrorMessage when there's an error
   - WeatherCard when data is successfully loaded
   - Empty state when no search has been made yet

Use conditional rendering based on the state.
```

### Prompt 6: Forecast Component with Mapping
```
Create a Forecast component in src/components/Forecast.tsx:

1. Fetch 5-day forecast data from OpenWeatherMap
   - API: https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={API_KEY}&units=metric

2. Use useState to store forecast data

3. Use useEffect to fetch forecast when city changes

4. Create a ForecastCard sub-component that displays:
   - Day of the week
   - Weather icon
   - High/low temperatures
   - Conditions

5. Map over the forecast array to render multiple ForecastCard components

6. Display the cards in a horizontal scrollable row or grid

Add TypeScript types for all data structures.
```

### Prompt 7: Favorite Cities with localStorage
```
Add favorite cities functionality:

1. Create a FavoriteCities component in src/components/FavoriteCities.tsx

2. Use useState to manage favorite cities array

3. Use useEffect to:
   - Load favorites from localStorage on mount
   - Save favorites to localStorage whenever they change

4. Implement functions:
   - addFavorite(city: string) - Add to favorites
   - removeFavorite(city: string) - Remove from favorites
   - isFavorite(city: string) - Check if city is favorited

5. In WeatherCard, add a heart/star button to favorite/unfavorite

6. In the sidebar, display the list of favorite cities

7. When clicking a favorite city, fetch and display its weather

Use proper event handlers (onClick) for all interactions.
```

### Prompt 8: Recent Searches with useEffect
```
Add a recent searches feature:

1. Use useState to manage a recent searches array (max 5 items)

2. Use useEffect to:
   - Load recent searches from localStorage
   - Save to localStorage when updated

3. Add each successful search to recent searches (avoid duplicates)

4. Create a RecentSearches component that:
   - Displays the list of recent searches
   - Allows clicking a search to load that city's weather
   - Has a "Clear" button to remove all recent searches

5. Style it as a compact list with onClick handlers

Keep the most recent searches at the top of the list.
```

### Prompt 9: Custom Hook for Weather Data
```
Refactor the weather fetching logic into a custom hook:

1. Create src/hooks/useWeather.ts

2. Create a custom hook called useWeather that:
   - Accepts a city name as parameter
   - Manages loading, error, and weather data states internally
   - Returns { weather, loading, error, fetchWeather }
   - Handles all API logic

3. Update App.tsx to use this custom hook instead of managing state directly

4. This makes the code more reusable and cleaner

Custom hooks start with "use" and can use other hooks inside them.
```

### Prompt 10: Polish & Advanced Features
```
Add final touches to make the weather dashboard production-ready:

1. Add proper error handling for:
   - Invalid city names
   - Network errors
   - API rate limits
   - Missing API key

2. Add input validation:
   - Don't allow empty searches
   - Trim whitespace
   - Show helpful error messages

3. Improve UI/UX:
   - Add smooth transitions and animations
   - Make the app fully responsive
   - Add a dark/light theme toggle using useState
   - Add keyboard shortcuts (Enter to search)
   - Add debouncing to search input (optional)

4. Add accessibility:
   - ARIA labels
   - Keyboard navigation
   - Screen reader friendly

5. Display additional weather details:
   - Sunrise/sunset times
   - Weather alerts if available
   - Air quality index

Make it feel like a professional application!
```

## Testing Your Application

Test these scenarios:

1. ✅ Search for a valid city - weather displays
2. ✅ Search for invalid city - error message shows
3. ✅ Add cities to favorites - persists on refresh
4. ✅ Click recent search - loads that city
5. ✅ View 5-day forecast
6. ✅ Responsive on mobile/tablet/desktop
7. ✅ Loading states work properly
8. ✅ Theme toggle works (if implemented)

## Project Structure

```
02-react-modern-frontend/
├── src/
│   ├── components/
│   │   ├── SearchBar.tsx
│   │   ├── WeatherCard.tsx
│   │   ├── Forecast.tsx
│   │   ├── FavoriteCities.tsx
│   │   ├── RecentSearches.tsx
│   │   ├── Loading.tsx
│   │   └── ErrorMessage.tsx
│   ├── hooks/
│   │   └── useWeather.ts
│   ├── types.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
└── README.md
```

## Key Concepts You'll Learn

- ✅ React functional components
- ✅ Props and component composition
- ✅ useState hook for state management
- ✅ useEffect hook for side effects
- ✅ Custom hooks for reusable logic
- ✅ Event handling (onClick, onChange, onSubmit)
- ✅ Conditional rendering
- ✅ Mapping arrays to JSX
- ✅ API integration with fetch
- ✅ TypeScript with React
- ✅ localStorage API
- ✅ Error handling and loading states

## Bonus Challenges

1. **Add geolocation** - Detect user's location and show local weather
2. **Add weather maps** - Integrate a map view
3. **Add weather charts** - Graph temperature trends
4. **Add unit toggle** - Switch between Celsius/Fahrenheit
5. **Add more cities** - Compare weather across multiple cities side-by-side
6. **Add notifications** - Alert for severe weather
7. **Add PWA support** - Make it installable
8. **Add animations** - Weather-specific background animations

## Tips for Success

1. **Understand React concepts:** Props flow down, events flow up
2. **Use DevTools:** React DevTools browser extension is essential
3. **Check the console:** Look for errors and warnings
4. **Read documentation:** React docs are excellent
5. **Experiment:** Try modifying components to see what happens
6. **Use TypeScript:** Let the types guide you

## Troubleshooting

**API not working:**
- Check your API key is in .env
- Verify the .env file is in the correct directory
- Restart the dev server after adding .env

**Component not updating:**
- Make sure you're using state, not regular variables
- Check that you're calling the state setter function
- Verify useEffect dependencies are correct

**TypeScript errors:**
- Define proper interfaces for your data
- Add type annotations to function parameters
- Use optional properties (?) for nullable values

## Next Steps

After completing this project:
- Review how props and state work together
- Understand the component lifecycle with useEffect
- Move on to [Project 3: Next.js Fullstack](../03-nextjs-fullstack/README.md)

---

**Ready?** Start with Prompt 1 and build an amazing weather dashboard! ☀️🌧️❄️
