# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a progressive web development learning path with 4 projects teaching HTML/CSS/JS → React → Next.js. The repository follows a "See it, then build it!" philosophy where students first experience a fully-functional AI application (Project 0), then learn fundamentals through AI-assisted prompts (Projects 1-3).

## Project Structure

```
ndu_coding_prep/
├── 00-wow-ai-creative-studio/    # Fully implemented Next.js 15 + DALL-E 3 app (reference)
├── 01-web-fundamentals/          # Vanilla HTML/CSS/JS templates with learning prompts
├── 02-react-modern-frontend/     # React 18 + Vite templates with learning prompts
└── 03-nextjs-fullstack/          # Next.js 15 templates with learning prompts
```

Each project is **self-contained** with its own dependencies and can be developed independently.

## Development Commands

### Project 0: AI Creative Studio (Next.js)
```bash
cd 00-wow-ai-creative-studio
npm install
cp ../.env.example .env.local  # Then add OpenAI API key
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
```

### Project 1: Web Fundamentals (Vanilla)
```bash
cd 01-web-fundamentals
# No build needed - open index.html directly in browser
# Or use: python -m http.server 8000
```

### Project 2: React Modern Frontend (Vite)
```bash
cd 02-react-modern-frontend
npm install
npm run dev      # Start Vite dev server (http://localhost:5173)
npm run build    # TypeScript compile + Vite build
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

### Project 3: Next.js Fullstack
```bash
cd 03-nextjs-fullstack
npm install
# Create .env.local with TMDB_API_KEY and NEXT_PUBLIC_TMDB_API_KEY
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
```

## Architecture Patterns

### Next.js 15 App Router (Projects 0 & 3)

**Server vs Client Components:**
- **Server components (default):** Used for layouts, static content, and async data fetching. No JavaScript sent to client.
- **Client components:** Require `"use client"` directive at top of file - used for hooks (useState, useEffect), event handlers, and interactivity.

**Composition Rules:**
1. Import Client Components into Server Components ✅
2. Pass Server Components to Client Components as children/props ✅
3. Import Server Components into Client Components ❌ (causes error)
4. Keep "use client" boundaries as low as possible to minimize client bundle size

**Best Practice:** Fetch data in Server Components, pass to Client Components as props

**File-based Routing:**
```
app/
├── page.tsx              # Home page (/)
├── layout.tsx            # Root layout (wraps all pages)
├── loading.tsx           # Loading UI boundary
├── error.tsx             # Error boundary
├── not-found.tsx         # 404 page
├── api/
│   └── generate/
│       └── route.ts      # API endpoint: POST /api/generate
└── movies/
    ├── page.tsx          # Movies page (/movies)
    └── [id]/page.tsx     # Dynamic route (/movies/123)
```

**API Routes Pattern:**
```typescript
// app/api/[name]/route.ts
export async function GET(request: NextRequest) { }
export async function POST(request: NextRequest) { }
export async function DELETE(request: NextRequest) { }

// Always return NextResponse with proper status codes
return NextResponse.json({ data }, { status: 200 });
return NextResponse.json({ error: "..." }, { status: 400 });
```

### State Management Pattern

**Parent-Child Callback Pattern** (used throughout Project 0):
```typescript
// Parent component manages state
const [images, setImages] = useState<GeneratedImage[]>([]);

const handleImageGenerated = (url: string, prompt: string) => {
  const newImage = { url, prompt, timestamp: Date.now() };
  setImages((prev) => [newImage, ...prev]);
};

// Pass callback to child
<ImageGenerator onImageGenerated={handleImageGenerated} />
```

**Props Interface Pattern:**
```typescript
interface ComponentProps {
  onAction: (param: string) => void;
  isLoading: boolean;
  data: DataType[];
}

export default function Component({ onAction, isLoading, data }: ComponentProps) {
  // Component implementation
}
```

### Form Handling Pattern

Standard pattern used across all projects:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Validation
  if (!input.trim()) {
    setError("Please enter a value");
    return;
  }

  // Loading state
  setIsLoading(true);
  setError("");

  try {
    const response = await fetch("/api/endpoint", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: input.trim() }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Operation failed");
    }

    // Success handling
    onSuccess(result);
  } catch (err: any) {
    setError(err.message);
  } finally {
    setIsLoading(false);
  }
};
```

### Component Organization

**Location Strategy:**
- Shared components: `app/components/` (for Next.js) or `src/components/` (for React)
- Route-specific components: Colocate next to the page that uses them
- Utility functions: `app/lib/` or `src/lib/`

**Naming Conventions:**
- Components: PascalCase files and exports (`ImageGenerator.tsx`, `export default function ImageGenerator`)
- Utilities: camelCase (`watchlist.ts`, `export function getWatchlist()`)
- Types/Interfaces: PascalCase (`interface GeneratedImage {}`)

