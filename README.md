# NDU Coding Prep - AI-Assisted Web Development Learning Path

Welcome to the NDU Coding Prep repository! This is a hands-on learning journey designed to teach modern web development using AI assistance (Cursor AI or similar tools).

## Learning Philosophy

This repository takes a unique approach: **See it, then build it!** You'll start by experiencing a fully-functional AI-powered application, then learn the fundamentals to build similar projects yourself using AI pair programming.

## Repository Structure

```
ndu_coding_prep/
├── 00-wow-ai-creative-studio/    # 🎨 FULLY IMPLEMENTED - Start here for motivation!
├── 01-web-fundamentals/          # 📚 HTML, CSS, JavaScript basics
├── 02-react-modern-frontend/     # ⚛️  React with hooks and modern patterns
└── 03-nextjs-fullstack/          # 🚀 Full-stack with Next.js 15
```

## Learning Path

### 🎨 Project 0: AI Creative Studio (START HERE!)
**Status:** Fully implemented and ready to run

A stunning AI-powered image generation app built with Next.js 15, TypeScript, and OpenAI's DALL-E 3. This is what you'll be able to build by the end of this course!

**Features:**
- Real-time AI image generation
- Beautiful animations with Framer Motion
- Modern UI with Tailwind CSS
- Image gallery and downloads
- Professional code architecture

[See Project 0 README](./00-wow-ai-creative-studio/README.md)

---

### 📚 Project 1: Web Fundamentals
**Focus:** HTML, CSS, JavaScript

Learn the building blocks of web development:
- Semantic HTML structure
- CSS styling (Flexbox, Grid, Responsive Design)
- JavaScript DOM manipulation
- Event handling
- Form validation and local storage

[See Project 1 README](./01-web-fundamentals/README.md)

---

### ⚛️ Project 2: Modern Frontend with React
**Focus:** React, Hooks, Component Architecture

Master modern React development:
- Component creation and props
- State management with `useState`
- Side effects with `useEffect`
- Event handlers (onClick, onChange, onSubmit)
- Building interactive applications

[See Project 2 README](./02-react-modern-frontend/README.md)

---

### 🚀 Project 3: Full-Stack with Next.js
**Focus:** Next.js 15, API Routes, Full-Stack Development

Build complete full-stack applications:
- Next.js App Router
- Layouts and component composition
- API routes and serverless functions
- Async/await data fetching
- Tailwind CSS styling
- External API integration

[See Project 3 README](./03-nextjs-fullstack/README.md)

---

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- A code editor (VS Code recommended)
- Cursor AI or similar AI coding assistant
- OpenAI API key (for Project 0)

**Note:** This repository works on Windows, macOS, and Linux. All terminal commands use Unix-style syntax (bash).

### For Windows Users: Setting Up Git Bash in Cursor

**Windows users:** This course uses Unix-style terminal commands. Please set up Git Bash in Cursor before starting:

1. **Install Git for Windows** (includes Git Bash): https://git-scm.com/download/win

2. **Configure Cursor to use Git Bash:**
   - Open Cursor IDE
   - Open the integrated terminal: Press `` Ctrl + ` `` (backtick) or go to `Terminal` → `New Terminal`
   - Click the dropdown arrow next to the `+` icon in the terminal panel
   - Select "Select Default Profile"
   - Choose **"Git Bash"** from the list

3. **Done!** All commands in this course will now work in your terminal.

**Note:** If you prefer not to use Git Bash, you can adapt commands as needed (e.g., replace `cp` with `copy`).

### Quick Start

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd ndu_coding_prep
   ```

2. **Start with Project 0 (WOW Demo):**
   ```bash
   cd 00-wow-ai-creative-studio
   npm install
   cp ../.env.example .env.local
   # Add your OpenAI API key to .env.local
   npm run dev
   ```
   Open http://localhost:3000 and be amazed!

3. **Then move to Project 1 and follow the prompts:**
   ```bash
   cd ../01-web-fundamentals
   # Follow the README prompts with your AI assistant
   ```

## How to Use This Repository

### For Students:

1. **See the Magic First:** Run Project 0 to see what's possible
2. **Learn with AI:** Each project (1-3) contains:
   - Empty file structures
   - README with copy-paste ready AI prompts
   - Progressive learning objectives
3. **Build Step-by-Step:** Copy prompts into Cursor AI and watch the magic happen
4. **Understand & Experiment:** Don't just copy - read, modify, break things, and learn!

### Working with AI Prompts:

Each project includes carefully crafted prompts designed to:
- Build incrementally (no giant code dumps)
- Teach concepts progressively
- Encourage experimentation
- Follow best practices

**Example workflow:**
1. Read the project README
2. Copy the first prompt
3. Paste into your AI assistant
4. Review the generated code
5. Test and experiment
6. Move to the next prompt

## Environment Setup

Copy `.env.example` to `.env.local` in Project 0:

```bash
cp .env.example 00-wow-ai-creative-studio/.env.local
```

Then add your OpenAI API key:
```env
OPENAI_API_KEY=your_openai_api_key_here
```

Get your API key from: https://platform.openai.com/api-keys

## Tech Stack Overview

- **Frontend:** HTML, CSS, JavaScript, React 18
- **Framework:** Next.js 15 (latest stable)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Language:** TypeScript
- **AI Integration:** OpenAI API (DALL-E 3)

## Learning Outcomes

By the end of this course, you will:
- ✅ Understand modern web development fundamentals
- ✅ Build interactive UIs with React
- ✅ Create full-stack applications with Next.js
- ✅ Integrate external APIs
- ✅ Work effectively with AI coding assistants
- ✅ Follow industry best practices
- ✅ Deploy production-ready applications

## Tips for Success

1. **Don't rush:** Take time to understand each concept
2. **Experiment:** Modify the prompts, try different approaches
3. **Ask questions:** Use your AI assistant to explain concepts
4. **Break things:** The best way to learn is by debugging
5. **Build your own:** After completing these projects, create something unique!

## Support & Resources

- Next.js Documentation: https://nextjs.org/docs
- React Documentation: https://react.dev
- Tailwind CSS: https://tailwindcss.com/docs
- OpenAI API: https://platform.openai.com/docs

## License

MIT License - Feel free to use this for learning and teaching!

---

**Ready to start?** Head to [Project 0: AI Creative Studio](./00-wow-ai-creative-studio/README.md) and be inspired! 🚀
