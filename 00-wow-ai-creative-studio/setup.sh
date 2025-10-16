#!/bin/bash

# WOW AI Creative Studio - Initial Setup Script
# Run this after cloning the repository

echo "🎨 WOW AI Creative Studio - Initial Setup"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Step 1: Check Node.js version
echo "📋 Step 1: Checking Node.js version..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "💡 Please install Node.js 18+ from: https://nodejs.org/"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "⚠️  Node.js version is too old (need 18+, found: $(node -v))"
    echo "💡 Please update Node.js from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"
echo ""

# Step 2: Install dependencies
echo "📋 Step 2: Installing dependencies..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
npm install
if [ $? -ne 0 ]; then
    echo "❌ Dependency installation failed!"
    exit 1
fi
echo "✅ Dependencies installed successfully"
echo ""

# Step 3: Setup environment variables
echo "📋 Step 3: Setting up environment variables..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ -f ".env.local" ]; then
    echo "⚠️  .env.local already exists!"
    read -p "Do you want to overwrite it? (y/n) " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "ℹ️  Keeping existing .env.local file"
        echo ""
    else
        rm .env.local
    fi
fi

if [ ! -f ".env.local" ]; then
    echo "📝 Creating .env.local file..."
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "🔑 OpenAI API Key Setup"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "You have two options:"
    echo ""
    echo "1️⃣  Use your own OpenAI API key"
    echo "   - Get it from: https://platform.openai.com/api-keys"
    echo "   - You'll need to add billing info to your OpenAI account"
    echo ""
    echo "2️⃣  Ask your instructor for a shared API key"
    echo "   - Your instructor may provide a key for class use"
    echo "   - This is recommended for students"
    echo ""
    read -p "Enter your OpenAI API key: " API_KEY
    echo ""

    if [ -z "$API_KEY" ]; then
        echo "⚠️  No API key entered!"
        echo "💡 You can manually create .env.local later with:"
        echo "   echo 'OPENAI_API_KEY=your_key_here' > .env.local"
        echo ""
    else
        echo "# OpenAI API Configuration" > .env.local
        echo "# Get your API key from: https://platform.openai.com/api-keys" >> .env.local
        echo "" >> .env.local
        echo "OPENAI_API_KEY=$API_KEY" >> .env.local
        echo "✅ .env.local created successfully"
        echo ""
    fi
fi

# Step 4: Verify setup
echo "📋 Step 4: Verifying setup..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

CHECKS_PASSED=true

# Check node_modules
if [ -d "node_modules" ]; then
    echo "✅ node_modules/ exists"
else
    echo "❌ node_modules/ missing"
    CHECKS_PASSED=false
fi

# Check .env.local
if [ -f ".env.local" ]; then
    echo "✅ .env.local exists"
    if grep -q "OPENAI_API_KEY=sk-" .env.local; then
        echo "✅ API key configured"
    else
        echo "⚠️  API key may not be configured correctly"
    fi
else
    echo "❌ .env.local missing"
    CHECKS_PASSED=false
fi

echo ""

if [ "$CHECKS_PASSED" = true ]; then
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "🎉 Setup complete! You're ready to start developing."
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "To start the development server, run:"
    echo "  ./start.sh"
    echo ""
    echo "Or manually:"
    echo "  npm run dev"
    echo ""
    echo "The app will be available at: http://localhost:3000"
    echo ""
else
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "⚠️  Setup incomplete - please fix the issues above"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    exit 1
fi