### Styling with Tailwind CSS

**Common Patterns Used:**
```typescript
// Gradient backgrounds
className="bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900"

// Text gradients
className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"

// Glassmorphism effect
className="bg-white/10 backdrop-blur-md border border-white/20"

// Responsive grid
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"

// Button with hover states
className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
```

### Animation with Framer Motion (Project 0)

```typescript
import { motion } from "framer-motion";

// Entrance animation
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>

// Staggered list animations
{items.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.1 }}
  >
))}

// Interactive hover effects
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
```

## TypeScript Configuration

All projects use TypeScript with:
- Strict mode enabled
- Path aliases configured (`@/*` maps to `./app/*` or `./src/*`)
- Next.js has additional server/client type definitions
- Explicit return types not required but interfaces for data types are mandatory

## Environment Variables

**Next.js Projects (0 & 3):**
- File: `.env.local` (never commit this)
- Server-only variables: `VARIABLE_NAME`
- Client-accessible variables: `NEXT_PUBLIC_VARIABLE_NAME`
- Access: `process.env.VARIABLE_NAME`

**React Project (2):**
- File: `.env`
- All variables must start with: `VITE_`
- Access: `import.meta.env.VITE_VARIABLE_NAME`

**Project 1:** No environment variables (vanilla JS)

## Key Technical Details

### Project 0 Implementation (Reference)

This is the **only fully implemented project** - use it as a reference for code quality and patterns.

**Stack:** Next.js 15.5, React 18.3, TypeScript, Tailwind CSS, Framer Motion, OpenAI SDK

**Key Files:**
- `app/page.tsx` - Main client component with state management
- `app/api/generate/route.ts` - API endpoint for DALL-E 3 integration
- `app/components/ImageGenerator.tsx` - Form component with validation
- `app/components/ImageGallery.tsx` - Gallery with animations
- `app/layout.tsx` - Server component with metadata

**API Integration Pattern:**
```typescript
// Client-side API call
const response = await fetch("/api/generate", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ prompt: userInput }),
});

// Server-side API route
export async function POST(request: NextRequest) {
  const { prompt } = await request.json();
  // Call external API
  const result = await externalApi.call(prompt);
  return NextResponse.json({ data: result });
}
```

### Projects 1-3 (Templates)

These contain **empty/scaffold files with detailed README prompts**. Students copy prompts into AI assistants to progressively build the applications.

**Do not implement these projects** unless explicitly asked - they are learning templates. Each README contains 8-10 progressive prompts that guide students through implementation.

## Common Development Tasks

### Adding a New Component (Next.js)

```typescript
// app/components/NewComponent.tsx
"use client"; // Only if using hooks or event handlers

interface NewComponentProps {
  data: string;
  onAction: () => void;
}

export default function NewComponent({ data, onAction }: NewComponentProps) {
  return (
    <div className="...">
      {/* Implementation */}
    </div>
  );
}
```

### Adding a New API Route (Next.js)

```typescript
// app/api/resource/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    // Logic here
    return NextResponse.json({ data: [] }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // Validation
    if (!body.requiredField) {
      return NextResponse.json(
        { error: "Missing required field" },
        { status: 400 }
      );
    }
    // Logic here
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
```

### Adding a Dynamic Route (Next.js)

**Important:** In Next.js 15, `params` and `searchParams` are Promises that must be awaited.

```typescript
// app/resource/[id]/page.tsx - Server Component
interface PageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ResourcePage({ params, searchParams }: PageProps) {
  // MUST await params in Next.js 15
  const { id } = await params;
  const query = await searchParams;

  // Fetch data using id (server component - can use async/await directly)
  const data = await fetchData(id);

  return <div>{/* Render data */}</div>;
}
```

**For Client Components accessing dynamic params:**
```typescript
// Use React.use() to unwrap the Promise
'use client';
import { use } from 'react';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ClientPage({ params }: PageProps) {
  const { id } = use(params);
  return <div>ID: {id}</div>;
}
```

**For accessing URL search params in Client Components:**
```typescript
'use client';
import { useSearchParams, usePathname } from 'next/navigation';

export default function SearchComponent() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const query = searchParams.get('q');

  return <div>Search: {query}</div>;
}
```

## React Hooks Best Practices

### useState - State Management

```typescript
// Basic state
const [count, setCount] = useState(0);

// State with object - always use functional update for immutability
const [user, setUser] = useState({ name: '', email: '' });
setUser(prev => ({ ...prev, name: 'John' }));

// State with array - immutable updates
const [items, setItems] = useState<Item[]>([]);
setItems(prev => [...prev, newItem]);        // Add
setItems(prev => prev.filter(i => i.id !== id));  // Remove
```

