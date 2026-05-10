import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, Send, User } from 'lucide-react';
import { cn } from '../lib/utils';

interface Recognition {
  id: string;
  sender: string;
  receiver: string;
  message: string;
  type: 'Kudos' | 'Thank You' | 'Great Work';
  timestamp: string;
}

const initialRecognitions: Recognition[] = [
  {
    id: '1',
    sender: 'Sarah Jenkins',
    receiver: 'Alex Chen',
    message: 'The new design system docs are incredibly helpful. Thanks for the quick turnaround!',
    type: 'Great Work',
    timestamp: '1h ago',
  },
  {
    id: '2',
    sender: 'Michael v.D.',
    receiver: 'Elena Rossi',
    message: 'Amazing job on the sprint demo today. Really clear communication!',
    type: 'Kudos',
    timestamp: '3h ago',
  },
];

export const RecognitionWall: React.FC = () => {
  const [recognitions, setRecognitions] = useState<Recognition[]>(initialRecognitions);
  const [isPosting, setIsPosting] = useState(false);
  const [newKudo, setNewKudo] = useState({ receiver: '', message: '' });

  const handlePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newKudo.receiver || !newKudo.message) return;

    const kudo: Recognition = {
      id: Date.now().toString(),
      sender: 'Alex Chen', // Hardcoded as the current user for demo
      receiver: newKudo.receiver,
      message: newKudo.message,
      type: 'Kudos',
      timestamp: 'Just now',
    };

    setRecognitions([kudo, ...recognitions]);
    setNewKudo({ receiver: '', message: '' });
    setIsPosting(false);
  };

  return (
    <div className="glass p-6 md:p-8 rounded-3xl w-full flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-lg md:text-xl font-light opacity-80 uppercase tracking-widest">Recognition Wall</h3>
          <p className="text-[10px] text-white/40 mt-1 uppercase tracking-tighter">Celebrate your colleagues</p>
        </div>
        <button 
          onClick={() => setIsPosting(!isPosting)}
          className="w-full sm:w-auto px-4 py-2 bg-sunset-orange/10 hover:bg-sunset-orange/20 border border-sunset-orange/30 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all"
        >
          {isPosting ? 'Cancel' : 'Send Kudos'}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {isPosting ? (
          <motion.form
            key="post-form"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            onSubmit={handlePost}
            className="space-y-4 overflow-hidden"
          >
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">To</label>
              <input
                type="text"
                value={newKudo.receiver}
                onChange={(e) => setNewKudo({ ...newKudo, receiver: e.target.value })}
                placeholder="Colleague Name..."
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:outline-none focus:ring-1 focus:ring-sunset-orange/50 transition-all placeholder:text-white/10"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-1">Message</label>
              <textarea
                value={newKudo.message}
                onChange={(e) => setNewKudo({ ...newKudo, message: e.target.value })}
                placeholder="What did they do that was awesome?"
                className="w-full h-24 bg-white/5 border border-white/10 rounded-xl p-3 text-sm focus:outline-none focus:ring-1 focus:ring-sunset-orange/50 transition-all placeholder:text-white/10 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-sunset-orange/20 to-sunset-purple/20 hover:from-sunset-orange/30 hover:to-sunset-purple/30 border border-white/10 rounded-xl flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest transition-all"
            >
              <Send size={14} />
              Publish Kudos
            </button>
          </motion.form>
        ) : (
          <div key="feed" className="space-y-4 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/10">
            <AnimatePresence initial={false}>
              {recognitions.map((rec) => (
                <motion.div
                  key={rec.id}
                  initial={{ opacity: 0, x: -10, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ type: 'spring', damping: 15 }}
                  className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Sparkles className="text-sunset-orange/40" size={14} />
                  </div>
                  
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center">
                      <User size={14} className="text-white/40" />
                    </div>
                    <div>
                      <h5 className="text-sm font-medium">
                        {rec.sender} <span className="text-white/20 font-light mx-1">→</span> {rec.receiver}
                      </h5>
                      <p className="text-[10px] text-white/30 uppercase tracking-tighter">{rec.timestamp}</p>
                    </div>
                  </div>

                  <p className="text-xs text-white/60 font-light leading-relaxed pl-11">
                    "{rec.message}"
                  </p>

                  <div className="mt-3 pl-11 flex gap-2">
                    <span className="text-[9px] px-2 py-0.5 rounded-full bg-white/5 border border-white/5 text-white/40 uppercase tracking-widest">
                      #{rec.type.replace(/\s/g, '')}
                    </span>
                    <button className="flex items-center gap-1 text-white/20 hover:text-white transition-colors">
                      <Heart size={10} />
                      <span className="text-[9px]">24</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
