"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface ImageGeneratorProps {
  onImageGenerated: (url: string, prompt: string) => void;
  isGenerating: boolean;
  setIsGenerating: (value: boolean) => void;
}

export default function ImageGenerator({
  onImageGenerated,
  isGenerating,
  setIsGenerating,
}: ImageGeneratorProps) {
  const [prompt, setPrompt] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!prompt.trim()) {
      setError("Please enter a prompt");
      return;
    }

    setIsGenerating(true);
    setError("");

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: prompt.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate image");
      }

      onImageGenerated(data.imageUrl, prompt);
      setPrompt("");
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setIsGenerating(false);
    }
  };

  const examplePrompts = [
    "A futuristic city at sunset with flying cars",
    "A magical forest with glowing mushrooms",
    "An astronaut riding a horse on Mars",
    "A cozy coffee shop in a cyberpunk city",
  ];

  const handleExampleClick = (example: string) => {
    setPrompt(example);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="prompt"
              className="block text-lg font-medium text-white mb-2"
            >
              Describe your vision
            </label>
            <textarea
              id="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="A serene landscape with mountains and a lake at golden hour..."
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none transition-all"
              rows={4}
              disabled={isGenerating}
            />
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200"
            >
              {error}
            </motion.div>
          )}

          <button
            type="submit"
            disabled={isGenerating || !prompt.trim()}
            className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-lg"
          >
            {isGenerating ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Creating your masterpiece...
              </span>
            ) : (
              "Generate Image"
            )}
          </button>
        </form>

        {/* Example Prompts */}
        <div className="mt-6">
          <p className="text-sm text-gray-400 mb-3">Try these examples:</p>
          <div className="flex flex-wrap gap-2">
            {examplePrompts.map((example, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleExampleClick(example)}
                className="px-3 py-2 text-sm bg-white/5 hover:bg-white/10 rounded-lg text-gray-300 border border-white/10 transition-all"
                disabled={isGenerating}
              >
                {example}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
