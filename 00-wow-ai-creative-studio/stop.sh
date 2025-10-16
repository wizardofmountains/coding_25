#!/bin/bash

# WOW AI Creative Studio - Stop Script
# Stops the Next.js development server

echo "🛑 Stopping WOW AI Creative Studio..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Find and kill Next.js dev server processes
PIDS=$(lsof -ti:3000)

if [ -z "$PIDS" ]; then
    echo "ℹ️  No server running on port 3000"
    exit 0
fi

# Kill the processes
for PID in $PIDS; do
    echo "🔪 Killing process $PID..."
    kill -9 $PID 2>/dev/null
done

# Wait a moment and verify
sleep 1

# Check if port is now free
if lsof -ti:3000 > /dev/null 2>&1; then
    echo "⚠️  Warning: Some processes may still be running on port 3000"
    echo "💡 Try manually: lsof -ti:3000 | xargs kill -9"
    exit 1
else
    echo "✅ Server stopped successfully"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
fi
