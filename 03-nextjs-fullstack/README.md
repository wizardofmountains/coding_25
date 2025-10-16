# 🚀 Project 3: Next.js Fullstack

**Focus:** Next.js 15, App Router, API Routes, Fullstack Development

Welcome to fullstack development with Next.js! In this project, you'll build a complete movie database application with both frontend and backend functionality.

## Learning Objectives

By the end of this project, you will understand:
- Next.js 15 App Router architecture
- Server and client components
- Layouts and nested routing
- API Routes and serverless functions
- Async/await data fetching
- Server-side and client-side rendering
- Tailwind CSS for rapid styling
- External API integration
- Environment variables
- TypeScript with Next.js

## Project Goal

Build a **Movie Database** application (like a mini IMDB) with:
- Browse trending and popular movies
- Search for movies
- View detailed movie information
- User watchlist (save/remove movies)
- Multiple pages with routing
- API integration with TMDB (The Movie Database)
- Beautiful, responsive UI with Tailwind CSS
- Server-side and client-side rendering

## Getting Started

1. **Navigate to this directory:**
   ```bash
   cd 03-nextjs-fullstack
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up API key:**
   - Sign up for a free account at https://www.themoviedb.org/
   - Get your API key from https://www.themoviedb.org/settings/api
   - Create a `.env.local` file:
     ```env
     TMDB_API_KEY=your_api_key_here
     NEXT_PUBLIC_TMDB_API_KEY=your_api_key_here
     ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to http://localhost:3000

## Tech Stack

- **Next.js 15.5** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **TMDB API** - Movie data source

## AI Prompts - Copy & Paste These Step-by-Step

### Prompt 1: Set Up the Navigation and Layout
```
Help me build a movie database app! Let's start with the layout and navigation in app/layout.tsx.

I want:
- A navigation bar at the top that stays visible when I scroll (sticky)
- Navigation links: Home, Movies, and Watchlist
- A search bar in the navigation
- A footer at the bottom with copyright info and credit to TMDB (the movie database I'm using)

Create the navigation bar in app/components/Navbar.tsx:
- Make it look modern and clean
- Add my app logo/title
- Include a search bar
- Make it work great on phones (with a mobile menu that I can open/close)

Create a footer in app/components/Footer.tsx:
- Simple and clean design
- Copyright info
- Link to TMDB to credit them for the data

Style everything with Tailwind CSS to look professional and modern!
```

### Prompt 2: Create the Home Page with Trending Movies
```
Now let's build the home page in app/page.tsx! I want to show trending movies.

Here's what I'm imagining:
- A cool hero section at the top with:
  - My app title in big letters
  - A catchy tagline
  - Maybe a call-to-action message

- Below that, show this week's trending movies from TMDB
- Use this API: https://api.themoviedb.org/3/trending/movie/week

Create a MovieCard component (app/components/MovieCard.tsx) for each movie showing:
- The movie poster image (make it look nice!)
- Movie title
- Release year
- Rating (like 8.5/10)
- Make each card clickable so I can see more details

Display all the movies in a nice grid:
- 3-4 columns on a computer screen
- 2 columns on a tablet
- 1 column on a phone

Style everything beautifully with Tailwind CSS!
```

### Prompt 3: Create the Movie Detail Page
```
When I click on a movie, I want to see all the details about it! Create a detail page in app/movies/[id]/page.tsx.

The page should show:
- A big beautiful backdrop image at the top
- The movie poster
- Title and tagline
- Full description/overview
- Rating, how long the movie is, and release date
- Genres (like Action, Comedy, etc.)
- The cast - show photos of the top 6 actors with their names
- The director's name
- An "Add to Watchlist" button so I can save movies I want to watch

Get the movie details from these APIs:
- Movie info: https://api.themoviedb.org/3/movie/{id}
- Cast/crew info: https://api.themoviedb.org/3/movie/{id}/credits

Make it look beautiful and professional with Tailwind CSS! The URL should work like /movies/123 where 123 is the movie's ID.
```

### Prompt 4: Create the Watchlist Backend
```
I need a way to save movies to my watchlist! Create the backend in app/api/watchlist/route.ts.

Here's what it should do:
- Let me get a list of all my saved movies
- Let me add a movie to my watchlist
- Let me remove a movie from my watchlist

For now, just store the movies in the server's memory (we can make it permanent later). Each movie should save: ID, title, poster image, release date, and rating.

Make sure to handle errors nicely - if something goes wrong, show me a friendly message instead of crashing!
```

