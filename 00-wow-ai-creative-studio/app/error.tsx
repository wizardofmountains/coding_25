'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20 text-center"
      >
        {/* Error Icon */}
        <div className="mb-6">
          <svg
            className="mx-auto h-16 w-16 text-red-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        {/* Error Title */}
        <h2 className="text-2xl font-bold text-white mb-4">
          Oops! Something went wrong
        </h2>

        {/* Error Message */}
        <p className="text-gray-300 mb-6">
          {error.message || 'An unexpected error occurred. Please try again.'}
        </p>

        {/* Error Digest (if available) */}
        {error.digest && (
          <p className="text-xs text-gray-500 mb-6 font-mono">
            Error ID: {error.digest}
          </p>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={reset}
            className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl"
          >
            Try Again
          </button>
          <button
            onClick={() => (window.location.href = '/')}
            className="flex-1 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all"
          >
            Go Home
          </button>
        </div>
      </motion.div>
    </div>
  );
}
