"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GeneratedImage } from "../page";

interface ImageGalleryProps {
  images: GeneratedImage[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const handleDownload = async (url: string, prompt: string) => {
    try {
      // Use server-side API route to bypass CORS restrictions
      const response = await fetch("/api/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      if (!response.ok) {
        throw new Error("Failed to download image");
      }

      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `ai-art-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Error downloading image:", error);
      alert("Failed to download image. Please try again.");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <motion.div
          key={image.timestamp}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          className="group relative bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all shadow-lg hover:shadow-2xl"
        >
          <div className="relative aspect-square">
            <Image
              src={image.url}
              alt={image.prompt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <button
                onClick={() => handleDownload(image.url, image.prompt)}
                className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-all transform hover:scale-105"
                aria-label={`Download image: ${image.prompt}`}
              >
                Download
              </button>
            </div>
          </div>

          {/* Prompt text */}
          <div className="p-4">
            <p className="text-sm text-gray-300 line-clamp-2">{image.prompt}</p>
            <p className="text-xs text-gray-500 mt-2">
              {new Date(image.timestamp).toLocaleString()}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