### Prompt 5: Make the "Add to Watchlist" Button Work
```
Now let's make that "Add to Watchlist" button actually do something!

Create a WatchlistButton component in app/components/WatchlistButton.tsx:
- Show "Add to Watchlist" when the movie isn't saved
- Show "Remove from Watchlist" when it is saved
- When I click it, add or remove the movie from my watchlist
- Show a loading spinner while it's saving
- Change the button appearance so I can tell if a movie is in my watchlist (maybe use a heart icon that fills in?)

The button should:
- Connect to the watchlist backend we just created
- Update instantly when I click it
- Show me a confirmation message when it works
- Show an error message if something goes wrong

Add this button to the movie detail page so I can save movies while browsing!
```

### Prompt 6: Create My Watchlist Page
```
I want a page where I can see all my saved movies! Create it at app/watchlist/page.tsx.

The page should:
- Show all the movies I've added to my watchlist in a nice grid (like the home page)
- Use the same MovieCard component we already have
- Add a "Remove" button to each movie so I can delete ones I'm not interested in anymore
- Show a count at the top like "You have 12 movies in your watchlist"

If my watchlist is empty, show a friendly message:
- "Your watchlist is empty!"
- A button that says "Browse Movies" to go back and find some

Load the movies from my watchlist when the page opens, and make it look great on all devices!
```

### Prompt 7: Add Search Functionality
```
I want to be able to search for any movie! Create a search page at app/search/page.tsx.

Here's how it should work:
- When I type a movie name in the search bar (in the navigation) and press Enter, take me to the search page
- Show the search results in a grid (like the home page)
- While it's searching, show a loading indicator
- If no movies are found, show "No results found for '{search term}'. Try a different search!"

Connect the search bar in the navigation:
- When I type and press Enter (or click search), go to /search?q=whatever-i-typed
- The search page should automatically search for that movie

Use this search API: https://api.themoviedb.org/3/search/movie

Make it feel fast and responsive - I want to find movies quickly!
```

### Prompt 8: Add Movie Categories
```
I want to browse different types of movies! Create a movies page at app/movies/page.tsx.

Add category buttons at the top:
- Popular (most popular movies right now)
- Top Rated (highest rated movies of all time)
- Upcoming (movies coming soon)
- Now Playing (currently in theaters)

When I click a category button:
- Highlight that button so I know it's active
- Show movies from that category in a grid
- The URL should update (like /movies?category=popular)

Add a "Load More" button at the bottom:
- When I click it, show more movies from that category
- Show a loading indicator while loading more
- Keep adding movies to the page instead of replacing them

Make the category buttons look great and make it clear which one I'm viewing!
```

### Prompt 9: Make the Watchlist Permanent
```
Right now, my watchlist disappears when I restart the server! Let's fix that.

Update the watchlist backend (app/api/watchlist/route.ts) to save movies to a file:
- Create a data/watchlist.json file to store all my saved movies
- When I add a movie, save it to this file
- When I remove a movie, delete it from the file
- When I load my watchlist, read from this file

Create helper functions in app/lib/watchlist.ts to:
- Get all my saved movies
- Add a new movie
- Remove a movie
- Check if a movie is already in my watchlist

This way, my watchlist will still be there even if I close and reopen the app!
```

### Prompt 10: Polish and Make It Perfect
```
Let's add the final touches to make this app feel professional and polished!

**Loading states:**
- Create a loading.tsx file that shows a nice skeleton/spinner while pages load
- Add loading indicators when fetching data
- Make sure users always know when something is happening

**Error handling:**
- Create an error.tsx page that shows a friendly message when something goes wrong
- Create a not-found.tsx page for when someone tries to visit a movie that doesn't exist
- Handle errors gracefully - no scary error messages!

**Make it beautiful:**
- Add smooth animations when hovering over movie cards
- Add smooth transitions between pages
- Make sure it looks perfect on phones, tablets, and computers
- Add nice hover effects on buttons

**Make it accessible:**
- Add alt text to all images (describe what's in the poster)
- Make sure I can navigate with just my keyboard (Tab key)
- Add helpful labels for screen readers

**Performance:**
- Make images load fast and look good
- Cache movie data so I don't have to reload it every time
- Make the "Load More" button work smoothly

**Bonus features (if you want!):**
- Add a dark/light theme toggle
- Show movie trailers (YouTube embeds)
- Show related/similar movies on detail pages
- Let users rate movies

Make it feel like a real, professional movie app like Netflix or IMDB!
```

