# 🎨 Project 0: AI Creative Studio

**Status:** ✅ Fully Implemented

Welcome to the WOW project! This is a fully functional AI-powered image generation application built with the latest technologies. Run this first to see what's possible with modern web development!

## What This App Does

This application showcases:
- Real-time AI image generation using OpenAI's DALL-E 3
- Beautiful, responsive UI with Tailwind CSS
- Smooth animations with Framer Motion
- Next.js 15 App Router architecture
- TypeScript for type safety
- Professional code structure and best practices

## Features

- **AI Image Generation:** Type any prompt and watch AI create stunning images
- **Interactive Gallery:** View all your generated images with timestamps
- **Download Capability:** Save any generated image to your device
- **Example Prompts:** Quick-start buttons with creative prompts
- **Responsive Design:** Works perfectly on desktop, tablet, and mobile
- **Beautiful Animations:** Smooth transitions and loading states
- **Error Handling:** Graceful error messages and loading states

## Tech Stack

- **Framework:** Next.js 15.5 (latest stable)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **AI API:** OpenAI DALL-E 3
- **Image Optimization:** Next.js Image component

## Getting Started

### 🚀 Quick Setup (Recommended)

After cloning the repository, run the automated setup script:

```bash
cd 00-wow-ai-creative-studio
./setup.sh
```

The script will:
- ✅ Check Node.js version
- ✅ Install dependencies
- ✅ Guide you through API key setup
- ✅ Verify everything is ready

Then start the development server:
```bash
./start.sh
```

When done, stop the server:
```bash
./stop.sh
```

**📚 For detailed instructions and API key options, see [SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md)**

---

### 🛠️ Manual Setup (Alternative)

If you prefer manual setup:

1. **Navigate to this directory:**
   ```bash
   cd 00-wow-ai-creative-studio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Copy the `.env.example` from the root directory:
   ```bash
   cp ../.env.example .env.local
   ```

   Then edit `.env.local` and add your OpenAI API key:
   ```env
   OPENAI_API_KEY=sk-your-actual-api-key-here
   ```

   **🔑 Need an API key?** See [SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md) for options

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**

   Navigate to [http://localhost:3000](http://localhost:3000)

## How to Use

1. **Enter a Prompt:** Type a description of what you want to see (e.g., "A futuristic city at sunset")
2. **Generate:** Click the "Generate Image" button
3. **Wait:** The AI will create your image (takes 5-15 seconds)
4. **View & Download:** Your image appears in the gallery below. Hover over it to download!
5. **Create More:** Generate as many images as you want!

## Example Prompts

Try these creative prompts:
- "A magical forest with glowing mushrooms and fireflies"
- "An astronaut riding a horse on Mars at sunset"
- "A cozy coffee shop in a cyberpunk city with neon lights"
- "A steampunk airship flying over Victorian London"
- "An underwater city with bioluminescent architecture"

## Project Structure

```
00-wow-ai-creative-studio/
├── app/
│   ├── api/
│   │   └── generate/
│   │       └── route.ts          # API endpoint for DALL-E 3
│   ├── components/
│   │   ├── ImageGenerator.tsx    # Main input form component
│   │   └── ImageGallery.tsx      # Gallery display component
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── public/                       # Static assets
├── next.config.js                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies
```

## Key Concepts Demonstrated

### 1. Next.js 15 App Router
- Server and client components
- API routes with route handlers
- Modern file-based routing

### 2. React Patterns
- useState for state management
- Component composition
- Props and TypeScript interfaces
- Event handling (onClick, onChange, onSubmit)

### 3. API Integration
- Async/await for API calls
- Error handling
- Loading states
- Environment variables

### 4. Styling & Animations
- Tailwind CSS utility classes
- Framer Motion animations
- Responsive design
- Custom gradients and effects

### 5. TypeScript
- Type safety
- Interfaces
- Type annotations
- Error prevention

## API Cost Information

**Important:** This app uses OpenAI's DALL-E 3 API, which costs approximately **$0.04 per image** (standard quality, 1024x1024).

Monitor your usage at: https://platform.openai.com/usage

## Troubleshooting

### "OpenAI API key is not configured"
- Make sure `.env.local` exists in this directory
- Check that your API key is correctly set
- Restart the development server after adding the key

### "Failed to generate image"
- Check your OpenAI account has credits
- Verify your API key is valid
- Check your internet connection

### Slow image generation
- DALL-E 3 typically takes 5-15 seconds per image
- This is normal and depends on OpenAI's server load

## Building for Production

```bash
npm run build
npm start
```

## Learning from This Code

As you work through Projects 1-3, refer back to this code to see:
- How components are structured
- How to handle async operations
- How to style with Tailwind CSS
- How to create smooth user experiences
- How to integrate external APIs

## Next Steps

Now that you've seen what's possible, head to:
- [Project 1: Web Fundamentals](../01-web-fundamentals/README.md) to start learning!

---

**Questions?** Review the code, experiment with modifications, and use your AI assistant to understand any concepts!
