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

### Prompt 1: Layout & Navigation
```
I'm building a movie database with Next.js 15 App Router. Start by setting up the layout and navigation:

1. In app/layout.tsx, create a root layout with:
   - A navigation bar component
   - Footer component
   - Proper metadata

2. Create app/components/Navbar.tsx with:
   - App logo/title
   - Navigation links: Home, Movies, Watchlist
   - Search bar
   - Use Next.js Link component for navigation
   - Style with Tailwind CSS - make it modern and sticky

3. Create app/components/Footer.tsx with:
   - Copyright information
   - Links to TMDB (data source attribution)
   - Style with Tailwind CSS

4. Update globals.css with any custom styles needed.

Make the navigation responsive with a mobile menu.
```

### Prompt 2: Home Page with Server Component
```
Create the home page in app/page.tsx as a SERVER component:

1. Fetch trending movies from TMDB API using async/await:
   - Endpoint: https://api.themoviedb.org/3/trending/movie/week?api_key={API_KEY}
   - Use the fetch API directly in the component (server component)
   - No need for useState or useEffect - this runs on the server

2. Create a MovieCard component in app/components/MovieCard.tsx:
   - Display movie poster (use Next.js Image component)
   - Movie title
   - Release year
   - Rating
   - Link to detailed page
   - Style beautifully with Tailwind

3. Display the trending movies in a responsive grid (3-4 columns on desktop)

4. Add a hero section at the top with:
   - App title
   - Tagline
   - Call to action

Use TypeScript interfaces for movie data types.
```

### Prompt 3: Dynamic Routes - Movie Detail Page
```
Create a dynamic route for individual movie pages:

1. Create app/movies/[id]/page.tsx as a SERVER component

2. Fetch movie details from TMDB:
   - Endpoint: https://api.themoviedb.org/3/movie/{id}?api_key={API_KEY}
   - Also fetch credits: https://api.themoviedb.org/3/movie/{id}/credits?api_key={API_KEY}

3. Display comprehensive movie information:
   - Large backdrop image
   - Poster
   - Title, tagline, overview
   - Rating, runtime, release date
   - Genres
   - Cast (top 6 actors with photos)
   - Director
   - "Add to Watchlist" button

4. Use Next.js Image component for optimized images

5. Style the page beautifully with Tailwind CSS

The route should work like: /movies/123 where 123 is the movie ID.
```

### Prompt 4: API Route - Watchlist Backend
```
Create API routes to manage the watchlist:

1. Create app/api/watchlist/route.ts with:
   - GET handler: Returns all watchlist items
   - POST handler: Adds a movie to watchlist
   - Use an in-memory array for storage (for now)

2. Create app/api/watchlist/[id]/route.ts with:
   - DELETE handler: Removes a movie from watchlist

3. Define TypeScript types for request/response

4. Return proper HTTP status codes:
   - 200 for success
   - 404 for not found
   - 400 for bad requests
   - 500 for server errors

5. Handle errors gracefully with try-catch

Example POST body: { id, title, poster_path, release_date, vote_average }
```

### Prompt 5: Client Component - Watchlist Functionality
```
Create client-side watchlist functionality:

1. Create app/components/WatchlistButton.tsx as a CLIENT component:
   - Use "use client" directive
   - Accept movie data as props
   - Use useState to track if movie is in watchlist
   - Use useEffect to check watchlist status on mount
   - onClick handler to add/remove from watchlist
   - Make API calls to /api/watchlist endpoints
   - Show different button states (Add/Remove)
   - Add loading state during API calls

2. Import and use this button in the movie detail page

3. Add proper error handling and user feedback (toast notifications or alerts)

This demonstrates the mix of server and client components in Next.js 15!
```

### Prompt 6: Watchlist Page
```
Create a watchlist page at app/watchlist/page.tsx:

1. Create as a CLIENT component (since it needs interactivity)

2. Use useState to store watchlist movies

3. Use useEffect to:
   - Fetch watchlist from /api/watchlist on mount
   - Update the UI

4. Display watchlist movies in a grid using the MovieCard component

5. Add a "Remove" button to each card

6. Show an empty state when watchlist is empty with:
   - Message: "Your watchlist is empty"
   - Button to browse movies

7. Add a count of total movies in watchlist

8. Make it responsive and styled with Tailwind CSS
```