## Project Structure

```
03-nextjs-fullstack/
├── app/
│   ├── api/
│   │   └── watchlist/
│   │       ├── route.ts           # GET, POST watchlist
│   │       └── [id]/route.ts      # DELETE from watchlist
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── MovieCard.tsx
│   │   └── WatchlistButton.tsx
│   ├── movies/
│   │   ├── page.tsx               # Browse movies
│   │   └── [id]/page.tsx          # Movie details
│   ├── search/
│   │   └── page.tsx               # Search results
│   ├── watchlist/
│   │   └── page.tsx               # User watchlist
│   ├── lib/
│   │   └── watchlist.ts           # Watchlist utilities
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Home page
│   ├── globals.css
│   ├── loading.tsx                # Loading UI
│   ├── error.tsx                  # Error boundary
│   └── not-found.tsx              # 404 page
├── public/                        # Static assets
├── .env.local                     # Environment variables
├── next.config.js
├── tailwind.config.ts
└── package.json
```

## Key Concepts You'll Learn

- ✅ Next.js 15 App Router
- ✅ Server Components vs Client Components
- ✅ Layouts and nested routing
- ✅ Dynamic routes [id]
- ✅ API Routes (Route Handlers)
- ✅ Async/await data fetching
- ✅ Server-side rendering (SSR)
- ✅ Client-side interactivity
- ✅ Environment variables
- ✅ TypeScript with Next.js
- ✅ Tailwind CSS
- ✅ Next.js Image optimization
- ✅ Error boundaries and loading states
- ✅ External API integration

## Testing Your Application

Test these scenarios:

1. ✅ Home page loads with trending movies
2. ✅ Click a movie to view details
3. ✅ Add movie to watchlist
4. ✅ View watchlist page
5. ✅ Remove movie from watchlist
6. ✅ Search for movies
7. ✅ Browse by categories
8. ✅ Responsive on all screen sizes
9. ✅ Refresh page - watchlist persists
10. ✅ Try invalid movie ID - 404 page shows

## TMDB API Reference

Base URL: `https://api.themoviedb.org/3`

Key endpoints:
- Trending: `/trending/movie/week?api_key={key}`
- Popular: `/movie/popular?api_key={key}`
- Details: `/movie/{id}?api_key={key}`
- Search: `/search/movie?api_key={key}&query={query}`
- Credits: `/movie/{id}/credits?api_key={key}`

Image base URL: `https://image.tmdb.org/t/p/w500{poster_path}`

## Tips for Success

1. **Understand Server vs Client Components:** Server components = no useState/useEffect
2. **Use TypeScript:** Let types guide you
3. **Check the console:** Both browser and terminal
4. **Read Next.js docs:** They're excellent!
5. **Use Tailwind:** It's fast once you learn the classes
6. **Test routes:** Make sure /movies/123 works

## Troubleshooting

**API key not working:**
- Check .env.local exists
- Verify variable name (NEXT_PUBLIC_ for client-side)
- Restart dev server after adding env vars

**"use client" errors:**
- Add "use client" at the top of files using hooks
- Server components can't use useState/useEffect

**Images not loading:**
- Use next/image component
- Add TMDB domain to next.config.js remotePatterns

## Bonus Challenges

Once you've built the main app, try asking your AI assistant to add these advanced features:

1. **User accounts** - Let people create accounts and have their own watchlists (use NextAuth.js)
2. **Real database** - Save data to a proper database instead of a file (PostgreSQL with Prisma)
3. **User reviews** - Let people write and read reviews for movies
4. **Social sharing** - Add buttons to share movies on Twitter, Facebook, etc.
5. **Make it installable** - Turn it into an app that can be installed on phones (PWA)
6. **Track popular movies** - Show which movies are most viewed/saved by users
7. **AI recommendations** - Suggest movies based on what users like
8. **Go live!** - Deploy your app to Vercel so anyone can use it (it's free!)

## Next Steps

After completing this project:
- Deploy your app to Vercel (free!)
- Review how Next.js combines frontend and backend
- Compare this to Project 2 (React only)
- Build your own fullstack project!

## Resources

- Next.js Docs: https://nextjs.org/docs
- TMDB API Docs: https://developers.themoviedb.org/3
- Tailwind CSS: https://tailwindcss.com/docs

---

**Ready?** Start with Prompt 1 and build your movie database! 🎬🍿
