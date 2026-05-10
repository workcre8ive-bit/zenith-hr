import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Smile, Frown, Meh, Laugh, Angry } from 'lucide-react';
import { cn } from '../lib/utils';

const moods = [
  { icon: Angry, label: 'Stressed', color: 'text-red-400', shadow: 'shadow-red-500/50' },
  { icon: Frown, label: 'Sad', color: 'text-blue-400', shadow: 'shadow-blue-500/50' },
  { icon: Meh, label: 'Okay', color: 'text-slate-400', shadow: 'shadow-slate-500/50' },
  { icon: Smile, label: 'Good', color: 'text-green-400', shadow: 'shadow-green-500/50' },
  { icon: Laugh, label: 'Excellent', color: 'text-yellow-400', shadow: 'shadow-yellow-500/50' },
];

export const MoodTracker: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="glass p-6 md:p-8 rounded-3xl w-full">
      <h3 className="text-lg md:text-xl font-light mb-6 opacity-80 uppercase tracking-widest text-center md:text-left">How are you feeling today?</h3>
      <div className="grid grid-cols-5 items-center gap-1 sm:gap-4">
        {moods.map((mood, idx) => (
          <motion.button
            key={idx}
            onClick={() => setSelected(idx)}
            className={cn(
              "flex flex-col items-center gap-2 p-2 sm:p-4 rounded-2xl transition-all duration-300 w-full",
              selected === idx ? "bg-white/10" : "hover:bg-white/5"
            )}
            whileHover={{ scale: 1.1, filter: 'brightness(1.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={selected === idx ? { scale: 1.1 } : {}}
              className={cn("w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center", mood.color)}
            >
              <mood.icon className="w-full h-full" strokeWidth={1.5} />
            </motion.div>
            <span className={cn("text-[8px] sm:text-xs font-medium tracking-wide opacity-60 text-center", selected === idx && "opacity-100")}>
              {mood.label}
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};
