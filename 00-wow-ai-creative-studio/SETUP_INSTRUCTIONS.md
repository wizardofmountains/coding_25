# WOW AI Creative Studio - Setup Instructions for Students

## 🚀 Quick Start (After Cloning)

1. **Run the setup script:**
   ```bash
   cd 00-wow-ai-creative-studio
   ./setup.sh
   ```

2. **Start the development server:**
   ```bash
   ./start.sh
   ```

3. **Open your browser:**
   Navigate to http://localhost:3000

4. **Stop the server when done:**
   ```bash
   ./stop.sh
   ```

---

## 🔑 OpenAI API Key - Secure Setup Options

### ⚠️ IMPORTANT: Never commit your API key to Git!

The `.env.local` file is already in `.gitignore` to protect your API key.

### Option 1: Ask Your Instructor (Recommended for Students)

Your instructor may provide a shared API key for class use.

**Where to find it:**
- Check your class Microsoft Teams channel (likely pinned message)
- Check your university learning platform (Moodle, Canvas, etc.)
- Ask your instructor during class

**How to use it:**

1. Get the API key from your instructor (from Teams or in class)
2. Create `.env.local` file:
   ```bash
   cd 00-wow-ai-creative-studio
   echo "OPENAI_API_KEY=your_instructors_key_here" > .env.local
   ```
   Or use the setup script which will prompt you:
   ```bash
   ./setup.sh
   ```
3. Start developing!

**Benefits:**
- ✅ No cost to you
- ✅ No need to set up OpenAI account
- ✅ No billing information required
- ✅ Focus on learning, not setup

**Important:**
- 🚫 Don't share the key with anyone outside class
- 🚫 Don't commit the key to Git (already protected)
- 🚫 Don't use it for personal projects
- 🚫 Don't screenshot or post the key publicly
- ⏱️ Key will expire at end of semester

---

### Option 2: Use Your Own API Key

If you want to use your own OpenAI API key:

1. **Create an OpenAI account:**
   - Go to https://platform.openai.com/signup

2. **Add billing information:**
   - Go to https://platform.openai.com/account/billing
   - Add a payment method
   - Note: DALL-E 3 costs approximately $0.04-0.08 per image

3. **Create an API key:**
   - Go to https://platform.openai.com/api-keys
   - Click "Create new secret key"
   - Give it a name (e.g., "NDU Coding Project")
   - Copy the key (you can only see it once!)

4. **Add the key to your project:**
   ```bash
   cd 00-wow-ai-creative-studio
   echo "OPENAI_API_KEY=your_key_here" > .env.local
   ```

**Benefits:**
- ✅ Full control over your API usage
- ✅ Can use for personal projects
- ✅ Learn about API key management

**Costs:**
- 💰 DALL-E 3 (1024x1024): ~$0.04 per image
- 💰 DALL-E 3 (1024x1792 or 1792x1024): ~$0.08 per image

---

## 🔒 Security Best Practices

### ✅ DO:
- Keep your `.env.local` file private
- Use the provided `.env.example` as a template
- Ask your instructor if you're unsure about API key usage
- Verify `.env.local` is in `.gitignore` before committing
- Use separate API keys for different projects

### 🚫 DON'T:
- Commit API keys to Git (`.env.local` is protected)
- Share API keys in Discord/Slack/Email
- Screenshot your `.env.local` file
- Push `.env.local` to GitHub
- Use production keys for development

---

## 🛠️ Manual Setup (If Scripts Don't Work)

If you prefer manual setup or the scripts don't work on your system:

### 1. Install Dependencies
```bash
npm install
```

### 2. Create Environment File
```bash
cp ../.env.example .env.local
```

### 3. Edit `.env.local`
Open `.env.local` in your editor and replace the placeholder:
```env
OPENAI_API_KEY=your_actual_key_here
```

### 4. Start Development Server
```bash
npm run dev
```

---

## 📋 Verification Checklist

Before starting development, verify:

- [ ] Node.js 18+ installed (`node -v`)
- [ ] Dependencies installed (`node_modules/` exists)
- [ ] `.env.local` file exists
- [ ] `.env.local` contains valid API key
- [ ] `.env.local` is in `.gitignore`
- [ ] Can run `npm run dev` successfully
- [ ] Can access http://localhost:3000

---

## 🆘 Troubleshooting

### "API key not found" error
- Verify `.env.local` exists in the `00-wow-ai-creative-studio/` directory
- Check that the file contains `OPENAI_API_KEY=sk-...`
- Restart the development server after creating `.env.local`

### "Invalid API key" error
- Verify the API key starts with `sk-proj-` or `sk-`
- Check for extra spaces or line breaks in `.env.local`
- Verify the key hasn't been revoked in OpenAI dashboard

### Port 3000 already in use
```bash
./stop.sh
# Or manually:
lsof -ti:3000 | xargs kill -9
```

### Dependencies installation fails
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 🎓 For Instructors: Sharing API Keys Securely

If you're providing a shared API key for your class:

### Option A: In-Person Distribution
1. Write the key on the whiteboard during class
2. Students copy it manually to their `.env.local`
3. Erase the whiteboard after class

### Option B: Secure Platform (Recommended)
1. Use your university's secure file sharing (e.g., Moodle, Canvas)
2. Share as a protected document with password
3. Set expiration date for access
4. Monitor usage in OpenAI dashboard

### Option C: Individual Keys with Rate Limiting
1. Create separate API keys for each student
2. Set usage limits for each key in OpenAI dashboard
3. Monitor individual usage
4. Revoke keys at end of semester

### Budget Management
- Set spending limits in OpenAI dashboard
- Monitor usage regularly
- Consider setting up billing alerts
- Estimated cost: ~$0.50-2.00 per student per semester (50 images)

---

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [OpenAI API Documentation](https://platform.openai.com/docs)
- [DALL-E 3 Guide](https://platform.openai.com/docs/guides/images)
- [Environment Variables in Next.js](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)

---

## 🎨 Project Structure

```
00-wow-ai-creative-studio/
├── setup.sh              # Initial setup script (run once after clone)
├── start.sh              # Start development server
├── stop.sh               # Stop development server
├── .env.local            # Your API key (NOT in Git)
├── .env.example          # Template (safe to commit)
├── app/                  # Next.js application
│   ├── api/              # API routes
│   ├── components/       # React components
│   └── page.tsx          # Main page
└── public/               # Static files
```

---

**Need help?** Contact your instructor or check the troubleshooting section above.
