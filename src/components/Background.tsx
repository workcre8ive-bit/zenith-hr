import React from 'react';
import { motion } from 'motion/react';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0D0B14]">
      {/* Sunset Gradient Layers */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, #FF8C42 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, #6B4226 0%, transparent 40%),
            radial-gradient(circle at 50% 50%, #2D1B33 0%, transparent 60%)
          `,
          filter: 'blur(80px)'
        }}
      />

      {/* Sentiment Bubbles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-white/10"
          style={{
            width: Math.random() * 100 + 50,
            height: Math.random() * 100 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `rgba(255, 255, 255, ${Math.random() * 0.05})`,
            backdropFilter: 'blur(5px)',
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};
