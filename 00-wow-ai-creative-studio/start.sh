#!/bin/bash

# WOW AI Creative Studio - Start Script
# Starts the Next.js development server

echo "🚀 Starting WOW AI Creative Studio..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo "⚠️  WARNING: .env.local file not found!"
    echo "📝 Please create .env.local with your OpenAI API key"
    echo "💡 You can copy from .env.example: cp ../.env.example .env.local"
    echo ""
    read -p "Continue anyway? (y/n) " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Startup cancelled"
        exit 1
    fi
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

# Start the development server
echo "🎨 Starting development server on http://localhost:3000"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
npm run dev