### useEffect - Side Effects and Cleanup

**Pattern 1: Effect with cleanup (event listeners, subscriptions)**
```typescript
useEffect(() => {
  function handleMove(e: MouseEvent) {
    setPosition({ x: e.clientX, y: e.clientY });
  }

  window.addEventListener('pointermove', handleMove);

  // Cleanup function - ALWAYS return cleanup for subscriptions
  return () => {
    window.removeEventListener('pointermove', handleMove);
  };
}, []); // Empty deps = run once on mount
```

**Pattern 2: Effect with dependencies**
```typescript
useEffect(() => {
  const connection = createConnection(serverUrl, roomId);
  connection.connect();

  return () => {
    connection.disconnect();
  };
}, [serverUrl, roomId]); // Re-run when these change
```

**Pattern 3: Data fetching in effects**
```typescript
useEffect(() => {
  let ignore = false; // Prevent race conditions

  async function fetchData() {
    const result = await fetch(`/api/data/${id}`);
    const data = await result.json();

    if (!ignore) {
      setData(data);
    }
  }

  fetchData();

  return () => {
    ignore = true; // Cleanup: ignore stale requests
  };
}, [id]);
```

**Critical Rules:**
- Effects run AFTER render
- Always include dependencies in the dependency array
- Return cleanup function for subscriptions, timers, event listeners
- Don't use effects for event handlers - use event handler functions instead

### Event Handlers - When NOT to use useEffect

```typescript
// ❌ WRONG - Don't use useEffect for user interactions
useEffect(() => {
  if (clicked) {
    submitForm();
  }
}, [clicked]);

// ✅ CORRECT - Use event handlers
function handleClick() {
  submitForm();
}

return <button onClick={handleClick}>Submit</button>;
```

### Controlled Components Pattern

```typescript
// Controlled input - value tied to state
function Form() {
  const [text, setText] = useState('');

  return (
    <input
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
}

// Controlled textarea
function TextArea() {
  const [content, setContent] = useState('');

  return (
    <textarea
      value={content}
      onChange={(e) => setContent(e.target.value)}
    />
  );
}
```

## Tailwind CSS Best Practices

### Responsive Design with Breakpoints

**Tailwind Breakpoints:**
- `sm:` - 640px and up (small tablets)
- `md:` - 768px and up (tablets)
- `lg:` - 1024px and up (desktops)
- `xl:` - 1280px and up (large desktops)
- `2xl:` - 1536px and up (extra large screens)

**Mobile-first approach (default → larger screens):**
```typescript
// Starts at w-16, becomes w-32 on md, w-48 on lg
<img className="w-16 md:w-32 lg:w-48" src="..." />

// Grid: 1 column mobile, 2 on tablet, 3 on desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

// Flex direction: column on mobile, row on desktop
<div className="flex flex-col md:flex-row gap-4">
```

**Applying styles within a breakpoint range:**
```html
<!-- Only flex between md and xl breakpoints -->
<div class="md:max-xl:flex">
  <!-- ... -->
</div>
```

### Built-in Animations

**Pre-built animation utilities:**
```typescript
// Spinning loader
<div className="animate-spin rounded-full h-8 w-8 border-b-2" />

// Pulsing indicator
<div className="animate-pulse bg-gray-200 h-4 w-full" />

// Bouncing element
<div className="animate-bounce" />

// Ping effect (expanding circle)
<div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
```

### Hover, Focus, and Active States

```typescript
// Button with multiple states
<button className="
  bg-blue-600
  hover:bg-blue-700
  active:bg-blue-800
  focus:outline-none
  focus:ring-2
  focus:ring-blue-500
  focus:ring-offset-2
  transition-colors
  duration-200
">
  Click me
</button>

// Link with hover underline
<a className="text-blue-600 hover:underline hover:text-blue-800">
  Learn more
</a>
```

### Container Queries (Advanced)

```html
<!-- Container that children can query against -->
<div class="@container">
  <!-- Child adjusts based on container size, not viewport -->
  <div class="@sm:text-lg @md:text-xl">
    Responsive to container
  </div>
</div>
```

## Error Handling Standards

**Client Components:**
- Use try-catch-finally for async operations
- Display user-friendly error messages in UI
- Use error state: `const [error, setError] = useState("")`
- Clear errors on new attempts

**API Routes:**
- Always use try-catch
- Return appropriate HTTP status codes (400, 404, 500)
- Include error messages in response body
- Log errors to console for debugging

**Next.js Error Boundaries:**
- `app/error.tsx` - Catches errors in routes
- `app/not-found.tsx` - Custom 404 page
- `app/loading.tsx` - Loading UI for Suspense boundaries

