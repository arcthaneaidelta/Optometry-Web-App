import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Check if user has already seen initial loading screen this session
    const hasLoaded = sessionStorage.getItem('vh_has_loaded');
    if (hasLoaded) {
      onComplete();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(() => {
              sessionStorage.setItem('vh_has_loaded', 'true');
              onComplete();
            }, 450);
          }, 200);
          return 100;
        }
        // Organic easing speed
        const increment = prev < 50 ? 8 : prev < 85 ? 12 : 18;
        return Math.min(100, prev + increment);
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-ivory transition-opacity duration-500 ease-out ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center max-w-sm px-6 text-center">
        {/* Subtle geometric monogram */}
        <div className="w-12 h-12 mb-8 rounded-full border border-forest/20 flex items-center justify-center animate-pulse-subtle">
          <div className="w-4 h-4 rounded-full border border-forest/60 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-forest"></div>
          </div>
        </div>

        {/* Wordmark */}
        <h1 className="text-3xl sm:text-4xl font-serif tracking-[0.2em] text-charcoal uppercase font-normal mb-3">
          Vision House
        </h1>

        {/* Tagline */}
        <p className="text-xs sm:text-sm tracking-[0.16em] uppercase text-olive font-light mb-8">
          See Life Differently.
        </p>

        {/* Minimal Animated Line Indicator */}
        <div className="w-48 h-[1px] bg-stone-border overflow-hidden relative mb-3">
          <div
            className="absolute left-0 top-0 bottom-0 bg-forest transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Minimal Percentage Indicator */}
        <span className="text-[10px] tracking-widest text-olive/70 font-mono">
          {progress.toString().padStart(2, '0')}%
        </span>
      </div>
    </div>
  );
};
