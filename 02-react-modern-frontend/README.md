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

### Prompt 1: Set Up the Basic Layout
```
Help me build a weather app! I need to set up the basic layout in src/App.tsx.

I want my app to have:
- A header at the top with the title "Weather Dashboard"
- A search bar where I can type city names
- A big area in the center to show the current weather
- A sidebar on the side for my favorite cities

Also, create a file called src/types.ts where we define what weather data looks like (temperature, description, humidity, wind speed, etc.) so the app knows what information to expect.

Make it look clean and modern with some basic styling in src/index.css!
```

### Prompt 2: Create the Search Bar
```
I need a search bar component in src/components/SearchBar.tsx!

Here's what I want:
- A text input field where I can type a city name
- A search button (maybe with a magnifying glass icon?)
- When I type, it should remember what I'm typing
- When I click search or press Enter, it should tell the main app what city I searched for

Make it look modern and clean, like a Google search bar. The search bar needs to be able to send the city name to the main app when I submit it.
```

### Prompt 3: Design the Weather Display Card
```
Create a beautiful weather card in src/components/WeatherCard.tsx!

I want it to display:
- The city name and country at the top
- A BIG temperature number (make it really prominent!)
- The weather description (like "Sunny" or "Rainy") with a matching icon
- Humidity percentage
- Wind speed
- What the temperature feels like

Make it look like a beautiful card with:
- Nice shadows and rounded corners
- A gradient background (maybe blue for sky?)
- The weather icon from the API
- Good spacing so it's not cramped

If there's no weather data to show yet, display a friendly placeholder message like "Search for a city to see weather!"
```

### Prompt 4: Connect to the Weather API
```
Now let's make the search actually work in src/App.tsx! When I search for a city, I want it to fetch real weather data.

Here's what needs to happen:
- When I search for a city, show a loading indicator
- Fetch the weather data from the OpenWeatherMap API using my API key
- If it works, display the weather in the WeatherCard component
- If something goes wrong (like the city doesn't exist), show an error message
- Use the API endpoint: https://api.openweathermap.org/data/2.5/weather

The app needs to remember:
- What weather data we got back
- Whether we're currently loading
- If there was an error
- What city the user searched for

Get the API key from the .env file and use metric units (Celsius) for temperature.
```

### Prompt 5: Add Loading and Error Messages
```
Let's make the app feel more polished by showing different states!

Create a Loading component (src/components/Loading.tsx):
- Show a spinning loader or animated skeleton while weather is loading
- Make it look smooth with a nice animation

Create an ErrorMessage component (src/components/ErrorMessage.tsx):
- Show friendly error messages (like "Oops! City not found")
- Include a "Try Again" button
- Make it look nice, not scary

Then in the main app (src/App.tsx), show the right thing at the right time:
- When loading: Show the loading spinner
- When there's an error: Show the error message
- When we have weather data: Show the weather card
- When nothing has been searched yet: Show a welcome message like "Search for a city to get started!"
```

### Prompt 6: Add a 5-Day Forecast
```
I want to see the weather for the next 5 days! Create a Forecast component in src/components/Forecast.tsx.

Here's what I'm imagining:
- Show 5 small weather cards in a row (or I can scroll through them on mobile)
- Each card shows:
  - Which day it is (like "Monday", "Tuesday")
  - A weather icon
  - The high and low temperatures for that day
  - The weather conditions (sunny, rainy, etc.)

Get the forecast data from this API: https://api.openweathermap.org/data/2.5/forecast

The forecast should update automatically when I search for a new city. Display all 5 days nicely in a row or grid that I can scroll through if needed!
```

### Prompt 7: Let Me Save Favorite Cities
```
I want to save my favorite cities so I can quickly check their weather!

Create a FavoriteCities component (src/components/FavoriteCities.tsx) that:
- Shows a list of my favorite cities in the sidebar
- Lets me click on any favorite to see its weather
- Saves my favorites so they're still there when I reopen the app

Also, add a heart or star button to the weather card:
- Click the heart to add a city to favorites
- Click again to remove it from favorites
- Make the heart filled when it's a favorite, empty when it's not

The favorites list should remember my cities even if I close the browser!
```

### Prompt 8: Show My Recent Searches
```
I want to see my recent searches so I can quickly go back to cities I looked up before!

Create a RecentSearches component that:
- Shows my last 5 searches in a list
- Puts the most recent search at the top
- Lets me click any search to see that city's weather again
- Includes a "Clear All" button to remove my search history
- Saves my recent searches so they're still there when I come back

The list should automatically update when I search for new cities, and if I search for the same city twice, don't show it twice - just move it to the top!
```

### Prompt 9: Clean Up the Code (Optional)
```
My main app file is getting messy with all the weather fetching code! Help me organize it better.

Create a reusable weather helper in src/hooks/useWeather.ts that:
- Handles all the weather API fetching logic
- Manages the loading, error, and weather data internally
- Can be easily used anywhere in the app

Then update the main App.tsx to use this helper instead of having all that code in the main file. This will make the code cleaner and easier to maintain!

(This is an optional step to learn about code organization - it won't change how the app works for users, but it makes the code nicer to work with!)
```

### Prompt 10: Make It Feel Professional
```
Let's add the final touches to make this app feel really polished and professional!

**Better error handling:**
- Show helpful messages when things go wrong (like "Please enter a city name" or "Network error - check your internet")
- Don't let me search with an empty field
- Handle edge cases gracefully

**Smooth animations and polish:**
- Add smooth transitions when weather cards appear
- Make the app work perfectly on phones, tablets, and computers
- Add a dark/light theme toggle button (bonus!)
- Make sure I can use the Enter key to search
- Add hover effects on buttons

**Extra weather details:**
- Show sunrise and sunset times
- Display any weather alerts if there are storms coming
- Show air quality index if available

**Accessibility:**
- Make sure the app works well with keyboard navigation
- Add helpful labels for screen readers

I want it to feel like a real professional weather app!
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

Once you finish the main app, try asking your AI assistant to add these cool features:

1. **Auto-detect my location** - Use my device's GPS to automatically show my local weather
2. **Weather maps** - Add an interactive map showing weather patterns
3. **Temperature graphs** - Show a chart of how temperature changes throughout the day
4. **Celsius/Fahrenheit toggle** - Let me switch between temperature units
5. **Compare cities** - Show multiple cities side-by-side to compare their weather
6. **Weather alerts** - Send me notifications if there's severe weather in my area
7. **Make it installable** - Turn it into an app I can install on my phone
8. **Animated backgrounds** - Make the background change based on the weather (sunny, rainy, snowy)

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