## Testing

No test frameworks are configured in this learning repository. For testing:
- Manual testing in browser
- Use browser DevTools console (F12)
- Check Network tab for API calls
- Use React DevTools browser extension for Projects 0, 2, 3

## Important Notes for AI Assistants

1. **Projects 1-3 are learning templates** - Do not auto-implement them unless explicitly requested. They contain prompts for students to use with AI assistants.

2. **Project 0 is the reference implementation** - When showing examples of best practices, refer to this project's code.

3. **Respect the learning progression** - Each project builds on previous knowledge. Don't introduce advanced concepts from later projects when working on earlier ones.

4. **Follow the established patterns** - Use the callback pattern for state lifting, explicit TypeScript interfaces, and the form handling pattern shown above.

5. **Environment setup is critical** - Projects 0 and 3 require API keys. Always remind users to set up `.env.local` files.

6. **"use client" directive matters** - In Next.js projects, any component using useState, useEffect, or event handlers must have `"use client"` at the top.

7. **This is NOT a monorepo** - Each project has its own package.json and dependencies. Never try to install dependencies at the root level.

8. **Windows compatibility** - The README mentions Git Bash setup for Windows users. Commands should use Unix-style syntax (bash).

## Next.js 15 Data Fetching Patterns

### Server Components - Direct Async/Await

Server Components can fetch data directly without useState or useEffect:

```typescript
// app/page.tsx - Server Component (no "use client")
async function getRecentPosts() {
  const res = await fetch('https://api.example.com/posts', {
    next: { revalidate: 3600 } // Cache for 1 hour
  });
  const posts = await res.json();
  return posts;
}

export default async function Page() {
  // Fetch data directly in the component
  const posts = await getRecentPosts();

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
```

### Mixing Server and Client Components

**Pattern: Server Component fetches, Client Component displays**

```typescript
// app/page.tsx - Server Component
import ClientComponent from './ClientComponent';

async function getData() {
  const res = await fetch('https://api.example.com/data');
  return res.json();
}

export default async function ServerPage() {
  const data = await getData();

  // Pass server-fetched data to client component as props
  return <ClientComponent data={data} />;
}

// ClientComponent.tsx - Client Component
'use client';
import { useState } from 'react';

export default function ClientComponent({ data }: { data: DataType[] }) {
  const [selected, setSelected] = useState(null);

  // Has access to hooks and interactivity
  return <div onClick={() => setSelected(data[0])}>{/* ... */}</div>;
}
```

### generateStaticParams for Static Generation

```typescript
// app/blog/[slug]/page.tsx
export async function generateStaticParams() {
  const posts = await fetch('https://api.example.com/posts').then(res => res.json());

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  return <article>{post.content}</article>;
}
```

## Performance Optimization Guidelines

### Next.js Image Optimization

Always use the Next.js Image component for optimal loading:

```typescript
import Image from 'next/image';

// With external images, add domain to next.config.js
<Image
  src="https://example.com/photo.jpg"
  alt="Description"
  width={500}
  height={300}
  priority  // For above-the-fold images
/>

// Local images
import photo from './photo.jpg';
<Image src={photo} alt="Description" />
```

### Dynamic Imports for Code Splitting

```typescript
import dynamic from 'next/dynamic';

// Client Component lazy loading
const DynamicComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false // Disable server-side rendering if needed
});

export default function Page() {
  return <DynamicComponent />;
}
```

### Suspense Boundaries for Streaming

```typescript
import { Suspense } from 'react';

export default function Page() {
  return (
    <div>
      <h1>My Page</h1>
      <Suspense fallback={<Loading />}>
        <SlowComponent />
      </Suspense>
      <FastComponent />
    </div>
  );
}
```

## Official Documentation References

- **Next.js 15 Documentation:** https://nextjs.org/docs
- **React 19 Documentation:** https://react.dev
- **Tailwind CSS Documentation:** https://tailwindcss.com/docs
- **TypeScript Handbook:** https://www.typescriptlang.org/docs
- **OpenAI API Documentation:** https://platform.openai.com/docs

### Key Next.js 15 Changes

1. **Async Request APIs:** `params`, `searchParams`, `cookies()`, and `headers()` are now async
2. **Turbopack:** New default bundler (still can use webpack)
3. **Partial Prerendering (Experimental):** Combining static and dynamic rendering
4. **Server Actions:** Stable in Next.js 15

### Key React 19 Features Available

1. **`use()` hook:** Unwrap Promises and Context in render
2. **Server Components:** Run on server, don't ship to client
3. **Actions:** Async functions for forms and data mutations
4. **`useOptimistic()`:** Optimistic UI updates
5. **Document Metadata:** Built-in `<title>` and `<meta>` support