### Prompt 7: Search Functionality
```
Implement movie search functionality:

1. Create app/search/page.tsx as a CLIENT component

2. Use URLSearchParams to get the search query from the URL

3. Create a search function that:
   - Fetches from TMDB search endpoint
   - Endpoint: https://api.themoviedb.org/3/search/movie?api_key={API_KEY}&query={query}
   - Uses useState for results and loading state
   - Uses useEffect to search when query changes

4. Display search results in a grid

5. Show "No results" message if nothing found

6. Add loading skeleton while searching

7. In the Navbar search bar:
   - Add onChange handler
   - Navigate to /search?q={query} when user submits
   - Use Next.js router (useRouter from next/navigation)

Make the search feel instant and responsive!
```

### Prompt 8: Movies Page with Filtering
```
Create a movies browsing page at app/movies/page.tsx:

1. Add filter/category options:
   - Popular
   - Top Rated
   - Upcoming
   - Now Playing

2. Use URLSearchParams to handle the active category

3. Fetch movies based on selected category:
   - Popular: /3/movie/popular
   - Top Rated: /3/movie/top_rated
   - Upcoming: /3/movie/upcoming
   - Now Playing: /3/movie/now_playing

4. Add filter buttons that update the URL

5. Use useSearchParams and useRouter for navigation

6. Display movies in a grid

7. Add pagination:
   - "Load More" button
   - Append new movies to the existing list
   - Show loading state

Style it beautifully with Tailwind CSS!
```

### Prompt 9: Enhanced API Route with Persistence
```
Improve the watchlist API to use file-based storage:

1. Update app/api/watchlist/route.ts to:
   - Read/write from a JSON file (or use a simple database approach)
   - Use Node.js fs module for file operations
   - Store data in a data/watchlist.json file

2. Create app/lib/watchlist.ts with utility functions:
   - getWatchlist(): Promise<Movie[]>
   - addToWatchlist(movie: Movie): Promise<void>
   - removeFromWatchlist(id: string): Promise<void>
   - isInWatchlist(id: string): Promise<boolean>

3. Use these utilities in your API routes

4. Handle concurrent access carefully

This makes the watchlist persist across server restarts! Alternatively, you can suggest using a proper database if the student is ready.
```

### Prompt 10: Final Polish & Advanced Features
```
Add the finishing touches to make it production-ready:

1. Add loading states everywhere:
   - Create app/loading.tsx for page-level loading
   - Create loading skeletons for components
   - Add Suspense boundaries where needed

2. Add error handling:
   - Create app/error.tsx for error boundaries
   - Create app/not-found.tsx for 404 pages
   - Graceful API error handling

3. Improve UI/UX:
   - Add smooth page transitions
   - Add hover effects and animations
   - Make fully responsive (mobile, tablet, desktop)
   - Add meta tags for SEO (in metadata)
   - Add Open Graph tags for social sharing

4. Performance optimizations:
   - Use Next.js Image optimization
   - Add proper loading states
   - Implement pagination or infinite scroll
   - Cache API responses where appropriate

5. Accessibility:
   - Add ARIA labels
   - Ensure keyboard navigation works
   - Add alt text to all images
   - Proper heading hierarchy

6. Optional advanced features:
   - Add user ratings
   - Add movie trailers (YouTube embed)
   - Add related movies section
   - Add movie recommendations
   - Add dark/light theme toggle

Make it feel like a professional application!
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

1. **Add authentication** - User accounts with NextAuth.js
2. **Add a real database** - PostgreSQL with Prisma
3. **Add reviews** - Users can write movie reviews
4. **Add sharing** - Share movies on social media
5. **Add PWA** - Make it installable
6. **Add analytics** - Track popular movies
7. **Add recommendations** - AI-powered suggestions
8. **Deploy to Vercel** - Go live!

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
