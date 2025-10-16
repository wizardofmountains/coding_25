"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ImageGenerator from "./components/ImageGenerator";
import ImageGallery from "./components/ImageGallery";

export interface GeneratedImage {
  url: string;
  prompt: string;
  timestamp: number;
}

export default function Home() {
  const [images, setImages] = useState<GeneratedImage[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleImageGenerated = (url: string, prompt: string) => {
    const newImage: GeneratedImage = {
      url,
      prompt,
      timestamp: Date.now(),
    };
    setImages((prev) => [newImage, ...prev]);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8"
      >
        <div className="text-center">
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4"
          >
            AI Creative Studio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Transform your imagination into stunning visuals with the power of AI
          </motion.p>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Screen reader announcements for generation status */}
        <div
          className="sr-only"
          aria-live="polite"
          aria-atomic="true"
          role="status"
        >
          {isGenerating && "Generating your AI image, please wait..."}
          {!isGenerating && images.length > 0 && images[0] && "Image generated successfully!"}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <ImageGenerator
            onImageGenerated={handleImageGenerated}
            isGenerating={isGenerating}
            setIsGenerating={setIsGenerating}
          />
        </motion.div>

        {images.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Your Creations
            </h2>
            <ImageGallery images={images} />
          </motion.div>
        )}

        {images.length === 0 && !isGenerating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="inline-block p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-gray-400 text-lg">
                ✨ Start by entering a prompt above to create your first AI-generated image
              </p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="container mx-auto px-4 py-8 mt-16 text-center text-gray-400"
      >
        <p>Powered by OpenAI DALL-E 3 • Built with Next.js 15 & Tailwind CSS</p>
      </motion.footer>
    </main>
  );
}
